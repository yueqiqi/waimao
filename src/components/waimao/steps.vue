<template>
  <div class="steps">
    <h1 style="text-align:center;">步骤条</h1>
    <!-- 新增订单、订单准入、合同签订 -->
    <div style="height:70px;border:1px solid lightgreen;width:100%;display:flex">
      <div class="d-flex" style="height:32px;align-self:center">
        <div :class="add1==true?active:'boxzxc'"  @click="add">新增订单</div>
        <div class="line"></div>
        <div :style="add1==false?'pointer-events:none':''" :class="[ins1==true?active:(m2=='normal'?'normal':'boxzxc')]" @click="ins">订单准入</div>
        <div class="line"></div>
        <div :style="ins1==false?'pointer-events:none':''" :class="ht1==true?active:(m3=='normal'?'normal':'boxzxc')" @click="ht">合同签订</div>
        <div class="line" style="margin-right:0"></div>
        <div class="curve"></div>
      </div>
      <!--  -->
      <div>
        <div class="d-flex"> 
          <div :style="ht1==false?'pointer-events:none':''" :class="fk1==true?active:(m4=='normal'?'normal':'boxzxc')" @click="fk">付款开证</div>
            <div class="line"></div>  
          <div :style="ys1==false?'pointer-events:none':''" :class="ts1==true?active:(m5=='normal'?'normal':'boxzxc')" @click="ts">退税</div>
        </div>
        <div class="d-flex" style="margin-top:8px;">
          <div :style="fk1==false?'pointer-events:none':''" :class="ys1==true?active:(m6=='normal'?'normal':'boxzxc')" @click="ys">运输清关</div>
            <div class="line"></div>
          <div :style="ts1==false?'pointer-events:none':''" :class="sh1==true?active:(m7=='normal'?'normal':'boxzxc')" @click="sh">收货</div>
        </div>
      </div>
        <div class="curve2"></div>
      <div class="line" style="margin-top:34px;margin-left:0"></div>
      <div style="height:32px;align-self:center" :style="sh1==false?'pointer-events:none':''" :class="js1==true?active:(m8=='normal'?'normal':'boxzxc')" @click="js">结算汇总</div>
      <!--  -->
    </div>
    <div v-show="add1">新增订单</div>
    <div v-show="ins1">订单准入</div>
    <div v-show="ht1">合同签订</div>
    <div v-show="fk1">付款开证</div>
    <div v-show="ts1">退税</div>
    <div v-show="ys1">运输清关</div>
    <div v-show="sh1">收货</div>
    <div v-show="js1">结算汇总</div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      m2:"normal",
      m3:"normal",
      m4:"normal",
      m5:"normal",
      m6:"normal",
      m7:"normal",
      m8:"normal",
      active:"active",
      add1:true,
      ins1:false,
      ht1:false,
      fk1:false,
      ts1:false,
      ys1:false,
      sh1:false,
      js1:false,
    }
  },
  methods:{
    add(){
      console.log("新增订单")
      this.ins1=false
      this.add1=true
      this.ht1=false
      this.fk1=false
      this.ts1=false
      this.ys1=false
      this.sh1=false
      this.js1=false
    },
    ins(){
      console.log("订单准入")
      this.ins1=true
      this.add1=false
      this.ht1=false
      this.fk1=false
      this.ts1=false
      this.ys1=false
      this.sh1=false
      this.js1=false
      this.m2=1
    },
    ht(){
      console.log("合同签订")
      this.ins1=false
      this.add1=false
      this.ht1=true
      this.fk1=false
      this.ts1=false
      this.ys1=false
      this.sh1=false
      this.js1=false
      this.m3=1
    },
    fk(){
      console.log("付款开征")
      this.ins1=false
      this.add1=false
      this.ht1=false
      this.fk1=true
      this.ts1=false
      this.ys1=false
      this.sh1=false
      this.js1=false
      this.m4=1
    },
    ts(){
      console.log("退税")
      this.ins1=false
      this.add1=false
      this.ht1=false
      this.fk1=false
      this.ts1=true
      this.ys1=false
      this.sh1=false
      this.js1=false
      this.m5=1
    },
    ys(){
      console.log("运输清关")
      this.ins1=false
      this.add1=false
      this.ht1=false
      this.fk1=false
      this.ts1=false
      this.ys1=true
      this.sh1=false
      this.js1=false
      this.m6=1
    },
    sh(){
      console.log("收货")
      this.ins1=false
      this.add1=false
      this.ht1=false
      this.fk1=false
      this.ts1=false
      this.ys1=false
      this.sh1=true
      this.js1=false
      this.m7=1
    },
    js(){
      console.log("结算汇总")
      this.ins1=false
      this.add1=false
      this.ht1=false
      this.fk1=false
      this.ts1=false
      this.ys1=false
      this.sh1=false
      this.js1=true
      this.m8=1
    },
  }
}
</script>

<style scoped>
.boxzxc{
width:100px;
height:30px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-weight:400;
color:rgba(255,255,255,1);
cursor:default 
}
.normal{
width:100px;
height:30px;
background:rgba(237,237,237,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-weight:400;
color:#333;
cursor:default 
}
.active{
  width:100px;
height:30px;
background:rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-weight:400;
color:rgba(255,255,255,1);
cursor:default 
}

.line{
  width:50px;
height:2px;
background:rgba(154,195,220,1);
margin-top:15px;
margin-left:10px;margin-right:10px;
}
/* 曲线 */
.curve{
   width: 15px; 
  height: 40px;  
  border: solid 2px rgba(154,195,220,1);
  /* border-color: #000 transparent transparent transparent;
  border-radius: 50%/10px 10px 0 0; */
  /* border-color: */
  border-radius: 10px 0px 0px 10px;
  margin-top:-4px;
  border-right: 0;
  margin-right:14px;
}
.curve2{
   width: 15px; 
  height: 40px;  
  border: solid 2px rgba(154,195,220,1);
  /* border-color: #000 transparent transparent transparent;
  border-radius: 50%/10px 10px 0 0; */
  /* border-color: */
  border-radius: 0px 10px 10px 0px;
  margin-top:14px;
  border-left: 0;
  /* margin-right:14px; */
  margin-left:14px;
}
.dis{
  pointer-events:none;
}
</style>