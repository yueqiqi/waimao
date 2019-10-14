<!--  -->
<template>
<div>
<div class='perfect'>
  <div class="title">完善资料</div>
    <el-form ref="form" :model="form" label-position="left" label-width="80px">
  <!-- 第一行 -->
    <div class="d-flex">
    <!-- 客户类型 -->
      <el-form-item label="客户类型">
        <el-select v-model="form.type" placeholder="请选择客户类型">
          <el-option label="中方客户" value="中方客户"></el-option>
          <el-option label="外方客户" value="外方客户"></el-option>
        </el-select>
      </el-form-item>
    <!-- 联系人 -->
      <el-form-item style="margin-left:101px;" label="联系人">
        <el-input placeholder="请填写联系人姓名" v-model="form.username"></el-input>
      </el-form-item>
    </div>
    <!-- 第二行 -->
    <div class="d-flex">
      <!-- 业务类型 -->
      <el-form-item label="业务类型">
        <el-select v-model="form.type2" placeholder="请选择业务类型">
          <el-option label="一般业务客户" value="一般业务客户"></el-option>
          <el-option label="融资业务客户" value="融资业务客户"></el-option>
        </el-select>
      </el-form-item>
    <!-- 联系电话 -->
      <el-form-item style="margin-left:101px;" label="联系电话">
        <el-input type="text" placeholder="请填写联系人电话" v-model="form.userphone"></el-input>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
      <!-- 单位名称 -->
      <el-form-item label="单位名称">
        <el-input type="text" placeholder="请提供完整正确的单位名称" v-model="form.com"></el-input>
      </el-form-item>
    <!-- 微信 -->
      <el-form-item style="margin-left:101px;" label="微信">
        <el-input type="text" placeholder="请填写客户微信" v-model="form.userwx"></el-input>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
      <!-- 单位代码 -->
      <el-form-item label="单位代码">
        <el-input type="text" placeholder="请提供完整正确的单位代码" v-model="form.code"></el-input>
      </el-form-item>
    <!-- whatAPP -->
      <el-form-item style="margin-left:101px;" label="whatAPP">
        <el-input type="text" placeholder="请填写客户whatApp" v-model="form.userwhat"></el-input>
      </el-form-item>
    </div>
    <!-- 第五行 -->
    <div class="d-flex">
      <!-- 单位代码 -->
      <el-form-item label="单位代码">
        <el-input type="text" placeholder="请提供完整正确的单位代码" v-model="form.code"></el-input>
      </el-form-item>
    <!-- Facebook -->
      <el-form-item style="margin-left:101px;" label="Facebook">
        <el-input type="text" placeholder="请填写客户Facebook" v-model="form.userface"></el-input>
      </el-form-item>
    </div>
    <el-form-item>
      <el-input type="text" placeholder="请填写详细地址" v-model="form.address"></el-input>
    </el-form-item>
    </el-form>
    <button class="mybtn" @click="submit">提交信息</button>
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
  form:{
    // 客户类型
    type:"",
    // 联系人
    username:"",
    // 业务类型
    type2:"",
    // 联系电话
    phone:"",
    // 单位名称
    com:"",
    // 微信
    userwx:"",
    // 单位代码
    code:"",
    // whatAPP
    what:"",
    // Facebook
    userface:"",
    // 详细地址
    address:"",
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 提交信息
submit(){
  console.log(this.form.type)
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
.perfect{
  /* text-align: center; */
  position:absolute;
  top:269px;
  left:497px;
  /* margin-left:-450px;
  margin-top:-231px; */
}
.title{
  font-size:30px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
text-align: center;
margin-bottom:57px;
}
/* 输入框样式 */
.perfect /deep/ .el-input--suffix .el-input__inner{
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
.perfect /deep/ input{
  background:rgba(237,237,237,1)!important;
  width:320px!important;
/* height:30px!important; */
border-radius:10px!important;
margin-top:-10px!important;
}
/* 提交信息按钮 */
.mybtn{
  width:400px;
height:50px;
background:rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height:50px;color:#fff;
font-size:20px;
font-family:Microsoft YaHei;
border:0;
margin-left:250px;
margin-top:105px;
}
</style>