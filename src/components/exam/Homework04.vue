<template>
 <div>
   <h3>用户登录作业</h3>
   <div>
     <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
     <mt-field label="密码" type="password" placeholder="请输入密码"
     v-model="upwd"></mt-field>
   </div>
   <div>
    <button @click="btnLogin">登录</button>
   </div>
 </div>
</template>
<script>
  export default {
    data(){
      return {
        uname:"",
        upwd:""
      }//return end
    },//data end
    methods:{
      btnLogin(){
    //1:功能一验证用户名
    var u = this.uname;
    //2:如果用户名为空 提示用户
    if(""==u){
     this.$toast("用户名不能为");
     return;
    }
    //3:功能二验证密码
    var p = this.upwd;
    //4:如果密码为空  提示用户
    if(""==p){
     this.$toast("密码不能为空");
     return;
    }
      }
    }
  }  
</script>
<style>
</style>