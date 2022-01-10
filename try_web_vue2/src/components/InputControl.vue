<!--
 * @Author       : Zero
 * @Date         : 2022-01-10 10:31:41
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 16:01:58
 * @FilePath     : /try_web_vue2/src/components/InputControl.vue
-->


<template>
    <div class="form-control" :class="inp.classType">
        <!-- 标签 -->
        <label :for="inp.id">{{ inp.name }}</label>
        <!-- 输入框 -->
        <input 
            :type="inp.type" 
            @blur="setValue({text, index})"
            v-model="text"
            :id="inp.id" 
            :autocomplete="inp.autocomplete" 
            :placeholder="inp.placeholder"
        />
        <!-- 提示框 -->
        <small>{{ inp.small }}</small>
    </div>
</template>

<script>
    // 引入vuex方法
    import { mapMutations } from 'vuex';

    export default {
        name: 'InputControl',
        data() {
            return {
                text: this.inp.value,
            }
        },
        props: ['inp', 'index'],
        methods: {
            ...mapMutations('mainForm', ['setValue']),
        },
    }
</script>

<style lang="less" scoped>
    // 包裹输入框的容器样式
    .form-control {
        // 底部外边距为10px
        margin-bottom: 10px;
        // 底部内边距为20px
        padding-bottom: 20px;
        // 设置相对定位
        position: relative;

        // 表单容器下的标签样式
        label {
            // 设置字体颜色
            color: #777;
            // 设置块级元素
            display: block;
            // 底部外边距5px
            margin-bottom: 5px;
        }

        // 表单容器下的输入框样式
        input {
            // 设置边框，宽度2px，实线，颜色为#f0f0f0
            border: 2px solid #f0f0f0;
            // 设置圆角4px
            border-radius: 4px;
            // 设置块级元素
            display: block;
            // 设置宽度为100%
            width: 100%;
            // 设置内边距为10px
            padding: 10px;
            // 设置字体大小为14px
            font-size: 14px;
        }

        // 表单下的输入框获取焦点时的样式
        input:focus {
            // 轮廓大小为0
            outline: 0;
            // 设置边框颜色为#777
            border-color: #777;
        }

        // 表单下的错误提示的样式
        small {
            // 字体颜色为定义失败的颜色
            color: var(--error-color);
            // 设置绝对定位
            position: absolute;
            // 设置底部坐标为0
            bottom: 0;
            // 设置左边坐标为0
            left: 0;
            // 不透明度为隐藏
            visibility: hidden;
        }
    }

    // 表单下的输入内容验证成功后输入框的样式
    .form-control.success input {
        // 设置边框颜色为定义成功的颜色
        border-color: var(--success-color);
    }

    // 表单下的输入内容验证失败后输入框的样式
    .form-control.error input {
        // 设置边框颜色为定义失败的颜色
        border-color: var(--error-color);
    }

    // 表单下的输入内容验证失败后错误提示的样式
    .form-control.error small {
        // 设置不透明度为显示
        visibility: visible;
    }
</style>