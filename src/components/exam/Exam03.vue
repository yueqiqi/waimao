<template>
  <div>
   <h1>输入域</h1>
   <div>
      <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}"  v-model="uname">
      </mt-field>
      <mt-field label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="upwd">
      </mt-field>
      <mt-field label="生日"
      type="date"
      v-model="mydate">
      </mt-field>
   </div>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
        uname:"",
        upwd:"",
        mydate:""
      }
    }
  }  
</script>
<style>
  
</style>