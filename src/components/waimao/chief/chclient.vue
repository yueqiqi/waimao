<!-- 平台客户列表 -->
<template>
<div class='client'>
  <!-- 头部 -->
  <div class="adduser d-spb">
    <div class="d-flex"> 
      <div class="img"><img class="icon" src="../../../assets/waimao/icon/user.png" alt=""></div>
      <div class="title">角色管理</div>
    </div>
    <button @click="ref" class="ref"><img style="width:13px;height:13px;" src="../../../assets/waimao/icon/ref.png" alt=""> 刷新</button>
  </div>
  <!-- 下方盒子 -->
  <div class="gaine">
    <!-- 数据列表 -->
    <div class="d-flex">
      <div style="margin-left:16px;"><img class="icon" src="../../../assets/waimao/icon/saixuan2.png" alt=""></div>
      <div class="headline tit">数据列表</div>
    </div>
<!-- ================================================================== -->
    <table>
      <thead>
        <td>角色名称</td>
        <td>操作</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i">
        <td>{{item.role}}</td>
        <td style="color:#FF0000"><button class="root" @click="roots(i)">权限设置</button></td>
      </tbody>
    </table>
    <div></div>
    <!-- gaine -->
  </div>
  <!--  -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
inject: ['reload'],
components: {},
data() {
//这里存放数据
return {
  // 角色
  details:[
    {
      role:"业务经理",
    },
    {
      role:"业务经理",
    },
    {
      role:"业务经理",
    }
  ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  ref(){
    // 刷新
    this.reload()
    console.log("刷新")
  },
  // 权限设置
  roots(i){
    console.log("第"+i+"个权限设置")
    this.$router.push({
      name:"chroots",
      params:{
        id:i
      }
    })
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
/* 添加新用户 */
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
.tit{
  margin-left:10px;
}
/* 表格 */
table{
  width:100%;
  margin-left:21px;
  margin-top:22px;
}
table td{
  height:40px;
  text-align: center
}
table>thead td{
  background:#EDEDED;
  font-weight:bold;
color:rgba(51,51,51,1);
}
tbody td{
  font-weight:400;
  color:rgba(102,102,102,1);
}
table>:nth-child(odd){
  background:rgba(234,241,246,1);
}
/* 权限设置 */
.root{
  border:0;background: rgba(0,0,0,0);
  color:#FF0000;
}
</style>