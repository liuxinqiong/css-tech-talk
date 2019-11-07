<template>
  <div id="app">
    <!-- <h2 class="text-center">你可能不知道的 CSS</h2> -->
    <ul>
      <li><router-link to="/inline-box">内联盒模型</router-link></li>
      <li><router-link to="/z-index">层叠规则</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<style>
.text-center {
  text-align: center;
}
.border {
  border: 1px solid;
}
</style>
