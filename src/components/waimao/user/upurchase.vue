<!-- 委托采购 -->
<template>
<div class='usell'>
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/root.png" alt=""></div>
    <div class="title">委托采购</div>
  </div>
  <div class="gaine">


<div>
<el-form @submit.native.prevent ref="form" :model="form" label-position="left" label-width="150px">
        <div class="chooseTitle">选择客户业务类型</div>
        <div style="margin-top:26px;">
        <el-form-item label="选择委托类型">
            <el-select v-model="form.type2" placeholder="请选择客户业务类型">
              <el-option label="一般业务客户" value="一般业务客户"></el-option>
              <el-option label="融资业务客户" value="融资业务客户"></el-option>
            </el-select>
        </el-form-item>
        </div>



        <!--  -->
        <!-- 第一行 -->
  <div class="chooseTitle" style="margin-top:60px;margin-bottom:19px;">填写委托方信息</div>
    <div class="d-flex">
    <!-- 委托时间 -->
      <el-form-item label="委托时间">
        <el-input type="text" placeholder="请填写联系人姓名" v-model="form.time"></el-input>
      </el-form-item>
    <!-- 委托公司联系人 -->
      <el-form-item style="margin-left:70px;" label="委托公司联系人">
        <el-input type="text" placeholder="请填写联系人姓名" v-model="form.linkman"></el-input>
      </el-form-item>
      <!-- 目的港 -->
      <el-form-item style="margin-left:70px;" label="目的港">
        <el-input type="text" placeholder="请填写目的港" v-model="form.goal"></el-input>
      </el-form-item>
    </div>

    <!-- 第二行 -->
    <div class="d-flex">
       <!-- 委托公司信息 -->
      <el-form-item label="委托公司信息">
        <el-input type="text" placeholder="" v-model="form.companymes"></el-input>
      </el-form-item>
    <!-- 委托公司联系电话 -->
      <el-form-item style="margin-left:70px;" label="委托公司联系电话">
        <el-input type="number" placeholder="请填写联系电话" v-model="form.phone"></el-input>
      </el-form-item>
      <!-- 交货期 -->
      <el-form-item style="margin-left:70px;" label="交货期">
        <div class="d-flex">
          <el-date-picker prefix-icon="" style="width:30px;" class="year" v-model="form.year" type="year" placeholder="年">
          </el-date-picker>

          <el-date-picker prefix-icon="" class="months" v-model="form.month" format="MM-dd" type="date" placeholder="月-日">
          </el-date-picker>
        </div>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
     <!-- 销售合同金额 -->
      <el-form-item label="销售合同总金额">
        <el-input type="text" placeholder="请填写金额" v-model="form.sellmoney"></el-input>
      </el-form-item>
      <!-- 付款方式 -->
      <el-form-item style="margin-left:70px;;" label="付款方式">
        <el-select v-model="form.pay" placeholder="请选择付款方式">
              <el-option label="支付宝" value="支付宝"></el-option>
              <el-option label="微信" value="微信"></el-option>
        </el-select>
      </el-form-item>
    <!-- 是否分批次运出 -->
      <el-form-item style="margin-left:70px;" label="备注信息">
        <el-input  type="text" placeholder="请填写备注信息" v-model="form.other"></el-input>
      </el-form-item>
    </div>

