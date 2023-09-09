import { createRouter, createWebHashHistory } from 'vue-router'
import JobAplication from '../pages/JobAplication.vue'


const routes = [
    {   
        name: 'Home',
        path: '/', 
        component: () => import( /* webpackChunkName: "HomePage" */ '../pages/Home.vue') 
    },
    {   
        name: 'JobAplication',
        path: '/job-aplication/:company/:job_id', 
        component: () => import( /* webpackChunkName: "JobAplication" */ '../pages/JobAplication.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;