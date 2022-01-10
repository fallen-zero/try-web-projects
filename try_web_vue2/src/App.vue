<!--
 * @Author       : Zero
 * @Date         : 2022-01-10 10:23:24
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-10 11:41:07
 * @FilePath     : /try_web_vue2/src/App.vue
-->


<template>
  <!-- 容器 -->
  <div class="container">
      <!-- 表单 -->
      <MainForm></MainForm>
  </div>
</template>

<script>
  // 引入MainForm标签
  import MainForm from './components/MainForm.vue';

  export default {
    name: 'App',
    components: {
      MainForm,
    },
  }
</script>

<style scoped>
  /* 容器样式 */
  .container {
    /* 设置背景颜色为白色 */
    background-color: #fff;
    /* 设置圆角5px */
    border-radius: 5px;
    /* 设置边框阴影，水平阴影位置为0，垂直阴影位置为2px，模糊距离为10px，阴影颜色为0.3透明度的黑色 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    /* 设置宽度为400px */
    width: 400px;
  }
</style>