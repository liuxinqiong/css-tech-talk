<template>
  <div>
    <h3>1. 层叠顺序</h3>
    <div class="relative bg">
      <div>Hello Wrold</div>
      <div class="content"></div>
    </div>
    <h3>2. 层叠上下文与层叠水平</h3>
    <div>
      <div class="parent">
        <img src="../assets/1.jpg" class="son1" alt>
      </div>
      <div class="parent">
        <img src="../assets/2.jpg" class="son2" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
img {
  width: 200px;
}

.relative {
  position: relative;
  z-index: 0;
}

.bg {
  background: yellow;
  height: 100px;
}

.content {
  height: 20px;
  margin-top: -10px;
  background: red;
  // transform: translateY(-10px)
  // position: relative;
}

.parent {
  position: relative;
  z-index: auto; /* 改成数值试试？看看效果有什么不一样*/
}
.son1 {
  position: absolute;
  z-index: 2;
}
.son2 {
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 20px;
}
</style>

