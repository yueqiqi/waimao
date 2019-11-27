<!-- 合同签订 -->
<template>
<div>
  <!-- 业务经理展示合同签订 -->
  <div class='compact' v-if="role_id==2">
    <div class="compactTitle">合同签订</div>
    <div class="d-flex">
      <div class="time">签订时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
    </div>
    <!-- 上传合同 -->
    <div class="border" v-show="hidden">
      <div class="uptitle">上传内贸合同</div>
      <div class="please">请提交申请资料</div>
      <div class="d-flex ol">
        <ol>
          <li>境外采购合同</li>
          <li>国内销售合同</li>
        </ol>
        <ol start="3">
          <li>代理合同</li>
          <li>担保合同</li>
        </ol>
      </div>
      <!-- 上传文件 -->
      <div style="">
            <el-upload class="upload-demo" ref="upload" :on-change="getFileName" action="http://192.168.0.140:8002/main/tools/upFile" :on-preview="handlePreview" :on-success="upsuc" :on-remove="handleRemove" :file-list="fileList" :auto-upload="true">
            <el-button size="small" type="primary"  @click="submitUpload">上传资料</el-button>
            </el-upload>
      <button class="btn mybtn" @click="sub">确认提交</button>
      </div>
      <!-- 提交按钮 -->
<!--  -->
    </div>
    <!-- ============================================================ -->
    <!-- 审核通过 -->
    <div class="border2" v-show="hidden2">
      <div class="uptitle">上传内贸合同</div>
      <div class="please">请提交申请资料</div>
      <div class="d-flex ol">
        <ol>
          <li>境外采购合同</li>
          <li>国内销售合同</li>
        </ol>
        <ol start="3">
          <li>代理合同</li>
          <li>担保合同</li>
        </ol>
      </div>
      <!-- 上传文件 -->
      <div style="margin-top:-40px">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
              <!-- <button class="upload"><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">上传资料</button> -->
            </el-upload>
      </div>
      <!-- 提交按钮 -->
      <div class="zj">总监审核</div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">审核人：</li>
        <li >{{shName}}</li>
        <li style="margin-left:25px;">审核状态：</li>
        <li style="color:red;">{{statu}}</li>
        <li style="margin-left:10px;">{{shtime}}</li>
      </ul>
      <div class="manager">总监经理审核</div>
      <ul class="d-flex" style="">
        <li style="margin-left:-40px;">审核人：</li>
        <li >{{managerName}}</li>
        <li style="margin-left:25px;">审核状态：</li>
        <li style="color:red;">{{managerstatu}}</li>
        <li style="margin-left:10px;">{{managertime}}</li>
      </ul>
<!--  -->
    </div>
  </div>


    <!-- ============================================================ -->
<!-- 总监审核合同签订 -->
<div class='compact' v-if="role_id==3">
    <div class="compactTitle">合同签订</div>
    <div class="d-flex">
      <div class="time">签订时间</div>
      <div>{{times}}<span style="margin-left:10px;">{{seconeds}}</span></div>
    </div>
    <!-- 上传合同 -->
    <div class="border">
      <div class="uptitle">外贸合同</div>
      <div class="please">请提交申请资料</div>
      <div class="d-flex ol">
        <ol>
          <li>境外采购合同</li>
          <li>国内销售合同</li>
        </ol>
        <ol start="3">
          <li>代理合同</li>
          <li>担保合同</li>
        </ol>
      </div>
      <!-- 上传文件 -->
      <div style="">
        <ul class="el-upload-list el-upload-list--text uu" v-for="(item,i) in fileLists" :key="i">
          <li tabindex="0" >
            <router-link to="item.url" class="el-upload-list__item-name">
              <i class="el-icon-document">{{item.name}}</i>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 提交按钮 -->

<!--  -->
    </div>
    <div class="d-flex">
      <div style="margin-top:20px;margin-right:18px;">
        <span style="font-size:16px;color:#333;margin-right:10px;">审核结果</span>
        <el-select v-model="state" placeholder="请选择审核状态">
          <el-option label="通过" value="1"></el-option>
          <el-option label="不通过" value="2"></el-option>
        </el-select>
      </div>
      <div><button class="sub" @click="subs">确认提交</button></div>
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



  // ??????????????????????????????????????????????????????????????????????
  // 总监端合同签订
  fileLists: [],
    forms:{
      name:"",
    },
    times:"2019-07-30",
    seconeds:"10:00",
    state:'',
  // ??????????????????????????????????????????????????????????????????????
    // 后台返回上传地址
  files:[],
  // 是否显示
  hidden2:false,
  hidden:true,
  // 总经理审核
  // 审核时间
  managertime:"2019-08-08",
  // 审核状态
  managerstatu:"通过",
  // 审核人
  managerName:"李胖子",
  // 总监审核
  // 审核时间
  shtime:"2019-08-08",
  // 审核状态
  statu:"通过",
  // 审核人
  shName:"李胖子",
  // 上传文件地址
   fileList: [],
