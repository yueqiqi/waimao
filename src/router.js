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
// 步骤条
import steps from "./components/waimao/steps.vue"

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


// *************************************************************************************************************************************************************************
// 平台客户列表
import client from './components/waimao/pingtai/client'  // 客户列表
import root from './components/waimao/pingtai/root'  // 权限设置
import emp from './components/waimao/pingtai/emp'  // 员工列表
import addemp from './components/waimao/pingtai/addemp'  // 添加员工
import lookuser from './components/waimao/pingtai/lookuser'  // 查看客户

// *************************************************************************************************************************************************************************

// *************************************************************************************************************************************************************************
// 用户端
import usteps from './components/waimao/user/usteps'  // 用户步骤条
import uindex from './components/waimao/user/uindex'  // 用户端首页
import uself from './components/waimao/user/uself'  // 个人信息
import uservice from './components/waimao/user/uservice'  // 客服列表
import uorders from './components/waimao/user/uorders'  // 订单列表
import usell from './components/waimao/user/usell'  // 委托销售
import upurchase from './components/waimao/user/upurchase'  // 委托采购
import usign from './components/waimao/user/usign'  // 合同签订
import upayment from './components/waimao/user/upayment'  // 付款开证收款
import ucarriage from './components/waimao/user/ucarriage'  // 运输清关
import urate from './components/waimao/user/urate'  // 缴税退税
import utake from './components/waimao/user/utake'  // 收货
import uclosing from './components/waimao/user/uclosing'  // 结算汇总
// /////////////////////////////////////
import ustpes2 from './components/waimao/user/user2/ustpes2.vue'  // 第二个步骤条
import upayee from './components/waimao/user/user2/upayee.vue'  // 验货出货
import utakemoney from './components/waimao/user/user2/utakemoney.vue'  // 验货出货
import utax2 from './components/waimao/user/user2/utax2.vue'  // 验货出货

// *************************************************************************************************************************************************************************
// 总监端
import cindex from './components/waimao/chief/cindex.vue'  // 主页
import chclient from './components/waimao/chief/chclient.vue'  // 客户列表
import chroot from './components/waimao/chief/chroot'  // 权限设置
import chuser from './components/waimao/chief/chuser'  // 客户列表
import chorders from './components/waimao/chief/chorders'  // 订单列表
import chorderImport from './components/waimao/chief/chorderImport'  // 订单进出口
// 》》》》》》》》》》》》》》》
// 进口
import chistep from './components/waimao/chief/import/chistep'  // 订单准入
import chorderEntry from './components/waimao/chief/import/chorderEntry'  // 订单准入
import chicontract from './components/waimao/chief/import/chicontract'  // 合同签订
// 》》》》》》》》》》》》》》》
// 出口
import chestep from './components/waimao/chief/exit/chestep'  // 步骤条
import cheorderEntry from './components/waimao/chief/exit/cheorderEntry'  // 订单准入
import checontract from './components/waimao/chief/exit/checontract'  // 合同签订

// *************************************************************************************************************************************************************************
// ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Vue.use(Router)

export default new Router({
  routes: [
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {path:'/demo',component:demo},
    {path:'/demo2',component:demo2},
    // 步骤条
    {path:'/steps',component:steps},
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
  children: [
    // 总监端
    // 总监端主页
    {
      path: '/cindex',
      component: cindex,
      hidden: true
    },
    // 客户列表
    {
      path: '/chclient',
      component: chclient,
      hidden: true
    },
     // 权限设置跳转
     {
      path: '/chroot',
     // 一定要写name,params必须用name来识别路径
      name: 'chroots',
      component: chroot
    },
    // 客户列表
    {
      path: '/chuser',
     component: chuser,
     hidden: true
    },
    // 订单列表
    {
      path: '/chordersr',
     component: chorders,
     hidden: true
    },
    // 订单进出口
    {
      path: '/chorderImport',
     component: chorderImport,
     hidden: true
    },
    // 订单准入-进口
    {
      path: '/chistep',
      component: chistep,
      hidden: true
    },
    {
      path: '/chorderEntry',
      component: chorderEntry,
      hidden: true
    },
    // 合同签订-进口
    {
      path: '/chicontract',
      component: chicontract,
      hidden: true
    },
    // 》》》》》》》》》》》》》》》》》
    {
      path: '/chestep',
      component: chestep,
      hidden: true
    },
    // 订单准入-出口
    {
      path: '/cheorderEntry',
      component: cheorderEntry,
      hidden: true
    },
    // 合同签订-出口
    {
      path: '/checontract',
      component: checontract,
      hidden: true
    },
    


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  {
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
    // ***************************************************************************************************************************************************//
    // 平台客户列表
    {
      path: '/client',
       component: client,
       hidden: true
    },
    // 权限设置跳转
    {
      path: '/root',
     // 一定要写name,params必须用name来识别路径
      name: 'roots',
      component: root
    },
    // 员工列表
    {
      path: '/emp',
       component: emp,
       hidden: true
    },
    // 添加新员工
    {
      path: '/addemp',
       component: addemp,
       hidden: true
    },
    // 查看客户
    {
      path: '/lookuser',
       component: lookuser,
       hidden: true
    },
    // ***************************************************************************************************************************************************//

    // ***************************************************************************************************************************************************//
    // 用户端
    // 步骤条
    {
      path: '/usteps',
       component: usteps,
       hidden: true
    },
    {
      path: '/uindex',
       component: uindex,
       hidden: true
    },
    // 个人信息
    {
      path: '/uself',
       component: uself,
       hidden: true
    },
    // 客服列表
    {
      path: '/uservice',
       component: uservice,
       hidden: true
    },
    // 订单列表
    {
      path: '/uorders',
       component: uorders,
       hidden: true
    },
    // 委托销售
    {
      path: '/usell',
       component: usell,
       hidden: true
    },
    // 委托采购
    {
      path: '/upurchase',
       component: upurchase,
       hidden: true
    },
    // 合同签订
    {
      path: '/usign',
       component: usign,
       hidden: true
    },
    // 付款开证收款
    {
      path: '/upayment',
       component: upayment,
       hidden: true
    },
    // 运输清关
    {
      path: '/ucarriage',
       component: ucarriage,
       hidden: true
    },
    // 缴税退税
    {
      path: '/urate',
       component: urate,
       hidden: true
    },
    // 收货
    {
      path: '/utake',
       component: utake,
       hidden: true
    },
    // 结算汇总
    {
      path: '/uclosing',
       component: uclosing,
       hidden: true
    },
    // ??????????????????????????????
     // 第二个步骤条
     {
      path: '/ustpes2',
       component: ustpes2,
       hidden: true
    },
    // 验货出货
    {
      path: '/upayee',
       component: upayee,
       hidden: true
    },
    // 收款付款
    {
      path: '/upayee',
       component: upayee,
       hidden: true
    },
    // ***************************************************************************************************************************************************//
    
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


