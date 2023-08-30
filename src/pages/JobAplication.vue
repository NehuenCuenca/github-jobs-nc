<template>
  <div>
    <div class="aside">
      <a class="to-home" href="#">⬅ Back to search</a>

      <div class="how-to-apply">
        <span class="subtitle">How to Apply</span>
        <p>Please email a copy of your resume and online portfolio to <a href="mailto:wes@kasisto.com">wes@kasisto.com</a>
          & CC <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
        </p>
      </div>
    </div>

    <div class="job-description">
      <div class="job-data">
        <span class="charge-title">Title of job</span>
        <span class="full-time-tag">Full time</span>
        <span class="published-at">🕒 X days ago</span>
      </div>

      <div class="company-data">
        <img src="" alt="company-img" class="company-img">
        <span class="company-name">Company name</span>
        <span class="company-location">Location</span>
      </div>


      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores odit natus perferendis
        recusandae ad cumque aperiam, et molestias? Eum adipisci quidem voluptate sapiente ipsum amet animi praesentium,
        suscipit eveniet quaerat!</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
main {
  grid-area: main;
  background-color: paleturquoise;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100%;
  grid-template-areas:
    "aside jobDescription";
}

.aside {
  grid-area: aside;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
}

a.to-home {
  color: #1E86FF;
  font: 500 14px 'Poppins', sans-serif
}


.how-to-apply .subtitle {
  color: #B9BDCF;
  font: 700 14px 'Poppins', sans-serif;
}

.how-to-apply p {
  margin-top: 10px;
  font: 500 14px 'Poppins', sans-serif;
  color: #334680;
}

p a {
  color: #1E86FF;
}

.job-description {
  grid-area: jobDescription;
}

.job-data {
  width: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "chargeTitle fullTimeTag"
    "publishedAt ."
  ;
}

.job-data .charge-title {
  grid-area: chargeTitle;
}

.job-data .full-time-tag {
  grid-area: fullTimeTag;
}

.job-data .published-at {
  grid-area: publishedAt;
}

.company-data {
  width: 30%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "companyImg companyName"
    "companyImg companyLocation"
  ;
}

.company-data .company-img {
  grid-area: companyImg;
}

.company-data .company-name {
  grid-area: companyName;
}

.company-data .company-location {
  grid-area: companyLocation;
}

p.description {
  color: #334680;
  font: 400 1rem 'Roboto', sans-serif;
  line-height: 1.5rem;
}</style>