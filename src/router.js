//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
// 引入头部和脚部
// import Footer from './components/zuipin/footer.vue'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import demo from "./components/waimao/demo.vue"
import demo2 from "./components/waimao/demo2.vue"
// 经理端头部
import head from "./components/waimao/head.vue"
// 登录
import login from "./components/waimao/login/login.vue"
// 注册
import reg from "./components/waimao/login/reg.vue"
// 找回密码
import forget from "./components/waimao/login/forget.vue"
// 完善资料
import perfect from "./components/waimao/login/perfect.vue"
// 首页
// ////////////////////////////////
import Home from "./components/waimao/nav/home.vue"

// ////////////////////////
import data from './components/waimao/home/data' // 直属下线代理设置
import chinaUser from './components/waimao/home/chinaUser' // 中方客户
import adduser from './components/waimao/home/adduser'  // 添加客户
import setuser from './components/waimao/home/setuser'  // 修改客户

// //////////
// 订单列表
import lists from './components/waimao/orderlist/lists'  
import rec from './components/waimao/orderlist/rec'  // 回收客户
import inorder from './components/waimao/orderlist/inorder'  // 进口订单
import out from './components/waimao/orderlist/out'  // 出口订单
import addorder from './components/waimao/orderlist/addorder'  // 出口订单
import neworder from './components/waimao/orderlist/neworder'  
import orders from './components/waimao/orderlist/orders'  
// 订单准入
import compact from './components/waimao/orderlist/compact'  // 合同签订
import examine from './components/waimao/orderlist/examine'  // 验货出货
import receiving from './components/waimao/orderlist/receiving'  // 收款付款
import carriage from './components/waimao/orderlist/carriage'  // 报关运输
import rate from './components/waimao/orderlist/rate'  // 缴税退税
import closing from './components/waimao/orderlist/closing'  // 缴税退税


// ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Vue.use(Router)

export default new Router({
  routes: [
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {path:'/demo',component:demo},
    {path:'/demo2',component:demo2},
    // 经理端头部
    {path:'/head',component:head},
    // 登录页面
    {path:'/login',component:login},
    // 注册页面
    {path:'/reg',component:reg},
    // 找回密码页面
    {path:'/forget',component:forget},
    // 完善资料
    {path:'/perfect',component:perfect},
    // ////////////////////////////////////
    // 首页
    // {path:'/data',component:data},
    
    // ////////////////////////////////////
    // params地址栏不带参数（保密传递）
    {
      path: '/demo2',///:email/:pwd没有就不带参数
      name: 'demo2',
      component: () => import('./components/waimao/demo2.vue')
      },
      
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 首页跳转
{
  // 主页
  path: '/',
  component: Home,
  children: [{
    path: '/data',
    component: data,
    hidden: true
  },
  {
    path: '/chinaUser',
    component: chinaUser,
  }]
},
{
   // 订单列表
   path: '/',
   component: Home,
   children: [{
     path: '/lists',
     component: lists,
     hidden: true
   },
  {
    path: '/rec',
     component: rec,
     hidden: true
  },
  {
    path: '/addorder',
     component: addorder,
     hidden: true
  },
  {
    path: '/neworder',
    component: neworder,
    hidden: true
  },
  // 订单准入
  {
    path: '/orders',
     component: orders,
     hidden: true
  },
  // 合同签订
  {
    path: '/compact',
     component: compact,
     hidden: true
  },
  // 验货出货
  {
    path: '/examine',
     component: examine,
     hidden: true
  },
    // 收款付款
    {
      path: '/receiving',
       component: receiving,
       hidden: true
    },
     // 报关运输
     {
      path: '/carriage',
       component: carriage,
       hidden: true
    },
    // 缴税退税
    {
      path: '/rate',
       component: rate,
       hidden: true
    },
    // 缴税退税
    {
      path: '/closing',
       component: closing,
       hidden: true
    },
    
]
 },
{
  // 添加客户
  path: '/home',
  component: Home,
  children: [{
    path: '/adduser',
    component: adduser,
    hidden: true
  }]
},
{
  // 修改客户
  path: '/home',
  component: Home,
  children: [{
    path: '/setuser',
    component: setuser,
    hidden: true
  }]
},
{
  // 主页
  path: '/home',
  component: Home,
  children: [{
    path: '/demo2',
    component: demo2,
    hidden: true
  }]
},
// 出口订单
{
  // 主页
  path: '/home',
  component: Home,
  children: [{
    path: '/out',
    component: out,
    hidden: true
  }]
},
// 进口订单
{
  // 主页
  path: '/home',
  component: Home,
  children: [{
    path: '/inorder',
    component: inorder,
    hidden: true
  }]
}
],
// ///////////////////////////

  // ///////////////////////////////
  mode:"history"    // mode 设置为history ，去掉地址栏上的 # 号
})


