/*
 * @Author       : Zero
 * @Date         : 2022-01-10 12:10:40
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 15:41:56
 * @FilePath     : /try_web_vue2/src/store/index.js
 */

// 引用Vue
import Vue from "vue";
// 引用Vuex
import Vuex from 'vuex';
// 使用Vuex
Vue.use(Vuex);

// 引入form相关store
import mainForm from "./mainForm";

// 创建并导出store
export default new Vuex.Store({
    modules: {
        mainForm: mainForm,
    }
});