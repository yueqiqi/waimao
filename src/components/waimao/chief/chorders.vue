<!-- 委托订单列表--总监端 -->
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
        <div style="margin-right:30px;margin-top:19px;" class="d-flex">
          <!-- 状态选择 -->
          <div class="d-flex">
            <div style="color:#333;font-weight:400;line-height:27px;margin-right:10px;">委托选择</div>
            <el-select v-model="type" @change="bus">
              <el-option label="全部委托" value=""></el-option>
              <el-option label="委托采购" value="1"></el-option>
              <el-option label="委托销售" value="2"></el-option>
            </el-select>
          </div>
          <!-- 业务选择 -->
          <div class="d-flex">
            <div style="color:#333;font-weight:400;line-height:27px;margin-right:10px;margin-left:20px;">业务选择</div>
            <el-select v-model="type2" @change="bus2">
              <el-option label="全部业务" value=""></el-option>
              <el-option label="一般业务" value="1"></el-option>
              <el-option label="融资业务" value="2"></el-option>
            </el-select>
          </div>
          <!-- 按钮 -->
          <!-- 按钮 -->
          <!-- <div style="margin-left:20px;">
            <button class="btn add" @click="add"> <img class="addimg" src="../../../assets/waimao/icon/add.png" alt="">添加新订单</button>
          </div> -->
        </div>
      </div>
      <!-- 分页详情 -->
      <div style="margin-left:21px;margin-top:22px;">
        <table>
          <tr class="ths">
            <td style="height:40px;width:100px;background:rgba(237,237,237,1);">订单号</td>
            <td style="height:40px;width:100px;background:rgba(237,237,237,1);">业务类型</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">委托方</td>
            <td style="height:40px;width:80px;background:rgba(237,237,237,1);">联系人</td>
            <td style="height:40px;width:120px;background:rgba(237,237,237,1);">联系电话</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">合同总金额</td>
            <td style="height:40px;width:80px;background:rgba(237,237,237,1);">付款方式</td>
            <td style="height:40px;width:260px;background:rgba(237,237,237,1);">目的港</td>
            <td style="height:40px;width:90px;background:rgba(237,237,237,1);">交货日期</td>
            <!-- <td style="height:40px;width:180px;background:rgba(237,237,237,1);">制定代贷信息与报关信息</td> -->
            <!-- <td style="height:40px;width:80px;background:rgba(237,237,237,1);">其他要求</td> -->
            <td style="height:40px;width:170px;background:rgba(237,237,237,1);">备注</td>
            <!-- <td style="height:40px;width:90px;background:rgba(237,237,237,1);">订单状态</td> -->
            <td style="height:40px;width:206px;background:rgba(237,237,237,1);">操作</td>
            <td v-if="role_id!=2" style="height:40px;width:89px;background:rgba(237,237,237,1);">分配业务经理</td>
          </tr>       
        <tbody v-for="(item,i) in lists" :key="i" data-id="i" style="text-align:center" class="table">
            <!-- 编号 -->
            <td >{{item.id}}</td>
            <!-- 业务类型 -->
            <td>{{item.type==1?'一般业务':'融资业务'}}</td>
            <!-- 委托方 -->
            <td >{{item.corporate_name}}</td>
            <!-- 联系人 -->
            <td>{{item.contacts}}</td>
            <!-- 联系电话 -->
            <td >{{item.phone}}</td>
            <!-- 采购合同总金额 -->
            <td >{{item.contract_money}}</td>
            <!-- 付款方式 -->
            <td>{{item.payment_type}}</td>
            <!-- 目的港 -->
            <td>{{item.objective_port}}</td>
            <!-- 交货日期 -->
            <td>{{item.delivery_date}}</td>
            <!-- 制定代贷信息与报关信息 -->
            <!-- <td >{{item.dd}}</td> -->
            <!-- 其他要求 -->
            <!-- <td>{{item.other}}</td> -->
            <!-- 备注 -->
            <td>{{item.remarks}}</td>
            <!-- 订单状态 -->
            <!-- <td>{{item.statu}}</td> -->
            <!-- 操作 -->
            <td >
              <button v-if="role_id!=2" class="btn look" :data-id="item.id" :data-user="item.user_id" @click="look">查看</button>
              <!-- <button class="btn set" style="background:#42DC3E" @click="set(i)">通过</button> -->
              <button v-if="role_id!=2" class="btn set" style="background:#FF6600" @click="dellinkbtn(i)">拒绝</button>
              <button @click="neworder" :data-entrust_id='item.id' :data-order_type='item.entrust_type' v-if="role_id==2" class="btn look" style="width:100px;">新增订单</button>
            </td>
            <td v-if="role_id!=2">

              <div class="option2">
              <el-select @change="choose" v-model="item.v" placeholder="请选择">
                <el-option  v-for="(im,iq) in item.vm" :key="iq" data-id="999" :label="im.name" :value="im.id+'-'+item.id"></el-option>
              </el-select>
              </div>
              <!-- <div v-for="(im,iq) in item.value2" :key="iq">
                <div>xing:{{im.name}}</div>
              </div> -->
            </td>
            <!-- ======================================================= -->
           
            <!-- ======================================================= -->
        </tbody>
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
  <div  v-show="tc">
    <alert></alert>
  </div>
  <div v-show='sh'>
    <alert2></alert2>
  </div>
  <!--  -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import buss from './bus.js'
