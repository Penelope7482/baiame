import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Massage from '../views/Massage.vue'

Vue.use(VueRouter)

const routes = [

    // {
    //     path: '/',
    //     name: 'Accueil',
    //     component: Home0
    // },
    // {
    //     path: '/votre_masseuse',
    //     name: 'Votre Masseuse',
    //     component: Home1
    // },
    {
        path: '/massages',
        name: 'Massage',
        component: Massage
    },
    // {
    //     path: '/stages',
    //     name: 'Stages',
    //     component: Home2
    // },
    // {
    //     path: '/entreprises',
    //     name: 'Entreprises',
    //     component: Home3
    // },
    // {
    //     path: '/rando_massages',
    //     name: 'Rando Massages',
    //     component: Home4
    // },
    // {
    //     path: '/infos_pratiques',
    //     name: 'Infos Pratiques',
    //     component: Home5
    // },

]

const router = new VueRouter({
    routes
})

export default router
