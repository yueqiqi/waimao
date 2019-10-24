<!-- 用户端首页 -->
<template>
<div class='data'>
  <!-- 订单状态/消息通知 -->
  <div class="d-flex">
    <!-- 订单状态 -->
   
    <!-- 消息通知 -->
    <div class="mes">
      <div class="d-flex">
        <div style="width:31px;height:31px;line-height:107px;margin-left:16px;"><img style="width:31px;height:31px;" src="../../../assets/waimao/icon/mes.png" alt=""></div>
        <div class="title">消息通知</div>
        <div class="eng">Notification</div>
        <div class="line"></div>
      </div>
    <!-- 文字信息 -->
    <div  class="a" >
      <div v-for="(item,i) in mes" :key="i" style="width:174px;">
        <router-link :to="item.link" style="width:174px;">  
          <div class="d-flex" style="margin-left:57px;height:20px;width:174px;">
            <div class="point"></div>
            <div class="font">{{item.font}}</div>
          </div>        
        </router-link>
      </div>
    </div>
  </div>
    <!-- =================== -->
    <!-- 广告图 -->
  </div>
    <div class="ad">
      <img :src="ad" alt=""> 
    </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  ad:require("../../../assets/waimao/index/ad.png"),
  // 消息
  mes:[
    {
      id:"0",
      font:"您有新的委托订单待处理",
      link:"/demo"
    },
    {
      id:"1",
      font:"您有新的委托订单待处理",
      link:"/demo"
    },
    {
      id:"2",
      font:"您有新的委托订单待处理",
      link:"/demo"
    },
    {
      id:"3",
      font:"您有新的委托订单待处理",
      link:"/demo"
    },
    {
      id:"4",
      font:"您有新的委托订单待处理",
      link:"/demo"
    }
  ],
  // 订单状态
  status:[
    {
      link:"/demo",
      title:"用户下单",
      num:10
    },
    {
      link:"/demo2",
      title:"订单准入",
      num:8
    },
    {
      link:"/demo",
      title:"合同签订",
      num:10
    },
    {
      link:"/demo2",
      title:"验货出货",
      num:8
    },
  ],
   status2:[
    {
      link:"/demo2",
      title:"收款付款",
      num:10
    },
    {
      link:"/demo2",
      title:"报关运输",
      num:8
    },
    {
      link:"/demo2",
      title:"缴税退税",
      num:10
    },
    {
      link:"/demo",
      title:"结算汇总",
      num:8
    },
  ],
  // 、、、、、、、、、、、、、、
boxs:[
  // 用户数量
  {
    link:"demo",
    src:require('../../../assets/waimao/icon/usernum.png'),
    title:"用户总量",
    eng:"Total user",
    num:90,
  },
  // 订单总量
  {
    link:"demo",
    src:require('../../../assets/waimao/icon/ordernum.png'),
    title:"订单总量",
    eng:"Total order",
    num:"",
  },
  // 进口订单数量
  {
    link:"demo",
    src:require('../../../assets/waimao/icon/inorder.png'),
    title:"进口订单数量",
    eng:"import orders",
    num:80,
  },
  // 出口订单总量
  {
    link:"demo",
    src:require('../../../assets/waimao/icon/outorder.png'),
    title:"出口订单数量",
    eng:"Export orders",
    num:120,
  }
],

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.boxs[1].num=this.boxs[2].num+this.boxs[3].num;
console.log(this.boxs)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {
  
}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.data{
  margin-top:32px;
}
.boxs{
  display: flex;
  justify-content: space-between;
  /* margin-left:30px; */
  /* margin-right:30px; */
}
.box{
width:384px;
height:180px;
background:rgba(255,255,255,1);
border-left:6px solid rgba(6,102,164,1);
margin-right:23px
}
/* 标题 */
.title{
  font-size:24px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:87px;
margin-left:9px;
}
/* 英文 */
.eng{
font-size:16px;
font-family:Microsoft YaHei;
font-weight:300;
color:rgba(51,51,51,1);
line-height:97px;
margin-left:9px;
}
/* 数量 */
.num{
font-size:70px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
line-height:77px;
margin-left:57px;
}
/* 订单状态*/
.orderstate,.mes{
  width:803px;height:310px;
  background:rgba(255,255,255,1);
  margin-top:31px;
}
.line{
  width:1286px;
height:1px;
background:rgba(179,179,179,1);
margin-top:53px;
margin-left:21px;
}
.statusBoxs{
  width:185px;
height:90px;
background:rgba(154,195,220,1);
border-radius:10px;
}
/* 标题 */
.stitle{
  padding:10px 0 0 19px;
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
}
/* 数量 */
.snum{
  padding-left:18px;
  font-size:40px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
}
.mm>:nth-child(2n){
background:rgba(177,154,220,1)!important;
}
/* 消息通知 */
.mes{
  /* margin-left:24px; */
  width:1630px;
}
/* 小红点 */
.point{
  width:8px;
height:8px;
background:rgba(230,39,39,1);
border-radius:50%;
margin:auto 0;
}
.font{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
margin-left:11px;
line-height: 20px;
}
.a>:nth-child(1)~div{
  margin-top:17px;
}
/* 广告图 */
.ad{
  margin-top:30px;
}
.ad img{
width:1630px;
height:418px;
}
</style>