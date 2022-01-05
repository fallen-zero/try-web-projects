/*
 * @Author       : Zero
 * @Date         : 2022-01-05 16:06:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-05 18:01:32
 * @FilePath     : /form-validator/js/index.js
 */

// 定义表单dom元素
const form = document.getElementById('form');
// 定义用户名dom元素
const username = document.getElementById('username');
// 定义邮箱dom元素
const email = document.getElementById('email');
// 定义密码dom元素
const password = document.getElementById('password');
// 定义确认密码dom元素
const password2 = document.getElementById('password2');

/**
 * @description: 显示输入错误信息
 * @param {*} input: input元素
 * @param {*} message: 错误信息
 * @return {*}
 */
function showError(input, message) {
    // 获取传入的input元素的父级元素
    const formControl = input.parentElement;
    // 给父级元素添加类名
    formControl.className = 'form-control error';
    // 获取small元素
    const small = formControl.querySelector('small');
    // 修改small元素的内容
    small.innerText = message;
}

/**
 * @description: 输入成功后样式改变
 * @param {*} input: input元素
 * @return {*}
 */
function showSuccess(input) {
    // 获取传入的input元素的父级元素
    const formControl = input.parentElement;
    // 给父级元素添加类名
    formControl.className = 'form-control success';
}