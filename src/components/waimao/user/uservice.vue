<!-- 客服列表 -->
<template>
<div class='uservice'>
  <div class="adduser d-flex">
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/usernum.png" alt=""></div>
      <div class="title">客服列表</div>
  </div>
  <div class="gaine">
    <table>
      <thead>
        <td>订单号</td>
        <td>订单类型</td>
        <td>业务经理</td>
        <td>联系电话</td>
      </thead>
      <tbody v-for="(form,i) in form" :key="i">
        <td>{{form.num}}</td>
        <td>{{form.type}}</td>
        <td>{{form.manager}}</td>
        <td>{{form.phone}}</td>
      </tbody>
    </table>
  </div>
  <!-- uservide -->
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
  form:[
    {
      // 订单号
      num:"ADSF456635",
      // 订单类型
      type:"进口业务",
      // 业务经理
      manager:"王麻子",
      // 电话号码
      phone:13500000000
    },
    {
      // 订单号
      num:"ADSF456635",
      // 订单类型
      type:"进口业务",
      // 业务经理
      manager:"李四",
      // 电话号码
      phone:13500000000
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

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
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
.adduser{
  background:#fff;
  width:1650px;height:70px;
  margin-top:21px;
  border-left:6px solid rgba(6,102,164,1);
}
.img{
  width:31px;height: 31px;margin:auto 0;
  margin-left:10px;
}
.title{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:70px;
  margin-left:10px;
}
/* 盒子 */
.gaine{
  width:1650px;
  height:859px;
  background: #fff;
  margin-top:10px;
  padding-top:40px;
  overflow-y:auto;
  padding-left:50px;
}
table thead td{
  width:382px;
  background:#EDEDED;
  text-align: center;
  height:40px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  border-right:1px solid #fff;
  color:#333333
}
tbody td{
  text-align: center;
  height:40px;
  color:#666666
}
table>:nth-child(odd){
  background:#EAF1F6;
}
</style>