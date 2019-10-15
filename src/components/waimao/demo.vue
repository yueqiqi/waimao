<!--  -->
<template>
<div class=''>
    <div>这是一个新demo</div>
		<h1>省市区选择器</h1>
		<div>
			<v-distpicker :province="select.province" :city="select.city" @selected="sub" :area="select.area"></v-distpicker>
		</div>
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
select: { province: '', city: '', area: '' },
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
sub(data){
	console.log("省份："+data.province.value)
	console.log("市："+data.city.value)
	console.log("地区："+data.area.value)
},
// selected(){
// 	console.log(123)
// }
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
/* 地区选择器样式 */
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
margin-right:9px
}

</style>