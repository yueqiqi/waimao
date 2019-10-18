<!-- 添加新客户 -->
<template>
<div class='add'>
   <!-- 顶部导航条 -->
  <!-- <div class="top"></div> -->
  <div class="adduser d-flex">
    <div class="img"><img class="icon" src="../../../assets/waimao/icon/adduser.png" alt=""></div>
    <div class="title">新增订单</div>
  </div>
  <!-- 填写客户信息 -->
  <!-- <div class="fill"> -->
    <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><div class="fillTitle">内贸合同信息</div></span>
    <div style="height:100%;">

     <!-- <div class="out">外贸合同信息</div> -->
    <!-- 表单填写 -->
    <div class="fillForm">
    <el-form ref="form" class="company" :model="form" label-position="left" label-width="125px">
  <!-- 第一行 -->
  <div style="margin-bottom:19px;font-size:20px;color:#333;font-weight:blod">公司信息</div>
    <div class="d-flex">
    <!-- 公司名称 -->
      <el-form-item label="公司名称">
        <el-input placeholder="请填写买方公司名称" v-model="form.company"></el-input>
      </el-form-item>
    <!-- 合同类型 -->
      <el-form-item style="margin-left:101px;" label="合同类型">
        <el-select v-model="form.type" placeholder="请选择合同类型">
          <el-option label="采购合同" value="采购合同"></el-option>
          <el-option label="销售合同" value="销售合同"></el-option>
        </el-select>
      </el-form-item>
      <!-- 装运港 -->
      <el-form-item style="margin-left:101px;" label="装运港">
        <el-input type="text" placeholder="请填写装运港" v-model="form.port"></el-input>
      </el-form-item>
    </div>

    <!-- 第二行 -->
    <div class="d-flex">
       <!-- 联系人 -->
      <el-form-item label="联系人">
        <el-input type="text" placeholder="请填写联系人" v-model="form.linkMan"></el-input>
      </el-form-item>
    <!-- 合同金额 -->
      <el-form-item style="margin-left:101px;" label="合同金额">
        <el-input type="number" placeholder="请填写联系人电话" v-model="form.money"></el-input>
      </el-form-item>
      <!-- 目的港P -->
      <el-form-item style="margin-left:101px;" label="目的港">
        <el-input type="text" placeholder="请填写目的港" v-model="form.goal"></el-input>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
     <!-- 联系方式 -->
      <el-form-item label="联系方式">
        <el-input type="text" placeholder="请填写联系人联系方式" v-model="form.way"></el-input>
      </el-form-item>
      <!-- 价格条款 -->
      <el-form-item style="margin-left:101px;;" label="价格条款">
        <el-input type="email" placeholder="请填写联系人邮箱" v-model="form.rule"></el-input>
      </el-form-item>
    <!-- 是否分批次运出 -->
      <el-form-item style="margin-left:101px;" label="是否分批次出运">
        <el-radio-group v-model="form.radio">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
      <!-- 付款方式 -->
      <el-form-item label="付款方式">
        <el-input  type="text" placeholder="请填写付款方式" v-model="form.paytype"></el-input>
      </el-form-item> 
        <!-- 授信额度 -->
      <el-form-item style="margin-left:101px;" label="中信报保授信额度">
        <el-input  type="text" placeholder="请填写授信额度" v-model="form.zx"></el-input>
      </el-form-item> 
    </div>  
    </el-form>


    <!-- ----------------------------------------------------- -->
    <!-- 商品信息 -->
    <el-form ref="form" class="detail" :model="form2" label-position="left" label-width="82px">
      <div style="margin-top:10px;margin-bottom:19px;font-size:20px;color:#333;font-weight:blod">商品信息</div>
    <div class="d-flex">
      <!-- 商品名称 -->
     <el-form-item label="商品名称">
       <el-input  type="text" placeholder="请填写商品名称" v-model="form2.title"></el-input>
     </el-form-item>
     <!-- 规格型号 -->
     <el-form-item style="margin-left:48px;" label="规格型号">
       <el-input  type="text" placeholder="请填写商品规格" v-model="form2.type"></el-input>
     </el-form-item>
     <!-- 法定数量 -->
     <el-form-item style="margin-left:48px;" label="法定数量">
       <el-input  type="text" placeholder="请填写商品数量" v-model="form2.num"></el-input>
     </el-form-item>
     <!-- 单位 -->
     <el-form-item style="margin-left:48px;" label="单位">
       <el-input  type="text" placeholder="请填写商品单位" v-model="form2.unit"></el-input>
     </el-form-item>
    </div>
    <div class="d-flex">
      <!-- 货币 -->
     <el-form-item label="货币">
       <el-input  type="text" placeholder="请填写货币" v-model="form2.hb"></el-input>
     </el-form-item>
     <!-- 商品单价 -->
     <el-form-item style="margin-left:48px;" label="商品单价">
       <el-input  type="text" placeholder="请填写商品单价" v-model="form2.price"></el-input>
     </el-form-item>
     <!-- 单位 -->
     <el-form-item style="margin-left:48px;" label="商品总金额">
       <el-input  type="text" placeholder="请填写商品总金额" v-model="form2.money"></el-input>
     </el-form-item>
    <button class="detailbtn" @click="detailbtn">确认添加</button>
    </div>
    </el-form>
  </div>
  <!-- ---------------------------------------------------------------- -->
  <!-- 表格 -->
  <div style="display:flex;justify-content: flex-end;margin-right:63px;">

  <button @click="load" style="border-top-right-radius:0;border-bottom-right-radius:0;" class="load d-flex"><div style="margin-left:7px;">导入表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
 
  <button @click="unload" style="margin-left:1px;border-bottom-left-radius:0;border-top-left-radius: 0;" class="load d-flex"><div style="margin-left:7px;">导出表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
  </div>
  <div style="margin-left:57px;margin-top:10px;margin-bottom:49px;">
    <table>
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:180px;">规格型号</td>
        <td style="width:180px;">法定数量</td>
        <td style="width:165px;">单位</td>
        <td style="width:165px;">货币</td>
        <td style="width:180px;">商品单价</td>
        <td style="width:180px;">商品总金额</td>
        <td style="width:196px;">操作</td>
      </thead>
    </table>
    <table class="table">
      <tr v-for="(item,i) in table" :key="i">
        <td style="width:241px;">{{item.title}}</td>
        <td style="width:181px;">{{item.type}}</td>
        <td style="width:181px;">{{item.num}}</td>
        <td style="width:166px;">{{item.unit}}</td>
        <td style="width:166px;">{{item.hb}}</td>
        <td style="width:181px;">{{item.price}}</td>
        <td style="width:181px;">{{item.money}}</td>
        <td style="width:197px;">
          <button class="btn set" @click="set(i)">编辑</button>
          <button class="btn del" @click="del(i)">删除</button>
        </td>
      </tr>
    </table>
  </div>
  <!--  -->
  <div style="display: flex;justify-content: center;">
    <button class="mybtn btn" @click="submit">确认添加</button>
  </div>
  </div>
  </el-tab-pane>
  <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
  <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
  <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
 <el-tab-pane>
   <span slot="label"><div class="fillTitle">外贸合同信息</div></span>
   <div style="height:100%;">

     <!-- <div class="out">外贸合同信息</div> -->
    <!-- 表单填写 -->
    <div class="fillForm">
    <el-form ref="form" class="company" :model="form3" label-position="left" label-width="125px">
  <!-- 第一行 -->
  <div style="margin-bottom:19px;font-size:20px;color:#333;font-weight:blod">公司信息</div>
    <div class="d-flex">
    <!-- 公司名称 -->
      <el-form-item label="公司名称">
        <el-input placeholder="请填写买方公司名称" v-model="form3.company"></el-input>
      </el-form-item>
    <!-- 合同类型 -->
      <el-form-item style="margin-left:101px;" label="合同类型">
        <el-select v-model="form3.type" placeholder="请选择合同类型">
          <el-option label="采购合同" value="采购合同"></el-option>
          <el-option label="销售合同" value="销售合同"></el-option>
        </el-select>
      </el-form-item>
      <!-- 装运港 -->
      <el-form-item style="margin-left:101px;" label="装运港">
        <el-input type="text" placeholder="请填写装运港" v-model="form3.port"></el-input>
      </el-form-item>
    </div>

    <!-- 第二行 -->
    <div class="d-flex">
       <!-- 联系人 -->
      <el-form-item label="联系人">
        <el-input type="text" placeholder="请填写联系人" v-model="form3.linkMan"></el-input>
      </el-form-item>
    <!-- 合同金额 -->
      <el-form-item style="margin-left:101px;" label="合同金额">
        <el-input type="number" placeholder="请填写联系人电话" v-model="form3.money"></el-input>
      </el-form-item>
      <!-- 目的港P -->
      <el-form-item style="margin-left:101px;" label="目的港">
        <el-input type="text" placeholder="请填写目的港" v-model="form3.goal"></el-input>
      </el-form-item>
    </div>
    <!-- 第三行 -->
    <div class="d-flex">
     <!-- 联系方式 -->
      <el-form-item label="联系方式">
        <el-input type="text" placeholder="请填写联系人联系方式" v-model="form3.way"></el-input>
      </el-form-item>
      <!-- 价格条款 -->
      <el-form-item style="margin-left:101px;;" label="价格条款">
        <el-input type="email" placeholder="请填写联系人邮箱" v-model="form3.rule"></el-input>
      </el-form-item>
    <!-- 是否分批次运出 -->
      <el-form-item style="margin-left:101px;" label="是否分批次出运">
        <el-radio-group v-model="form3.radio">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <!-- 第四行 -->
    <div class="d-flex">
      <!-- 付款方式 -->
      <el-form-item label="付款方式">
        <el-input  type="text" placeholder="请填写付款方式" v-model="form3.paytype"></el-input>
      </el-form-item> 
        <!-- 授信额度 -->
      <el-form-item style="margin-left:101px;" label="中信报保授信额度">
        <el-input  type="text" placeholder="请填写授信额度" v-model="form3.zx"></el-input>
      </el-form-item> 
    </div>  
    </el-form>


    <!-- ----------------------------------------------------- -->
    <!-- 商品信息 -->
    <el-form ref="form" class="detail" :model="form4" label-position="left" label-width="82px">
      <div style="margin-top:10px;margin-bottom:19px;font-size:20px;color:#333;font-weight:blod">商品信息</div>
    <div class="d-flex">
      <!-- 商品名称 -->
     <el-form-item label="商品名称">
       <el-input  type="text" placeholder="请填写商品名称" v-model="form4.title"></el-input>
     </el-form-item>
     <!-- 规格型号 -->
     <el-form-item style="margin-left:48px;" label="规格型号">
       <el-input  type="text" placeholder="请填写商品规格" v-model="form4.type"></el-input>
     </el-form-item>
     <!-- 法定数量 -->
     <el-form-item style="margin-left:48px;" label="法定数量">
       <el-input  type="text" placeholder="请填写商品数量" v-model="form4.num"></el-input>
     </el-form-item>
     <!-- 单位 -->
     <el-form-item style="margin-left:48px;" label="单位">
       <el-input  type="text" placeholder="请填写商品单位" v-model="form4.unit"></el-input>
     </el-form-item>
    </div>
    <div class="d-flex">
      <!-- 货币 -->
     <el-form-item label="货币">
       <el-input  type="text" placeholder="请填写货币" v-model="form4.hb"></el-input>
     </el-form-item>
     <!-- 商品单价 -->
     <el-form-item style="margin-left:48px;" label="商品单价">
       <el-input  type="text" placeholder="请填写商品单价" v-model="form4.price"></el-input>
     </el-form-item>
     <!-- 单位 -->
     <el-form-item style="margin-left:48px;" label="商品总金额">
       <el-input  type="text" placeholder="请填写商品总金额" v-model="form4.money"></el-input>
     </el-form-item>
    <button class="detailbtn" @click="detailbtn2">确认添加</button>
    </div>
    </el-form>
  </div>
  <!-- ---------------------------------------------------------------- -->
  <!-- 表格 -->
  <div style="display:flex;justify-content: flex-end;margin-right:63px;">

  <button @click="load2" style="border-top-right-radius:0;border-bottom-right-radius:0;" class="load d-flex"><div style="margin-left:7px;">导入表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
 
  <button @click="unload2" style="margin-left:1px;border-bottom-left-radius:0;border-top-left-radius: 0;" class="load d-flex"><div style="margin-left:7px;">导出表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
  </div>
  <div style="margin-left:57px;margin-top:10px;margin-bottom:49px;">
    <table>
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:180px;">规格型号</td>
        <td style="width:180px;">法定数量</td>
        <td style="width:165px;">单位</td>
        <td style="width:165px;">货币</td>
        <td style="width:180px;">商品单价</td>
        <td style="width:180px;">商品总金额</td>
        <td style="width:196px;">操作</td>
      </thead>
    </table>
    <table class="table">
      <tr v-for="(item,i) in table2" :key="i">
        <td style="width:241px;">{{item.title}}</td>
        <td style="width:181px;">{{item.type}}</td>
        <td style="width:181px;">{{item.num}}</td>
        <td style="width:166px;">{{item.unit}}</td>
        <td style="width:166px;">{{item.hb}}</td>
        <td style="width:181px;">{{item.price}}</td>
        <td style="width:181px;">{{item.money}}</td>
        <td style="width:197px;">
          <button class="btn set" @click="set2(i)">编辑</button>
          <button class="btn del" @click="del2(i)">删除</button>
        </td>
      </tr>
    </table>
  </div>
  <!--  -->
  <div style="display: flex;justify-content: center;">
    <button class="mybtn btn" @click="submit2">确认添加</button>
  </div>
  </div>
 </el-tab-pane>

