<!--  -->
<template>
<div class=''>
    <div>这是第二个demo</div>
    <i class="el-icon-edit"></i>
    <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
    <br>
    <br>
    <br>
    <!-- 步骤条 -->

<div>
<!-- 引入步骤条组件 -->
    <el-steps :active="active" align-center> 
                <el-step :title="item.title" @click.native ="stepClick(item.index)" v-for="item in stepData" icon="0" :key ="item.index">   
                </el-step>
    </el-steps>
</div>

       <el-button style="margin-top: 12px;" @click="pre" v-show="active>0||active==2">上一步</el-button>
       <el-button style="margin-top: 12px;" @click="next" v-show="active<3">下一步</el-button>

    <div>
        <el-row  class = "active0" v-show="active === 0" >
         <div>
             基本属性1
         </div>
        </el-row>
        <div>
        <el-row  class = "active0" v-show="active === 1" >
         <div>
             基本属性2
         </div>
        </el-row>
    </div>
    <div>
        <el-row  class = "active0" v-show="active === 2" >
         <div>
             基本属性3
         </div>
        </el-row>
    </div>
    </div>


    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div style="width:200px;height:300px;background:#fff;">
      <div style="width:300px;heightL400px;">
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!--  -->
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

        // percentage:0,
    // nav:0,
    // 
    active: 0, // 控制步骤条及填写条目的显示
    stepData: [{index: 0, title: '新增订单'},
           {index: 1, title: '订单准入'},
           {index: 2, title: '合同签订'}],
    nextTile:'下一步',

num:1,
id:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    stepClick (val) {
  var _that = this;
  _that.active = val;
},
    next() {
        if (this.active>0||this.active<2) {this.active++};
      },
    //   上一步
    pre(){
        if(this.active<2||this.active>1){
            this.active--
        }
    },
    handleChange(value){
        console.log(value);
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.id = this.$route.params.email,  //接受参数关键代码
            console.log(this.id) 
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
.add{
    width:100px;
height:30px;
background:rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height: 30px;
color:red;
margin-right:30px;
}
.active-select{
    color:blue;
    background:red;
}
</style>