time:"2019-07-30",
seconed:"10:00"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

/**
 * 总监端合同签订方法
 */
// 审核是否通过
subs(){
  // 设置订单状态
  var is_fail
  var state
  console.log(this.state)
  if(this.state==''){
    is_fail=0
  }else if(this.state==1){
    is_fail==''
    state=5
  }else{
    is_fail=1
  }
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  is_fail,
  order_id:this.order_id,
  state,
  }
  this.$ajax.post('/order/setOrderState',params).then((res)=>{
      console.log('请求订单通过结果',res)
    if(res.data.code==200){
      alert(res.data.msg)
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
},
////////////////////////////////////////////////////////////////////////////////


getFileName(){
  
},
upsuc(e){
  console.log('上传成功',e)
  this.files.push(e.data)
  this.look=e.data.full_path
  console.log('查看的地址',this.look)
  // this.sp.push(e.data.path('_'))
    // 为原数组添加新的下标
  this.files.forEach((item,index)=> {
    item.num = index+1;
    item.type=5
  })
},
submitUpload(file) {
  this.$refs.upload.submit();
},
handleRemove(file, fileList,e) {
  console.log('删除的文件地址',file,'删除的文件路径', fileList,e);
  // this.files
  for(var i in file){
    for(var m in this.files){
      if(file[i].name==this.files[m].file_name){
        this.files.splice(m,1)
      }
    }
  }
},
handlePreview(file) {
  // console.log('文件列表',file);
  console.log('查看的文件地址',this.look)
  window.open(this.look)
},
  // 确认提交
  sub(){
    /**
     * 保存文件
       */
      var	that=this
    console.log('订单id',that.order_id)
      // var	params={data:this.files}
      this.$ajax.post('/tools/saveFile',({order_id:that.order_id,type:2,data:this.files})).then((res)=>{
          console.log('上传文件结果',res)
        if(res.data.code==200){
          /**
           * 改变订单状态
           */
          var	Token=window.localStorage.getItem('token')
          var order_id=that.order_id
          var	params={
          Token,
          state:3,
          order_id:that.order_id
          }
          this.$ajax.post('/order/setOrderState',params).then((res)=>{
              console.log('请求状态改变结果',res)
            if(res.data.code==200){
              this.$message({
                message: '上传成功',
                type: 'success'
              });
            }else{
            alert(res.data.msg)
          }
            }).catch((err)=>{
              console.log('请求失败',err)
            })
          /**
           * 改变订单状态
           */
          
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
        /**
         * 
         */

  },

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  var role_id=window.localStorage.getItem('role_id')
  if(role_id==3){
    var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    order_id:this.order_id,
    type:3
    }
    this.$ajax.post('/tools/getFile',params).then((res)=>{
        console.log('请求总监端文件列表结果',res)
      if(res.data.code==200){
        this.fileLists=res.data.data
      }else{
      alert(res.data.msg)
    }
      }).catch((err)=>{
        console.log('请求失败',err)
      })
  }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {
  var role_id=window.localStorage.getItem('role_id')
  this.role_id=role_id
  var order_id=this.$route.query.order_id
  console.log('合同亲低昂',order_id)
  this.order_id=order_id
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
.ol{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:29px;
margin-left:-23px;
}
/* 上传按钮 */
.sub{
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
border:0
}

ul li{
  list-style: none;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
margin-top:-10px;
}

.uu{
  margin-left:0!important;
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
.el-upload-list{
  margin-bottom:23px;
}

/deep/ .el-select{
  width:210px;
height:30px;
background:rgba(237,237,237,1);
border-radius:10px;
}
/deep/ .el-input__inner{
  width:210px;
height:30px;
background:rgba(237,237,237,1);
border-radius:10px;
}
/deep/ .el-input__suffix{
  top:5px;
}
/* @import url(); 引入公共css类 */
.compactTitle{
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
margin-top:29px;
margin-bottom:29px;
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
/* 上传内贸 */
.border{
  width:400px;
height:320px;
border:1px solid rgba(6,102,164,1);
border-radius:10px;
padding-left:30px;
margin-top:30px;
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
/* 提示文字 */
.please{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,0,0,1);
margin-top:19px;
}
/* ol */
.ol{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:29px;
margin-left:-23px;
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
/* 审核通过 */
.border2{
  width:400px;
  height:389px;
  border:1px solid rgba(6,102,164,1);
  border-radius:10px;
  padding-left:30px;
margin-top:30px;
}
/* 总监是=审核 */
.zj{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:29px;
}

ul li{
  list-style: none;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
margin-top:-10px;
}
/* 总经理审核 */
.manager{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:27px;
}
</style>