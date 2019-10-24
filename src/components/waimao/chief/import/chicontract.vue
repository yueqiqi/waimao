<!-- 合同签订 -->
<template>
<div class='compact'>
    <div class="compactTitle">合同签订</div>
    <div class="d-flex">
      <div class="time">签订时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
    </div>
    <!-- 上传合同 -->
    <div class="border">
      <div class="uptitle">内贸合同</div>
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
        <ul class="el-upload-list el-upload-list--text uu" v-for="(item,i) in fileList" :key="i">
          <li tabindex="0" >
            <router-link to="item.url" class="el-upload-list__item-name">
              <i class="el-icon-document">{{item.name}}</i>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 提交按钮 -->

<!--  -->
    </div>
    <div class="d-flex">
      <div style="margin-top:20px;margin-right:18px;">
        <span style="font-size:16px;color:#333;margin-right:10px;">审核结果</span>
         <el-select v-model="value" placeholder="请选择审核结果">
           <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
         </el-select>
      </div>
      <div><button class="sub" @click="sub">确认提交</button></div>
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
  // 选择器
   options: [{
          value: '审核中',
          label: '审核中'
        }, {
          value: '已审核',
          label: '已审核'
        },],
        value: '',
  // 外贸文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',}],
    form:{
      name:"",
    },
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

// 提交
sub(){
  console.log("确认提交")
  console.log(this.value)
},
  // 

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
height:234.5px;
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
.sub{
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
border:0
}

ul li{
  list-style: none;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
margin-top:-10px;
}

.uu{
  margin-left:0!important;
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
.el-upload-list{
  margin-bottom:23px;
}

/deep/ .el-select{
  width:210px;
height:30px;
background:rgba(237,237,237,1);
border-radius:10px;
}
/deep/ .el-input__inner{
  width:210px;
height:30px;
background:rgba(237,237,237,1);
border-radius:10px;
}
/deep/ .el-input__suffix{
  top:5px;
}
</style>