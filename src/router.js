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
import chinaUser from './components/waimao/home/chinaUser' // 直属下线代理设置

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
  // 主页
  path: '/home',
  component: Home,
  children: [{
    path: '/demo2',
    component: demo2,
    hidden: true
  }]
}

],
// ///////////////////////////

  // ///////////////////////////////
  mode:"history"    // mode 设置为history ，去掉地址栏上的 # 号
})


