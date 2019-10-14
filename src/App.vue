<template>
 <div class="app-container">
    <app-header></app-header>
    <!-- 引入身子文件 -->
    <router-view style="z-index:999"></router-view>
    <!-- 引入侧边栏 -->
    <!-- <app-footer class="leftss"></app-footer> -->
 </div>
</template>
<script>
// // 引入头部模板
import AppHeader from "./components/waimao/head.vue"
import AppFooter from "./components/waimao/nav/home.vue"
// // 引入脚部模板
// import AppFooter from "./components/zuipin/footer.vue"
export default {
   name:"app",
   components:{
      AppHeader,
      AppFooter
      }
//       // 注册脚部
//       AppFooter
//    }
}
// </script>
<style>
   .app-container{
     padding-top:0px;
     padding-bottom:0px;
     overflow-x:hidden;
     font-family:Microsoft YaHei!important;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
a{
   text-decoration: none;
}
.d-flex{
   display: flex;
   justify-content: left;
}
.d-spb{
   display: flex;
   justify-content: space-between;
}
.bg{
   width:1920px;
}
.el-form-item__error{
   position:static!important;
   text-align: center;
}
.leftss{
    position:fixed;top:70px;left:0
}
</style>
