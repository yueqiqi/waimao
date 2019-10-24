<!-- 收货 -->
<template>
<div class='examine'>
  <div class="examineTitle">收货</div>
  <!-- 签订时间 -->
  <div class="d-flex">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <!-- 商品信息 -->
  <div style="margin-top:36px;margin-bottom:10px;" class="time">商品信息</div>
  <table style="width:1493px;">
    <thead>
      <td style="width:240px;">商品名称</td>
      <td style="width:90px;">规格型号</td>
      <td style="width:90px;">法定数量</td>
      <td style="width:150px;">商品编码</td>
      <td style="width:90px;">单位</td>
      <td style="width:100px;">已收货数量</td>
      <td style="width:110px;">剩余数量</td>
      <td style="width:110px;">本次收货数量</td>
      <td style="width:100px;">单价</td>
      <td style="width:100px;">申报金额</td>
      <td style="width:172px;">操作</td>
      <td style="width:130px;border:0">是否完结</td>
    </thead>
    <tbody v-for="(item,i) in details" :key="i">
      <td>{{item.title}}</td>
      <td>{{item.model}}</td>
      <td>{{item.num}}</td>
      <td>{{item.id}}</td>
      <td>{{item.unit}}</td>
      <td>{{item.outnum}}</td>
      <td>{{item.residue}}</td>
      <td>{{item.thisnum}}</td>
      <td>{{item.price}}</td>
      <td>{{item.money}}</td>
      <td>
        <button class="list" style="margin-left:5px;" @click="list(i)">明细</button>
      </td>
      <td :style="item.yon=='已完结'?'color:red':''" class="last">{{item.yon}}</td>
    </tbody>
  </table>
  <!-- 上传文件 -->
<!-- 提交状态改变 -->
<div>
  <div class="time" style="margin-bottom:28px;margin-top:30px;">验货报告</div>
  <ul class="el-upload-list el-upload-list--text" v-for="(item,i) in fileList2" :key="i">
    <li tabindex="0" class=" d-flex">
      <div style="color:rgba(6,102,164,1);margin-right:49px;">第{{item.num}}次验货报告</div>
      <router-link to="#" class="el-upload-list__item-name">
        <i class="el-icon-document">{{item.name}}</i>
      </router-link>
      <div class="d-flex" style="color:#333333">
        <div>审核人：</div>
        <div>{{item.user}}</div>
        <div>{{item.time}}/</div>
        <div>{{item.user2}}</div>
        <div>{{item.time2}}</div>
      </div>
    </li>
  </ul>
</div>
  <!-- =========================================================== -->
  <div class="tc" v-show="tc">
    <div class="alert">
      <div class="d-spb">
        <div class="time" style="padding-top:30px;">出货明细</div>
        <div @click="close" style="font-weight:0;padding-top:29px;padding-right:29px;color:rgba(51,51,51,1); cursor:default ">x</div>
      </div>
      <table style="margin-top:30px;border-bottom:2px solid #ccc;">
        <thead>
          <td style="width:172px;">出货次数</td>
          <td style="width:240px;">商品名称</td>
          <td style="width:90px;">规格型号</td>
          <td style="width:90px;">法定数量</td>
          <td style="width:150px;">商品编码</td>
          <td style="width:90px;">单位</td>
          <td style="width:100px;">已出货数量</td>
          <td style="width:110px;">剩余数量</td>
          <td style="width:110px;">本次出货数量</td>
          <td style="width:100px;">单价</td>
          <td style="width:100px;">申报金额</td>  
          <td style="width:130px;border:0">是否完结</td>
        </thead>
        <tbody v-for="(item,i) in details2" :key="i">
          <td>{{item.times}}</td>
          <td>{{item.title}}</td>
          <td>{{item.model}}</td>
          <td>{{item.num}}</td>
          <td>{{item.id}}</td>
          <td>{{item.unit}}</td>
          <td>{{item.outnum}}</td>
          <td>{{item.residue}}</td>
          <td>{{item.thisnum}}</td>
          <td>{{item.price}}</td>
          <td>{{item.money}}</td>
          <td style="border:0;">{{item.yon}}</td>
        </tbody>
      </table>
    </div>
  </div>
  <!-- =========================================================== -->
  <!--  -->
  <!-- examine -->
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
  // 提交隐藏
  files:true,
  // 验货
  fileList2:[
    {
      // 第几次验货
      num:"一",
      // 文件名字
      name:"王麻子验货报告.pdf",
      // 审核人
      user:"韩美娟",
      // 时间
      time:"2019-7-22",
      user2:"李总",
      time2:"2019-7-22"
    },
    {
      // 第几次验货
      num:"二",
      // 文件名字
      name:"王麻子验货报告.pdf",
      // 审核人
      user:"韩美娟",
      // 时间
      time:"2019-7-22",
      user2:"李总",
      time2:"2019-7-22"
    },
    {
      // 第几次验货
      num:"三",
      // 文件名字
      name:"王麻子验货报告.pdf",
      // 审核人
      user:"韩美娟",
      // 时间
      time:"2019-7-22",
      user2:"李总",
      time2:"2019-7-22"
    }
  ],
  // 上传文件
    // 上传文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},],
  details2:[
    {
      times:"第一次出货",
      title:"中国石油",
      model:"桶",
      num:100,
      id:"AS123456",
      unit:"吨",
      outnum:0,
      residue:110,
      thisnum:"20",
      price:"100",
      money:"100",
      yon:"未完结"
    },
    {
      times:"第二次出货",
      title:"中国石油",
      model:"桶",
      num:100,
      id:"AS123456",
      unit:"吨",
      outnum:0,
      residue:110,
      thisnum:"20",
      price:"100",
      money:"100",
      yon:"未完结"
    },
    {
      times:"第三次出货",
      title:"中国石油",
      model:"桶",
      num:100,
      id:"AS123456",
      unit:"吨",
      outnum:0,
      residue:110,
      thisnum:"20",
      price:"100",
      money:"100",
      yon:"未完结"
    },
  ],
  // 明细弹窗
  tc:false,
   // 商品信息
  details:[
    {
      title:"中国石油",
      model:"桶",
      num:100,
      id:"AS123456",
      unit:"吨",
      outnum:0,
      residue:110,
      thisnum:"",
      price:"1",
      money:"",
      yon:"未完结"
    },
    {
      title:"中国石油",
      model:"桶",
      num:100,
      id:"AS123456",
      unit:"吨",
      outnum:0,
      residue:110,
      thisnum:"50",
      price:"100",
      money:"100",
      yon:"已完结"
    }
  ],
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
  // 出现提示
  // 是否显示出货按钮
  show2:true,
  // 是否显示提交按钮
  show:false,
};
},
//监听属性 类似于data概念
computed: {

},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 
  // 是否上传成功
  success(){
    console.log("上传成功")
  },
  submitfile() {
        this.$refs.upload.submit();
        console.log("成功")
        setTimeout(()=>{
          var _this=this
          _this.files=false
        },3000)
      },
    // 删除文件
