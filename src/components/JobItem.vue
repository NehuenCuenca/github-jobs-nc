<template>
    <li class="job-item" @click="navigateTo()">
        <div class="rigth-section">
            <img class="company-img" :src="infoJob.thumbnail" alt="not found">
            <span class="company-name">{{ infoJob.company_name }}</span>
            <span class="job-title">{{ infoJob.title }}</span>
            <span class="full-time-tag" v-if="isFullTime">Full time</span>
        </div>
        <div class="left-section">
            <span class="location">🌎 {{ infoJob.location }}</span>
            <span class="published-at">🕒 {{ publishedAt }}</span>
        </div>
    </li>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
    props: ['infoJob'],
    setup(props) {
        const router = useRouter()

        const isFullTime = computed(() => {
            const scheduleIsFullTime = props.infoJob.detected_extensions.schedule_type === 'Full-time'
            return scheduleIsFullTime
        })

        const publishedAt = computed(() => {
            return props.infoJob.detected_extensions.posted_at || '--'
        })

        const dashedCompanyName = computed(() => {
            return props.infoJob.company_name.split(' ').join('-')
        })
        
        const queryToJob = computed(() => {
            const title = props.infoJob.title
            const companyName = props.infoJob.company_name
            const location = props.infoJob.location.trim()
            return [title, companyName, location].join(', ')
        })


        const navigateTo = () => {
            router.push({
                name: 'JobAplication',
                params: {
                    company: dashedCompanyName.value,
                    job_id: props.infoJob.job_id
                },
                query: {
                    searchJob: queryToJob.value
                }
            })
        }

        return {
            isFullTime,
            publishedAt,
            navigateTo
        }
    }
}
</script>

<style scoped>
li.job-item {
    width: 790px;
    height: 114px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px #0000000D;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    cursor: pointer;
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
    width: 90px;
    height: 90px;
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

@media (max-width: 375px) {
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
}
</style>