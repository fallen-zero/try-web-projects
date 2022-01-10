<!--
 * @Author       : Zero
 * @Date         : 2022-01-10 10:27:28
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 16:58:07
 * @FilePath     : /try_web_vue2/src/components/MainForm.vue
-->


<template>
    <!-- 表单 -->
    <form id="form" class="form">
        <!-- 标题 -->
        <h2>Register With Us</h2>
        <!-- 循环input对象数组，key值为inp的id，传入整个inp对象，传入index -->
        <InputControl 
            v-for="(inp, index) in inputArr" 
            :key="inp.id"
            :inp="inp"
            :index="index"
        >
        </InputControl>
        <!-- 提交按钮 -->
        <button type="submit" @click.prevent="submit">Submit</button>
    </form>
</template>

<script>
    // 引入vuex方法
    import { mapState, mapActions } from 'vuex'
    // 引入InputControl组件
    import InputControl from "./InputControl.vue";

    export default {
        name: "MainForm",
        computed: {
            // 获取store中的input对象数组
            ...mapState('mainForm', ['inputArr']),
        },
        components: {
            // 引用InputControl组件
            InputControl,
        },
        methods: {
            // 引用mainForm中的Ssubmit方法
            ...mapActions('mainForm', ['submit']),
        },
    };
</script>

<style lang="less" scoped>
    /* 标题样式 */
    h2 {
        /* 文字水平居中 */
        text-align: center;
        /* 底部外边距为20px */
        margin-bottom: 20px;
    }

    /* 表单样式 */
    .form {
        /* 上下内边距30px, 左右内边距40px */
        padding: 30px 40px;
        // 表单下的按钮样式
        button {
            // 设置鼠标样式为小手
            cursor:pointer;
            // 设置背景颜色为#3498db
            background-color: #3498db;
            // 设置边框，宽度为2px，实线，颜色为#3498db
            border: 2px solid #3498db;
            // 设置圆角为4px
            border-radius: 4px;
            // 设置字体颜色为白色
            color: #fff;
            // 设置块级元素
            display: block;
            // 设置字体大小为16px
            font-size: 16px;
            // 设置内边距为10px
            padding: 10px;
            // 设置顶部外边距为20px
            margin-top: 20px;
            // 设置宽度为100%
            width: 100%;
        }
    }
</style>