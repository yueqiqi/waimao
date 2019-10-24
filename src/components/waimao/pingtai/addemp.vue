<!-- 添加新员工 -->
<template>
<div class='addemp'>
   <div class="adduser d-spb">
    <div class="d-flex"> 
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/adduser.png" alt=""></div>
      <div class="title">添加新员工</div>
    </div>
  </div>


  <div class="gaine">
    <div class="addmes">填写员工基本信息</div>
    <el-form ref="form" style="margin-top:21px;" :model="form" label-position="left" label-width="78px">
  <!-- 第一行 -->
    <div class="d-flex">
    <!-- 员工姓名 -->
      <el-form-item label="员工姓名">
        <el-input placeholder="请填写员工姓名" v-model="form.name"></el-input>
      </el-form-item>
    <!-- 名字简写 -->
      <el-form-item style="margin-left:101px;" label="名字简写">
        <el-input placeholder="请填写首字母简写" v-model="form.jx"></el-input>
      </el-form-item>
      <!-- 英文名 -->
      <el-form-item style="margin-left:101px;" label="英文名">
        <el-input type="text" placeholder="请填写英文名" v-model="form.englishname"></el-input>
      </el-form-item>
    </div>

    <div class="d-flex">
       <!-- 联系电话 -->
      <el-form-item label="联系电话">
        <el-input type="number" placeholder="请填写联系电话" v-model="form.phone"></el-input>
      </el-form-item>
    <!-- 角色选择 -->
      <el-form-item style="margin-left:101px;" label="角色选择">
        <el-select v-model="form.type" placeholder="请选择角色身份">
          <el-option label="采购合同" value="采购合同"></el-option>
          <el-option label="销售合同" value="销售合同"></el-option>
        </el-select>
      </el-form-item>
    </div>
    </el-form>
    <!-- gaine -->
    <button @click="sub" class="btn sub">确认添加</button>
  </div>
  <!-- /addemp -->
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
  // 公司信息
  form:{
    // 员工姓名
    name:"",
    // 名字简写
    jx:"",
    // 英文名
    englishname:"",
    // 联系电话
    phone:"",
    // 角色选择
    type:"",
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  sub(){
    console.log("提交")
    console.log(this.form)
  },
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
.adduser{
  background:#fff;
  width:1650px;height:70px;
  margin-top:21px;
  border-left:6px solid rgba(6,102,164,1);
}
.img{
  width:31px;height: 31px;margin:auto 0;
  margin-left:10px;
}
.title{
  font-size:24px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:70px;
  margin-left:10px;
}
/* 盒子 */
.gaine{
  width:1650px;
  height:859px;
  background: #fff;
  margin-top:10px;
  padding-top:19px;
  overflow-y:auto;
  padding-top:40px;
  padding-left:57px;
}
.addmes{
  width:200px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
}
/* 输入框样式 */
 /deep/ .el-input--suffix .el-input__inner{
  width:320px!important;
/* height:30px!important; */
background:rgba(237,237,237,1);
border-radius:10px!important;
}
/* 联系人输入框 */
.el-input{
   width:320px!important;
height:30px!important;
background:rgba(237,237,237,1);
border-radius:10px!important;
}
  /deep/ input{
  background:rgba(237,237,237,1)!important;
  width:320px!important;
  /* height:30px; */
border-radius:10px!important;
margin-top:-10px!important;
}
 /* /deep/ input{
    background:rgba(237,237,237,1)!important;
  width:200px!important;
  border-radius:10px!important;
} */
/deep/ .distpicker-address-wrapper select {
  padding-left:10px;
}
.sub{
  width:170px;
height:46px;
background:rgba(6,102,164,1);
border-radius:10px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
margin-left:740px;
margin-top:49px;
}
</style>