<!-- 买入公司 -->
    <div class="chooseTitle" style="margin-top:61px;margin-bottom:20px;">填写委托方信息</div>
    <div class="d-flex">
    <!-- 买入公司名称 -->
      <el-form-item label="买入公司名称">
        <el-input type="text" placeholder="请填写联系人姓名" v-model="form.company2"></el-input>
      </el-form-item>
    <!-- 收汇方式 -->
      <el-form-item style="margin-left:70px;" label="收汇方式">
        <el-select v-model="form.pay2" placeholder="请选择收汇方式">
              <el-option label="支付宝" value="支付宝"></el-option>
              <el-option label="微信" value="微信"></el-option>
        </el-select>
      </el-form-item>
      <!-- 中信保授信额度 -->
      <el-form-item style="margin-left:70px;" label="中信保授信额度">
        <el-input type="text" placeholder="请填写授信额度" v-model="form.zxsb"></el-input>
      </el-form-item>
    </div>
    <!-- 第二行 -->
    <div class="d-flex">
    <!-- 联系人 -->
      <el-form-item label="联系人">
        <el-input type="text" placeholder="请填写联系人" v-model="form.linkman2"></el-input>
      </el-form-item>
    <!-- 目的港 -->
      <el-form-item style="margin-left:70px;" label="目的港">
        <el-input type="text" placeholder="请填写目的港" v-model="form.goal2"></el-input>
      </el-form-item>
      <!-- 上传附件 -->
      <el-form-item style="margin-left:70px;" label="上传附件">
        <div>
          <el-upload class="upload-demo" ref="form" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="success" :file-list="form.fileList" :auto-upload="false" :limit="1">
        <button class="uploads" >上传采购清单（Excel格式）</button>
        </el-upload>
        </div>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
      <el-form-item label="联系方式">
        <el-input type="text" placeholder="请填写联系人联系方式" v-model="form.payphone"></el-input>
      </el-form-item>
    <!-- 是否分批出运 -->
      <el-form-item style="margin-left:70px;" label="是否分批出运">
        <el-radio-group v-model="form.radio">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
    <!-- 购买合同总金额 -->
      <el-form-item label="购买合同总金额">
        <el-input type="text" placeholder="请填写合同总金额" v-model="form.allmoney"></el-input>
      </el-form-item>
    <!-- 成交方式 -->
      <el-form-item style="margin-left:70px;" label="成交方式">
       <el-select v-model="form.payway" placeholder="请选择成交方式">
              <el-option label="支付宝" value="支付宝"></el-option>
              <el-option label="微信" value="微信"></el-option>
        </el-select>
      </el-form-item>
      <!-- 添加多个卖方信息 -->
      <el-form-item style="margin-left:70px;" label="添加多个卖方信息">
        <button class="upload" @click="add"><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">添加</button>
      </el-form-item>
    </div>

</el-form>

</div>
    <!-- gaine -->
  </div>
  <!-- usell -->   
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
  form:{
    // 成交方式
    payway:"",
    // 购买合同总金额
    allmoney:"",
    // 是否分批运出
    radio:"",
    // 联系方式
    payphone:"",
    // 上传文件地址
    fileList: [],
    // 目的港
    goal2:"",
    // 联系人
    linkman2:"",
    // 中信保授信额度
    zxsb:"",
    // 收汇方式
    pay2:"",
    // 买入公司名称
    company2:"",
    // 备注信息
    other:"",
    // 付款方式
    pay:"",
    // 销售合同总金额
    sellmoney:"",
    // 交货期-月-日
    month:"",
    // 交货期-年
    year:"",
    // 委托公司联系电话
    phone:"",
    // 委托公司信息
    companymes:"仰光强大印务有限公司",
    // 目的港
    goal:"",
    // 委托公司联系人
    linkman:"",
    // 委托时间
    time:"2019-10-01",
    // 客户类型
    type2:""
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
// 添加卖方信息
add(){
  console.log("添加多个卖方信息")
},
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
/* 盒子 */
.gaine{
  width:1650px;
  height:859px;
  background: #fff;
  margin-top:10px;
  padding-top:40px;
  overflow-y:auto;
  padding-left:56px;
}
.fill{
  width:1649px;
height:1010px;
background:rgba(255,255,255,1);
margin-top:10px;
padding-top:40px;
}
.fillTitle{
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
margin-left:57px;
}
/* 选择客户业务类型 */
.chooseTitle{
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
/* margin-top:31px; */
}
/* 填写表单 */
.fillForm{
  margin-top:21px;
  margin-left:57px;
}
/deep/ .distpicker-address-wrapper select{
	font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(153,153,153,1)!important;
width:120px!important;
height:30px!important;
background:rgba(237,237,237,1)!important;
border-radius:10px!important;
padding:0;
padding-left:1.5rem;
margin-right:9px;
border:0;
}
.distpicker-address-wrapper :last-child{
  margin-right:0px;
}

.title{
  font-size:24px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
text-align: center;
margin-bottom:57px;
}
/* 输入框样式 */
 /deep/ .el-input--suffix .el-input__inner{
  width:320px;
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
  width:320px;
/* height:30px!important; */
border-radius:10px!important;
margin-top:-10px!important;
}
/deep/ .distpicker-address-wrapper select {
  padding-left:10px;
}
/deep/ .el-icon-date:before{
  content:""
}
/deep/ .el-input--prefix .el-input__inner{
  padding-left:15px
}
/deep/ .year{
  width:120px!important;
}
/deep/ .year .el-input__inner{
  width:120px!important;
}
/deep/ .months{
  margin-left:10px;
  width:189px!important;
}
/deep/ .months .el-input__inner{
  width:189px!important;
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
.uploads{
     width:200px;
  height:30px;
  background:rgba(154,195,220,1);
  border-radius:10px;
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  border:0;
}
</style>