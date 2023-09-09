<template>
    <div class="home-page">
        <form class="search-jobs" @submit.prevent="filterJobs">
            <div class="parent-input">
                <input type="text" v-model="searchByKeyword" placeholder="💼 Title, companies, expertise or benefits">
                <button type="submit" class="search">Search</button>
            </div>
        </form>

        <form class="filters" @submit.prevent="filterJobs">
            <ul class="checkboxes-list">
                <li class="checkbox-filter-item">
                    <input type="checkbox" v-model="fullTimeFilter" id="full-time-filter" name="full-time-filter"
                        value="Full time">
                    <label for="full-time-filter">Full time</label>
                </li>
            </ul>

            <div class="location-filter">
                <div class="via-text">
                    <span class="title">Location</span>
                    <input type="text" v-model="inputTextZone" placeholder="🌎 City, state, zip code or country">
                </div>

                <ul class="via-radios">
                    <li>
                        <input type="radio" v-model="inputRadioZone" id="London" name="radio_zones" :value="'London'">
                        <label for="London">London</label><br>
                    </li>
                    <li>
                        <input type="radio" v-model="inputRadioZone" id="Amsterdam" name="radio_zones" :value="'Amsterdam'">
                        <label for="Amsterdam">Amsterdam</label><br>
                    </li>
                    <li>
                        <input type="radio" v-model="inputRadioZone" id="New York" name="radio_zones" :value="'New York'">
                        <label for="New York">New York</label>
                    </li>
                    <li>
                        <input type="radio" v-model="inputRadioZone" id="Berlin" name="radio_zones" :value="'Berlin'">
                        <label for="Berlin">Berlin</label>
                    </li>
                </ul>
            </div>
        </form>

        <div class="jobs-section">
            <JobsList :jobs="filteredJobs" :quantity="5" />

            <ul class="jobs-pagination-list">
                <li class="jobs-page-item">
                    <button @click="paginateDoesntWork">⬅</button>
                </li>
                <li class="jobs-page-item">
                    <button @click="paginateDoesntWork">1</button>
                </li>
                <li class="jobs-page-item">
                    <button class="active" @click="paginateDoesntWork">2</button>
                </li>
                <li class="jobs-page-item">
                    <button @click="paginateDoesntWork">3</button>
                </li>
                <li class="jobs-page-item">
                    <button @click="paginateDoesntWork">➡</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import responseFromApi from '../response.json'
import JobsList from '../components/JobsList.vue';

export default {
    name: 'Home',
    components: { JobsList },

    setup() {
        const allJobs = responseFromApi.jobs_results
        const filteredJobs = ref([...allJobs])


        // const apiKey = import.meta.env.VITE_SERP_API_KEY;
        // const joinedWithPlus = (words) => words.split(' ').join('+');
        // const defaultZone = joinedWithPlus('New york');
        // const defaultJob  = joinedWithPlus('Developer');
        // const urlApi = `https://serpapi.com/search.json?engine=google_jobs&q=${defaultJob}+${defaultZone}&hl=en&api_key=${apiKey}`;

        const searchByKeyword = ref('');
        const fullTimeFilter  = ref(false);
        const inputTextZone   = ref('');
        const inputRadioZone  = ref('');



        const paginateDoesntWork = () => {
            console.log('The paginate it does not work, is just for design')
        }

        const filterJobs = () => {
            console.log('filterJobs');

            const jobsThatContainsKeyword = allJobs.reduce((acumJobs, job) => {
                const { title, company_name, job_highlights } = job

                const keyWordIsInTitle = title.toLowerCase().includes(searchByKeyword.value.toLowerCase())
                const keyWordIsInCompanyName = company_name.toLowerCase().includes(searchByKeyword.value.toLowerCase())
                const keyWordIsInBenefits = job_highlights.find(({ title }) => title === 'Benefits')?.items.includes(searchByKeyword.value.toLowerCase())


                if (keyWordIsInTitle || keyWordIsInCompanyName || keyWordIsInBenefits) {
                    acumJobs.push(job)
                }
                return acumJobs
            }, [])

            filteredJobs.value = [...jobsThatContainsKeyword]

            if (fullTimeFilter.value) {
                filteredJobs.value = [...filteredJobs.value.filter(job => job.detected_extensions.schedule_type === 'Full-time')]
            }
            if (inputTextZone.value) {
                filteredJobs.value = [...filteredJobs.value.filter(({ location }) => location.toLowerCase().trim().includes(inputTextZone.value.toLowerCase()))]
                return
            }

            if (inputRadioZone.value) {
                filteredJobs.value = [...filteredJobs.value.filter(({ location }) => location.toLowerCase().trim().includes(inputRadioZone.value.toLowerCase()))]
            }

        }



        return {
            fullTimeFilter,
            inputTextZone,
            inputRadioZone,
            allJobs,
            filteredJobs,
            filterJobs,
            paginateDoesntWork,
            searchByKeyword
        };
    }
}
</script>
  
