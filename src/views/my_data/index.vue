<template>
  <div class="my-data-wrapper">
    <div class="top-box">
      <router-link :to="{'name': 'index_membership'}" class="info-box">
        <div class="avatar" :style="{'background-image': 'url(' + userInfo.avatar + ')' }"></div>
        <div class="name">{{ userInfo.nickname }}</div>
      </router-link>
      <div class="data-box">
        <div class="data">
          <div class="num">{{ userInfo.book_num || '0' }}</div>
          <p class="desc">累计次数/time</p>
        </div>
        <div class="data">
          <div class="num">{{ userInfo.book_duration_num || '0' }}</div>
          <p class="desc">累计时长/min</p>
        </div>
        <div class="data">
          <div class="num">{{ userInfo.book_date_num || '0' }}</div>
          <p class="desc">累计天数/day</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        userInfo: this.$store.state.userInfo
      }
    },

    methods: {

    }
  }
</script>

<style scoped type="text/scss" lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/mixin";
  @import "../../assets/scss/definition";

  .my-data-wrapper {
    padding-bottom: 3.2rem;
    .top-box {
      padding-bottom: 0;
      position: relative;
      width: calc(100% - 1.5rem);
      margin: 0.75rem;
      background-color: $_box_bg_color;
      border-radius: 6px;
      .info-box {
        display: block;
        padding: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        .avatar {
          float: left;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid #fff;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: $_img_bg_color;
          margin-right: 0.75rem;
        }
        .name {
          line-height: 2.5rem;
          height: 2.5rem;
          font-size: 1rem;
        }
      }
    }
    .data-box {
      width: 100%;
      display: flex;
      .data {
        position: relative;
        flex: 1;
        text-align: center;
        padding: 1.25rem 0 1rem 0;
        .num {
          font-size: 1.5rem;
          font-family: $_font_main;
          margin-bottom: 0.75rem;
        }
        .desc {
          font-size: 0.5rem;
          line-height: 1;
        }
        &:after {
          position: absolute;
          right: 0;
          top: 50%;
          content: ' ';
          height: 1.75rem;
          width: 0.05rem;
          margin-top: -0.875rem;
          background-color: $_border_color;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
  }
</style>
