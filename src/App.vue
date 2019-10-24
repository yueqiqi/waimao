<template>
 <div id="app" class="app-container">
    <app-header></app-header>
    <!-- 引入身子文件 -->
    <router-view v-if="isRouterAlive" style="z-index:999"></router-view>
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
      },
   // 刷新页面
  provide() { // 注册一个方法
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
        console.log('reload')
      })
    }
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
     max-width:1920px;min-width:1040px;
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

.el-form-item__error{
   position:static!important;
   text-align: center;
}
.leftss{
    position:fixed;top:70px;left:0
}
.icon{
   width:31px;height:31px;
}
.btn{
   background:rgba(6,102,164,1);
   text-align: center;
   border:0;
}
.headline{
   font-size:24px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.el-form-item__label{
   font-size:16px
}
</style>
