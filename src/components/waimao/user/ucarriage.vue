<!-- 运输清关 -->
<template>
<div class=''>
   <div class="payborder">运输清关</div>
   <!-- 操作时间 -->
   <div style="margin-top:29px;margin-bottom:32px;font-size:20px;font-weight:bold;color:#333;">操作时间 <span style="color:#0666A4">{{time}}</span></div>
   <!-- 提交资料 -->
   <div style="font-size:20px;font-weight:bold;color:#333;">请提交申请资料</div>
   <div class="d-flex">
     <ol style="margin-left:-20px">
       <li>箱单</li>
       <li>发票</li>
       <li>提单</li>
     </ol>
     <ol start="4" style="margin-left:44px;">
       <li>合同</li>
       <li>其他单据</li>
       <li>CIQ报告（铭矿客户文件必须含该报告）</li>
     </ol>
   </div>
   <div style="font-size:20px;font-weight:bold;color:#0666A4;margin-bottom:21px;">第一次清关</div>
    <div class="d-flex">
      <ul class="el-upload-list el-upload-list--text uu" v-for="(item,i) in fileList" :key="i">
        <li tabindex="0" >
          <router-link to="item.url" class="el-upload-list__item-name">
            <i class="el-icon-document">{{item.name}}</i>
          </router-link>
        </li>
      </ul>
      <div style="margin-left:5px;color:#666666;font-size:14px;">{{fileListtime}}</div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    // 内贸文件时间
  fileListtime:"2019-08-06",
  // 外贸文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},],
  // 操作时间
  time:"2019-07-30 11:10"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.payborder{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height:46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-top:30px;
}
</style>