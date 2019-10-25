<!-- 订单准入 -->
<template>
<div class='neworder'>
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/saixuan2.png" alt=""></div>
    <div class="title">订单详情</div>
    <div class="title2">订单号</div>
    <div class="blue">{{orderNum}}</div>
    <div class="title2">客户类型</div>
    <div class="blue">{{userType}}</div>
  </div>
  <div class="border" style="overflow:scroll;">
    <div class="order">订单流程</div>

    <div class="steps">
       <div style="height:70px;width:100%;display:flex;padding-bottom:30px;">
      <div class="d-flex" style="height:32px;align-self:center">
        <router-link to="/addorder?type='出口'">
          <div :class="add1==true?active:'boxzxc'"  @click="add">新增订单</div>
        </router-link>
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
          <div :style="ht1==false?'pointer-events:none':''" :class="fk1==true?active:(m4=='normal'?'normal':'boxzxc')" @click="fk">验货出货</div>
            <div class="line"></div>  
          <div :style="ys1==false?'pointer-events:none':''" :class="ts1==true?active:(m5=='normal'?'normal':'boxzxc')" @click="ts">报关运输</div>
        </div>
        <div class="d-flex" style="margin-top:8px;">
          <div :style="fk1==false?'pointer-events:none':''" :class="ys1==true?active:(m6=='normal'?'normal':'boxzxc')" @click="ys">收款付款</div>
            <div class="line"></div>
          <div :style="ts1==false?'pointer-events:none':''" :class="sh1==true?active:(m7=='normal'?'normal':'boxzxc')" @click="sh">缴税退税</div>
        </div>
      </div>
        <div class="curve2"></div>
      <div class="line" style="margin-top:34px;margin-left:0"></div>
      <div style="height:32px;align-self:center" :style="sh1==false?'pointer-events:none':''" :class="js1==true?active:(m8=='normal'?'normal':'boxzxc')" @click="js">结算汇总</div>
      <!--  -->
    </div>
    <!--  -->
    </div>
    <!-- ================================================================================================================== -->
<!-- 订单准入 -->
    <div v-show="ins1">
      <orders></orders>
    </div>
    <!-- =========================================================================================== -->
    <!-- 合同签订 -->
    <div v-show="ht1">
      <compact></compact>
    </div>
    <!-- ============================================================================================================ -->
    <div v-show="fk1">
      <examine></examine>
    </div>
    <!-- ================================================================================= -->
    <!-- 收款付款 -->
    <div v-show="ys1">
      <receiving></receiving>
    </div>
    <!-- ================================================================================= -->
    <!-- 报关运输 -->
    <div v-show="ts1">
      <carriage></carriage>
    </div>
    <!-- ================================================================================= -->
    <!-- 缴税退税 -->
    <div v-show="sh1">
      <rate></rate>
    </div>
    <!-- ================================================================================= -->
    <div v-show="js1">
      <closing></closing>
    </div>
    <!-- ================================================================================= -->

  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import compact from './compact'
import orders from './orders'
import examine from './examine'
import receiving from './receiving'
import carriage from './carriage'
import rate from './rate'
import closing from './closing'
export default{
  components:{
    compact,
    orders,
    examine,
    receiving,
    carriage,
    rate,
    closing
  },
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
  // 订单号
  orderNum:"20190729999",
  // 客户类型
  userType:"一般业务客户"
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
/* 添加新用户 */
.adduser{
  background:#fff;
  width:1644px;height:70px;
  margin-top:21px;
  border-left:6px solid rgba(6,102,164,1);
}
.img{
  width:31px;height: 31px;margin:auto 0;
  margin-left:16px;
}
.title{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:70px;
  margin-left:10px;
}
.title2{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:70px;
margin-left:38px;
}
.blue{
  font-size:20px;
  margin-left:8px;
  margin-right:2px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
line-height:70px;
}
/* 大白框 */
.border{
  width:1649px;
height:1427px;
background:rgba(255,255,255,1);
margin-top:10px;
padding-left:57px;
}
/* 订单流程 */
.order{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
padding-top:40px;
margin-bottom:20px;
}
/* 步骤条 */
.steps{
  width:1493px;
  border-bottom:2px solid rgba(204,204,204,1);
}
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