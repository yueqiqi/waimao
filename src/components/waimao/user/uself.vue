<!-- 个人信息 -->
<template>
<div class='uself'>
  <!-- 权限管理 -->
  <div class="adduser d-flex">
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/adduser.png" alt=""></div>
      <div class="title">个人信息</div>
  </div>
  <div class="gaine">
    <div class="c1">类型<span v-show="type==''?false:true" style="color:#0666A4;margin-left:20px;">我是{{type}}</span></div>
    <!-- gaine -->
    <div class="uas">
    <div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">单位名称</li>
        <li>统一信用代码</li>
      </ul>
      <ul class="d-flex" style="color:#0666A4">
        <li style="margin-left:-40px;">{{self.company}}</li>
        <li>{{self.code}}</li>
      </ul>
    </div>
    <!-- 第二行 -->
    <div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">联系人</li>
        <li>联系电话</li>
        <li>联系地址</li>
      </ul>
      <ul class="d-flex" style="color:#0666A4">
        <li style="margin-left:-40px;">{{self.linkman}}</li>
        <li>{{self.phone}}</li>
        <li style="width:700px;">{{self.address}}</li>
      </ul>
    </div>
    <!-- 第三行 -->
    <div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">微信</li>
        <li>邮箱</li>
        <li>Whatapp</li>
        <li>Facebook</li>
      </ul>
      <ul class="d-flex" style="color:#0666A4">
        <li style="margin-left:-40px;">{{self.wx}}</li>
        <li>{{self.email}}</li>
        <li>{{self.app}}</li>
        <li>{{self.face}}</li>
      </ul>
    </div>
    <div>
      <ul class="d-flex">
        <li style="margin-left:-40px;">备注</li>
      </ul>
      <ul class="d-flex" style="color:#0666A4">
        <li style="margin-left:-40px;width:800px;">{{self.other}}</li>
      </ul>
    </div>
    </div>

    <!-- 其他资料 -->
    <div>
      <div class="coop">
            <div class="coopTitle">您需要提交的申请包括</div>
            <div class="d-flex" style="margin-left:-25px;">
              <ol type="1">
                <li>营业执照<span>*</span></li>
                <li>法定代表人与实际控制人身份证<span>*</span></li>
                <li>银行账户信息<span>*</span></li>
                <li>征信报告（公司、法人及实际控制人）<span>*</span></li>
                <li>最近一次验资报告</li>
                <div style="color:#FF0000;font-size:14px;font-weight:400;margin-left:-16px;margin-top:9px;">注：以上资料均为复印件（加盖企业公章）</div>
              </ol>
              <ol start="6" style="margin-left:214px;">
                <li>公司章程</li>
                <li>企业简介</li>
                <li>主营相关资格证书</li>
                <li>最近一年财务报表明细或最新的审计报告</li>
                <li>资产证明文件（公司、法人及实际监控人名下，如房屋产权证、车辆产权证等）</li>
              </ol>
            </div>
          </div>
          <div style="">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
              <button class="upload"><img style="width:10px;height:10px;" src="../../../assets/waimao/icon/add.png" alt="">上传资料</button>
            </el-upload>
            </div>
        </div>
    </div>
    <!-- gaine -->
  </div>
  <!-- uself -->
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
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
  self:{
    // 公司名称
    company:"仰光强大印务有限公司",
    // 统一信用代码
    code:"915223DFGHHJKL",
    // 联系人
    linkman:"王麻子",
    // 联系电话
    phone:13500000000,
    // 联系地址
    address:"重庆市江北区某某路某某号几杠几",
    // 微信
    wx:"415adfas",
    // 邮箱
    email:"asda@163.com",
    // wahtapp
    app:"46a5sfas",
    // Facebook
    face:"145asfdasf",
    // 备注
    other:"",
  },
  // 我是类型
  type:"外方"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 上传文件
   submitUpload() {
        this.$refs.upload.submit();
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  if(this.self.other==""){
    this.self.other="-"
  }
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
.uself{
  font-weight:400
}
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
  padding-top:40px;
  overflow-y:auto;
  padding-left:56px;
}
.c1{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.uas ul li{
  list-style: none;
  width:220px;
}
ul :first-child{
  margin-left:-40px;
}
.coop{
  /* margin-left:57px; */
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
  margin-left:57px!important;margin-bottom:23px;
}

.u1 li{
  list-style: none;
  /* float:left; */
  margin-right:139px;
}
</style>