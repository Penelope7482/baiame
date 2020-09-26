import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Slick from 'vue-slick'

Vue.config.productionTip = false

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
    router,
    i18n,
    Slick,
    render: h => h(App)
}).$mount('#app')
