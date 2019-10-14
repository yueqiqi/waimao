<template>
  <div>
     <div class="nav">
      <mt-button v-for="(item,i) of list" :key="i" :data-idx="i" @click="setActive">
       {{item}}
      </mt-button>
     </div>
     <div>
       <mt-tab-container v-model="active">
         <mt-tab-container-item id="tb1">
            美食
         </mt-tab-container-item>
         <mt-tab-container-item id="tb2">
            购物
         </mt-tab-container-item>
         <mt-tab-container-item id="tb3">
            休闲
         </mt-tab-container-item>
       </mt-tab-container>
     </div>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
      list:["美食","购物","休闲"],
      active:"tb1"    
      }//return end
    },//data end
    methods:{
      setActive(e){
        //获取自定义属性
        var idx = parseInt(e.target.dataset.idx);
        //修改active值
        this.active = "tb"+(idx+1);
      }
    }
  }  
</script>
<style>
</style>