<!-- 缴税退税 -->
<template>
<div class='receiving'>
  <div class="receivingTitle">缴税退税</div>
  <div class="d-flex" style="margin-top:30px;">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <!-- 商品信息 -->
  <div class="rtitle">商品信息</div>
  <div>
    <table>
      <thead>
        <td style="width:130px;">报关单号/发票号</td>
        <td style="width:213px;">商品名称</td>
        <td style="width:130px;">实际出货数量</td>
        <td style="width:130px;">申报金额</td>
        <td style="width:130px;">关税</td>
        <td style="width:130px;">增值税</td>
        <td style="width:130px;">其他税费</td>
        <td style="width:521px;border:0">备注</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.num}}</td>
        <td style="color:#0666A4">{{item.money}}</td>
        <td style="color:#0666A4">{{item.tariff}}</td>
        <td style="color:#0666A4;">{{item.added}}</td>
        <td style="color:#0666A4;">{{item.othertax}}</td>
        <td style="color:#0666A4;border:0">{{item.other}}</td>
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
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
  // 是否禁用
  dis:true,
  // table数据
  details:[
    {
      id:1,
      title:"中国石油",
      num:200,
      money:100,
      tariff:100,
      added:100,
      othertax:100,
      other:"",
    },
    {
      id:2,
      title:"中国石油",
      num:200,
      money:"100",
      tariff:"100",
      added:"100",
      othertax:"100",
      other:"",
    },
  ]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
// toThousands(num) {
//     var num = (num || 0).toString(), result = '';
//     while (num.length > 3) {
//         result = ',' + num.slice(-3) + result;
//         num = num.slice(0, num.length - 3);
//     }
//     if (num) { result = num + result; }
//     return result;
// },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  for(var i in this.details){
    if(this.details[i].other==""){
      this.details[i].other="-"
      continue
    }
  }
    
    for(var m in this.details){
  var moneys = parseInt(this.details[m].money);
  var tariffs = parseInt(this.details[m].tariff);
  var addeds = parseInt(this.details[m].added);
  var othertaxs = parseInt(this.details[m].othertax);

	var data1 = moneys.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = tariffs.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data3 = addeds.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data4 = othertaxs.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.details[m].money=data1
      this.details[m].tariff=data2
      this.details[m].added=data3
      this.details[m].othertax=data4
      console.log("保留两位小数且有逗号"+data1,data2,data3,data4)
// 小数转为百分数
//  var str=Number(this.details[m].rate*100).toFixed();
//             str+="%";
//             console.log("百分数"+str)
//             this.details[m].rate=str
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
border-right:1px solid #fff; 
}
tbody td {
  text-align: center;
  height:40px;
  /* border-right:1px solid #ccc;  */
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
.time+div{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-left:20px;
margin-top:1px;
}
</style>