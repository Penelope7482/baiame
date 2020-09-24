import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Home
    },
    {
        path: '/votre_masseuse',
        name: 'Votre Masseuse',
        component: Home
    },
    {
        path: '/massages',
        name: 'Massages',
        component: Home
    },
    {
        path: '/stages',
        name: 'Stages',
        component: Home
    },
    {
        path: '/entreprises',
        name: 'Entreprises',
        component: Home
    },
    {
        path: '/rando_massages',
        name: 'Rando Massages',
        component: Home
    },
    {
        path: '/infos_pratiques',
        name: 'Infos Pratiques',
        component: Home
    },
]

const router = new VueRouter({
    routes
})

export default router
