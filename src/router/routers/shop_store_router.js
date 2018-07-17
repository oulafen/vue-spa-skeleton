export default {
  path: '/store',
  component: resolve => require(['views/Frame'], resolve),
  children: [
    {
      path: '/',
      name: 'store_index',
      component: resolve => require(['views/shop_store/index'], resolve)
    },
    {
      path: 'detail/:id',
      name: 'store_detail',
      component: resolve => require(['views/shop_store/detail'], resolve)
    }
  ]
}
