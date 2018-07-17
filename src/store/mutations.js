export default {
  setUserInfo(state, payLoad){
    /**
     * 用户信息
     * **/
    state.userInfo = payLoad;
  },
  setBeforeLoginUrl(state, payLoad){
    /**
     * 登录之前页面的fullPath
     * **/
    state.beforeLoginUrl = payLoad.url;
  }
}
