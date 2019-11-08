<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/1.jpg">
    <ul>
      <li>
        <router-link to="/base">基础概念</router-link>
      </li>
      <li>
        <router-link to="/box">盒模型</router-link>
      </li>
      <li>
        <router-link to="/inline-box">内联元素与流</router-link>
      </li>
      <li>
        <router-link to="/flow">流的破坏与保护</router-link>
      </li>
      <li>
        <router-link to="/z-index">层叠规则</router-link>
      </li>
      <li>
        <router-link to="/text">文本相关</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
