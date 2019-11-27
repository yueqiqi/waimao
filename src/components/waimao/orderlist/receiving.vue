<!-- 收款付款--出口 -->
<template>
<div class='receiving'>
  <div class="receivingTitle">收款付款</div>
  <!-- 商品信息 -->
  <div class="rtitle">商品信息</div>
  <div>
    <table>
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:160px;">商品数量</td>
        <td style="width:200px;">应收款</td>
        <td style="width:200px;">已收款</td>
        <td style="width:200px;">应付款</td>
        <td style="width:200px;">已付款</td>
        <td style="width:130px;">结算完结</td>
        <td style="width:156px;border:0;">操作</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i" style="border-bottom:1px solid #ccc">
        <td>{{item.goods_name}}</td>
        <td>{{item.number}}</td>
        <td style="color:#FF0000">{{item.gat}}</td>
        <td>{{item.has}}</td>
        <td style="color:#FF0000">{{item.pay}}</td>
        <td>{{item.payed}}</td>
        <td>{{item.close}}</td>
        <td>
          <button class="set" @click="dialogs(i)">编辑</button>
          <button class="sub" :data-id="item.id" :data-idx="i" @click="sub">提交</button>
        </td>
      </tbody>
    </table>
  </div>


        <!-- 弹出表格 -->
        <el-dialog title="请填写信息" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="已收款" :label-width="formLabelWidth">
              <el-input v-model="form.has" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="已付款" :label-width="formLabelWidth">
              <el-input v-model="form.payed" autocomplete="off"></el-input>
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
    has:'',
    paued:'',
  },
  dialogFormVisible:false,
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
  this.details[idx].has=this.form.has
  this.details[idx].payed=this.form.payed
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
////////////////////////////////////////
  has(event){
    // console.log("值"+event)
    console.log("mm"+event)
    // console.log(i)
    // e=this.details[i].has
  },
  payed(e){
    console.log(e)
    // console.log(i)
  },
  /**
   * 收款付款提交
   */
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
    collect_money:details[idx].has,
    pay_money:details[idx].payed
    }
    this.$ajax.post('/order/setGoodsPayment',params).then((res)=>{
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
            type:2,
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
  /**
   * 商品列表
   */
  var	Token=window.localStorage.getItem('token')
  var	that=this
  var	params={
  Token,
  order_id:this.order_id
  }
  this.$ajax.post('/order/getGoodsList',params).then((res)=>{
      console.log('收款付款请求商品列表结果',res)
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
margin-top:32px;
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
</style>