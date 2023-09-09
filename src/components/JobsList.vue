<template>
    <ul class="jobs-list">
        <JobItem v-if="jobs.length > 0" v-for="(job, jobIndex) in showUp" :key="jobIndex" :infoJob="job"/>
        <li v-else>
            <h3>There are no jobs for your filters ☹.</h3>
        </li>
    </ul>
</template>

<script>

import JobItem from '../components/JobItem.vue'
import { computed } from 'vue'

export default {
    components: {
        JobItem
    },
    props: ['jobs', 'quantity'],
    setup(props) {

        const showUp = computed(() => {
            const totalOrQuantity = (props.quantity >= props.jobs.length) ? props.jobs.length : props.quantity
            return props.jobs.slice(0, totalOrQuantity)
        })

        return {
            showUp
        }
    }
}
</script>

<style scoped>
ul.jobs-list {
    padding: 2vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4vh 0;
}

@media (max-width: 375px) {
    ul.jobs-list {
        padding: 0 2vw;
    }
}
</style>