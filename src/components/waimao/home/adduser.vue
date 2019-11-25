<!-- 添加新客户 -->
<template>
<div class='add'>
   <!-- 顶部导航条 -->
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/adduser.png" alt=""></div>
    <div class="title">添加新客户</div>
  </div>
  <!-- 填写客户信息 -->
  <div class="fill">
    <div class="fillTitle">填写客户基本信息</div>
    <!-- 表单填写 -->
    <div class="fillForm">
    <el-form ref="form" :model="form" label-position="left" label-width="80px">
  <!-- 第一行 -->
    <div class="d-flex">
    <!-- 客户类型 -->
      <el-form-item label="客户类型">
        <el-select v-model="form.type" placeholder="请选择客户类型">
          <el-option label="中方客户" value="1"></el-option>
          <el-option label="外方客户" value="2"></el-option>
        </el-select>
      </el-form-item>
    <!-- 联系人 -->
      <el-form-item style="margin-left:101px;" label="联系人">
        <el-input placeholder="请填写联系人姓名" v-model="form.username"></el-input>
      </el-form-item>
      <!-- 微信 -->
      <el-form-item style="margin-left:101px;" label="微信">
        <el-input type="text" placeholder="请填写客户微信" v-model="form.userwx"></el-input>
      </el-form-item>
    </div>

    <!-- 第二行 -->
    <div class="d-flex">
       <!-- 单位名称 -->
      <el-form-item label="单位名称">
        <el-input type="text" placeholder="请提供完整正确的单位名称" v-model="form.com"></el-input>
      </el-form-item>
    <!-- 联系电话 -->
      <el-form-item style="margin-left:101px;" label="联系电话">
        <el-input type="number" placeholder="请填写联系人电话" v-model="form.userphone"></el-input>
      </el-form-item>
      <!-- whatAPP -->
      <el-form-item style="margin-left:101px;" label="whatAPP">
        <el-input type="text" placeholder="请填写客户whatApp" v-model="form.userwhat"></el-input>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
     <!-- 单位代码 -->
      <el-form-item label="单位代码">
        <el-input type="text" placeholder="请提供完整正确的单位代码" v-model="form.code"></el-input>
      </el-form-item>
      <!-- 邮箱 -->
    <!-- Facebook -->
      <el-form-item style="margin-left:101px;" label="Facebook">
        <el-input type="text" placeholder="请填写客户Facebook" v-model="form.userface"></el-input>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
      <!-- 地址 -->
      <el-form-item label="地址">
        <!-- <el-input type="text" placeholder="请提供完整正确的单位代码" v-model="form.code"></el-input> -->
        <v-distpicker :province="select.province" :city="select.city" @selected="sub" :area="select.area"></v-distpicker>
      </el-form-item>
      <el-form-item>
       <el-input style="margin-left:-50px" type="text" placeholder="请填写详细地址" v-model="form.address"></el-input>
      </el-form-item> 
    </div>
     <!-- 第五行 -->
    <div class="d-flex">
     <!-- 账号 -->
      <el-form-item label="email账号">
        <el-input type="email" placeholder="请填写email账号" v-model="form.email"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item style="margin-left:101px;;" label="登录密码">
        <el-input type="email" placeholder="请填写登录密码" v-model="form.pwd"></el-input>
      </el-form-item>
    </div>
    <!-- 选择客户业务类型 -->
    <div class="chooseTitle">选择客户业务类型</div>
    <div style="margin-top:26px;">
     <el-form-item label="业务类型">
        <el-select v-model="form.type2" placeholder="请选择客户业务类型">
          <el-option label="一般业务" value="1"></el-option>
          <el-option label="融资业务" value="2"></el-option>
        </el-select>
     </el-form-item>
    </div>
    </el-form>
  </div>
  <div style="margin-left:57px;" class="chooseTitle">合作资料</div>
  <div class="coop">
    <div class="coopTitle">您需要提交的申请包括</div>
    <div class="d-flex" style="margin-left:-25px;">
      <ol type="1">
        <li>营业执照<span>*</span></li>
        <li>法定代表人与实际控制人身份证<span>*</span></li>
        <li>银行账户信息<span>*</span></li>
        <li v-if="form.type2==2">征信报告（公司、法人及实际控制人）<span>*</span></li>
        <li v-if="form.type2==2">最近一次验资报告</li>
        <div style="color:#FF0000;font-size:14px;font-weight:400;margin-left:-16px;margin-top:9px;">注：以上资料均为复印件（加盖企业公章）</div>
      </ol>
      <ol style="margin-left:200px;" v-if="form.type2==2" start="6">
        <li>公司章程</li>
        <li>企业简介</li>
        <li>主营相关资格证书</li>
        <li>最近一年财务报表明细或最新的审计报告</li>
        <li>资产证明文件（公司、法人及实际监控人名下，如房屋产权证、车辆产权证等）</li>
      </ol>
    </div>
  </div>
  <div style="margin-left:57px;">
    <el-upload
  class="upload-demo" ref="upload" :on-change="getFileName" action="http://192.168.0.140:8002/main/tools/upFile" :on-preview="handlePreview" :on-success="upsuc" :on-remove="handleRemove" :file-list="fileList" :auto-upload="true">
    <!-- <el-button class="" size="small" type="primary" slot="trigger"><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">选取资料</el-button> -->
    <el-button size="small" type="primary"  @click="submitUpload">上传资料</el-button>
    <!-- <div slot="tip" class="el-upload-list__item-name">{{fileList}}</div> -->
    </el-upload>
  </div>
  <!--  -->
  <div style="display: flex;justify-content: center;">
    <button class="mybtn btn" @click="submit">确认添加</button>
  </div>
  </div>
  <!-- 填写客户基本信息 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VDistpicker from 'v-distpicker'
