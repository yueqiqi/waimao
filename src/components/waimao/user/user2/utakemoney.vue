<!-- 收款付款 -->
<template>
<div class='receiving'>
  <div class="receivingTitle">收款付款</div>
  <!-- 商品信息 -->
  <div class="rtitle">商品信息</div>
  <div>
    <table>
      <thead>
        <td style="width:397px;">商品名称</td>
        <td style="width:160px;">商品数量</td>
        <td style="width:200px;">应收款</td>
        <td style="width:200px;">已收款</td>
        <td style="width:200px;">应付款</td>
        <td style="width:200px;">已付款</td>
        <td style="width:130px;border:0">结算完结</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i">
        <td>{{item.title}}</td>
        <td>{{item.num}}</td>
        <td>{{item.gat}}</td>
        <td>{{item.has}}</td>
        <td>{{item.pay}}</td>
        <td>{{item.payed}}</td>
        <td style="border:0;">{{item.close}}</td>
      </tbody>
    </table>
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
  // 是否禁用
  dis:true,
  // table数据
  details:[
    {
      id:1,
      title:"中国石油",
      num:"200",
      gat:"10000",
      has:"0",
      pay:"10000",
      payed:"0",
      close:"是",
    },
    {
      id:2,
      title:"中国石油",
      num:"200",
      gat:"10000",
      has:"0",
      pay:"10000",
      payed:"0",
      close:"是",
    }
  ]

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
  for(var m in this.details){
  var gat = parseInt(this.details[m].gat);
  var pay = parseInt(this.details[m].pay);

	var data1 = gat.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = pay.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.details[m].gat=data1
      this.details[m].pay=data2
      console.log("保留两位小数且有逗号"+data1,data2)
}
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
.receivingTitle{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
text-align: center;
line-height: 46px;
margin-top:30px;
}
/* 商品信息 */
.rtitle{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
margin-top:32px;
margin-bottom:16px;
}
table>thead td{
  height:40px;
background:rgba(237,237,237,1);
font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
text-align: center;
border-right:1px solid #ccc; 
}
tbody td {
  text-align: center;
  height:40px;
  border-right:1px solid #ccc; 
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(102,102,102,1);
}
table>:nth-child(odd){
  background:rgba(234,241,246,1);
}
.set{
  width:60px;
height:20px;
background:rgba(255,60,0,1);
border-radius:3px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height:20px;
text-align: center;
border:0
}
.sub{
  width:60px;
height:20px;
background:rgba(183,77,238,1);
border-radius:3px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height:20px;
text-align: center;
border:0;
margin-left: 5px;
}
tbody /deep/ .el-input__inner{
  height: 40px;;
  border:0;
  text-align: center;
  background: rgba(255,255,255,0);
  color:#0666A4
}
tbody /deep/ .el-input.is-disabled .el-input__inner{
  background:rgba(0,0,0,0)
}
</style>