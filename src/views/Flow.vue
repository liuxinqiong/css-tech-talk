<template>
  <div>
    <h3>1. absolute 和 text-align</h3>
    <div class="container">
      <!-- x -->
      <img src="../assets/1.jpg" alt>
    </div>
    <h3>2. overflow: hidden</h3>
    <div class="box">
      <div class>今天天气很好</div>
      <div class="float">嗯嗯，是的</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  border: 1px solid;
  img {
    width: 200px;
    position: absolute;
  }
}
.box {
  border: 1px solid;
  // overflow: hidden;
  .float {
    float: right;
  }
}
</style>
