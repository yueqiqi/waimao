<!-- 员工列表-业务经理 -->
<template>
<div class='emp'>
  <!-- 权限管理 -->
  <div class="adduser d-spb">
    <div class="d-flex"> 
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/ordernum.png" alt=""></div>
      <div class="title">员工列表</div>
    </div>
    <button @click="ref" class="ref"><img style="width:13px;height:13px;margin-right:10px;" src="../../../assets/waimao/icon/ref.png" alt="">刷新</button>
  </div>
<!-- =========================================================== -->
  <div class="gaine">

    <div class="d-spb" style="">
     <div class="d-flex t1">
          <div><img class="icon" src="../../../assets/waimao/icon/saixuan2.png" alt=""></div>
          <div class="title2">数据列表</div>
        </div>
        <div style="margin-right:60px;margin-top:19px;" class="d-flex">
          <!-- 状态选择 -->
          <div class="d-flex">
            <div style="color:#333;font-weight:400;line-height:27px;margin-right:10px;">角色选择</div>
            <el-select v-model="value" clearable placeholder="请选择角色" @change="statu">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <!-- 按钮 -->
          <div style="margin-left:20px;">
            <button class="btn add" @click="add"> <img class="addimg" src="../../../assets/waimao/icon/add.png" alt="">添加新员工</button>
          </div>
        </div>
        </div>
     <!-- 表格 -->
     <table>
       <thead>
         <td style="width:120px;">编号</td>
         <td style="width:200px;">员工职位</td>
         <td style="width:200px;">员工姓名</td>
         <td style="width:200px;">联系电话</td>
         <td style="width:200px;">负责客户数</td>
         <td style="width:200px;">负责订单数</td>
         <td style="width:443px;">操作</td>
       </thead>
       <tbody v-for="(item,i) in details" :key="i">
         <td>{{item.id}}</td>
         <td>{{item.role_id==1?'客户':(item.role_id==2?'业务经理':(item.role_id==3?'总监':(item.role_id==4?'总经理':'未知')))}}</td>
         <td>{{item.name}}</td>
         <td>{{item.mobile}}</td>
         <td>{{item.user_num}}</td>
         <td>{{item.order_num}}</td>
         <td>
           <button class="btn look" @click="look(i)">删除</button>
           <button class="btn set" @click="set(i)">编辑</button>
         </td>
       </tbody>
     </table>
    <!-- gaine -->
  </div>
  <!--  -->
   <!-- 分页功能 -->
    <!-- <div class="page-bar">
      <ul class="ul">
        <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
        <li v-if="cur==1"><a class="banclick">上一页</a></li>
        <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}" :key="">
         <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li v-if="cur!=allpage"><a v-on:click="cur++,pageClick()">下一页</a></li>
        <li v-if="cur == allpage"><a class="banclick">下一页</a></li>
        <li><a>共<i>{{allpage}}</i>页</a></li>
     
         <div class="jumpbox">
           <div style="float:left;line-height:34px;color:rgb(51,51,51);font-size:14px;margin-right:10px;">到第</div>
		      <input type="number" class="jumppage" />
	      	<a class="jumpbtn" v-on:click="pageSkip()">确定</a>
	      </div>
        
      </ul>
    </div> -->
  <!-- emp -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
inject: ['reload'],
data() {
//这里存放数据
return {
    // 888888888888888888888888888888888888888888888888
  allpage: 10, //总页数
  cur: 1,//当前页码
  totalPage: 0,//当前条数
  // 888888888888888888888888888888888888888888888888
  // 员工列表
  details:[
  ],
  // 选项框
  options: [
      {
        value:'全部角色',
        lable:-1
      },
      {
        value:'业务经理',
        lable:2
      },
      {
        value:'销售总监',
        lable:3
      },
      {
        value:'总经理',
        lable:4
      }
  ],
        value: '',
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
watch: {},
//方法集合
methods: {
  // 删除
  look(i){
    console.log(i)
     this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this=this
        _this.details.splice(i,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
    // var userName=this.details[i]
    this.$router.push({
      path:'/lookuser',
      query:{
        // userName,
        id:1,
      }
    })
  },
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
      path:'/addemp',
      // query:{
      //   id:1
      // }
    })
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
  ref(){
    // 刷新
    this.reload()
    console.log("刷新")
  },
  // 状态选择

  statu(opt){
    console.log('选择的分类',opt)
    var role_id
    if(opt=='业务经理'){
      role_id=2
    }else if(opt=='销售总监'){
      role_id=3
    }else if(opt=='总经理'){
      role_id=4
    }else if(opt=='全部角色'){
      role_id=''
    }

  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  role_id
  }
  this.$ajax.post('/user/listManager',params).then((res)=>{
      console.log('请求分类员工列表结果',res)
    if(res.data.code==200){
      var res=res.data.data
      that.details=res
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
  },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {
  var	Token=window.localStorage.getItem('token')
  var role_id=''
  var	that=this
  var	params={
  Token,
  role_id
  }
  this.$ajax.post('/user/listManager',params).then((res)=>{
      console.log('请求员工列表结果',res)
    if(res.data.code==200){
      var res=res.data.data
      that.details=res
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
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
/* 刷新按钮 */
.ref{
  width:90px;
height:30px;
background:rgba(154,195,220,1);
border-radius:5px;
text-align: center;
line-height: 30px;
color:#fff;
border:0;
margin:auto 0;
margin-right: 60px;
}
/* 盒子 */
.gaine{
  width:1650px;
  height:859px;
  background: #fff;
  margin-top:10px;
  padding-top:19px;
  overflow-y:auto
}
.tit{
  margin-left:9px;
  margin-right:10px;
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
/* 输入搜索 */
.search{
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin-left:41px;
  line-height: 36px;
}
 /deep/ .el-input__inner{
  width:150px;
  height:30px;
  background:rgba(237,237,237,1);
  border-radius:10px;
  }
.input{
  margin-left:20px;
  margin-top:2px;
}
 /deep/ el-input__suffix{
  /* display:none!important; */
  line-height:30px;
}
/deep/ .el-input__icon{
  line-height:30px;
}
 /deep/ .el-date-editor.el-input{
  width:150px;
}
/* 表单 */
table>thead td{
  height:40px;
  background:#EDEDED;
  border-right:1px solid #fff;
  text-align: center;
}
table{
  margin-left:21px;
  margin-top:19px;
}
/* 删除*/
.look{
  width:60px;
  height:20px;
  background:#04C7FF;
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
table>:nth-child(odd){
background:rgba(234,241,246,1);
}
tbody td{
  text-align: center;
  height:40px;
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