<template>
  <div class="job-aplication-page">
    <div class="aside">
      <RouterLink class="to-home" :to="{ name: 'Home' }">⬅ Back to search</RouterLink>

      <div class="how-to-apply">
        <span class="subtitle">How to Apply</span>
        <p>Please email a copy of your resume and online portfolio to <a href="mailto:wes@kasisto.com">wes@kasisto.com</a>
          & CC <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
        </p>
      </div>
    </div>

    <div class="job-description" v-if="harcodedJob">
      <div class="job-data">
        <span class="charge-title">{{ title }}</span>
        <span class="full-time-tag" v-if="isFullTime">Full time</span>
        <span class="published-at">🕒 {{ publishedAt }}</span>
      </div>

      <div class="company-data">
        <img :src="linkImgSrc" alt="company-img" class="company-img">
        <span class="company-name">{{ companyName }}</span>
        <span class="company-location">🌎 {{ location }}</span>
      </div>


      <p class="description">{{ description }}</p>
    </div>
    <div class="job-description" v-else>
      <h3>Job not available at the moment 😬</h3>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import responseFromApi from '../response.json'

export default {
  name: 'JobAplication',
  setup() {

    // const currentJob = ref(null)
    const harcodedJob = ref(null)

    const title = computed(() => harcodedJob.value.title)
    const isFullTime = computed(() => {
      const scheduleIsFullTime = harcodedJob.value.detected_extensions?.schedule_type === 'Full-time'
      return scheduleIsFullTime
    })

    const companyName = computed(() => harcodedJob.value.company_name)
    const publishedAt = computed(() => {
      return harcodedJob.value.detected_extensions?.posted_at || '--'
    })
    const location = computed(() => harcodedJob.value.location.trim())
    const description = computed(() => `${harcodedJob.value.description}`)
    const linkImgSrc = computed(() => `${harcodedJob.value.thumbnail}`)


    const { params } = useRoute()
    const { job_id } = params


    // ! To get a response from the api you need your own backend to consult and retrieve the data for this frontend...
    /* const getJobInfo = async () => {
      const apiKey = import.meta.env.VITE_SERP_API_KEY;
      try {
        const resp = await fetch(`https://serpapi.com/search.json?engine=google_jobs&q=${searchJob}&google_domain=google.com&api_key=${apiKey}`)
        const { jobs_results } = await resp.json()
        currentJob.value = jobs_results[0]
        console.log(currentJob.value);
      } catch (error) {
        console.error('Aca se rompio: ', error)
        currentJob.value = null
      }
    } */

    onMounted(() => {
      // await getJobInfo()
      harcodedJob.value = responseFromApi.jobs_results.find(job => job.job_id === job_id)
    })

    return {
      harcodedJob,
      title,
      isFullTime,
      companyName,
      publishedAt,
      location,
      description,
      linkImgSrc
    }
  }
}
</script>

<style scoped>
.job-aplication-page {
  padding: 4vh 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: "aside jobDescription";
  gap: 2vw;
}

.aside {
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
}

a.to-home {
  color: var(--brigthBlue);
  font: 500 14px 'Poppins', sans-serif
}


.how-to-apply .subtitle {
  color: var(--placeholderGrey);
  font: 700 14px 'Poppins', sans-serif;
}

.how-to-apply p {
  margin-top: 10px;
  font: 500 14px 'Poppins', sans-serif;
  color: var(--darkOceanBlue);
}

p a {
  color: var(--brigthBlue);
}

.job-description {
  grid-area: jobDescription;
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
}

.job-data {
  width: 40%;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "chargeTitle fullTimeTag"
    "publishedAt ."
  ;
  gap: 1vh 1vw;
}

.job-data .charge-title {
  grid-area: chargeTitle;
  font: 700 1.25rem 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
}

.job-data .full-time-tag {
  grid-area: fullTimeTag;
  border: 1px solid var(--darkOceanBlue);
  border-radius: 4px;
  font: 700 12px 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
  place-self: center start;
  padding: 3px;
}

.job-data .published-at {
  grid-area: publishedAt;
  color: var(--placeholderGrey);
  font: 500 12px 'Roboto', sans-serif;
}

.company-data {
  height: 42px;
  width: fit-content;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "companyImg companyName"
    "companyImg companyLocation"
  ;
  gap: 1vh .5vw;
}

.company-data .company-img {
  grid-area: companyImg;
  height: 100%;
  width: 42px;
  place-self: center start;
  background-color: #F2F2F2;
  border-radius: 4px;
  color: #BDBDBD;
  font: 500 12px 'Roboto', sans-serif;
  text-align: center;
}

.company-data .company-name {
  grid-area: companyName;
  place-self: center start;
  font: 700 1.125rem 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
}

.company-data .company-location {
  grid-area: companyLocation;
  place-self: center start;
  font: 500 12px 'Roboto', sans-serif;
  color: var(--placeholderGrey);
}

p.description {
  color: var(--darkOceanBlue);
  font: 400 1rem 'Roboto', sans-serif;
  line-height: 1.5rem;
  white-space: pre-line
}

@media (max-width: 375px) {
  .job-aplication-page {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "aside"
      "jobDescription";
    gap: 6vh 0;
  }


  .job-description {
    grid-area: jobDescription;
    display: flex;
    flex-direction: column;
    gap: 5vh 0;
  }

  .job-data {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "chargeTitle"
      "fullTimeTag"
      "publishedAt";
  }

  .company-data {
    gap: 1vh 2vw;
  }

  .company-data .company-img {
    place-self: center;
  }

  .company-data .company-name {
    place-self: end start;
  }

  .company-data .company-location {
    place-self: start;
  }

}
</style>