<template>
  <div>
     交互提示框
<button @click="openAlert">
   简写提示框
</button>
<button @click="openConfirm">
  提示确认
</button>
<button @click="openPrompt">输入确认</button>

  </div>  
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
    openPrompt(){
      this.$messagebox.prompt("请输入年龄")
      .then(({value,action})=>{
        console.log(value);
        console.log(action);
      });
    },  
    openConfirm(){
      this.$messagebox.confirm("是否删除指定数据").then(action=>{
        console.log(action);
      }).catch(err=>{
        console.log(err);
      });
    },
    openAlert(){
    //标准
    //this.$messagebox({
    //  title:"消息",
    //  message:"执行操作成功"
    //});
    //简写
     this.$messagebox("","删除成功");
      }
    },
    created() {
     
    }
  }
</script>
<style>
</style>