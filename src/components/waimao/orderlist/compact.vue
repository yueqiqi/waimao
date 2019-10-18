<!--  -->
<template>
<div class='compact'>
    <div class="compactTitle">合同签订</div>
    <div class="d-flex">
      <div class="time">签订时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
    </div>
    <!-- 上传合同 -->
    <div class="border" v-show="hidden">
      <div class="uptitle">上传内贸合同</div>
      <div class="please">请提交申请资料</div>
      <div class="d-flex ol">
        <ol>
          <li>境外采购合同</li>
          <li>国内销售合同</li>
        </ol>
        <ol start="3">
          <li>代理合同</li>
          <li>担保合同</li>
        </ol>
      </div>
      <!-- 上传文件 -->
      <div style="">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="success" :file-list="fileList" :auto-upload="false" :limit="1">
              <button class="upload" ><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">上传资料</button>
            </el-upload>
      <button class="btn mybtn" @click="submitUpload">确认提交</button>
      </div>
      <!-- 提交按钮 -->
<!--  -->
    </div>
    <!-- ============================================================ -->
    <!-- 审核通过 -->
    <div class="border2" v-show="hidden2">
      <div class="uptitle">上传内贸合同</div>
      <div class="please">请提交申请资料</div>
      <div class="d-flex ol">
        <ol>
          <li>境外采购合同</li>
          <li>国内销售合同</li>
        </ol>
        <ol start="3">
          <li>代理合同</li>
          <li>担保合同</li>
        </ol>
      </div>
      <!-- 上传文件 -->
      <div style="margin-top:-40px">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
              <!-- <button class="upload"><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">上传资料</button> -->
            </el-upload>
      </div>
      <!-- 提交按钮 -->
      <div class="zj">总监审核</div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">审核人：</li>
        <li >{{shName}}</li>
        <li style="margin-left:25px;">审核状态：</li>
        <li style="color:red;">{{statu}}</li>
        <li style="margin-left:10px;">{{shtime}}</li>
      </ul>
      <div class="manager">总监经理审核</div>
      <ul class="d-flex" style="">
        <li style="margin-left:-40px;">审核人：</li>
        <li >{{managerName}}</li>
        <li style="margin-left:25px;">审核状态：</li>
        <li style="color:red;">{{managerstatu}}</li>
        <li style="margin-left:10px;">{{managertime}}</li>
      </ul>
<!--  -->
    </div>
    <!-- ============================================================ -->
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
  // 是否显示
  hidden2:false,
  hidden:true,
  // 总经理审核
  // 审核时间
  managertime:"2019-08-08",
  // 审核状态
  managerstatu:"通过",
  // 审核人
  managerName:"李胖子",
  // 总监审核
  // 审核时间
  shtime:"2019-08-08",
  // 审核状态
  statu:"通过",
  // 审核人
  shName:"李胖子",
  // 上传文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},],
time:"2019-07-30",
seconed:"10:00"
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
  // 确认提交
  submitUpload(){
    this.success()
    this.$refs.upload.submit();
    console.log("asd ")
  setTimeout(()=>{
    var _this=this
    _this.hidden=false;
    _this.hidden2=true
  },2000)
  },
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
.compactTitle{
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
margin-top:29px;
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
/* 上传内贸 */
.border{
  width:400px;
height:320px;
border:1px solid rgba(6,102,164,1);
border-radius:10px;
padding-left:30px;
margin-top:30px;
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
/* 上传贸易合同文字 */
.uptitle{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
padding-top:34px;
}
/* 提示文字 */
.please{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,0,0,1);
margin-top:19px;
}
/* ol */
.ol{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:29px;
margin-left:-23px;
}
/* 上传按钮 */
.mybtn{
  width:100px;
height:30px;
background:rgba(255,102,0,1);
border-radius:10px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
text-align: center;
line-height: 30px;
margin-top:19px;
}
/* 审核通过 */
.border2{
  width:400px;
  height:389px;
  border:1px solid rgba(6,102,164,1);
  border-radius:10px;
  padding-left:30px;
margin-top:30px;
}
/* 总监是=审核 */
.zj{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:29px;
}

ul li{
  list-style: none;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
margin-top:-10px;
}
/* 总经理审核 */
.manager{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:27px;
}
</style>