export default {
  path: '/index',
  component: resolve => require(['views/index'], resolve),
  children: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['views/shop_store/index'], resolve)
    },
    {
      path: 'store',
      name: 'index_store',
      component: resolve => require(['views/shop_store/index'], resolve)
    },
    {
      path: 'course',
      name: 'index_course',
      component: resolve => require(['views/course/index'], resolve)
    },
    {
      path: 'my_data',
      name: 'index_my_data',
      component: resolve => require(['views/my_data/index'], resolve)
    },
    {
      path: 'membership',
      name: 'index_membership',
      component: resolve => require(['views/membership/index'], resolve)
    }
  ]
}
