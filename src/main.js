import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Slick from 'vue-slick'

Vue.config.productionTip = false

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

//use beforeEach route guard to set the language
router.beforeEach((to, From, next) => {
//use the language from the routing param or default language 
let language = to.params.lang;
if(!language){
    language = 'fr'
}
//set the current language for i18n
i18n.locale = language
next()
})

new Vue({
    router,
    i18n,
    Slick,
    render: h => h(App)
}).$mount('#app')
