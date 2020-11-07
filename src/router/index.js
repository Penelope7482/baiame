import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Massages from '../views/Massages.vue'
import Masseuse from '../views/Masseuse.vue'
import Stages from '../views/Stages.vue'
import Entreprises from '../views/Entreprises.vue'
import Infos from '../views/Infos.vue'
import RandoMassages from '../views/RandoMassages.vue'
import LoginComponent from "../views/Login.vue"
import FormStageComponent from "../views/FormStage.vue"

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Accueil',
        component: Home
    },
    {
        path: '/votre_masseuse',
        name: 'Masseuse',
        component: Masseuse
    },
    {
        path: '/massages',
        name: 'Massages',
        component: Massages
    },
    {
        path: '/stages',
        name: 'Stages',
        component: Stages
    },
    {
        path: '/entreprises',
        name: 'Entreprises',
        component: Entreprises
    },
    {
        path: '/rando_massages',
        name: 'RandoMassages',
        component: RandoMassages
    },
    {
        path: '/infos_pratiques',
        name: 'InfosPratiques',
        component: Infos
    },
    {
        path: "/login",
        name: "Login",
        component: LoginComponent
    },
    {
        path: "/formstage",
        name: "FormStage",
        component: FormStageComponent,
        // meta: {
        //     requiresAuth: true
        //   },
    }
]

const router = new VueRouter({
    mode: 'history',
        routes
})

export default router
