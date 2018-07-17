<template>
  <div class="author-wrapper">
    <v-loading class="author-loading"></v-loading>
    <p>{{ showTip }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import vLoading from "components/loading";

  export default {
    data() {
      return {
        showTip: '登录中',
        overtimeLimit: 3, // 登录最大请求超时时间/秒
      }
    },
    components: {
      vLoading
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo: function () {
        const self = this;
        self.$store.dispatch("fetchUserInfo")
          .then(userInfo => {
            setTimeout(function () {
              self.goNext();
            }, self.overtimeLimit * 1000)
          })
          .catch(error => {
            console.error(error);
          })
      },
      goNext: function () {
        if (this.$store.state.beforeLoginUrl) {
          this.$router.replace({path: this.$store.state.beforeLoginUrl});
        } else {
          this.$router.replace({path: '/'});
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss" rel="stylesheet/scss">
  @import "../assets/scss/mixin";
  @import "../assets/scss/definition";

  .author-wrapper {
    padding: 10rem 0;
    text-align: center;
    color: #999;
    .author-loading {
      position: relative;
      margin-bottom: 1rem;
    }
  }
</style>
