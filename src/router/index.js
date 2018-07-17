import Vue from 'vue'
import values from 'lodash/values'

import VueRouter from 'vue-router'
import beforeEachHooks from './before_each_hooks'
import afterEachHooks from './after_each_hooks'
import commonRoutesMap from './common_routes'
import RoutesMapConfig from './routers'

Vue.use(VueRouter);

const routerInstance = new VueRouter({
  routes: RoutesMapConfig.concat(commonRoutesMap),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

values(beforeEachHooks).forEach((hook) => {
  routerInstance.beforeEach(hook)
})

values(afterEachHooks).forEach((hook) => {
  routerInstance.afterEach(hook)
})

export default routerInstance;
