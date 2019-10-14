<template>
   <div>
     第一个组件,唯一根元素 div
     <hr />
     <button @click="openToast">  
      显示提示消息
     </button>
   </div>
</template>
<script>
 //导出默认对象
  export default {
    data(){//当前组件共享数据
      return {}//数据
    },
    methods:{
   openToast(){
   //显示短消息
   this.$toast({
   message:"操作成功",//内容
   position:"middle",   //位置
   duration:300000,     //时间
   //className:"mytoast",//添加样式
   iconClass:"iconfont icon-food-cake"
   });
  }
  }
  }
</script>
<style>
.mytoast{
  background-color:#fff !important;
  color:#e4393c !important;
  font-size:19px !important;
  border:1px solid #333  !important; 
}
</style>