<style scoped>
.home-page {
    height: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-auto-rows: 14vh auto;
    grid-template-areas:
        "formSearchJobs formSearchJobs"
        "formFilters jobsSection"
    ;
    gap: 4vh 0;
}


form.search-jobs {
    width: 100%;
    height: 14vh;
    border-radius: 8px;
    grid-area: formSearchJobs;
    display: grid;
    place-items: center;
    background-image: url('../assets/backgroundImg.png');
    background-position: center center;
    background-repeat: no-repeat;
}

.parent-input {
    position: relative;
    display: grid;
    width: 70%;
    height: 6vh;
    background-color: transparent;
}

.parent-input>* {
    border-radius: 4px;
}

.parent-input input {
    width: 100%;
    padding: .6rem 30% .6rem 1rem;
    outline: none;
    border: transparent;
}

.parent-input input::placeholder {
    font: 400 12px 'Roboto', sans-serif;
    color: var(--placeholderGrey);
}

.parent-input button[type="submit"] {
    position: absolute;
    place-self: center end;
    right: 1%;
    padding: .2rem 2.7rem;
    background-color: var(--brigthBlue);
    color: var(--fullWhite);
    font: 500 1rem 'Roboto', sans-serif;
}


form.filters {
    grid-area: formFilters;
    display: flex;
    flex-direction: column;
    gap: 2vh 0;
}

li.checkbox-filter-item input {
    background-color: var(--placeholderGrey);
    accent-color: var(--brigthBlue);
}

li.checkbox-filter-item label {
    cursor: pointer;
    font: 500 14px 'Poppins', sans-serif;
    color: var(--darkOceanBlue);
}

.location-filter {
    display: flex;
    flex-direction: column;
    gap: 2vh 0;
}

.location-filter .via-text {
    display: flex;
    flex-direction: column;
    gap: 1vh 0;
}

.via-text .title {
    font: 700 14px 'Poppins', sans-serif;
    color: var(--placeholderGrey);
}

.via-text input {
    padding: .8rem;
    border-radius: 4px;
    outline: none;
    border: none;
    box-shadow: 0px 2px 4px 0px #0000000D;
}

.via-text input::placeholder {
    font: 400 12px 'Roboto', sans-serif
}


.via-radios input {
    accent-color: var(--brigthBlue);
}

.via-radios label {
    cursor: pointer;
    font: 500 14px 'Poppins', sans-serif;
    color: var(--darkOceanBlue);
}

.jobs-section {
    height: 100%;
    grid-area: jobsSection;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr .2fr;
}


ul.jobs-pagination-list {
    display: flex;
    gap: 0 10px;
    place-self: center end;
}

li.jobs-page-item {
    background-color: var(--fullWhite);
    border: 1px solid var(--placeholderGrey);
    border-radius: 4px;
    height: 100%;
}

.jobs-page-item button {
    padding: .5rem;
    font: 400 12px 'Roboto', sans-serif;
    color: var(--placeholderGrey);
    background-color: transparent;
    width: max-content;
    height: max-content;
}

.jobs-page-item:has(.active) {
    border: 1px solid var(--brigthBlue);
    background-color: var(--brigthBlue);
}

.jobs-page-item .active {
    color: var(--fullWhite);
}

.jobs-page-item:has( :hover) {
    border: 1px solid var(--brigthBlue);
}

.jobs-page-item :not(.active):hover {
    color: var(--brigthBlue);
}

@media (max-width: 375px) {
    .home-page {
        height: auto;
        grid-template-columns: 100%;
        grid-auto-rows: 14vh auto auto;
        grid-template-areas:
            "formSearchJobs"
            "formFilters"
            "jobsSection"
        ;
        gap: 4vh 0;
    }

    .parent-input {
        width: 95%;
        height: 8vh;
    }

    .parent-input button[type="submit"] {
        padding: .5rem 1rem;
    }


    ul.jobs-pagination-list {
        width: 90%;
        place-self: center;
        justify-content: space-evenly;
    }

}
</style>