import alert from './alert'
import alert2 from './alert2'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  alert,
  alert2
},
data() {
//这里存放数据
return {
    v1:'',
   // 明细弹窗
  tc:false,
  sh:false,
  // delusers:[],
  // 业务选择
  type2:'',
  type:"",
  // 状态选择

  // 888888888888888888888888888888888888888888888888
  allpage: 10, //总页数
  cur: 1,//当前页码
  totalPage: 0,//当前条数
  // 888888888888888888888888888888888888888888888888
  // 列表
  lists:[],
  // 用户总数
  all:"",
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
  /**
   * 业务经理新增订单跳转
   */
  neworder(e){
    var entrust_id=e.target.dataset.entrust_id
    var order_type=e.target.dataset.order_type
    console.log(entrust_id,order_type,e)
    this.$router.push({
      path:'/addorder',
      query:{
        entrust_id,
        order_type
      }
    })
  },
/**
 * 分配经理选择
 */
choose(e){
  console.log('下拉框',e)
  var end=e.split('-')
  console.log('留下数组')
  console.log(end[0],end[1])
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  id:end[1],
  manager_id:end[0]
  }
  this.$ajax.post('/entrust/setEntrust',params).then((res)=>{
      // console.log('请求结果',res)
    if(res.data.code==200){
      this.$message({
          message: '分配成功',
          type: 'success'
        });
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
},


//委托选择
  bus(dat){
    console.log(dat)
    this.entrust_type=dat
      var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  pageNum:1,
  pageSize:13,
  entrust_type :dat
  }
  this.$ajax.post('/entrust/listManager',params).then((res)=>{
      console.log('请求委托订单结果',res)
    if(res.data.code==200){
      this.lists=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
  },
  // 业务选择
  bus2(dat){
      var	Token=window.localStorage.getItem('token')
      this.ltype=dat
  var	that=this
  var	params={
  Token,
  pageNum:1,
  pageSize:13,
  type:dat
  }
  this.$ajax.post('/entrust/listManager',params).then((res)=>{
      console.log('请求委托订单结果',res)
    if(res.data.code==200){
      this.lists=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
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
 var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    pageNum:this.cur,
    pageSize:13,
    type:this.ltype,
    entrust_type:this.entrust_type
    }
    this.$ajax.post('/entrust/listManager',params).then((res)=>{
        console.log('请求分页结果',res)
      if(res.data.code==200){
        this.lists=res.data.data
      }else{
      alert(res.data.msg)
    }
      }).catch((err)=>{
        console.log('请求失败',err)
      })
//根据点击页数请求数据
// this.lists(this.cur.toString());
console.log("点击页码这是第"+this.cur+"页")
},
pageClick: function(){
//根据点击页数请求数据
// this.dataListFn(this.cur.toString());
      var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    pageNum:this.cur,
    pageSize:13,
    type:this.ltype,
    entrust_type:this.entrust_type
    }
    this.$ajax.post('/entrust/listManager',params).then((res)=>{
        console.log('请求分页结果',res)
      if(res.data.code==200){
        this.lists=res.data.data
      }else{
      alert(res.data.msg)
    }
      }).catch((err)=>{
        console.log('请求失败',err)
      })
console.log("这是第"+this.cur+"页")
},  


  // 888888888888888888888888888888888888888888888888888888888888
  // 添加用户
  add(){
    this.$router.push({
      path:'/addorder',
      query:{
        id:1
      }
    })
  },
  // 查看
  look(e){
    console.log(e)
    this.$router.push({
      path:'/orderDetail',
      query:{
        id:e.target.dataset.id,
        user_id:e.target.dataset.user
      }
    })
  },
  // 编辑
  set(i){
    console.log(i)
    buss.$emit("gb",i)   //$emit这个方法会触发一个事件
    this.stop()
    this.tc=true
  },
  // 回收
   // 禁止滚动
    stop(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
  dellinkbtn(i){
      buss.$emit("myFun",i)   //$emit这个方法会触发一个事件
    this.stop()
    this.tc=true
  },
  // 关闭遮罩按钮

  // 查询结果
  search(){
    console.log("联系人"+this.searchuser)
    console.log("电话号码"+this.searchphone)
    console.log("开始时间"+this.stime)
    console.log("结束时间"+this.etime)
    var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    pageNum:1,
    pageSize:13,
    contacts:this.searchuser,
    phone:this.searchphone,
    sta_create:this.stime,
    end_create:this.etime,
    type:this.ltype,
    entrust_type:this.entrust_type
    }
    this.$ajax.post('/entrust/listManager',params).then((res)=>{
        console.log('请求结果',res)
      if(res.data.code==200){
        that.lists=res.data.data
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
  /**
   * 分配经理列表
   */
 
  /**
   * 分配经理列表
   */

  buss.$on("close",(data)=>{   //这里最好用箭头函数，不然this指向有问题
                  console.log("不是"+data[0])
                  console.log(data+"啊")
                  var _this=this 
                  _this.tc=data[1]   
             })
  buss.$on("x",(data)=>{   //这里最好用箭头函数，不然this指向有问题
      var _this=this 
      console.log(data  )
      _this.tc=data  
  })
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
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var role_id=window.localStorage.getItem('role_id')
  this.role_id=role_id
  var	params={
  Token,
  pageNum:1,
  pageSize:13,
  type:0
  }
  this.$ajax.post('/entrust/listManager',params).then((res)=>{
      console.log('请求委托订单结果',res)
    if(res.data.code==200){
      this.lists=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })



setTimeout(() => {
    // var	Token=window.localStorage.getItem('token')
  // var role_id=window.localStorage.getItem('role_id')
  var	that=this
  var	params={
  Token,
  role_id:2
  }
  this.$ajax.post('/user/listManager',params).then((res)=>{
      console.log('请求分配经理列表结果',res)
    if(res.data.code==200){
      // var r1=JSON.parse(JSON.stringify(res.data.data).replace(/name/g, 'label'))
      // var  r2=JSON.parse(JSON.stringify(r1).replace(/id/g, 'value'))
      for(var i in this.lists){
        that.lists[i].vm=res.data.data
        that.lists[i].v1=''
      }
      // that.op2.v1=''
      // that.op2=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
    setTimeout(() => {
      console.log('最后列表结果',this.lists)
    }, 1000);
}, 1000);



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
tbody td{
  height:40px;
}
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
table>:nth-child(odd){
background:rgba(234,241,246,1);
}
table {
  font-size:14px;
}
/deep/ .option2 .el-input__inner{
  width:90px;
  background:rgba(0,0,0,0);
  border:0;
  /* padding-left:5px; */
  margin-left:5px;
  position:relative;
  left:9px;
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