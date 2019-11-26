<!-- 委托销售 -->
<template>
<div class='usell'>
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/root.png" alt=""></div>
    <div class="title">委托详情</div>
  </div>
  <div class="gaine">


<div >
<el-form @submit.native.prevent ref="form" :model="form" label-position="left" label-width="150px">
        <div class="chooseTitle">客户业务类型</div>
        <div style="margin-top:26px;">
        <el-form-item label="客户业务类型">
         <el-input type="text" :disabled="true" v-model="form.type==1?'一般业务':'融资业务'"></el-input>
        </el-form-item>
        </div>
        <!--  -->
        <!-- 第一行 -->
  <div class="chooseTitle" style="margin-top:60px;margin-bottom:19px;">委托方信息</div>
    <div class="d-flex">
    <!-- 委托时间 -->
      <el-form-item label="委托时间">
        <el-input type="text" :disabled="true" v-model="form.create_at"></el-input>
      </el-form-item>
    <!-- 委托公司联系人 -->
      <el-form-item style="margin-left:70px;" label="委托公司联系人">
        <el-input type="text" :disabled="true" v-model="form.contacts"></el-input>
      </el-form-item>
      <!-- 目的港 -->
      <el-form-item style="margin-left:70px;" label="目的港">
        <el-input type="text" :disabled="true" v-model="form.objective_port"></el-input>
      </el-form-item>
    </div>

    <!-- 第二行 -->
    <div class="d-flex">
       <!-- 委托公司信息 -->
      <el-form-item label="委托公司信息">
        <el-input type="text" :disabled="true" v-model="form.corporate_name"></el-input>
      </el-form-item>
    <!-- 委托公司联系电话 -->
      <el-form-item style="margin-left:70px;" label="委托公司联系电话">
        <el-input type="number" :disabled="true" v-model="form.phone"></el-input>
      </el-form-item>
      <!-- 交货期 -->
      <el-form-item style="margin-left:70px;" label="交货期">
        <div class="d-flex">
          <el-input type="text" :disabled="true" v-model="form.delivery_date"></el-input>
        </div>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
     <!-- 销售合同金额 -->
      <el-form-item label="销售合同总金额">
        <el-input type="text" :disabled="true" v-model="form.contract_money"></el-input>
      </el-form-item>
      <!-- 付款方式 -->
      <el-form-item style="margin-left:70px;;" label="付款方式">
        <el-input type="text" :disabled="true" v-model="form.payment_type"></el-input>
      </el-form-item>
    <!-- 是否分批次运出 -->
      <el-form-item style="margin-left:70px;" label="备注信息">
        <el-input  type="text" :disabled="true" v-model="form.remarks"></el-input>
      </el-form-item>
    </div>

