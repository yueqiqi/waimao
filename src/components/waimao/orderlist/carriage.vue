<!-- 报关运输 -->
<template>
<div class='carriage'>
  <div class="carriageTitle">报关运输</div>
  <div class="d-flex">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <div class="times" style="margin-top:32px;">请提交申请资料</div>

  <div class="d-flex" style="margin-left:-20px;">
  <ol>
    <li>箱单</li>
    <li>发票</li>
    <li>报关单</li>
  </ol>
  <ol start="3">
    <li>提单</li>
    <li>商业保险</li>
    <li>中信保保单</li>
  </ol>
  </div>
  <!-- 第一次出货 -->
  <div style="color:#0666A4;font-weight:bold;font-size:20px;">第一次出货 <span style="color:#FF0000;font-weight:400;font-size:14px;">请上传对应的报关资料</span></div>
 <div style="margin-top:20px;">
    <el-upload class="upload-demo" ref="upload" :on-change="getFileName" action="http://192.168.0.140:8002/main/tools/upFile" :on-preview="handlePreview" :on-success="upsuc" :on-remove="handleRemove" :file-list="fileList" :auto-upload="true">
    <el-button size="small" type="primary"  @click="submitUpload">上传资料</el-button>
    </el-upload>
    <el-button style="margin-top:30px;" @click="confirm" size="small" type="success">确认上传</el-button>
 </div>
  <!-- carriage -->
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
  // 后台返回上传地址
  files:[],
  // 上传文件地址
   fileList: [ ],
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 // 上传文件
  /**
   * 选取文件
   */
getFileName(){
  
},
upsuc(e){
  console.log('上传成功',e)
  this.files.push(e.data)
  this.look=e.data.full_path
  console.log('查看的地址',this.look)
  // this.sp.push(e.data.path('_'))
    // 为原数组添加新的下标
  this.files.forEach((item,index)=> {
    item.num = index+1;
    item.type=5
  })
},
submitUpload(file) {
  this.$refs.upload.submit();
},
handleRemove(file, fileList,e) {
  console.log('删除的文件地址',file,'删除的文件路径', fileList,e);
  // this.files
  for(var i in file){
    for(var m in this.files){
      if(file[i].name==this.files[m].file_name){
        this.files.splice(m,1)
      }
    }
  }
},
handlePreview(file) {
  // console.log('文件列表',file);
  console.log('查看的文件地址',this.look)
  window.open(this.look)
},
/**
 * 确认上传
 */
confirm(){
      /**
       * 保存文件
       */
      var	that=this
      // var	params={data:this.files}
      this.$ajax.post('/tools/saveFile',({order_id:this.order_id,type:4,data:this.files})).then((res)=>{
          console.log('上传报关运输文件结果',res)
        if(res.data.code==200){
           /**
             * 设置订单状态
             */
            var	Token=window.localStorage.getItem('token')
            var	that=this
            var	params={
            Token,
            order_id:this.order_id,
            type:3,
            }
            this.$ajax.post('/order/setOrderState',params).then((res)=>{
                console.log('请求订单状态结果',res)
              if(res.data.code==200){
                this.$message({
                  message: '上传成功',
                  type: 'success'
                });
              }else{
              alert(res.data.msg)
            }
              }).catch((err)=>{
                console.log('请求失败',err)
              })
            // ///////////////////////////////////////////////
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
        /**
         * 
         */
}
},

//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {
  this.order_id=this.$route.query.order_id
}, //生命周期 - 创建之前
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
.carriageTitle{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 46px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
margin-top:30px;
margin-bottom:29px;
}
.time{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.time+div{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-left:20px;
margin-top:1px;
}
.times{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
ol{
  width:100px;
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
</style>