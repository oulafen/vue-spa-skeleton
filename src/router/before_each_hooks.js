import store from '../store/index'

export default {
  checkVisitAuth(to, from, next) {
    console.log('before_each_hook to.name=', to.name);

    if (!store.state.userInfo && to.path != '/author') {
      // 第一次进入项目
      store.commit('setBeforeLoginUrl', {url: to.fullPath}); // 保存用户进入的url
      return next('/author');
    } else if (store.state.userInfo && to.path == '/author') {
      // 用户使用后退返回到授权页，则默认回到首页
      console.log('author page 则默认回到首页');
      return next('/');
    }
    next();
  }
}
