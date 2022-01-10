/*
 * @Author       : Zero
 * @Date         : 2022-01-10 10:23:24
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 12:11:29
 * @FilePath     : /try_web_vue2/src/main.js
 */


import Vue from 'vue'
import App from './App.vue'
// 引入css样式
import './assets/css/index.css'
// 引入插件
import VueResource from 'vue-resource'
// 引入store
import store from './store'

Vue.config.productionTip = false

// 使用插件
Vue.use(VueResource)

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')