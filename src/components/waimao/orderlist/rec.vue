<!-- 订单回收列表 -->
<template>
<div class='order'>
  <div class="shaixuan d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/saixuan.png" alt=""></div>
    <div class="title">筛选查询</div>
    <!-- 输入搜索 -->
    <div class="d-flex" style="height:36px;margin:auto 0;">
      <div class="search">输入搜索</div>
      <div class="input"><el-input placeholder="用户名/联系人" v-model="searchuser" clearable></el-input></div>
    </div>
    <!-- 联系电话 -->
    <div class="d-flex" style="height:36px;margin:auto 0;">
      <div class="search">联系电话</div>
      <div class="input"><el-input placeholder="请输入电话号码" v-model="searchphone" clearable></el-input></div>
    </div>
    <!-- 时间筛选 -->
    <div class="d-flex" style="height:36px;margin:auto 0;">
      <div class="search">加入时间</div>
      <div class="input"><el-date-picker v-model="stime" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker></div>
      <div style="font-size:16px;font-weight:400;color:rgba(51,51,51,1);line-height:36px;margin-left:10px;margin-right:10px;">至</div>
      <div style="margin-left:0px;" class="input"><el-date-picker v-model="etime" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker></div>
    </div>
    <!-- 查询按钮 -->
    <button class="btn mybtn" @click="search" :disabled="mybtn" :style="(searchuser==''&&searchphone==''&&(stime==''||etime==''))?'background:rgba(154,195,220,1)':''"  >查询结果</button>
  </div>
