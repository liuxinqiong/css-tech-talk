<template>
  <div>
    <h3>1. 为啥这里有空隙？</h3>
    <div class="border">
      <img src="../assets/1.jpg" alt>
      <!-- 解决方式：line-height、font-size、vertical-align、block 化 -->
      <!-- TODO：删掉 Good 试试 -->
      <!-- <span class="inline-block">Good</span> -->
      <!-- <span>X</span> -->
    </div>
    <h3>2. 为什么合理高度总比预期高一点点？</h3>
    <div class="box">
      <span>文字</span>
    </div>
    <h3>3. 单行或多行垂直居中</h3>
    <div class="container3">
      <div class="single-text">小库 xkool</div>
      <div class="multi-text">
        <div
          class="content"
        >小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool小库 xkool</div>
      </div>
    </div>
    <h3>4. vertical-align 实现水平垂直居中弹弹窗</h3>
    <!-- <div class="container-dialog">
      <div class="dialog">这是一个测试</div>
    </div>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
img {
  width: 200px;
}

.inline-block {
  display: inline-block;
  width: 200px;
  height: 100px;
  background-color: red;
}

.box {
  line-height: 32px;
  // font-size: 24px; /* 解开注释再看看？ */
  span {
    font-size: 24px;
  }
}

.container3 {
  .single-text {
    border: 1px solid;
    background-color: yellow;
    line-height: 40px;
    // height: 40px; 没必要呢！
  }
  .multi-text {
    line-height: 120px;
    border: 1px solid;
    background-color: yellow;
    .content {
      display: inline-block;
      line-height: 20px;
      vertical-align: middle;
    }
  }
}

.container-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  overflow: auto;
}
.container-dialog:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.dialog {
  background: yellow;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  white-space: normal;
}
</style>