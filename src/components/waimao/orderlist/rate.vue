<!-- 缴税退税 -->
<template>
<div class='receiving'>
  <div class="receivingTitle">缴税退税</div>
  <div class="d-flex" style="margin-top:30px;">
      <div class="time">操作时间</div>
      <div>{{time}}<span style="margin-left:10px;">{{seconed}}</span></div>
  </div>
  <!-- 商品信息 -->
 <div style="display:flex;justify-content:space-between;margin-right:233px;margin-top:30px;">
  <div class="rtitle">商品信息</div>
  <div class="d-flex" style="">
  <button @click="load2" style="border-top-right-radius:0;border-bottom-right-radius:0;" class="load d-flex"><div style="margin-left:7px;">导入表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
  <button @click="unload2" style="margin-left:1px;border-bottom-left-radius:0;border-top-left-radius: 0;" class="load d-flex"><div style="margin-left:7px;">导出表格</div><div><img style="width:12px;height:13px;margin-top:9px;margin-left:4px;" src="../../../assets/waimao/icon/load.png" alt=""></div></button>
  </div>
  </div>
  <div>
    <table>
      <thead>
        <!-- <td style="width:130px;">报关单号/发票号</td> -->
        <td style="width:280px;">商品名称</td>
        <td style="width:130px;">实际出货数量</td>
        <td style="width:160px;">发票金额</td>
        <td style="width:160px;">退税额</td>
        <td style="width:455px;">备注</td>
        <td style="width:200px;border:0;">操作</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i" style="border-bottom:1px solid #ccc">
        <!-- <td>{{item.id}}</td> -->
        <td>{{item.goods_name}}</td>
        <td>{{item.number-item.shipment_num}}</td>
        <td style="color:#0666A4">{{item.invoice}}</td>
        <td style="color:#0666A4">{{item.tax}}</td>
        <td style="color:#0666A4">{{item.other}}</td>
        <td style="border:0;">
          <button class="set" @click="dialogs(i)">编辑</button>
          <button class="sub" :data-id="item.id" :data-idx="i" @click="sub">提交</button>
          <button style="background:red" class="sub" @click="examine(i)">审核</button>
        </td>
      </tbody>
    </table>
  </div>
        <!-- 弹出表格 -->
        <el-dialog title="请填写信息" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="发票金额" :label-width="formLabelWidth">
              <el-input v-model="form.invoice" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="退税额" :label-width="formLabelWidth">
              <el-input v-model="form.tax" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input v-model="form.other" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="success">确定</el-button>
          </div>
        </el-dialog>
        <!-- 弹出表格 -->
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
    //弹出表格
  formLabelWidth: '120px',
  form:{
    invoice:'',
    tax:'',
    other:'',
  },
  dialogFormVisible:false,
  // 簽訂時間
  time:"2019-07-30",
  seconed:"10:00",
  // 是否禁用
  dis:true,
  // table数据
  details:[]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    /**
   * 表格添加
   */
success(){
  console.log('填写的信息',this.form)
  var idx = this.idx
  this.details[idx].invoice=this.form.invoice
  this.details[idx].tax=this.form.tax
  this.details[idx].other=this.form.other
  this.dialogFormVisible =false    
  this.form={}
},
/**
 * 编辑按钮
 */
    dialogs(i){
      console.log(123,i)
      this.dialogFormVisible =true
      this.idx=i
    },
    ////////////////////////////////////////////////////////////
  load2(){
    console.log("导入按钮")
  },
  // 导出按钮
  unload2(){
    console.log("导出按钮")
  },
 
  // 编辑
  set(i){
    console.log("编辑")
    console.log(i)
    this.dis=false
  },
  // 提交
  sub(e){
    var goods_id=e.target.dataset.id
    var idx=e.target.dataset.idx
    var details=this.details
    console.log('商品id',goods_id,idx,e)
    var	Token=window.localStorage.getItem('token')
    var	that=this
    var	params={
    Token,
    goods_id,
    order_id:this.order_id,

    }
    this.$ajax.post('/order/setReturnTax',params).then((res)=>{
        console.log('请求收款付款结果',res)
      if(res.data.code==200){
         /**
             * 设置订单状态
             */
            var	Token=window.localStorage.getItem('token')
            var	that=this
            var	params={
            Token,
            order_id:this.order_id,
            type:4,
            }
            this.$ajax.post('/order/setOrderState',params).then((res)=>{
                console.log('请求订单状态结果',res)
              if(res.data.code==200){

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
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  order_id:this.order_id
  }
  this.$ajax.post('/order/getGoodsList',params).then((res)=>{
      console.log('请求缴税退税结果',res)
    if(res.data.code==200){
      this.details=res.data.data
    }else{
    alert(res.data.msg)
  }
    }).catch((err)=>{
      console.log('请求失败',err)
    })
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
.receivingTitle{
  width:160px;
height:46px;
background:rgba(154,195,220,1);
border-radius:10px;
font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(255,255,255,1);
text-align: center;
line-height: 46px;
margin-top:30px;
}
/* 商品信息 */
.rtitle{
  font-size:20px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
margin-bottom:16px;
}
table>thead td{
  height:40px;
background:rgba(237,237,237,1);
font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
text-align: center;
border-right:1px solid #ccc; 
}
tbody td {
  text-align: center;
  height:40px;
  border-right:1px solid #ccc; 
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(102,102,102,1);
}
table>:nth-child(odd){
  background:rgba(234,241,246,1);
}
.set{
  width:60px;
height:20px;
background:rgba(255,60,0,1);
border-radius:3px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height:20px;
text-align: center;
border:0
}
.sub{
  width:60px;
height:20px;
background:rgba(183,77,238,1);
border-radius:3px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
line-height:20px;
text-align: center;
border:0;
margin-left: 5px;
}
tbody /deep/ .el-input__inner{
  height: 40px;;
  border:0;
  text-align: center;
  background: rgba(255,255,255,0);
  color:#0666A4
}
tbody /deep/ .el-input.is-disabled .el-input__inner{
  background:rgba(0,0,0,0)
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
.load{
   width:100px;
height:30px;
background:rgba(154,195,220,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(255,255,255,1);
border:0;
/* margin:auto 0;
margin-top:40px; */
}
</style>