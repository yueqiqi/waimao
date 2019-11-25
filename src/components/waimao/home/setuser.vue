<!-- 添加新客户 -->
<template>
<div class='add'>
   <!-- 顶部导航条 -->
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/usernum.png" alt=""></div>
    <div class="title">用户名</div>
    <div class="title" style="color:#0666A4">{{userName}}</div>
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
        <el-select v-model="form.type"  placeholder="请选择客户类型">
          <el-option label="中方客户" value="中方客户"></el-option>
          <el-option label="外方客户" value="外方客户"></el-option>
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
      <!-- <el-form-item style="margin-left:101px;;" label="邮箱">
        <el-input type="email" placeholder="请填写联系人邮箱" v-model="form.email"></el-input>
      </el-form-item> -->
    <!-- Facebook -->
      <el-form-item style="margin-left:101px;" label="Facebook">
        <el-input type="text" placeholder="请填写客户Facebook" v-model="form.userface"></el-input>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
      <!-- 地址 -->
      <!-- <el-form-item label="地址"> -->
        <!-- <el-input type="text" placeholder="请提供完整正确的单位代码" v-model="form.code"></el-input> -->
        <!-- <v-distpicker :province="select.province" :city="select.city" @selected="sub" :area="select.area"></v-distpicker> -->
      <!-- </el-form-item> -->
      <el-form-item label="地址">
       <el-input type="text" placeholder="请填写详细地址" v-model="form.address"></el-input>
      </el-form-item> 
    </div>  
    <!-- 选择客户业务类型 -->
    <div class="chooseTitle">选择客户业务类型</div>
    <div style="margin-top:26px;">
     <el-form-item label="业务类型">
        <el-select v-model="form.type2" placeholder="请选择客户业务类型">
          <el-option label="一般业务" value="一般业务"></el-option>
          <el-option label="融资业务" value="融资业务"></el-option>
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
        <li :style="form.type2=='一般业务客户'||form.type2==''?'display:none':''">征信报告（公司、法人及实际控制人）<span>*</span></li>
        <li :style="form.type2=='一般业务客户'||form.type2==''?'display:none':''">最近一次验资报告</li>
        <div style="color:#FF0000;font-size:14px;font-weight:400;margin-left:-16px;margin-top:9px;">注：以上资料均为复印件（加盖企业公章）</div>
      </ol>
      <ol style="margin-left:200px;" :style="form.type2=='一般业务客户'||form.type2==''?'display:none':''" start="6">
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
    <el-button size="small" type="primary"  @click="submitUpload">上传资料</el-button>
    </el-upload>
  </div>
  <!--  -->
  <div style="display: flex;justify-content: center;">
    <button class="mybtn btn" @click="submit">确认修改</button>
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
  //
  files:[],
  // 用户名
  userName:"",
  // 上传文件地址
   fileList: [],
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
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
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
  var r2= JSON.parse(JSON.stringify(e.data).replace(/file_name/g, 'name'))
    // 为原数组添加新的下标
  // this.fileList.push(e.data)
  // conso
},
  // 上传文件
  submitUpload(file) {
        this.$refs.upload.submit();
  },
  handleRemove(file, fileList) {
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
    console.log(file)
    // console.log(file.path+file.url);
    if(file.response){
      window.open(file.response.data.full_path)
    }else{
      window.open(file.path+file.url)
    }
    // return this
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
// 提交所有信息
submit(){
  // var r3= JSON.parse(JSON.stringify(this.fileList).replace(/name/g, 'file_name'))
  var	Token=window.localStorage.getItem('token')
  var	that=this
  console.log('上传文件',this.fileList)
  var user_id=that.user_id
  var form=that.form
  var type
    if(form.type=='中方客户'){
      type=1
    }else{
      type=2
    }
    var type2
    if(form.t2=='一般业务'){
      type2=1
    }else{
      type2=2
    }
  var	params={
  Token,
  customer_type:type,
  name:form.username,
  wechat:form.userwx,
  corporate_name:form.com,
  mobile:form.userphone,
  what_app:form.userwhat,
  corporate_code:form.code,
  facebook:form.userface,
  address:this.province+this.city+this.area+form.address,
  // email:form.email,
  // passwd:form.pwd,
  role_id:1,
  user_type:type2,
  user_id:that.user_id
  }
  this.$ajax.post('/auth/setUserInfo',params).then((res)=>{
      console.log('请求修改用户结果',res)
    if(res.data.code==200){
            this.$ajax.post('/tools/saveFile',({user_id:user_id,type:5,data:this.files})).then((res)=>{
          console.log('上传修改文件结果',res)
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
  setTimeout(()=>{
    var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    user_id:this.user_id
    }
    this.$ajax.post('/auth/getUserInfo',params).then((res)=>{
        console.log('请求结果客户详情',res)
      if(res.data.code==200){
        var res=res.data.data.user
        var form=this.form
        if(res.customer_type==1){     
          var t1='中方客户'
        }else{
          var t1='外方客户'
        }
        form.type=t1
        form.username=res.name
        this.userName=res.name
        if(res.user_type==1){
          var t2='一般业务'
        }else{
          var t2='融资业务'
        }
        form.type2=t2
        form.userphone=res.mobile
        form.com=res.corporate_name
        form.userwx=res.wechat
        form.code=res.corporate_code
        form.userwhat=res.what_app
        form.userface=res.facebook
        /**
         * 分割地址
         */
        form.address=res.address
      }else{
      alert(res.data.msg)
    }
      }).catch((err)=>{
        console.log('请求失败',err)
      })
      /**
       * 获取上传文件列表
       */
      var	Token=window.localStorage.getItem('token')
      var	that=this
      var	params={
      Token,
      user_id:this.user_id,
      type:5
      }
      this.$ajax.post('/tools/getFile',params).then((res)=>{
          console.log('请求文件列表结果',res)
        if(res.data.code==200){
          for(var i in res.data.data){
           var r2= JSON.parse(JSON.stringify(res.data.data).replace(/file_name/g, 'name'))
            console.log(r2)
          }
          this.fileList=r2
          this.files=res.data.data
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })

  },1000)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {
    this.user_id=this.$route.query.id
  console.log(this.user_id)
}, //生命周期 - 创建之前
beforeMount() {

}, //生命周期 - 挂载之前
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