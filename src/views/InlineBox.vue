<template>
  <div>
    <div class="border">
      <img src="../assets/1.jpg" alt="">
      <!-- TODO：删掉 Good 试试 -->
      <!-- <span class="inline-block">Good</span> -->
      <span>X</span>
    </div>
    <div class="lh1">
      <div>今天是个好日子</div>
      <div>今天是个好日子</div>
    </div>
    <div>
      <div class="border">1</div>
      <div>
        <span>Hello</span>
        <span>World</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.lh1 {
  line-height: 1;
}
img {
  width: 200px;
}

.inline-block {
  display: inline-block;
  width: 200px;
  height: 100px;
  background-color: red;
}
</style>