export default {
  //import引入的组件需要注入到对象中才能使用
components: {},
data() {
  //这里存放数据
return {
  // 后台返回上传地址
  files:[],
  // 上传文件地址
   fileList: [ ],
  // 省份
  province:"",
  // 城市
  city:"",
  // 地区
  area:"",
  formInline: {
          user: '',
          region: ''
        },
        // 地址选择器
  select: { province: '', city: '', area: '' },
  // 
  form:{
    // 客户类型
    type:"",
    // 联系人
    username:"",
    // 业务类型
    type2:"",
    // 联系电话
    userphone:"",
    // 单位名称
    com:"",
    // 微信
    userwx:"",
    // 单位代码
    code:"",
    // whatAPP
    userwhat:"",
    // Facebook
    userface:"",
    // 详细地址
    address:"",
    // 邮箱
    email:"",
    // 密码,
    pwd:'',
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 上传文件
  /**
   * 选取文件
   */
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
  // 提交地区信息
  sub(data){
  console.log("省份："+data.province.value)
	console.log("市："+data.city.value)
  console.log("地区："+data.area.value)
  this.province=data.province.value
  this.city=data.city.value
  this.area=data.area.value
  },
  /**
   * 上传文件
   */
// 提交所有信息
submit(){
  // this.$refs.upload.submit();
  console.log('上传返回的路径',this.files)

  console.log(this.files)
  console.log(this.form)
  console.log("省份："+this.province,"城市："+this.city,"地区："+this.area)
  // var form=JSON.stringify(this.form)
  var province=this.province
  var city=this.city
  var area=this.area
// console.log(this.form.type)
  var form=this.form
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  customer_type:form.type,
  name:form.username,
  wechat:form.userwx,
  corporate_name:form.com,
  mobile:form.userphone,
  what_app:form.userwhat,
  corporate_code:form.code,
  facebook:form.userface,
  address:this.province+this.city+this.area+form.address,
  email:form.email,
  passwd:form.pwd,
  role_id:1,
  user_type:form.type2
  }
  console.log('填写的详细地址',params.address)
  this.$ajax.post('/auth/register',params).then((res)=>{
      console.log('请求结果',res)
    if(res.data.code==200){
      var user_id=res.data.user_id
      /**
       * 保存文件
       */
      var	that=this
      // var	params={data:this.files}
      this.$ajax.post('/tools/saveFile',({user_id:user_id,type:5,data:this.files})).then((res)=>{
          console.log('上传文件结果',res)
        if(res.data.code==200){
          setTimeout(() => {
            that.$router.push('/chinaUser')
          }, 1500);
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
        /**
         * 
         */
         
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
/* 顶部指示器 */
.leftnav[data-v-777f4df8]{
  height:1181px!important;
}
.top{
  width:1689px;height:50px;background:rgba(255,255,255,1);
  margin-top:1px;
  margin-left:-30px;
}
/* 添加新用户 */
.adduser{
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
/* 填写信息外部大框 */
.fill{
  width:1649px;
height:1010px;
background:rgba(255,255,255,1);
margin-top:10px;
padding-top:40px;
}
.fillTitle{
  width:200px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-left:57px;
}
/* 选择客户业务类型 */
.chooseTitle{
width:200px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-top:31px;
}
/* 填写表单 */
.fillForm{
  margin-top:21px;
  margin-left:57px;
}
/deep/ .distpicker-address-wrapper select{
	font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(153,153,153,1)!important;
width:120px!important;
height:30px!important;
background:rgba(237,237,237,1)!important;
border-radius:10px!important;
padding:0;
padding-left:1.5rem;
margin-right:9px;
border:0;
}
.distpicker-address-wrapper :last-child{
  margin-right:0px;
}

.title{
  font-size:24px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
text-align: center;
margin-bottom:57px;
}
/* 输入框样式 */
 /deep/ .el-input--suffix .el-input__inner{
  width:320px!important;
/* height:30px!important; */
background:rgba(237,237,237,1);
border-radius:10px!important;
}
/* 联系人输入框 */
.el-input{
   width:320px!important;
height:30px!important;
background:rgba(237,237,237,1);
border-radius:10px!important;
}
 /deep/ input{
  background:rgba(237,237,237,1)!important;
  width:320px!important;
/* height:30px!important; */
border-radius:10px!important;
margin-top:-10px!important;
}
/deep/ .distpicker-address-wrapper select {
  padding-left:10px;
}
/* 合作资料 */
.coop{
  margin-left:57px;
}
.coopTitle{
  font-size:16px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:19px;
}
/* * */
ol li span{
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:#FF0000;
}
ol li{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:27px;
} 
/* 上传资料 */
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
/* 提交按钮 */
.mybtn{
  width:170px;
height:46px;
background:rgba(6,102,164,1);
border-radius:10px;
color:#fff;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
}
/deep/ .el-upload-list__item{
  width:300px;
}
.el-upload-list{
  margin-left:57px!important;margin-bottom:23px;
}
</style>