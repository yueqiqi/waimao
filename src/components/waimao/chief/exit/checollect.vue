<!-- 结算汇总 -->
<template>
<div class='receiving'>
  <div class="receivingTitle">结算汇总</div>
  <div class="d-flex" style="margin-top:30px;">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <!-- 商品信息 -->
  <div style="display:flex;justify-content:space-between;margin-right:113px;margin-top:30px;">
  <div class="rtitle">出口业务结算汇总表</div>
  <div class="d-flex">
  <button @click="unload2" class="load d-flex"><div style="margin-left:7px;">导出表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../../assets/waimao/icon/load.png" alt=""></div></button>
  </div>
  </div>
  <div style="width:1522px;">
    <table>
      <thead>
        <td style="width:160px;">采购成本</td>
        <td style="width:160px;">销售金额</td>
        <td style="width:100px;">汇率</td>
        <td style="width:160px;">退税金额</td>
        <td style="width:100px;">运费</td>
        <td style="width:157px;">其他费用<span style="font-size:
12px;color:#999999">(银行费用等)</span></td>
        <td style="width:120px;">毛利润</td>
        <td style="width:556px;">备注</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i">
        <td>{{item.purchase}}</td>
        <td>{{item.sell}}</td>
        <td style="color:#0666A4">{{item.rate}}</td>
        <td style="color:#FF0000">{{item.tax}}</td>
        <td style="color:#0666A4">{{item.expense}}</td>
        <td style="color:#0666A4">{{item.othermoney}}</td>
        <td style="color:#FF0000">{{item.gross}}</td>
        <td style="color:#0666A4;border:0">{{item.other}}</td>
      </tbody>
    </table>
  </div>
  <div style="display:flex;justify-content:space-between;margin-right:113px;margin-top:60px;">
  <div class="rtitle">费用明细</div>
  <div class="d-flex">
  <button @click="load" class="load d-flex"><div style="margin-left:7px;">导出表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../../assets/waimao/icon/load.png" alt=""></div></button>
  </div>
  </div>
  <div style="width:1522px;">
    <table>
      <thead> 
        <td style="width:240px;">费用类型</td>
        <td style="width:240px;">费用金额</td>
        <td style="width:1040px;">备注</td>
      </thead>
      <tbody class="other">
        <tr>
          <td>代理费</td>
          <td>{{fee.consts}}</td>
          <td>{{fee.remark}}</td>
        </tr>
        <tr>
          <td>资金成本</td>
          <td>{{fee.consts2}}</td>
          <td>{{fee.remark2}}</td>
        </tr>
        <tr>
          <td>其他费用</td>
          <td>{{fee.consts3}}</td>
          <td>{{fee.remark3}}</td>
        </tr>
        <tr>
          <td style="font-weight:bold;border:0;">合计</td>
          <td style="border:0;font-weight:bold;text-align:center">{{all}}</td>
          <td style="border:0"></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 计算净利润 -->
  <div class="d-flex" style="margin-top:40px;">
    <div class="net">计算净利润</div>
    <div class="net2">{{net}}</div>
  </div>
  <!--  -->
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
  // 净利润
  net:"",
  // 其他费用
  all:"",
  fee:{
  remark3:"",
  //其他费用 
  consts3:"0",
  // 备注
  remark2:"",
  // 资金成本
  consts2:"4",
  // 备注
  remark:"",
  // 代理费用
  consts:"0",
  },
  
// /////////////////////////////////////////
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
  // 是否禁用
  dis:true,
  // table数据
  details:[
    {
      purchase:"100000",
      sell:"100000",
      rate:"0.1",
      tax:"10000",
      expense:"100",
      othermoney:"100",
      gross:"",
      other:"",
    },
    {
      purchase:"100000",
      sell:"100000",
      rate:"0.1",
      tax:"10000",
      expense:"100",
      othermoney:"100",
      gross:"",
      other:"",
    },
   
  ]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
  
},
//方法集合
methods: {
  // 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
  // 导出按钮
  unload2(){
    console.log("导出按钮")
  },
  // 费用明细
 load(){
   console.log("费用明细按钮")
 }
    
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  for(var i in this.details){
    if(this.details[i].other==""){
      this.details[i].other="-"
      continue
    }
  }

    for(var i in this.details){
      this.details[i].gross=parseInt(this.details[i].sell)+parseInt(this.details[i].tax)-parseInt(this.details[i].purchase)-parseInt(this.details[i].expense)-parseInt(this.details[i].othermoney)
  }
for(var m in this.details){
  var purchase = parseInt(this.details[m].purchase);
  var sell = parseInt(this.details[m].sell);
  var tax = parseInt(this.details[m].tax);
  var expense = parseInt(this.details[m].expense);
  var othermoney = parseInt(this.details[m].othermoney);
  var gross = parseInt(this.details[m].gross);

	var data1 = purchase.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = sell.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data3 = tax.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data4 = expense.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data5 = othermoney.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data6 = gross.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.details[m].purchase=data1
      this.details[m].sell=data2
      this.details[m].tax=data3
      this.details[m].expense=data4
      this.details[m].othermoney=data5
      this.details[m].gross=data6
      console.log("保留两位小数且有逗号"+data1,data2,data3,data4,data5,data6)
// 小数转为百分数
 var str=Number(this.details[m].rate*100).toFixed();
            str+="%";
            console.log("百分数"+str)
            this.details[m].rate=str
}
 this.all=parseInt(this.fee.consts)+parseInt(this.fee.consts2)+parseInt(this.fee.consts3)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {
  
}, //生命周期 - 更新之前
updated() {
}, //生命周期 - 更新之后
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
/* margin-top:32px; */
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
border-right:1px solid #fff; 
}
tbody td {
  text-align: center;
  height:40px;
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
.time{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.times{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.time+div{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-left:20px;
margin-top:1px;
}
.load{
   width:100px;
height:30px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0;
/* margin:auto 0;
margin-top:40px; */
}
/* 其他费用 */
.other>:nth-child(even){
  background:rgba(234,241,246,1);
}
tr :last-child{
  border:0;
}
/* 计算净利润 */
.net{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-weight:bold;
color:rgba(255,255,255,1);
}
.net2{
  width:160px;
height:46px;
background:rgba(237,237,237,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-weight:bold;
color:rgba(51,51,51,1);
margin-left:20px;
}
thead :last-child{border:0}
</style>