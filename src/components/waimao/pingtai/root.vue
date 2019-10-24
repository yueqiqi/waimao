<!-- 权限设置 -->
<template>
<div class='root'>
  <!-- 权限管理 -->
  <div class="adduser d-spb">
    <div class="d-flex"> 
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/root.png" alt=""></div>
      <div class="title">权限管理</div>
    </div>
    <button @click="ref" class="ref"><img style="width:13px;height:13px;" src="../../../assets/waimao/icon/ref.png" alt=""> 刷新</button>
  </div>
  <!-- 盒子 -->
  <div class="gaine">
    <div class="d-flex">
      <div style="margin-left:17px;"><img class="icon" src="../../../assets/waimao/icon/usernum.png" alt=""></div>
      <div class="headline tit">当前角色</div>
      <div class="headline t2">{{role}}</div>
    </div>
    <!-- ============================================================== -->
    <div style="width:1569px;margin-left:21px;margin-top:22px;">
      <div class="allbox">
        <div style="padding-top:10px;margin-left:37px;font-weight:bold;" class="big">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">所有权限</el-checkbox>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">选择全部</el-checkbox>
        </div>
      </div>

      <div style="width:1529px;margin-top:10px;margin-left:37px;" class="bg">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox style="margin-right:52px;width:165px;" v-for="city in cities" :label="city" :key="city">{{city}}
          </el-checkbox>
        </el-checkbox-group>
        </div>

    </div>

<!-- 保存 -->
    <button class="btn save" @click="save">保存</button>

    <!-- gaine -->
  </div>
  <!-- root -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const cityOptions = ['录入客户基本信息', '上传中信保资信批单', '填写订单准入表单信息', '上传合同',"上传验货报告","上传验货照片","修改验货数据","报关运输等单据等上传","上传退税单","填写结算汇总","员工管理","合同审批","业务经理上传的数据审核"];
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
inject: ['reload'],
data() {
//这里存放数据
return {
  // 保存数据
  value:"",
  checkAll: false,
  checkedCities: [],
  cities: cityOptions,
  isIndeterminate: true,
  role:"业务经理"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // 全选
  handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
      console.log("选择全部")
      console.log("hand"+val)
    },
// 单选复选
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      console.log("ch"+value);
      this.value=value
    },
    // 保存
    save(){
      console.log(this.value)
    },

  ref(){
    // 刷新
    this.reload()
    console.log("刷新")
  },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  console.log("获取传递的参数",this.$route.params)
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
/* 刷新按钮 */
.ref{
  width:90px;
height:30px;
background:rgba(154,195,220,1);
border-radius:5px;
text-align: center;
line-height: 30px;
color:#fff;
border:0;
margin:auto 0;
margin-right: 60px;
}
/* 盒子 */
.gaine{
  width:100%;
  height:859px;
  background: #fff;
  margin-top:10px;
  padding-top:19px;
  overflow-y:auto
}
/*当前角色 */
.tit{
  margin-left:9px;
  margin-right:10px;
}
.t2{
  color: #0666A4
}
.allbox{
height:40px;
background:rgba(237,237,237,1);
}
.bg :nth-child(8){
  padding-top:10px;
}

/deep/ .el-checkbox__inner{
  width:20px;
height:20px;
background:rgba(255,255,255,1);
border:2px solid rgba(204,204,204,1);
border-radius:5px;
}
/deep/ .el-checkbox__inner::after{
  left:6px;
  top:3px;
}
/deep/ .big .el-checkbox__label{
  font-size:16px!important;font-weight:bold!important
}
.save{
  width:170px;
height:46px;
background:rgba(6,102,164,1);
border-radius:10px;
color:#fff;
font-size:20px;
margin-top:50px;
margin-left:740px;
}
</style>