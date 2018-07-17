
let commonConf = [
  {
    path: '/author',
    name: 'author',
    component: resolve => require(['views/author'], resolve)
  },
  {
    path: '*',
    redirect: '/index/'
  },
  {
    path: '/404',
    component: resolve => require(['views/404'], resolve)
  }
]

export default commonConf
