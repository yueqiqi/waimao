<template>
  <div>
    <h3>表单练习</h3>
    <h4>开关组件</h4>
    <mt-switch v-model="val3">
     开关
    </mt-switch>
    <h4>单选列表组件</h4>
    <mt-radio
     title="单选框列表"
     v-model="val4"
     :options="['选项a','选项b','选项c']">
    </mt-radio>
    <button @click="handleRadio">选中哪个</button> 
    <h4>复选列表组件</h4>
    <mt-checklist
     title="复选框列表"
     v-model="val5"
     :options="['项选a','选项b','选项c']">
    </mt-checklist>
    <button @click="handleCheck">
    读取复选框内容
    </button>
  </div>  
</template>
<script>
 export default {
   data(){
     return {
       val3:false,
       val4:"",
       val5:[]
     }//return end
   },//data end
   methods:{
     handleCheck(){
        console.log(this.val5);
     },
     handleRadio(){
       console.log("选中:"+this.val4);
     }
   }
 }  
</script>