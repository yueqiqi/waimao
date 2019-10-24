<!-- 订单准入 -->
<template>
<div class=''>
      <div class="orderin">订单准入</div>
      <div class="d-flex">
        <div style="color:#333;font-weight:bold;font-size:20px;">委托方公司信息</div>
        <div class="d-flex">
          <div class="inbtn" :style="cont1==true?'background:rgba(154,195,220,1);color:#fff;border:0':''" @click="coll1">委托方基础资料</div>
          <div class="inbtn" :style="cont2==true?'background:rgba(154,195,220,1);color:#fff;border:0':''" @click="coll2">联系方式</div>
        </div>
      </div>
      <!-- 显示的内容  -->
      <div>
        <div v-show="cont1">
          <div class="coop">
            <div class="coopTitle">您需要提交的申请包括</div>
            <div class="d-flex" style="margin-left:-25px;">
              <ol type="1">
                <li>营业执照<span>*</span></li>
                <li>法定代表人与实际控制人身份证<span>*</span></li>
                <li>银行账户信息<span>*</span></li>
                <li>征信报告（公司、法人及实际控制人）<span>*</span></li>
                <li>最近一次验资报告</li>
                <div style="color:#FF0000;font-size:14px;font-weight:400;margin-left:-16px;margin-top:9px;">注：以上资料均为复印件（加盖企业公章）</div>
              </ol>
              <ol start="6" style="margin-left:214px;">
                <li>公司章程</li>
                <li>企业简介</li>
                <li>主营相关资格证书</li>
                <li>最近一年财务报表明细或最新的审计报告</li>
                <li>资产证明文件（公司、法人及实际监控人名下，如房屋产权证、车辆产权证等）</li>
              </ol>
            </div>
          </div>
          <div style="">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
              <button class="upload"><img style="width:10px;height:10px;" src="../../../../assets/waimao/icon/add.png" alt="">上传资料</button>
            </el-upload>
            </div>
        </div>
        <!-- 联系人 -->
        <div v-show="cont2" style="margin-top:41px;">
          <div style="color:#333;font-weight:bold;font-size:20px;margin-bottom:20px;">联系方式</div>
          <div>
            <ul class="us d-flex">
              <li style="margin-left:-40px;">微信</li>
              <li>邮箱</li>
              <li>Whatapp</li>
              <li>Facebook</li>
            </ul>
              <ul class="u2 d-flex" >
                <li style="margin-left:-40px;">{{wx}}</li>
                <li style="width:172px;margin-left:-50px">{{email}}</li>
                <li style="margin-right:40px;margin-left:100px;">{{wa}}</li>
                <li style="margin-left:10px;">{{facebook}}</li>
              </ul>
          </div>
          <div style="width:1490px;height:2px;background:#CCC;"></div>
        </div>


        <!--  -->
        <div>
          <div>
            <ul class="u1 d-flex">
              <li style="margin-left:-40px;">委托方公司名称</li>
              <li>联系人</li>
              <li>联系电话</li>
              <li>交货期</li>
              <li>制定代贷信息与报关信息</li>
            </ul>
              <ul class="u2 d-flex" >
                <li style="margin-left:-40px;">{{ent.company}}</li>
                <li style="width:188px;margin-right:0px;">{{ent.linkman}}</li>
                <li style="margin-right:83px;width:120px">{{ent.phone}}</li>
                <li >{{ent.etime}}</li>
                <li >{{ent.dd}}</li>
              </ul>
          </div>
          <div>
            <ul class="u1 d-flex">
              <li style="margin-left:-40px;">采购合同总金额</li>
              <li>付款方式</li>
              <li style="margin-left:-15px;">目的港</li>
              <li style="margin-left:16px;">其他要求</li>
            </ul>
              <ul class="u2 d-flex" >
                <li style="margin-left:-40px;">{{ent.money}}</li>
                <li style="width:142px;">{{ent.paytype}}</li>
                <li style="margin-right:40px;width:190px;">{{ent.goal}}</li>
                <li >{{ent.other}}</li>
              </ul>
          </div>
          <div>备注</div>
          <div style="font-size:14px;color:#0666A4;margin-top:9px;">{{ent.remark}}</div>
        </div>
        <!--  -->
        <div>
          <div style="color:#333;font-weight:bold;font-size:20px;margin-bottom:20px;margin-top:39px;">商品信息</div>
          <div style="margin-top:10px;margin-bottom:49px;">
    <table>
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:180px;">规格型号</td>
        <td style="width:180px;">法定数量</td>
        <td style="width:165px;">单位</td>
        <td style="width:165px;">货币</td>
        <td style="width:180px;">商品单价/元</td>
        <td style="width:180px;">商品总金额/元</td>
      </thead>
    </table>
    <table class="table">
      <tr v-for="(item,i) in table" :key="i">
        <td style="width:241px;">{{item.title}}</td>
        <td style="width:181px;">{{item.type}}</td>
        <td style="width:181px;">{{item.num}}</td>
        <td style="width:166px;">{{item.unit}}</td>
        <td style="width:166px;">{{item.hb}}</td>
        <td style="width:181px;">{{item.price}}</td>
        <td style="width:181px;">{{item.money}}</td>
      </tr>
    </table>
  </div>
        </div>
        <div style="width:1490px;height:2px;background:#CCC;"></div>



        <!-- 合作公司 -->
        <div style="margin-top:20px;">
          <div style="color:#333;font-weight:bold;font-size:20px;">合作公司信息</div>
          <div>
            <ul class="u1 d-flex">
              <li style="margin-left:-40px;">公司名称</li>
              <li>联系人</li>
              <li>联系电话</li>
              <li>交货期</li>
              <li>中信保授保额度</li>
            </ul>
              <ul class="u2 d-flex" >
                <li style="margin-left:-40px;width:153px;">{{team.company}}</li>
                <li style="width:158px;margin-right:28px;">{{team.linkman}}</li>
                <li style="margin-right:83px;width:123px">{{team.phone}}</li>
                <li style="width:170px;">{{team.etime}}</li>
                <li >{{team.zx}}</li>
              </ul>
          </div>
          <div>
            <ul class="u1 d-flex">
              <li style="margin-left:-40px;margin-right:90px;">销售合同总金额</li>
              <li>收款方式</li>
              <li style="margin-left:-15px;">装运港</li>
              <li style="margin-left:16px;margin-right:108px;">成交方式</li>
              <li style="margin-left:16px;">是否分批次运出</li>
            </ul>
              <ul class="u2 d-flex" >
                <li style="margin-left:-40px;margin-right:3px;">{{team.money}}</li>
                <li style="width:142px;">{{team.paytype}}</li>
                <li style="margin-right:40px;width:190px;margin-left:-2px;">{{team.goal}}</li>
                <li style="margin-left:-29px;">{{team.ter}}</li>
                <li style="margin-left:-12px;">{{team.yon}}</li>
              </ul>
          </div>
          <div>备注</div>
          <div style="font-size:14px;color:#0666A4;margin-top:9px;">{{team.remark}}</div>
        </div>
        <!--  -->
        <div>
          <div style="color:#333;font-weight:bold;font-size:20px;margin-bottom:20px;margin-top:39px;">商品信息</div>
          <div style="margin-top:10px;margin-bottom:49px;">
    <table>
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:180px;">规格型号</td>
        <td style="width:180px;">法定数量</td>
        <td style="width:165px;">单位</td>
        <td style="width:165px;">货币</td>
        <td style="width:180px;">商品单价/元</td>
        <td style="width:180px;">商品总金额/元</td>
      </thead>
    </table>
    <table class="table">
      <tr v-for="(item,i) in teamtable" :key="i">
        <td style="width:241px;">{{item.title}}</td>
        <td style="width:181px;">{{item.type}}</td>
        <td style="width:181px;">{{item.num}}</td>
        <td style="width:166px;">{{item.unit}}</td>
        <td style="width:166px;">{{item.hb}}</td>
        <td style="width:181px;">{{item.price}}</td>
        <td style="width:181px;">{{item.money}}</td>
      </tr>
    </table>
  </div>
        </div>
        <!--  -->
        
        <!--  -->
      </div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
