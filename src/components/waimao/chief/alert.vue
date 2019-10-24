<!--  -->
<template>
<div class=''>
  <!--  -->
   <div class="boxsz">
    <div class="bbb">
      <div class="d-spb" style="line-height:32px;height:32px;padding-top:30px;margin-left:30px;margin-right:29px;">
        <div class="d-flex" style="">
          <div style="width:20px;height:20px;margin:auto;"><img style="width:20px;height:20px;" src="../../../assets/waimao/icon/report.png" alt=""></div>
          <div style="font-size:20px;color:rgba(51,51,51,1);font-weight:bold;margin-left:10px;">确认拒绝该客户的委托申请？</div>
        </div>
        <div><img @click="close" style="width:10px;height:10px;" src="../../../assets/waimao/icon/close.png" alt=""></div>
      </div>
      <div style="width:440px;height:160px;margin:0 auto;margin-top:30px;">
        <el-input type="textarea" placeholder="请填写拒绝理由" v-model="textarea"></el-input>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:10px;">
      <button class="qr" @click="qr">确认</button>
      </div>
    <!-- bbb -->
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import buss from './bus.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  data:"",
    textarea:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  close(){
    buss.$emit("x",false)
  },
  qr(){
    var m=this.textarea
    var zz=[m,false]
  buss.$emit("close",zz)
  // console.log(this.textarea)
},
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
buss.$on("myFun",(data)=>{   //这里最好用箭头函数，不然this指向有问题
                  console.log("这是"+data)  
                  this.data=data   
             })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.boxsz{
 position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
}
.bbb{
  width:500px;
height:300px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 18px 0px rgba(204,204,204,1);
border-radius:10px;
position: relative;
top:50%;
left:50%;
margin-top:-150px;
margin-left: -250px;
}
/deep/ .el-textarea{
  width:440px;
  height:160px;
  background:rgba(237,237,237,1);
  border-radius:10px;
  margin:auto
}
/deep/ .el-textarea__inner{
  width:440px;
  height:160px;
  background:rgba(237,237,237,1);
  border-radius:10px;
  margin:auto
}
.qr{
  margin-right:29px;
  width:90px;
  height:30px;
  background:rgba(154,195,220,1);
  border-radius:5px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:30px;
  text-align: center;
  border:0;
}
</style>