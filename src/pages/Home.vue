<template>
    <div class="home-page">
        <form class="search-jobs">
            <div class="parent-input">
                <input type="text" placeholder="💼 Title, companies, expertise or benefits">
                <button type="submit" class="search">Search</button>
            </div>
        </form>

        <form class="filters">
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
            <ul class="jobs-list">
                <li class="job-item">
                    <div class="rigth-section">
                        <img class="company-img" src="" alt="not found">
                        <span class="company-name">Company name</span>
                        <span class="job-title">Job title</span>
                        <span class="full-time-tag">Full time</span>
                    </div>
                    <div class="left-section">
                        <span class="location">🌎 Location</span>
                        <span class="published-at">🕒 X days ago</span>
                    </div>
                </li>
                <li class="job-item">
                    <div class="rigth-section">
                        <img class="company-img" src="" alt="not found">
                        <span class="company-name">Company name</span>
                        <span class="job-title">Job title</span>
                        <span class="full-time-tag">Full time</span>
                    </div>
                    <div class="left-section">
                        <span class="location">🌎 Location</span>
                        <span class="published-at">🕒 X days ago</span>
                    </div>
                </li>
                <li class="job-item">
                    <div class="rigth-section">
                        <img class="company-img" src="" alt="not found">
                        <span class="company-name">Company name</span>
                        <span class="job-title">Job title</span>
                        <span class="full-time-tag">Full time</span>
                    </div>
                    <div class="left-section">
                        <span class="location">🌎 Location</span>
                        <span class="published-at">🕒 X days ago</span>
                    </div>
                </li>
                <li class="job-item">
                    <div class="rigth-section">
                        <img class="company-img" src="" alt="not found">
                        <span class="company-name">Company name</span>
                        <span class="job-title">Job title</span>
                        <span class="full-time-tag">Full time</span>
                    </div>
                    <div class="left-section">
                        <span class="location">🌎 Location</span>
                        <span class="published-at">🕒 X days ago</span>
                    </div>
                </li>
                <li class="job-item">
                    <div class="rigth-section">
                        <img class="company-img" src="" alt="not found">
                        <span class="company-name">Company name</span>
                        <span class="job-title">Job title</span>
                        <span class="full-time-tag">Full time</span>
                    </div>
                    <div class="left-section">
                        <span class="location">🌎 Location</span>
                        <span class="published-at">🕒 X days ago</span>
                    </div>
                </li>
            </ul>

            <ul class="jobs-pagination-list">
                <li class="jobs-page-item">
                    <button>⬅</button>
                </li>
                <li class="jobs-page-item">
                    <button>1</button>
                </li>
                <li class="jobs-page-item">
                    <button class="active">2</button>
                </li>
                <li class="jobs-page-item">
                    <button>3</button>
                </li>
                <li class="jobs-page-item">
                    <button>➡</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import responseFromApi from '../response.json'

export default {
    name: 'Home',
    setup() {
        const joinedWithPlus = (words) => words.split(' ').join('+')

        const apiKey = import.meta.env.VITE_SERP_API_KEY
        const defaultZone = joinedWithPlus('New york')
        const defaultJob = joinedWithPlus('Developer')

        const fullTimeFilter = ref(false)
        const inputTextZone = ref('')
        const inputRadioZone = ref('')

        const getResponseFromProject = async () => {
            console.log(responseFromApi);
        }

        const urlApi = `https://serpapi.com/search.json?engine=google_jobs&q=${defaultJob}+${defaultZone}&hl=en&api_key=${apiKey}`

        onMounted(() => {
            getResponseFromProject()
        })

        return {
            urlApi,
            fullTimeFilter,
            inputTextZone,
            inputRadioZone,
        }
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

ul.jobs-list {
    padding: 2vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

li.job-item {
    width: 790px;
    height: 114px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px #0000000D;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
}

.job-item .rigth-section {
    color: var(--darkOceanBlue);
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "img companyName"
        "img jobTitle"
        "img fullTimeTag"
    ;
}

.rigth-section .company-img {
    grid-area: img;
    place-self: center;
    width: 80%;
    height: 80%;
    background-color: #F2F2F2;
    border-radius: 4px;
    color: #BDBDBD;
    font: 500 12px 'Roboto', sans-serif;
    text-align: center;
}

.rigth-section .company-name {
    grid-area: companyName;
    font: 700 12px 'Roboto', sans-serif;
    place-self: end start;
}

.rigth-section .job-title {
    grid-area: jobTitle;
    font: 400 1.125rem 'Roboto', sans-serif;
    place-self: center start;
}

.rigth-section .full-time-tag {
    grid-area: fullTimeTag;
    font: 700 12px 'Roboto', sans-serif;
    border: 1px solid var(--darkOceanBlue);
    border-radius: 4px;
    width: 25%;
    padding: .4rem;
    place-self: start;
}

.job-item .left-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    place-items: end;
    padding-bottom: 3%;
    font: 500 12px 'Roboto', sans-serif;
    color: var(--placeholderGrey);
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




    ul.jobs-list {
        padding: 0 2vw;
    }

    li.job-item {
        height: auto;
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }

    .rigth-section .company-name {
        place-self: center start;
    }

    .rigth-section .full-time-tag {
        width: 28%;
    }

    .job-item .left-section {
        padding: .5rem;
        gap: 0 1vw;
        place-items: start;
    }

    .left-section .location {
        place-self: end;
    }

    ul.jobs-pagination-list {
        width: 90%;
        place-self: center;
        justify-content: space-evenly;
    }

}
</style>