handleRemove(file, fileList) {
  console.log("删除文件")
        console.log(file, fileList);
      },
      // 点击文件列表中已上传的文件时的钩子
handlePreview(file) {
  console.log("查看")
        console.log(file);
      },
// 关闭遮罩按钮
close(){
  this.tc=false
},
  // 提交按钮
  sub(){
    console.log("提交")
    console.log(i)
  },
  // 出货按钮
  shiment(i){
    console.log(i)
  },
  // 明细按钮
      /***取消滑动限制***/
      // move(){
      //   var mo=function(e){e.preventDefault();};
      //   document.body.style.overflow='';//出现滚动条
      //   document.removeEventListener("touchmove",mo,false);
      // }
      // 禁止滚动
    stop(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
  list(i){
    console.log(i);
    this.stop()
    this.tc=true
  },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
// 弹框
for(var m in this.details2){
     
  var prices = parseInt(this.details2[m].price);
  var moneys = parseInt(this.details2[m].money);
	var data1 = moneys.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = prices.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.details2[m].money=data1
      this.details2[m].price=data2
      console.log("保留两位小数且有逗号"+data1,data2)
// 小数转为百分数
//  var str=Number(this.details[m].rate*100).toFixed();
//             str+="%";
//             console.log("百分数"+str)
//             this.details[m].rate=str

  }
  // 
  for(var m in this.details){
     
  var prices = parseInt(this.details[m].price);
  var moneys = parseInt(this.details[m].money);
	var data1 = moneys.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = prices.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.details[m].money=data1
      this.details[m].price=data2
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
/* 验货出货样式 */
.examine{
  overflow-x: hidden;
  /* height:100%; */
}
.examineTitle{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-top:30px;
margin-bottom:30px;
}
/* 签订时间 */
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
table{
  border-collapse: collapse
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
tbody td>input{
  height: 40px;;
  border:0;
  text-align: center;
  background: rgba(255,255,255,0);
  color:#0666A4
}
/* 出货按钮 */
.shipment{
  width:60px;
height:20px;
background:rgba(255,144,0,1);
border-radius:3px;
text-align: center;
line-height: 20px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0
}
/* 明细按钮 */
.list{
    width:60px;
height:20px;
background:rgba(0,113,48,1);
border-radius:3px;
text-align: center;
line-height: 20px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0;
}
.report{
  width:14px;
height:14px;
background:rgba(255,0,0,1);
text-align: center;
line-height: 14px;
color:#fff; 
border-radius: 50%;
font-size:8px;
margin-top:10px;
}
.reporttitle{
  width:260px;
height:30px;
background:rgba(255,255,255,1);
border:1px solid rgba(6,102,164,1);
border-radius:10px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,0,0,1);
text-align: center;
line-height: 30px;
margin-left:10px;
}
.last{
  border:0
}
.tc{
  /* width:100%;height:100%; */
 position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
}
.alert{
  width:1553px;
/* height:280px; */
background:rgba(255,255,255,1);
box-shadow:0px 0px 18px 0px rgba(204,204,204,1);
border-radius:10px;
position: relative;
top:50%;
margin-top:-140px;
left:50%;
margin-left:-776.5px;
padding-left:30px;
padding-bottom:49px;
}
/* 上传按钮 */
.mybtn{
  width:100px;
height:30px;
background:rgba(255,102,0,1);
border-radius:10px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
text-align: center;
line-height: 30px;
margin-top:19px;
}
.upload{
  width:100px;
  height:30px;
  background:rgba(154,195,220,1);
  border-radius:10px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  border:0;
  }
  /deep/ .el-upload-list__item{
  width:300px;
}
/* 上传贸易合同文字 */
.uptitle{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
padding-top:34px;
}
ul li {
  list-style: none;
}
</style>