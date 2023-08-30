import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {   
        name: 'Home',
        path: '/', 
        component: () => import( /* webpackChunkName: "HomePage" */ '../pages/Home.vue') 
    },
    {   
        name: 'JobAplication',
        path: '/job-aplication/:job', 
        component: () => import( /* webpackChunkName: "JobAplication" */ '../pages/JobAplication.vue') 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;