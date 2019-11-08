<template>
  <div>
    <h3>1. ch demo</h3>
    <div>
      手机号码：
      <input type="text" class="ch11">
    </div>
    <h3>2. font-weight</h3>
    <div class="font-weight">
      <span>你好</span>
    </div>
    <h3>3. font-style</h3>
    <div class="font-style">你好</div>
    <h3>4. letter-spacing vs word-spacing</h3>
    <div class="text">
      <div class="letter-spacing">你好呀，我来自小库</div>
      <div class="word-spacing">你好呀，我来自 小库</div>
    </div>
    <h3>5. text-transform</h3>
    <div>
      验证码：
      <input class="text-transform" type="text">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ch11 {
  width: 11ch;
}
.font-weight {
  // font-weight: 100;
  font-weight: bold;
  // font-weight: bolder;
}
.font-style {
  // font-style: italic;
  font-style: oblique;
}
.letter-spacing {
  letter-spacing: 5px;
}
.word-spacing {
  word-spacing: 20px;
}
.text-transform {
  text-transform: uppercase;
}
</style>