<!-- 买入公司 -->
    <div class="chooseTitle" style="margin-top:61px;margin-bottom:20px;">合作方信息</div>
    <div class="d-flex">
    <!-- 买入公司名称 -->
      <el-form-item label="公司名称">
        <el-input type="text" :disabled="true" v-model="form.seller_corporate_name"></el-input>
      </el-form-item>
    <!-- 收汇方式 -->
      <el-form-item style="margin-left:70px;" label="收汇方式">
        <el-input type="text" :disabled="true" v-model="form.payment_method	"></el-input>
      </el-form-item>
      <!-- 中信保授信额度 -->
      <el-form-item style="margin-left:70px;" label="中信保授信额度">
        <el-input type="text" :disabled="true" v-model="form.citic_quota"></el-input>
      </el-form-item>
    </div>
    <!-- 第二行 -->
    <div class="d-flex">
    <!-- 联系人 -->
      <el-form-item label="联系人">
        <el-input type="text" :disabled="true" v-model="form.seller_name"></el-input>
      </el-form-item>
    <!-- 目的港 -->
      <el-form-item style="margin-left:70px;" label="目的港">
        <el-input type="text" :disabled="true" v-model="form.seller_objective_port	"></el-input>
      </el-form-item>
      <!-- 上传附件 -->
      <el-form-item style="margin-left:70px;" label="上传附件">
        <div>
          <el-upload class="upload-demo" ref="upload" :on-change="getFileName" action="http://192.168.0.140:8002/main/tools/upFile" :on-preview="handlePreview"  :file-list="fileList" :auto-upload="true">
        <!-- <button class="uploads" >上传采购清单（Excel格式）</button> -->
        <!-- <el-button size="small" type="primary"  @click="submitUpload">上传采购清单（Excel格式）</el-button> -->
        </el-upload>
        </div>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
      <el-form-item label="联系方式">
        <el-input type="text" :disabled="true" v-model="form.seller_phone"></el-input>
      </el-form-item>
    <!-- 是否分批出运 -->
      <el-form-item style="margin-left:70px;" label="是否分批出运">
        <el-radio-group v-model="form.is_batch">
          <el-radio :label="1" :disabled="true">是</el-radio>
          <el-radio :label="0" :disabled="true">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
    <!-- 购买合同总金额 -->
      <el-form-item label="购买合同总金额">
        <el-input type="text" :disabled="true" v-model="form.seller_contract_money"></el-input>
      </el-form-item>
    <!-- 成交方式 -->
      <el-form-item style="margin-left:70px;" label="成交方式">
        <el-input type="text" :disabled="true" v-model="form.transaction_mode"></el-input>
       <!-- <el-select v-model="form.payway" placeholder="请选择成交方式">
              <el-option label="支付宝" value="支付宝"></el-option>
              <el-option label="微信" value="微信"></el-option>
        </el-select> -->
      </el-form-item>
    </div>
      <!-- <div style="display:flex;justify-content: center;padding-bottom:20px">
        <button @click="confirm" style="width:170px;height:46px;background:rgba(6,102,164,1);border-radius:10px;font-size:20px;color:#fff;border:0">完成提交</button>
      </div> -->

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
    // 后台返回上传地址
  files:[],
  // 上传文件地址
   fileList: [ ],
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
    companymes:"",
    // 目的港
    goal:"",
    // 委托公司联系人
    linkman:"",
    // 委托时间
    time:"",
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
  // 上传文件
  /**
   * 选取文件
   */
getFileName(){
  
},
upsuc(e){
  console.log('上传成功',e)
  this.files.push(e.data)
  this.look=e.data.full_path
  console.log('查看的地址',this.look)
  // this.sp.push(e.data.path('_'))
    // 为原数组添加新的下标
  this.files.forEach((item,index)=> {
    item.num = index+1;
    item.type=5
  })
},
submitUpload(file) {
  this.$refs.upload.submit();
},
handleRemove(file, fileList,e) {
  console.log('删除的文件地址',file,'删除的文件路径', fileList,e);
  // this.files
  for(var i in file){
    for(var m in this.files){
      if(file[i].name==this.files[m].file_name){
        this.files.splice(m,1)
      }
    }
  }
},
handlePreview(file) {
  console.log('文件列表',file);
  window.open(file)
},
},
beforeCreate(){
  var id =this.$route.query.id
  var user_id=this.$route.query.user_id
  console.log('传参',id)
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  id,
  }
  this.$ajax.post('/entrust/getEntrustInfo',params).then((res)=>{
      console.log('请求委托详情结果',res)
    if(res.data.code==200){
      that.form=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })

    // var	Token=window.localStorage.getItem('token')
    // var	that=this
    var	params={
    Token,
    order_id:id,
    type:1,
    user_id,
    }
    this.$ajax.post('/tools/getFile',params).then((res)=>{
        console.log('请求结果',res)
      if(res.data.code==200){
        this.fileList=res.data.data
      }else{
      alert(res.data.msg)
    }
      }).catch((err)=>{
        console.log('请求失败',err)
      })
},
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