<!--  -->
<!-- 筛选详情 -->
    <div class="detail">
      <div class="d-spb">
        <div class="d-flex t1">
          <div><img class="icon" src="../../../assets/waimao/icon/saixuan2.png" alt=""></div>
          <div class="title2">数据列表</div>
          <div class="title3">订单总数：</div>
          <div class="all">{{all}}</div>
        </div>
        <div style="margin-right:60px;margin-top:19px;" class="d-flex">
          <!-- 状态选择 -->
          <div class="d-flex">
            <div style="color:#333;font-weight:400;line-height:27px;margin-right:10px;">状态选择</div>
            <el-select v-model="value" clearable placeholder="请选择" @change="statu">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
         
        </div>
      </div>
      <!-- 分页详情 -->
      <div style="margin-left:21px;margin-top:22px;">
        <table>
          <tr class="ths">
            <td style="height:40px;width:80px;background:rgba(237,237,237,1);">编号</td>
            <td style="height:40px;width:80px;background:rgba(237,237,237,1);">业务类型</td>
            <td style="height:40px;width:120px;background:rgba(237,237,237,1);">委托方</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">联系人</td>
            <td style="height:40px;width:120px;background:rgba(237,237,237,1);">联系电话</td>
            <td style="height:40px;width:130px;background:rgba(237,237,237,1);">采购合同总金额</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">付款方式</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">目的港</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">交货日期</td>
            <td style="height:40px;width:180px;background:rgba(237,237,237,1);">制定代贷信息与报关信息</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">其他要求</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">备注</td>
            <td style="height:40px;width:95px;background:rgba(237,237,237,1);">订单状态</td>
            <td style="height:40px;width:210px;background:rgba(237,237,237,1);">操作</td>
          </tr>       
        </table>
        <table class="table">
          <tr v-for="(item,i) in lists" :key="i" data-id="i">
            <!-- 编号 -->
            <td style="height:40px;width:81px;">{{item.id}}</td>
            <!-- 业务类型 -->
            <td style="height:40px;width:81px;">{{item.type}}</td>
            <!-- 委托方 -->
            <td style="height:40px;width:121px;">{{item.uname}}</td>
            <!-- 联系人 -->
            <td style="height:40px;width:91px;">{{item.peo}}</td>
            <!-- 联系电话 -->
            <td style="height:40px;width:121px;">{{item.phone}}</td>
            <!-- 采购合同总金额 -->
            <td style="height:40px;width:131px;">{{item.allmoney}}</td>
            <!-- 付款方式 -->
            <td style="height:40px;width:91px;">{{item.pay}}</td>
            <!-- 目的港 -->
            <td style="height:40px;width:91px;">{{item.des}}</td>
            <!-- 交货日期 -->
            <td style="height:40px;width:91px;">{{item.date}}</td>
            <!-- 制定代贷信息与报关信息 -->
            <td style="height:40px;width:181px;">{{item.dd}}</td>
            <!-- 其他要求 -->
            <td style="height:40px;width:91px;">{{item.other}}</td>
            <!-- 备注 -->
            <td style="height:40px;width:91px;">{{item.rem}}</td>
            <!-- 订单状态 -->
            <td style="height:40px;width:96px;">{{item.statu}}</td>
            <!-- 操作 -->
            <td style="height:40px;width:211px;">
              <button class="btn look" @click="look(i)">查看</button>
              <button class="btn set" style="background:#E6B764" @click="back(i)">撤销</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!--  -->
    <!-- 分页功能 -->
    <div class="page-bar">
      <ul class="ul">
        <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
        <li v-if="cur==1"><a class="banclick">上一页</a></li>
        <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}" :key="">
         <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li v-if="cur!=allpage"><a v-on:click="cur++,pageClick()">下一页</a></li>
        <li v-if="cur == allpage"><a class="banclick">下一页</a></li>
        <li><a>共<i>{{allpage}}</i>页</a></li>
        <!-- 输入数字跳转 -->
         <div class="jumpbox">
           <div style="float:left;line-height:34px;color:rgb(51,51,51);font-size:14px;margin-right:10px;">到第</div>
		      <input type="number" class="jumppage" />
	      	<a class="jumpbtn" v-on:click="pageSkip()">确定</a>
	      </div>
        <!--  -->
      </ul>
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
  // delusers:[],
  // 业务选择
  type:"全部业务",
  // 状态选择
   options: [
        {
          value:"全部状态",
          label:"全部状态"
        },
        {
          value: '订单准入',
          label: '订单准入'
        }, {
          value: '签订合同',
          label: '签订合同'
        }, {
          value: '验货出货',
          label: '验货出货'
        }, {
          value: '收款付款',
          label: '收款付款'
        }, {
          value: '报关运输',
          label: '报关运输'
        }, {
          value: '缴税退税',
          label: '缴税退税'
        }, {
          value: '结算汇总',
          label: '结算汇总'
        }],
        value: '全部状态',
  // 888888888888888888888888888888888888888888888888
  allpage: 10, //总页数
  cur: 1,//当前页码
  totalPage: 0,//当前条数
  // 888888888888888888888888888888888888888888888888
  // 列表
  lists:[
    // 第一个用户
    {
      id:"01222",
      type:"进口业务",
      uname:"仰光强大",
      peo:"张三",
      phone:13500000000,
      allmoney:"500万",
      pay:"电汇",
      des:"欧洲港",
      date:"2019-05-20",
      dd:"是",
      other:"",
      rem:"",
      statu:"订单准入"
    },
    // 第二个用户
    {
      id:"9527",
      type:"进口业务",
      uname:"仰光强大",
      peo:"张三",
      phone:13500000000,
      allmoney:"500万",
      pay:"电汇",
      des:"欧洲港",
      date:"2019-05-20",
      dd:"是",
      other:"",
      rem:"",
      statu:"订单准入"
    },
    // 第三个用户
    {
      id:"01222",
      type:"进口业务",
      uname:"仰光强大",
      peo:"王麻子",
      phone:13500000000,
      allmoney:"500万",
      pay:"电汇",
      des:"欧洲港",
      date:"2019-05-20",
      dd:"是",
      other:"",
      rem:"",
      statu:"订单准入"
    },
    // 第四个用户
    {
      id:"9527",
      type:"进口业务",
      uname:"仰光强大",
      peo:"李四",
      phone:13500000000,
      allmoney:"500万",
      pay:"电汇",
      des:"欧洲港",
      date:"2019-05-20",
      dd:"是",
      other:"",
      rem:"",
      statu:"订单准入"
    },
  ],
  // 用户总数
  all:"300",
  // 
  pickerOptions: {
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
  // 是否禁用
mybtn:true,
// 起始时间
  stime:"",
  // 结束时间
  etime:"",
  // 搜索电话号码保存
  searchphone:"",
  // 搜索用户名保存
  searchuser:"",
};
},
//监听属性 类似于data概念
computed: {
  //分页
indexs: function(){
var left = 1;
var right = this.allpage;
var ar = [];
if(this.allpage>= 5){
if(this.cur > 3 && this.cur < this.allpage-2){
left = this.cur - 2
right = this.cur + 2
}else{
if(this.cur<=3){
left = 1
right = 5
}else{
right = this.allpage
left = this.allpage -4
}
}
}
while (left <= right){
ar.push(left)
left ++
}
return ar
},

},
//监控data中的数据变化
watch: {

},
//方法集合
methods: {
  // 状态选择
  statu(opt){
    console.log(opt)
  },
  bus(dat){
    console.log(dat)
  },
 
   // 888888888888888888888888888888888888888888888888888888888888
  pageSkip(){
			var maxPage = this.allpage  ;
			var skipPage = Number(document.getElementsByClassName("jumppage")[0].value);
			console.log(typeof skipPage);
			if(!skipPage){
				alert("请输入跳转页码");
				return;
			}else if(skipPage<1 || skipPage>maxPage){
				alert("您输入的页码超过页数范围了！");
				return;
			}else{
				//this.cur=skipPage;
				this.btnClick(skipPage);
				this.pageClick();
			}
		},
  //请求数据
// dataListFn: function(index){
// this.$axios.get("http://127.0.0.1:8090/demand/selectListByPage", 
// {
// params:{
// page: index,
// limit:'10',
// state: 0
// }
// }).then((res) => {
// if(res.data.message == "success"){
// this.dataList=[];
// for(let i=0;i<res.data.data.length;i++){
// this.dataList.push(res.data.data[i])
// }
// this.all = res.data.totalPage;//总页数
// this.cur = res.data.pageNum;
// this.totalPage = res.data.totalPage;
// }

// });
// },
//分页
btnClick: function(data){//页码点击事件
if(data != this.cur){
this.cur = data 
}
//根据点击页数请求数据
// this.lists(this.cur.toString());
console.log("点击页码这是第"+this.cur+"页")
},
pageClick: function(){
//根据点击页数请求数据
// this.dataListFn(this.cur.toString());
console.log("这是第"+this.cur+"页")
},  


  // 888888888888888888888888888888888888888888888888888888888888
  // 添加用户
  add(){
    // this.lists.push(
    //   {
    //   id:"05",
    //   usertype:"中方客户",
    //   uname:"添加用户",
    //   com:"小红花贸易有限公司",
    //   peo:"张三",
    //   phone:13500000000,
    //   email:"123456789@qq.com",
    //   address:"西安",
    //   jointime:"2019-05-20",
    //   }
    // )
    this.$router.push({
      path:'/adduser',
      query:{
        id:1
      }
    })
  },
  // 查看
  look(i){
    console.log(this.lists[i])
    console.log(i)
    console.log("查看对应订单"+i)
  },
  // 编辑
  set(i){
    console.log(i)
    // this.lists.sort(function(a,b){return (b-a)})
    // 数组的修改
    // this.lists.splice(i,1,{
    //   id:"100",
    //   usertype:"中方客户",
    //   uname:"添加用户",
    //   com:"小红花贸易有限公司",
    //   peo:"张三",
    //   phone:13500000000,
    //   email:"123456789@qq.com",
    //   address:"西安",
    //   jointime:"2019-05-20",
    //   })
    var userName=this.lists[i].uname
    this.$router.push({
      path:'/setuser',
      query:{
        userName,
        id:1,
      }
    })
  },
  // 回收
  back(i){
    var delusers= JSON.parse(localStorage.getItem("deluser"));
    var dm=[]
    dm.push(delusers)
    // this.delusers==[delusers]
    console.log("撤销"+i)
    var local=this.lists[i]
    console.log("需要撤销的数据")
    console.log(local)
    // var m={a:1,b:2,c:3}
    localStorage.setItem("deluser",JSON.stringify(local))
    // localStorage.setItem("deluser",JSON.stringify(m))
  },
  // 查询结果
  search(){
    console.log("联系人"+this.searchuser)
    console.log("电话号码"+this.searchphone)
    console.log("开始时间"+this.stime)
    console.log("结束时间"+this.etime)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
var _this=this
  for(var i in this.lists){
    // console.log(this.lists[i].rem)
    // console.log(i)
    if(this.lists[i].rem==""){
      this.lists[i].rem="-"
      continue
    }
  }
  for(var i in this.lists){
    // console.log(this.lists[i].rem)
    // console.log(i)
    if(this.lists[i].other==""){
      this.lists[i].other="-"
        continue
    }
  }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  
},
beforeCreate() {

}, //生命周期 - 创建之前
beforeMount() {
  
}, //生命周期 - 挂载之前
beforeUpdate() {
  
}, //生命周期 - 更新之前
updated() {
   console.log(this.searchuser,this.searchphone)
  if(this.searchuser==''&&this.searchphone==''&&(this.stime==''||this.etime=='')){
    this.mybtn=true
  }else{this.mybtn=false}
  
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.top{
  width:1689px;height:50px;background:rgba(255,255,255,1);
  margin-top:1px;
  margin-left:-30px;
}
/* 筛选查询 */
.shaixuan{
  background:#fff;
  width:1644px;height:70px;
  margin-top:21px;
  border-left:6px solid rgba(6,102,164,1);
}
.img{
  width:31px;height: 31px;margin:auto 0;
  margin-left:16px;
}
.title{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:70px;
  margin-left:10px;
}
/* 输入搜索 */
.search{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin-left:41px;
  line-height: 36px;
}
.order /deep/ .el-input__inner{
  width:150px;
  height:30px;
  background:rgba(237,237,237,1);
  border-radius:10px;
  }
.input{
  margin-left:20px;
  margin-top:2px;
}
.order /deep/ el-input__suffix{
  /* display:none!important; */
  line-height:30px;
}
.order /deep/ .el-input__icon{
  line-height:30px;
}
.order /deep/ .el-date-editor.el-input{
  width:150px;
}
/* 查询结果 */
.mybtn{
  width:90px;
  height:30px;
  border-radius:10px;
  line-height: 30px;
  color:#fff;
  font-size:14px;
  font-weight: 400;
  margin:auto 0;
  margin-left:20px;
}
/* 筛选详情 */
.t1{
  padding-top:19px;
  margin-left:16px;
  height:32px;
}
.detail{
  width:1650px;
  height:798px;
  background:rgba(255,255,255,1);
  margin-top:10px;
}
.title2{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  margin-left:10px;
  line-height: 32px;
}
.title3{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  margin-left:41px;
  line-height: 32px;
}
/* 用户总数 */
.all{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:#0666A4;
  line-height: 35px;
}
/* 添加新客户 */
/* 图标 */
.addimg{
  width:10px;height:10px;
  margin-right:9px;
}
.add{
  width:110px;
  height:30px;
  background:rgba(154,195,220,1);
  border-radius:10px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1)
  /* line-height:30px; */
}
/* 表单 */
.ths td{
  border-right:1px solid #fff;
  line-height: 40px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  text-align: center;
}
tr td{
  text-align: center;
  color:rgba(102,102,102,1);
  word-break:keep-all;/* 不换行 */
  white-space:nowrap;overflow: hidden;text-overflow:ellipsis; 
  /* 省略号 */
}
/* 查看 */
.look{
  width:60px;
  height:20px;
  background:rgba(4,110,255,1);
  border-radius:3px;
  line-height: 20px;
  color:#fff;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
}
.set{
  width:60px;
  height:20px;
  background:rgba(255,60,0,1);
  border-radius:3px;
  line-height: 20px;
  color:#fff;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  margin-left:5px;
}
.table>:nth-child(even){
background:rgba(234,241,246,1);
}
/* ******************************************************************************************************************* */
/*分页*/
.page-bar{
/* margin:0 auto; */
margin-top: 29px;
margin-left:507px;
}
.ul,.ul li{
margin: 0px;
padding: 0px;
}
li{
list-style: none
}
.page-bar li:first-child>a {
margin-left: 0px
}
.page-bar a{
border: 1px solid #ddd;
text-decoration: none;
position: relative;
float: left;
padding: 6px 12px;
margin-left: -1px;
line-height: 1.42857143;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
cursor: pointer;
margin-right: 20px;
border-radius:10px;
}
.page-bar a:hover{
background-color: #eee;  
}
.page-bar a.banclick{
cursor:not-allowed;
}
.page-bar .active a{
color: #fff;
cursor: default;
background-color: rgba(6,102,164,1);
border-color: rgba(6,102,164,1);
border-radius:10px;
}
.page-bar i{
font-style:normal;
color: rgba(51,51,51,1);
margin: 0px 4px;
font-size: 14px;
font-weight:400;
}
/* 输入跳转 */
.jumpbox .jumppage{
  width:50px;
height:30px;
background:rgba(255,255,255,1);
border-radius:10px;
  float: left;
  border:0;
  padding-left:12px;
  text-align: center;
  line-height: 30px;
  }
.jumpbox .jumpbtn {cursor: pointer; margin-left: 10px;
background:rgba(6,102,164,1);
border-radius:10px;
color:#fff;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
/* line-height: 30px; */
text-align: center;
}
.jumpbtn:hover{
  background:rgba(6,102,164,1)!important;
}
</style>