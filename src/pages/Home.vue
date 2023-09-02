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
                    <input type="checkbox" id="full-time-filter" name="full-time-filter" value="Full time">
                    <label for="full-time-filter">Full time</label>
                </li>
            </ul>

            <div class="location-filter">
                <div class="via-text">
                    <span class="title">Location</span>
                    <input type="text" placeholder="🌎 City, state, zip code or country">
                </div>

                <ul class="via-radios">
                    <li>
                        <input type="radio" id="London" name="fav_language" value="London">
                        <label for="London">London</label><br>
                    </li>
                    <li>
                        <input type="radio" id="Amsterdam" name="fav_language" value="Amsterdam">
                        <label for="Amsterdam">Amsterdam</label><br>
                    </li>
                    <li>
                        <input type="radio" id="New York" name="fav_language" value="New York">
                        <label for="New York">New York</label>
                    </li>
                    <li>
                        <input type="radio" id="Berlin" name="fav_language" value="Berlin">
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

export default {
    name: 'Home',
    setup() {

        return {}
    }
}
</script>
  
<style scoped>

.home-page {
    background-color: paleturquoise;
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
    background-color: darkgray;
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
    padding: .6rem 20% .6rem 1rem;
    outline: none;
    border: transparent;
}

.parent-input input::placeholder {
    font: 400 12px 'Roboto', sans-serif;
    color: #B9BDCF;
}

.parent-input button[type="submit"] {
    position: absolute;
    place-self: center end;
    right: 1%;
    padding: .2rem 2.7rem;
    background-color: #1E86FF;
    color: #FFFFFF;
    font: 500 1rem 'Roboto', sans-serif;
}


form.filters {
    grid-area: formFilters;
    display: flex;
    flex-direction: column;
    gap: 2vh 0;
}

li.checkbox-filter-item input {
    background-color: #B9BDCF;
    accent-color: #334680;
}

li.checkbox-filter-item label {
    cursor: pointer;
    font: 500 14px 'Poppins', sans-serif;
    color: #334680;
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
    color: #B9BDCF;
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
    accent-color: #334680;
}

.via-radios label {
    cursor: pointer;
    font: 500 14px 'Poppins', sans-serif;
    color: #334680;
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
    color: #334680;
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
    border: 1px solid #334680;
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
    color: #B7BCCE;
}



ul.jobs-pagination-list {
    display: flex;
    gap: 0 10px;
    place-self: center end;
}

li.jobs-page-item {
    background-color: #FFFF;
    border: 1px solid #B7BCCE;
    border-radius: 4px;
    height: 100%;
}

.jobs-page-item button {
    padding: .5rem;
    font: 400 12px 'Roboto', sans-serif;
    color: #B9BDCF;
    background-color: transparent;
    width: max-content;
    height: max-content;
}

.jobs-page-item:has(.active) {
    border: 1px solid #1E86FF;
    background-color: #1E86FF;
}

.jobs-page-item .active {
    color: #FFFF;
}

.jobs-page-item:has( :hover) {
    border: 1px solid #1E86FF;
}

.jobs-page-item :not(.active):hover {
    color: #1E86FF;
}</style>