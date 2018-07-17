<template>
  <div class="page-wrapper">
    <img class="img" src="../assets/images/404.png" />
    <p>页面不存在</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../assets/scss/mixin";
  @import "../assets/scss/definition";

  .page-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    .img {
      width: 10.35rem;
    }
    p {
      font-size: 0.75rem;
      margin: 1.5rem 0 3rem;
    }
  }
</style>