</el-tabs>
    
   
  <!-- </div> -->
  <!-- 填写客户基本信息 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VDistpicker from 'v-distpicker'
export default {
  //import引入的组件需要注入到对象中才能使用
components: {},
data() {
  //这里存放数据
return {
table2:[
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"t",
      hb:"USD",
      price:"1,000.00",
      money:"100,000,00",
    },
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1,000.00",
      money:"100,000,00",
    }
  ],
  // 商品信息
  form4:{
    // 商品名称
    title:"",
    // 规格型号
    type:"",
    // 法定数量
    num:"",
    // 单位
    unit:"", 
    // 货币
    hb:"",
    // 商品单价
    price:"",
    // 商品总金额
    money:"",
  },
  // 公司信息
  form3:{
    // 公司名称
    company:"",
    // 合同采购
    type:"",
    // 装运港
    port:"",
    // 联系人
    likeMan:"",
    // 合同金额
    money:"",
    // 目的港
    goal:"",
    // 联系方式
    way:"",
    // 价格条款
    rule:"",
    // 是否分批次出运
    radio:1,
    // 付款方式
    paytype:"",
    // 授信额度
    zx:"",
  },
  // 内贸
  // 表格
  table:[
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1,000.00",
      money:"100,000,00",
    },
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1,000.00",
      money:"100,000,00",
    }
  ],
  // 商品信息
  form2:{
    // 商品名称
    title:"",
    // 规格型号
    type:"",
    // 法定数量
    num:"",
    // 单位
    unit:"", 
    // 货币
    hb:"",
    // 商品单价
    price:"",
    // 商品总金额
    money:"",
  },
  // 公司信息
  form:{
    // 公司名称
    company:"",
    // 合同采购
    type:"",
    // 装运港
    port:"",
    // 联系人
    likeMan:"",
    // 合同金额
    money:"",
    // 目的港
    goal:"",
    // 联系方式
    way:"",
    // 价格条款
    rule:"",
    // 是否分批次出运
    radio:1,
    // 付款方式
    paytype:"",
    // 授信额度
    zx:"",
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 外贸
   // 删除
  del2(i){
    this.table2.splice(i,1)
    console.log("删除")
    console.log(i)
  },
  // 编辑
  set2(i){
    console.log("编辑")
    console.log(i)
  },
  // 导入按钮
  load2(){
    console.log("导入按钮")
  },
  // 导出按钮
  unload2(){
    console.log("导出按钮")
  },
  // 商品信息添加按钮
  detailbtn2(e){
    var newtable=this.form4
    this.table2.push(newtable)
    e.preventDefault()
    console.log("商品信息提交按钮")
  },
  // ra
  // radio(){
  //   console.log(this.form.radio)
  // },

// 提交所有信息
submit2(){
  console.log(this.form)
  console.log("省份："+this.province,"城市："+this.city,"地区："+this.area)
  var form=JSON.stdingify(this.form)
  setTimeout(()=>{
    this.$router.push({
         path:'/chinauser',
         query:{
           form,
         }
       })
  },1000)
},
  // 内贸///////////////////////////////////////////////////////////////////
  // 删除
  del(i){
    this.table.splice(i,1)
    console.log("删除")
    console.log(i)
  },
  // 编辑
  set(i){
    console.log("编辑")
    console.log(i)
  },
  // 导入按钮
  load(){
    console.log("导入按钮")
  },
  // 导出按钮
  unload(){
    console.log("导出按钮")
  },
  // 商品信息添加按钮
  detailbtn(e){
    var newtable=this.form2
    this.table.push(newtable)
    e.preventDefault()
    console.log("商品信息提交按钮")
  },
  // ra
  // radio(){
  //   console.log(this.form.radio)
  // },

// 提交所有信息
submit(){
  console.log(this.form)
  console.log("省份："+this.province,"城市："+this.city,"地区："+this.area)
  var form=JSON.stdingify(this.form)
  setTimeout(()=>{
    this.$router.push({
         path:'/chinauser',
         query:{
           form,
         }
       })
  },1000)
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
beforeDestdoy() {}, //生命周期 - 销毁之前
destdoyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
/* 顶部指示器 */
.leftnav[data-v-777f4df8]{
  height:1181px!important;
}
.top{
  width:1689px;height:50px;background:rgba(255,255,255,1);
  margin-top:1px;
  margin-left:-30px;
}
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
/* 填写信息外部大框 */
.fill{
  width:1649px;
/* height:859px; */
background:rgba(255,255,255,1);
/* margin-top:10px;
padding-top:40px; */
}
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item{
width:200px;
height:46px;
background:rgba(237,237,237,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(153,153,153,1);
/* margin-right:200px; */
margin-left:57px!important;
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
margin-top:31px;
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
  width:320px!important;
/* height:30px!important; */
background:rgba(237,237,237,1);
border-radius:10px!important;
}
/* 联系人输入框 */
.company .el-input{
   width:320px!important;
height:30px!important;
background:rgba(237,237,237,1);
border-radius:10px!important;
}
 .company /deep/ input{
  background:rgba(237,237,237,1)!important;
  width:320px!important;
/* height:30px!important; */
border-radius:10px!important;
margin-top:-10px!important;
}
.detail /deep/ input{
    background:rgba(237,237,237,1)!important;
  width:200px!important;
  border-radius:10px!important;
}
/deep/ .distpicker-address-wrapper select {
  padding-left:10px;
}
/* 合作资料 */
.coop{
  margin-left:57px;
}
.coopTitle{
  font-size:16px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:19px;
}
/* * */
ol li span{
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:#FF0000;
}
ol li{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:27px;
} 
/* 上传资料 */
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
  /* 商品信息提交按钮 */
  .detailbtn{
    width:200px;
height:30px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0;
margin-left:130px;

  }
  /* 导入导出按钮 */
.load{
   width:100px;
height:30px;
background:rgba(154,195,220,1);
border-radius:10px;

text-align: center;
line-height: 30px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0;
}
/* 提交按钮 */
.mybtn{
  width:170px;
height:46px;
background:rgba(6,102,164,1);
border-radius:10px;
color:#fff;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:400;
}
/deep/ .el-upload-list__item{
  width:300px;
}
.el-upload-list{
  margin-left:57px!important;margin-bottom:23px;
}
/* 选项卡选中样式 */
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
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
/* margin-right:200px; */
}
/deep/ .el-tabs--border-card{
  border:0;
  /* height:859px; */
  -webkit-box-shadow:none;
  box-shadow:none;
  margin-top:10px;
padding-top:40px;
}
/deep/ .el-tabs--border-card>.el-tabs__header{
  border:0;
  background:#fff;
}
/* 表格 */
table td{
  height:40px;
}
table>thead td{
  background:rgba(237,237,237,1);
  text-align: center;
  border-right:1px solid #fff;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.table tr td{
  text-align: center;
  /* background:#fff; */
}
.table>:nth-child(even){
  background:rgba(234,241,246,1)!important;
}
/* 编辑删除 */
.set{
  width:60px;
height:20px;
background:rgba(255,60,0,1);
border-radius:3px;
text-align:center;
line-height:20px;
color:#fff;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
}
.del{
  margin-left:5px;
  width:60px;
height:20px;
background:rgba(89,210,106,1);
border-radius:3px;
text-align:center;
line-height:20px;
color:#fff;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
}
</style>