<template>
  <div>
  <h1>底部导航栏</h1>
  <!--面板-->
  <mt-tab-container v-model="selected">
   <mt-tab-container-item id="外卖">
     外卖
   </mt-tab-container-item>
   <mt-tab-container-item id="订单">
     订单
   </mt-tab-container-item>  
  </mt-tab-container>
  <!--底部导航栏-->
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="外卖">
      <img slot="icon" src="../../assets/01.png" />
      外卖 
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" 
      src="../../assets/02.png" />
      订单
    </mt-tab-item>  
  </mt-tabbar>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
         selected:""
      }
    }
  }  
</script>
<style>
</style>