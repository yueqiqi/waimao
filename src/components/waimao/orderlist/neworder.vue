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
    <div class="steps"></div>
    <!-- ================================================================================================================== -->
<!-- 订单准入 -->
    <div v-show="false">
      <orders></orders>
    </div>
    <!-- =========================================================================================== -->
    <!-- 合同签订 -->
    <div v-show="false">
      <compact></compact>
    </div>
    <!-- ============================================================================================================ -->
    <div v-show="false">
      <examine></examine>
    </div>
    <!-- ================================================================================= -->
    <!-- 收款付款 -->
    <div v-show="false">
      <receiving></receiving>
    </div>
    <!-- ================================================================================= -->
    <!-- 报关运输 -->
    <div v-show="false">
      <carriage></carriage>
    </div>
    <!-- ================================================================================= -->
    <!-- 缴税退税 -->
    <div v-show="false">
      <rate></rate>
    </div>
    <!-- ================================================================================= -->
    <div>
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
  // 订单号
  orderNum:"20190729999",
  // 客户类型
  userType:"一般业务客户"
    }
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
</style>