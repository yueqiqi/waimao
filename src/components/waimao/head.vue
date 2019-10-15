<!--  -->
<template>
<div class='min'>
    <div class="d-spb" style="width:100%;">
        <div class="l1">
            <div class="d-flex ma">
                <img class="logo" src="../../assets/waimao/index/logo.png" alt=""/>
                <div class="font" style="margin-left:57px;">西安欧尼斯贸易有限公司易兔管理平台</div>
            </div>
        </div>
        <div class="l2" >
            <div class="d-flex ma" >
                <!-- 返回官网 -->
                <div class="d-flex" >
                <img class="icon1" src="../../assets/waimao/icon/home.png" alt=""/>
                <router-link to="#">
                <div class="font" style="margin-left:10px">返回官网</div>
                </router-link>
                </div>
                <!-- 用户名 -->
                <div class="d-flex" style="margin-left:49px;">
                    <img class="icon2" :src="head" alt=""/>
                    <div class="font" style="margin-left:10px">{{name}}</div>
                    <router-link class="font" style="color:rgba(6,102,164,1);margin-left:22px;" to="#">退出</router-link>
                </div>
                <!-- 退出 -->
            </div>
        </div>
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
    // 头像
    head:require("../../assets/waimao/icon/self.png"),
    // 用户名
    name:"用户名"
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.l1{
    margin-right:0px;
}
.l2{
 margin-right:160px;
}
.ma{
    margin:auto 0;
    /* margin-right:160px; */
}
.min{
    width: 100%;
    min-width:1040px;
    max-width:1920px;
    background:#fff;
}
/* 布局方式 */
.bg{
    height:70px;
background:rgba(255,255,255,1);
box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
}
.d-flex{
    display: flex;
    justify-content: left
}
/* logo样式 */
.logo{
    width:180px;height:30px;
    margin:auto 0;
    margin-left:23px;
}
/* 字体样式 */
.font{
    font-size:18px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
line-height: 70px;
}
/* 返回官网 */
.icon1{
    width:17px;height: 17px;
    margin:auto 0;
}
/* 用户 */
.icon2{
    width:30px;height: 30px;
    margin:auto 0;
}
</style>