components: {

},
data() {
  
//这里存放数据
return {
  // 合作方表格数据
  teamtable:[
    {
      title:"中国石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1000",
      money:"100000",
    },
    {
      title:"中国石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1000",
      money:"100000",
    }
  ],
  // 合作方数据
team:{
  // 是否分批次运出
  yon:"是",
 // 备注
    remark:"张二娃很想吃肯德基所以要通过这个订单赚钱买肯德基",
  // 采购总金额
  money:"100万",
  // 付款方式
  paytype:"银行卡转账",
  // 目的港
  goal:"欧洲港",
  // 其他要求
  ter:"货到付款",
  // 制定代贷
  zx:"100万",
  // 交货期
  etime:"2019-07-29",
  // 联系电话
  phone:135000000,
  // 联系人
  linkman:"张二娃",
  // 公司名称
  company:"仰光强大",
},
  // 委托方表格数据
  table:[
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1000",
      money:"100000",
    },
    {
      title:"什么什么石油",
      type:"桶",
      num:100,
      unit:"吨",
      hb:"USD",
      price:"1000",
      money:"100000",
    }
  ],
  // 委托方保存数据
  ent:{
    // 备注
    remark:"张二娃很想吃肯德基所以要通过这个订单赚钱买肯德基",
  // 采购总金额
  money:"100万",
  // 付款方式
  paytype:"银行卡转账",
  // 目的港
  goal:"欧洲港",
  // 其他要求
  other:"",
  // 制定代贷
  dd:"是",
  // 交货期
  etime:"2019-07-29",
  // 联系电话
  phone:135000000,
  // 联系人
  linkman:"张二娃",
  // 公司名称
  company:"仰光强大",
  },
  // 联系人数据
  // 微信
  wx:"123456789",
  // 油箱
  email:"123456789@163.com",
  // Whatapp
  wa:"aaabbb",
  // Facebook
  facebook:"balabala",
  // 上传文件地址
   fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
  //  委托数据显示
cont1:false,
// 联系方式显示
cont2:false,

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 上传文件
   submitUpload() {
        this.$refs.upload.submit();
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
  coll1(){
    if(this.cont1==false){
      this.cont1=true
    }else if(this.cont1==true){
      this.cont1=false
    }
    console.log("打开委托方基础资料")
  },
  coll2(){
    if(this.cont2==false){
      this.cont2=true
    }else if(this.cont2==true){
      this.cont2=false
    }
    console.log("打开联系方式")
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  for(var m in this.teamtable){
  var price = parseInt(this.teamtable[m].price);
  var money = parseInt(this.teamtable[m].money);
	var data1 = price.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = money.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.teamtable[m].price=data1
      this.teamtable[m].money=data2
      console.log("保留两位小数且有逗号"+data1,data2,)
}

  for(var m in this.table){
  var price = parseInt(this.table[m].price);
  var money = parseInt(this.table[m].money);
	var data1 = price.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
	var data2 = money.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
      // return  $("#demo3").text(data2);
      this.table[m].price=data1
      this.table[m].money=data2
      console.log("保留两位小数且有逗号"+data1,data2,)
}
if(this.other==""){
      this.other="-"
    }
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

.orderin{
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
margin-bottom:35px;
}
.inbtn{
  width:130px;
height:30px;
border:1px solid rgba(6,102,164,1);
border-radius:10px;
text-align: center;
line-height: 30px;
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(6,102,164,1);
margin-left:20px; 
}
.coop{
  /* margin-left:57px; */
}
.coopTitle{
  font-size:16px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(6,102,164,1);
margin-top:19px;
}
/* * */
ol li span{
font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:#FF0000;
}
ol li{
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(0,0,0,1);
line-height:27px;
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
.el-upload-list{
  margin-left:57px!important;margin-bottom:23px;
}

.u1 li{
  list-style: none;
  /* float:left; */
  margin-right:139px;
}
.us li{
  list-style: none;
  width:255px;
}
.u2{
padding-top:0px!important;
margin-top:-12px!important;
}
.u2 li{
  list-style: none;
  /* display: inline; */
  /* float:left; */
  width:200px;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(6,102,164,1);
margin-right:50px;
/* margin-top:0px; */
}
/* 表格 */
table td{
  height:40px;
}
table>thead td{
  background:rgba(237,237,237,1);
  text-align: center;
  border-right:1px solid #fff;
  font-size:14px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
}
.table tr td{
  text-align: center;
  /* background:#fff; */
}
.table>:nth-child(even){
  background:rgba(234,241,246,1)!important;
}

</style>