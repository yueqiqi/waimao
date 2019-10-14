<template>
  <div>
  <!--面板-->
  <!--三个按钮-->
  <div>
    <mt-button size="small" type="primary" @click.prevent="active='tab1'">面板一</mt-button>
    <mt-button size="small" type="danger"
    @click.prevent="active='tab2'"
    >面板二</mt-button>
    <mt-button
    @click.prevent="active='tab3'"
    >面板三</mt-button>
  </div>
  <!--面板[一个父面板->三个子面板]-->
  <div> 
    <mt-tab-container v-model="active">
     <mt-tab-container-item id="tab1">
      子面板1
     </mt-tab-container-item>
     <mt-tab-container-item id="tab2">
      子面板2
     </mt-tab-container-item>     
     <mt-tab-container-item id="tab3">
      子面板3
     </mt-tab-container-item>
    </mt-tab-container>
  </div>  
  
  </div>  
</template>
<script>
 export default {
   data(){
     return {
       active:"tab2"
     }
   }
 }  
</script>
<style>
</style>