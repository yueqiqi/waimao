<!-- 数据统计 -->
<template>
<div class='data'>
  <div class="boxs d-flex">
    <div v-for="(item,i) in boxs" :key="i">
      <div class="box">
        <div class="d-flex">
          <div style="width:31px;height:31px;line-height:107px;margin-left:16px;">
            <img style="width:31px;height:31px;" :src="item.src" alt=""/>
          </div>
          <div class="title">{{item.title}}</div>
          <span class="eng">{{item.eng}}</span>
        </div>
        <div class="num">{{item.num}}</div>
      </div>
    </div>
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
boxs:[
  // 用户数量
  {
    src:require('../../../assets/waimao/index/usernum.png'),
    title:"用户总量",
    eng:"Total user",
    num:90,
  },
  // 订单总量
  {
    src:require('../../../assets/waimao/index/ordernum.png'),
    title:"订单总量",
    eng:"Total order",
    num:"",
  },
  // 进口订单数量
  {
    src:require('../../../assets/waimao/index/inorder.png'),
    title:"进口订单数量",
    eng:"import orders",
    num:80,
  },
  // 出口订单总量
  {
    src:require('../../../assets/waimao/index/outorder.png'),
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
  margin-right:30px;
}
.box{
width:390px;
height:180px;
background:rgba(255,255,255,1);
border-left:6px solid rgba(6,102,164,1);
margin-right:20px
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
</style>