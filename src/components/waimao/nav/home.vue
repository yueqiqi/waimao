<!--  -->
<template>
<div class="d-flex">
<div class='leftnav'>
  <!-- <el-row class="tac"> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
       @open="handleOpen"
      @close="handleClose" >
      <el-submenu index="1">
        <template slot="title">
          <div v-bind:class="{active:act}">
          <i class="icon"><img src="@/assets/waimao/index/home.png" alt=""></i>
          <span>首页</span>
          </div>
        </template>
      <el-menu-item-group>
        <template slot="title"></template>
        <!-- <el-menu-item :index="user==0?'/data':'/demo'">{{user==0?'首页':'瓷业'}}</el-menu-item> -->
        <el-menu-item :index="user==0?'/cindex':'/demo'">{{user==0?'数据统计':'瓷业'}}</el-menu-item>
        <el-menu-item :index="user==0?'/chclient':'/demo'">{{user==0?'角色管理':'瓷业'}}</el-menu-item>
        <el-menu-item :index="user==0?'/chroot':'/demo'">{{user==0?'权限管理':'瓷业'}}</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <!-- 客户列表 -->
      <el-submenu index="2">
        <template slot="title" >
          <div v-bind:class="{active:act2}">
          <i class="icon"><img src="@/assets/waimao/index/user.png" alt=""></i>
          <span>客户列表</span>
          </div>
        </template>
      <el-menu-item-group>
        <template slot="title"></template>
        <el-menu-item index="/chuser">中方客户</el-menu-item>
        <div class="border"></div>
        <el-menu-item index="/chuser">外方客户</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <!-- 订单列表 -->
      <el-submenu index="3">
        <template slot="title">
          <div v-bind:class="{active:act3}">
          <i class="icon"><img src="@/assets/waimao/index/order.png" alt=""></i>
          <span>订单列表</span>
          </div>
        </template>
      <el-menu-item-group>
        <template slot="title"></template>  
        <!-- <el-menu-item index="/chorders">订单列表</el-menu-item> -->
        <el-menu-item index="/chorders">委托订单</el-menu-item>
        <div class="border"></div>
        <el-menu-item index="/sfout">出口订单</el-menu-item>
        <div class="border"></div>
        <el-menu-item index="/chorderImport">进口订单</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="4">
        <template slot="title">
          <div v-bind:class="{active:act4}">
          <i class="icon"><img src="@/assets/waimao/index/emp.png" alt=""></i>
          <span>员工列表</span>
          </div>
        </template>
      <el-menu-item-group>
        <template slot="title"></template>
        <el-menu-item index="/demo2">业务经理</el-menu-item>
        <div class="border"></div>
        <el-menu-item index="/demo2">销售总监</el-menu-item>
        <div class="border"></div>
        <el-menu-item index="/demo2">总经理</el-menu-item>
      </el-menu-item-group>
      </el-submenu> -->
      <!--  -->
    </el-menu>
</div>
<!-- </el-row> -->
<!-- <el-col  class="content-wrapper"> -->
  <div style="margin-left:21px;">
    <div class="top"></div>
  <transition name="fade" mode="out-in">
     <router-view></router-view>
   </transition>
  </div>
 <!-- </el-col> -->
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
  // 判断登陆者信息
  user:0,
  act:false,
  act2:false,
  act3:false,
  act4:false,
  opens:null,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
handleOpen(id){
  console.log("打开"+id)
  if(id==1){
    this.act=true
  }
  if(id==2){
    this.act2=true
  }
  if(id==3){
    this.act3=true
  }
  if(id==4){
    this.act4=true
  }
},
handleClose(id){
  console.log("关闭"+id)
  if(id==1){
  this.act=false
  }
  if(id==2){
  this.act2=false
  }
  if(id==3){
  this.act3=false
  }
  if(id==4){
  this.act4=false
  }
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
updated() {
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.leftnav{
  /* border:1 solid red; */
  margin-top:1px;
  height:1100px;
  width:230px!important;
  /* text-align: center */
  background:#fff;
  border: 2 solid red;
  /* margin-left:100px; */
  /* display: flex;justify-content: left; */
}
/deep/ .el-submenu{
  /* padding-left:10px; */
  margin-top:10px;
}
.icon img{
  width:20px;height:20px;
  /* margin:auto; */
}
.el-menu {
  padding-left:10px;
  padding-right:10px;width:210px;
}
/deep/ .el-submenu__title{
  /* width:210px; */
height:50px;
background:rgba(6,102,164,1);
border-radius:5px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
line-height:50px;
}
/deep/ .el-submenu__title i{
  color:#fff;
}
/*  */
/deep/ .el-submenu__title{
  padding:0!important;
}
/* 图标 */
/deep/ .el-submenu__title .icon img{
  margin-top:-5px;
  margin-left:10px;
  margin-right:11px;
}
/* 选项框背景色 */
/deep/ .el-menu-item.is-active{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(6,102,164,1);
}

/* 下边框 */
.border{
  width:170px;
height:1px;
background:rgba(179,179,179,0.5);
margin-left:34px;
}
.active{
  width:210px;
height:50px;
background:rgba(154,195,220,1);
border-radius:5px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
line-height:50px;
}
/* 标题hover样式 */
/deep/ .el-submenu__title:hover{
opacity:1!important;
/* color:black!important; */
background:rgba(6,102,164,1);
}
.top{
  width:1719px;height:50px;background:rgba(255,255,255,1);
  margin-top:1px;
  margin-left:-30px;
}
</style>