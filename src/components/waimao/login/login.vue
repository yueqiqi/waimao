<!-- 登录 -->
<template>
<div class='bg'>
  <div class="img">
    <div class="border">
      <!-- <div style="z-index:111"> -->
        
      <div class="login-text">登录</div>
      <!-- 密码 -->
      <el-form :model="login" :rules="rules" ref="login" class="demo-ruleForm" @submit.native.prevent>
        <!-- 填写邮箱input -->
        <el-form-item prop=email>
          <el-input placeholder="请输入邮箱" class="email" v-model="login.email"></el-input>
        </el-form-item>
        <!-- 填写密码input -->
        <el-form-item prop="pwd" class="pwd">
          <el-input type="password" class="email" placeholder="请输入密码" v-model="login.pwd"></el-input>
        </el-form-item>
      </el-form>
        <!-- 提交表单信息 -->
          <button @click="submit" class="btn">登录</button>
          <button @click="reg" class="reg">注册</button>
      <router-link to="/forget"><div class="forget">忘记密码</div></router-link>
      <!-- </div> -->
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
      return {
        login:{
          email:"",
          pwd:"",
        },
        // 错误提示
        rules:{

          email: [
             {required: true, message: '请输入邮箱地址', trigger: 'blur' },
             {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
        pwd:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '密码在6-18位', trigger: 'blur' }
        ]
        },
      };
    },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 提交表单
 submit(){
   console.log(this.login.email)
   console.log(this.login.pwd)
    //  this.$router.push({  //核心语句
    //     name:'uindex',   //引用router注册的组件进行跳转
    //     params:{           //路由传参时push和query搭配使用 ，作用时传递参数
    //       email:this.login.email,  
    //       pwd:this.login.pwd,  
    //     }
    //   })
var params={           //路由传参时push和query搭配使用 ，作用时传递参数
          email:this.login.email,  
          passwd:this.login.pwd,  
        }
        
  var that=this
  this.$ajax.post('/auth/loginByEmail',params).then((res)=>{
    console.log('请求结果',res)
    if(res.data.code==200){
      // that.$router.push({
      //     path:'/uindex'
      //   })
        var role_id=res.data.data.role_id  //(1=>'客户',2=>'业务经理',3=>'总监',4=>'总经理')
        window.localStorage.setItem('role_id',role_id)
        var token=res.data.data.token
        window.localStorage.setItem('token',token)
        var manager_id=res.data.data.id
        window.localStorage.setItem('manager_id',manager_id)
        var lid=res.data.data.id
        window.localStorage.setItem('lid',lid)
        var goto
        if(role_id==1){
          goto='/uindex'
          }else if(role_id==2){
            goto='/cindex'
          }else if(role_id==3){
            goto='/cindex'
          }else if(role_id==4){
            goto='/cindex'
          }
            that.$router.push({
              path:goto
            })
    }else{
      alert(res.data.msg)
    }
  }).catch((err)=>{
    console.log('请求失败',err)
  })
 },
//  注册
reg(){
  this.$router.push({  //核心语句
        path:'/reg',   //跳转的路径
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
  /* width:100%; */
  width:1920px;
  /* min-width:1040px; */
  background:url("./bg.png") no-repeat;
  background-size:100% auto;
  height:1054px;
}
.img{
  /* width:1900px; */
  position:relative;
}
/* 输入外框 */
.border{
  width:495px;height: 440px;
  background:rgba(255,255,255,0.4);
  border-radius:20px;
  z-index:10;
  position:absolute;
  top:290px;right:259px;
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
}
/* 注册 */
.reg{
width:400px;
height:50px;
background:rgba(255,255,255,1);
border:2px solid rgba(6,102,164,1);
border-radius:10px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(6,102,164,1);
margin-top:30px;
}
/* 忘记密码 */
.forget{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
text-align: left;
margin-left:77px;
margin-top:10px;
}
</style>