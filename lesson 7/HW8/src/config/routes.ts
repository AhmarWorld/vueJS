export default [
  {
    name: 'MainPage',
    path: '/',
    component: () => import('@/views/GoodsPage.vue')
  },
  {
    name: 'CartPage',
    path: '/cart',
    component:()=> import('@/views/CartPage.vue')    
  },
  {
    name:'PayPage',
    path: '/pay',
    component:()=> import('@/views/PayPage.vue')
  }
]
