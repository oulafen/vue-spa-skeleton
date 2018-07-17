<template>
  <div class="no-content">
    <div class="blank-bg"></div>
    <p class="title" v-if="title">{{ title }}</p>
    <p class="desc" v-if="desc">{{ desc }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['title', 'desc'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../assets/scss/mixin";
  @import "../assets/scss/definition";

  .no-content{
    padding: 5rem 0;
    text-align: center;
    .blank-bg{
      width: 5.4rem;
      height: 4.88rem;
      background: url(https://img.shape.vip/fe/blank_bg.png) center no-repeat;
      background-size: contain;
      margin: 0 auto 0.8rem;
    }
    img{
      width: 5.4rem;
      margin-bottom: 0.8rem;
    }
    p{
      line-height: 1.4;
    }
    .title{
      color: $_main_font_color;
      font-size: 0.8rem;
    }
    .desc{
      margin-top: 0.4rem;
      color: $_desc_font_color;
      font-size: 0.7rem;
    }
  }

</style>
