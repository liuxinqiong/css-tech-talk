<template>
  <div>
    <h3>盒模型</h3>
    <h4>1. margin: auto</h4>
    <div class="container">
      <div class="rect"></div>
    </div>
    <div class="container2">
      <div class="rect2"></div>
    </div>
    <h4>2. 内联元素 padding/border/margin</h4>
    <div class="container3">
      <span class="padding" ref="span" @click="sayClientWidth">Hello</span>
      <span class="margin">World</span>
      <span class="border">Hello XKool</span>
      <div>Hello World, Hello XKool</div>
    </div>
    <h4>3. padding 百分比实现等比缩放</h4>
    <div class="container4">
      <div class="middle">
        <div class="box" style="background-color: red"></div>
        <div class="box" style="background-color: yellow"></div>
        <div class="box" style="background-color: blue"></div>
      </div>
    </div>
    <h4>4. margin 合并</h4>
    <div>这个应该都知道，就不说了……</div>
    <h4>5. border-color</h4>
    <div class="container5">
      <span class="delete">删除</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sayClientWidth() {
      alert(this.$refs.span.clientWidth);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  border: 1px solid;
  .rect {
    width: 200px;
    height: 100px;
    background: yellow;
    margin: auto;
  }
}
.container2 {
  position: relative;
  border: 1px solid;
  height: 100px;
  .rect2 {
    position: absolute;
    background: yellow;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100px;
    height: 50px;
  }
}
.container3 {
  .padding {
    padding-top: 20px;
    padding-right: 20px;
    cursor: pointer;
  }
  .margin {
    margin-top: 20px;
    margin-right: 20px;
  }
  .border {
    border-width: 3px;
  }
}
.container4 {
  padding-top: 33%;
  position: relative;
  .middle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
  .box {
    flex: 1;
  }
}
.container5 {
  .delete {
    border: 1px solid;
    &:hover {
      color: red;
    }
  }
}
</style>
