<!-- 运输清关 -->
<template>
<div class='carriage'>
  <div class="carriageTitle">运输清关</div>
  <div class="d-flex">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <div class="times" style="margin-top:32px;">请提交申请资料</div>

  <div class="d-flex" style="margin-left:-20px;">
  <ol>
    <li>箱单</li>
    <li>发票</li>
    <li>报关单</li>
  </ol>
  <ol start="3">
    <li>提单</li>
    <li>商业保险</li>
    <li>中信保保单</li>
  </ol>
  </div>
  <!-- 第一次出货 -->
  <div style="color:#0666A4;font-weight:bold;font-size:20px;">第一次清关 <span style="color:#FF0000;font-weight:400;font-size:14px;">请上传对应的报关资料</span></div>
 <div style="margin-top:20px;">
    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="success" :file-list="fileList" :auto-upload="false" :limit="1">
        <button class="upload" ><img style="width:10px;height:10px;" src="../../../../assets/waimao/icon/add.png" alt="">上传资料</button>
    </el-upload>
 </div>
  <!-- carriage -->
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
  // 上传文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},],
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 是否上传成功
  success(){
    console.log("上传成功")
  },
  // // 确认提交
  // submitUpload(){
  //   this.success()
  //   this.$refs.upload.submit();
  //   console.log("asd ")
  // setTimeout(()=>{
  //   var _this=this
  //   _this.hidden=false;
  //   _this.hidden2=true
  // },2000)
  // },
  // 
  // 删除文件
handleRemove(file, fileList) {
  console.log("删除文件")
        console.log(file, fileList);
      },
      // 点击文件列表中已上传的文件时的钩子
handlePreview(file) {
  console.log("查看")
        console.log(file);
      }
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
.carriageTitle{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-top:30px;
margin-bottom:29px;
}
.time{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.time+div{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-left:20px;
margin-top:1px;
}
.times{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
ol{
  width:100px;
}
.upload{
  width:100px;
  height:30px;
  background:rgba(154,195,220,1);
  border-radius:10px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  border:0;
  }
  /deep/ .el-upload-list__item{
  width:300px;
}
</style>