<template>
  <div class="content-wrapper">
    <keep-alive>
      <router-view class="inner-content"></router-view>
    </keep-alive>
    <div class="footer" ref="footer">
      <div class="tabs border-1px">
        <div class="tab">
          <router-link to="/index/store"><span>门店</span></router-link>
        </div>
        <div class="tab">
          <router-link to="/index/course"><span>课程</span></router-link>
        </div>
        <div class="tab">
          <router-link to="/index/my_data"><span>我的</span></router-link>
        </div>
        <div class="tab">
          <router-link to="/index/membership"><span>会员卡</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../assets/scss/mixin";
  @import "../assets/scss/definition";

  .content-wrapper{
    width: 100%;
    height: 100%;
  }
  .inner-content{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 2.45rem;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .footer{
    position: fixed;
    height: 2.45rem;
    z-index: 99;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: $_footer_bg_color;
    .tabs {
      display: flex;
      @include border-top-1px($_border_color);
      .tab {
        flex: 1;
        text-align: center;
        line-height: 2.45rem;
      }
      a {
        display: block;
        font-size: 0.7rem;
        color: $_desc_font_color;
        font-family: $_font_normal;
        span {
          position: relative;
          display: inline-block;
        }
        &.active, &.router-link-active{
          color: $_footer_active_color;
          font-weight: 700;
          span:after{
            position: absolute;
            content: ' ';
            left: 50%;
            bottom: 0;
            width: 1rem;
            margin-left: -0.5rem;
            border-bottom: 0.15rem solid $_footer_active_color;
          }
        }
      }
    }
  }
</style>
