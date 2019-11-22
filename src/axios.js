// //将引入axios库单独保存一个文件中
// //减少main.js 代码量
// //1:引入vue实例
import Vue from "vue"
// import axios from "axios"
// axios.defaults.withCredentials=true
// axios.defaults.baseURL="http://192.168.0.184:8004/"
// //5:将axios注册vue实例
// Vue.prototype.$axios = axios
// //6:在main.js 引入axios.js文件 
// //3:发送请求时保存session信息
// //2:引入axios库
import axios from 'axios'
import qs from 'qs'
// axios配置
//添加请求头
// axios.defaults.headers.common['Authentication-Token'] = window.localStorage.getItem('token');
// //4:设置请求基础路径
axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置post请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8' // 配置get请求头
axios.defaults.baseURL = 'http://ons.suipk.cn/main' // 配置接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {

  //判断是否存在token，如果存在将每个页面header都添加token
// if( window.localStorage.getItem('token')){
//   config.headers['token'] =token
//   // config.headers.Authentication=token
//   }
  // console.log('储存的token',window.localStorage.getItem('token'))
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    // 这里使用qs对数据进行处理，防止后台$_POST接收不到
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('错误的传参', 'fail')
  return Promise.reject(error)
})
 
Vue.prototype.$ajax = axios // 定义axios的全局变量