<template>
  <div>
    <h3>基本概念</h3>
    <div>
      <h4>1. 思考以下两种方式的区别</h4>
      <code>
        <pre>
            .class1 {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
            .class2 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        </pre>
      </code>
      <div class="container">
        <div class="class1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  position: relative;
  height: 100px;
}
.class1 {
  background: yellow;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.class2 {
  background: yellow;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
