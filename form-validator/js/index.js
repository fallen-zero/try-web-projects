/*
 * @Author       : Zero
 * @Date         : 2022-01-05 16:06:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 09:00:47
 * @FilePath     : /try_web_projects/form-validator/js/index.js
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
 */
function showSuccess(input) {
    // 获取传入的input元素的父级元素
    const formControl = input.parentElement;
    // 给父级元素添加类名
    formControl.className = 'form-control success';
}


/**
 * @description: 判断邮箱格式是否正确
 * @param {*} input: input元素
 */
function checkEmail(input) {
    // 定义判断邮箱格式的正则表达式
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/;
    // 判断邮箱是否符合正则表达式规则
    if (re.test(input.value.trim())) {
        // 符合, 调用输入成功后样式改变方法
        showSuccess(input);
    } else {
        // 不符合, 调用输入失败后样式改变方法
        showError(input, 'Email is not valid');
    }
}

/**
 * @description: 判断input内容是否为空
 * @param {*} inputArr: input元素数组
 * @return {*} isRequired: 存在内容为空的必填项
 */
function checkRequired(inputArr) {
    // 定义返回值，是否有内容为空的必填项，默认为false
    let isRequired = false;
    // 循环遍历input元素数组
    inputArr.forEach(function(input) {
        // 判断input元素中的内容是否为空
        if (input.value.trim() === '') {
            // 内容为空，调用输入失败后样式改变方法
            showError(input, `${getFieldName(input)} is required`);
            // 返回值变为存在内容为空的input元素
            isRequired = true;
        } else {
            // 内容不为空，调用输入成功后样式改变方法
            showSuccess(input);
        }
    });
    // 返回值
    return isRequired;
}

/**
 * @description: 判断输入内容长度是否小于最小值或者大于最大值
 * @param {*} input: input元素
 * @param {*} min: 内容长度的最小值
 * @param {*} max: 内容长度的最大值
 */
function checkLength(input, min, max) {
    // 判断内容长度
    if (input.value.length < min) {
        // 内容长度小于最小值，调用输入失败后样式改变方法
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        // 内容长度大于最大值，调用输入失败后样式改变方法
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        // 内容长度符合要求，调用输入成功后样式改变方法
        showSuccess(input);
    }
}

/**
 * @description: 校验两次秘法输入是否一致
 * @param {*} input1: input元素
 * @param {*} input2: input元素
 */
function checkPasswordsMatch(input1, input2) {
    // 判断两次密码内容是否一致
    if (input1.value !== input2.value) {
        // 两次密码不一致，调用输入失败后样式改变方法
        showError(input2, 'Passwords do not match');
    }
}

/**
 * @description: 获取input元素名称
 * @param {*} input: input元素
 * @return {*} 返回input元素名称
 */
function getFieldName(input) {
    // 返回input元素的id，首字母变为大写
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/**
 * @description: 给提交按钮增加事件监听
 * @param {*} submit: 提交按钮
 * @param {*} function: 执行点击事件
 */
form.addEventListener('submit', function(e) {
    // 防止链接打开URL
    e.preventDefault();

    // 判断必填项是否为空
    if (!checkRequired([username, email, password, password2])) {
        // 必填项不存在为空的情况
        // 调用账户名长度判断方法
        checkLength(username, 3, 15);
        // 调用密码长度判断方法
        checkLength(password, 6, 25);
        // 调用邮箱格式判断方法
        checkEmail(email);
        // 调用密码是否一致判断方法
        checkPasswordsMatch(password, password2);
    }
});