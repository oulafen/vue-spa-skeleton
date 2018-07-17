<template>
  <div class="page-loading">
    <div class="center">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../assets/scss/mixin";
  @import "../assets/scss/definition";
  $_ani_delay: 0.1s;
  $_ani_dura: 0.8s;
  $_ball_r: 0.2rem;
  $_ball_dis: 0.2rem;
  .page-loading{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 999;
    .center{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: $_ball_r * 2 * 4 + $_ball_dis * 5;
      height: $_ball_r * 2;
      .ball{
        position: relative;
        display: inline-block;
        width: $_ball_r * 2;
        height: $_ball_r * 2;
        margin-left: $_ball_dis;
        float: left;
        &:before{
          position: absolute;
          content: ' ';
          width: $_ball_r * 2;
          height: $_ball_r * 2;
          border-radius: 50%;
          animation-duration: $_ani_dura;
          animation-name: ballJump;
          animation-iteration-count: infinite;
        }
        &:nth-child(1){
          margin-left: 0;
          &:before{
            background-color: orangered;
            animation-delay: $_ani_delay * 0;
          }
        }
        &:nth-child(2){
          &:before{
            background-color: orange;
            animation-delay: $_ani_delay * 1;
          }
        }
        &:nth-child(3){
          &:before{
            background-color: yellow;
            animation-delay: $_ani_delay * 2;
          }
        }
        &:nth-child(4){
          &:before{
            background-color: greenyellow;
            animation-delay: $_ani_delay * 3;
          }
        }

      }
    }
  }

  @keyframes ballJump {
    0%{
      bottom: 0;
    }
    30%{
      bottom: 0.8rem;
    }
    60%{
      bottom: 0;
    }
    100%{
      bottom: 0;
    }

  }

</style>
