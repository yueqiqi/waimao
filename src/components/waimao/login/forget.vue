<!-- 忘记密码 -->
<template>
<div class='bg'>
  <div class="img">
    <div class="border">       
      <div class="login-text">找回密码</div>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!element-ui回车会导致表单提交利用 @submit.native.prevent可以阻止！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ -->
      <!-- 密码 -->
      <el-form :model="reg" :rules="rules" ref="reg" class="demo-ruleForm"  @submit.native.prevent>
        <!-- 填写邮箱input -->
        <el-form-item prop=email>
          <el-input placeholder="请输入邮箱" class="email" v-model="reg.email"></el-input>
        </el-form-item>
          <button @click="email" class="btn" :disabled="dis" :style="dis==true?'opacity: 0.65;':''">发送验证信息到邮箱</button>
        <el-form-item prop="code">
          <el-input  placeholder="请输入验证码" type="number" v-model="reg.code" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 填写密码input ------------------------------------------>
        <el-form-item prop="pwd">
          <el-input  placeholder="请输入新密码" type="password" v-model="reg.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="spwd">
          <el-input  placeholder="请确认新密码" type="password" v-model="reg.spwd" autocomplete="off"></el-input>
        </el-form-item>
  <!-- ------------------------------------ -->
      </el-form>
        <!-- 提交表单信息 -->
          <button @click="confirm" class="btn2">确认修改</button>
    </div>
    <!-- 提示 -->
    <div class="total" v-show="show">
      <div>验证信息已发送到您的邮箱请前往验证</div>
      <button @click="hidden">确定</button>
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
      /**
    * 验证码验证
    */
      var code = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if(value.length!=6){
          callback(new Error('请输入正确的验证码'));
        }
        else{
          if (this.reg.pwd !== '') {
            this.$refs.reg.validateField('code');
          }
          callback();
        }
      };
  //  邮箱验证
var email=(rule,value,callback)=>{
  if(value==""){
    callback(new Error("请输入邮箱"))
    console.log("请输入邮箱")
  }else if(value!==""){
    var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(!reg.test(value)){
      callback(new Error("邮箱格式不正确"))
      console.log("邮箱格式不正确")
    }else if(reg.test(value)){
      this.dis=false;
    console.log(this.dis)
      console.log("正确")
    }
  }else{
    callback()
  }
};
   var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length<6||value.length>18){
          callback(new Error('密码长度在6~18位'));
        }
        else{
          if (this.reg.pwd !== '') {
            this.$refs.reg.validateField('pwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.reg.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // 是否禁用button
        dis:true,
        // 是否显示弹窗
        show:"",
       reg:{
          email:"",
          pwd:"",
          spwd:"",
          code:'',
        },
        // 错误提示
        rules:{
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          spwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email:[
            { validator: email, trigger: 'blur' }
          ],
          code:[
            { validator:code, trigger: 'blur' }
          ],  
        },
      };
    },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 隐藏弹窗
  hidden(){
    this.show=false
  },
//  验证邮箱
email(){
  var	that=this
  var	params={
    email:this.reg.email,
  }
  this.$ajax.post('/auth/getRegCode',params).then((res)=>{
    console.log('请求结果',res)
    if(res.data.code==200){
      this.show=true
      }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
},
//  注册
confirm(){
      var	that=this
      var	params={
        email:this.reg.email,
        passwd:this.reg.pwd,
        code:this.reg.code
      }
      this.$ajax.post('/auth/resetPwdByCode',params).then((res)=>{
          console.log('请求结果',res)
        if(res.data.code==200){
        that.$router.push({  //核心语句
        path:'/login',   //跳转的路径
      })
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
}
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
updated() {
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.bg{
  width:1920px;
  background:url("./bg.png") no-repeat;
  background-size:100%;
  height:1064px;
}
.img{
  /* width:1900px; */
  position:absolute;
}
/* 输入外框 */
.border{
  width:495px;height: 560px;
  background:rgba(255,255,255,0.4);
  border-radius:20px;
  z-index:10;
  position:relative;
  top:290px;left:1165px;
  text-align: center
}
.login-text{
  font-size:30px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
/* line-height:50px; */
margin-left:46px;
text-align: left;
padding-top:38px;
margin-bottom:19px;
}
/* 输入框 */
.el-input{
  width:400px!important;height:50px!important;
  margin:auto;
  position:	static;
  display: block;
}
.el-input__inner {
  background:rgba(255,255,255,1)!important;
}
input{
  border-radius: 10px!important;
}
/* 错误提示 */
.el-form-item .el-form-item__error{
  position:static!important;
  text-align: center!important;
}
/* 登录按钮 */
.btn{
  width:400px;
height:50px;
background:rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height: 50px;
border:0;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
margin-bottom:30px;
}
/* 注册 */
.btn2{
width:400px;
height:50px;
background:rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height: 50px;
border:0;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
}
/* 提示信息 */
.total{
  width:280px;
height:200px;
background:rgba(255,255,255,1);
border:1px solid rgba(217,217,217,1);
border-radius:20px;
text-align: center;
font-size:16px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
position: absolute;
top:70px;left:1279px;
}
.total :first-child{
  width:192px;height:41px;
  margin:50px auto 29px;
}
.total button{
  width:130px;
height:40px;
background:rgba(6,102,164,1);
border-radius:10px;
border:0;
text-align: center;
line-height: 40px;
color:#fff;
}
</style>