<!-- 验货出货 -->
<template>
  <div class="examine">
    <div class="examineTitle">验货出货</div>
    <!-- 签订时间 -->
    <div class="d-flex">
      <div class="time">操作时间</div>
      <div>
        {{time}}
        <span style="margin-left:10px;">{{seconed}}</span>
      </div>
    </div>
    <!-- 商品信息 -->
    <div style="margin-top:36px;margin-bottom:10px;" class="time">商品信息</div>
    <table style="width:1580px;">
      <thead>
        <td style="width:240px;">商品名称</td>
        <td style="width:90px;">规格型号</td>
        <td style="width:90px;">法定数量</td>
        <td style="width:150px;">商品编码</td>
        <td style="width:90px;">单位</td>
        <td style="width:100px;">已出货数量</td>
        <td style="width:110px;">剩余数量</td>
        <td style="width:110px;">本次出货数量</td>
        <td style="width:100px;">单价</td>
        <td style="width:100px;">申报金额</td>
        <td style="width:172px;">操作</td>
        <td style="width:130px;border:0">是否完结</td>
      </thead>
      <tbody v-for="(item,i) in details" :key="i" style="border-bottom:1px solid #ccc">
        <tr>

        <td>{{item.goods_name}}</td>
        <td>{{item.model}}</td>
        <td>{{item.number}}</td>
        <td>{{item.id}}</td>
        <td>{{item.company}}</td>
        <td>{{item.shipment_num}}</td>
        <td>{{item.number-item.shipment_num}}</td>
        <td>
            <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="出货总数超出溢短装5%的出货范围">
    <!-- <el-button slot="reference">{{item.thisnum}}</el-button> -->
    <div slot="reference">{{item.thisnum}}</div>
  </el-popover>
        </td>
        <td>{{item.price}}</td>
        <td>{{item.moneys}}</td>
        <td>
          <button class="shipment" @click="dialogs(i)" v-show="show2">出货</button>
          <button class="shipment" style="background:#B74DEE" @click="subform(i)" v-show="show">提交</button>
          <button class="list" style="margin-left:5px;" @click="list(item.id)">明细</button>
        </td>
        <td :style="item.is_end==1?'color:red':''" class="last">{{item.is_end==1?'已完结':'未完结'}}</td>
        <!-- <td class="last" style="width:0px;background:#fff;border:0;visibility:hidden">
          <div v-show="true">
            <div class="d-flex" style="z-index:100000;position:relative;left:-640px">
              <div class="report">!</div>
              <div class="reporttitle">出货总数超出溢短装5%的出货范围</div>
            </div>
          </div>
        </td> -->
        </tr>
      </tbody>
    </table>
    <!-- 上传文件 -->
    <div class="d-flex" style="margin-top:20px;" v-show="files">
      <div style="width:300px;">
        <el-upload
          class="upload-demo"
          accept="file"
          ref="upload"
          :on-change="getFileName"
          action="http://192.168.0.140:8002/main/tools/upFile"
          :on-preview="handlePreview"
          :on-success="upsuc"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="true"
        >
          <el-button size="small" type="primary" @click="submitUpload">上传资料</el-button>
          <div></div>
        </el-upload>
        <button class="btn mybtn" @click="sub">确认提交</button>
      </div>
      <div style="margin-left:-190px;color:rgba(6,102,164,1);margin-top:6px;">请上传对应的验货资料</div>
    </div>
    <!-- 提交状态改变 -->
    <div v-show="files==true?false:true">
      <div class="time" style="margin-bottom:28px;margin-top:30px;">验货报告</div>
      <ul class="el-upload-list el-upload-list--text" v-for="(item,i) in fileList2" :key="i">
        <li tabindex="0" class="d-flex">
          <div style="color:rgba(6,102,164,1);margin-right:49px;">第{{item.num}}次验货报告</div>
          <router-link to="#" class="el-upload-list__item-name">
            <i class="el-icon-document">{{item.name}}</i>
          </router-link>
          <div class="d-flex" style="color:#333333">
            <div>审核人：</div>
            <div>{{item.user}}</div>
            <div>{{item.time}}/</div>
            <div>{{item.user2}}</div>
            <div>{{item.time2}}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- </div> -->
    <!-- =========================================================== -->
    <div class="tc" v-show="tc">
      <div class="alert">
        <div class="d-spb">
          <div class="time" style="padding-top:30px;">出货明细</div>
          <div
            @click="close"
            style="font-weight:0;padding-top:29px;padding-right:29px;color:rgba(51,51,51,1); cursor:default "
          >x</div>
        </div>
        <table style="margin-top:30px;border-bottom:2px solid #ccc;">
          <thead>
            <td style="width:172px;">出货次数</td>
            <td style="width:240px;">商品名称</td>
            <td style="width:90px;">规格型号</td>
            <td style="width:90px;">法定数量</td>
            <td style="width:150px;">商品编码</td>
            <td style="width:90px;">单位</td>
            <td style="width:100px;">已出货数量</td>
            <td style="width:110px;">剩余数量</td>
            <td style="width:110px;">本次出货数量</td>
            <td style="width:100px;">单价</td>
            <td style="width:100px;">申报金额</td>
            <td style="width:130px;border:0">是否完结</td>
          </thead>
          <tbody v-for="(item,i) in details2" :key="i">
            <td>{{i+1}}</td>
            <td>{{item.goods_name}}</td>
            <td>{{item.model}}</td>
            <td>{{item.number}}</td>
            <td>{{item.id}}</td>
            <td>{{item.company}}</td>
            <td>{{item.shipment_num}}</td>
            <td>{{item.remnant_num}}</td>
            <td>{{item.this_num}}</td>
            <td>{{item.price}}</td>
            <td>{{item.declared_amount}}</td>
            <td style="border:0;">{{item.is_end==1?'已完结':'未完结'}}</td>
          </tbody>
        </table>
      </div>
    </div>
    <!-- =========================================================== -->
    <!--  -->
    <!-- examine -->
    <!-- <div style v-if="showsuccess">
      <div style="margin-top:36px;margin-bottom:10px;" class="time">商品信息</div>
      <table style="width:1510px;">
        <thead>
          <td style="width:240px;">商品名称</td>
          <td style="width:90px;">规格型号</td>
          <td style="width:90px;">法定数量</td>
          <td style="width:150px;">商品编码</td>
          <td style="width:90px;">单位</td>
          <td style="width:100px;">已出货数量</td>
          <td style="width:110px;">剩余数量</td>
          <td style="width:110px;">本次出货数量</td>
          <td style="width:100px;">单价</td>
          <td style="width:100px;">申报金额</td>
          <td style="width:172px;">操作</td>
          <td style="width:130px;border:0">是否完结</td>
        </thead>
        <tbody v-for="(item,i) in d2" :key="i">
          <td>{{item.title}}</td>
          <td>{{item.model}}</td>
          <td>{{item.num}}</td>
          <td>{{item.id}}</td>
          <td>{{item.unit}}</td>
          <td>{{item.outnum}}</td>
          <td>{{item.residue}}</td>
          <td>{{item.thisnum}}</td>
          <td>{{item.price}}</td>
          <td>{{item.money}}</td>
          <td>
            <button class="shipment" @click="shiment(i)" v-show="show2">出货</button>
            <button class="shipment" style="background:#B74DEE" @click="sub(i)" v-show="show">提交</button>
            <button class="list" style="margin-left:5px;" @click="list(i)">明细</button>
          </td>

          <td :style="item.yon=='已完结'?'color:red':''" class="last">{{item.yon}}</td>

          <td class="last" style="width:0px;background:#fff;border:0;visibility:hidden">
            <div v-show="true">
              <div class="d-flex" style="z-index:100000;position:relative;left:-640px">
                <div class="report">!</div>
                <div class="reporttitle">出货总数超出溢短装5%的出货范围</div>
              </div>
            </div>
          </td>
        </tbody>
      </table>
    </div> -->
            <!-- 弹出表格 -->
        <el-dialog title="请填写信息" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="本次出货数量" :label-width="formLabelWidth">
              <el-input v-model="form.thisnum" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="单价" :label-width="formLabelWidth">
              <el-input v-model="form.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="申报金额" :label-width="formLabelWidth">
              <el-input v-model="form.moneys" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="success">确定提交</el-button>
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
      visible: false,
      // d2:[],
      // 弹出表格
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
          thisnum:'',
          price:'',
          moneys:""
        },
      //
      showsuccess: true,
      // 后台返回上传地址
      files1: [],
      // 提交隐藏
      files: true,
      // 验货
      fileList2: [
        {
          // 第几次验货
          num: "一",
          // 文件名字
          name: "王麻子验货报告.pdf",
          // 审核人
          user: "韩美娟",
          // 时间
          time: "2019-7-22",
          user2: "李总",
          time2: "2019-7-22"
        },
        {
          // 第几次验货
          num: "二",
          // 文件名字
          name: "王麻子验货报告.pdf",
          // 审核人
          user: "韩美娟",
          // 时间
          time: "2019-7-22",
          user2: "李总",
          time2: "2019-7-22"
        },
        {
          // 第几次验货
          num: "三",
          // 文件名字
          name: "王麻子验货报告.pdf",
          // 审核人
          user: "韩美娟",
          // 时间
          time: "2019-7-22",
          user2: "李总",
          time2: "2019-7-22"
        }
      ],
      // 上传文件
      // 上传文件地址
      fileList: [],
      details2: [
        {
          times: "第一次出货",
          title: "中国石油",
          model: "桶",
          num: 100,
          id: "AS123456",
          unit: "吨",
          outnum: 0,
          residue: 110,
          thisnum: "20",
          price: "100",
          money: "100",
          yon: "未完结"
        },
        {
          times: "第二次出货",
          title: "中国石油",
          model: "桶",
          num: 100,
          id: "AS123456",
          unit: "吨",
          outnum: 0,
          residue: 110,
          thisnum: "20",
          price: "100",
          money: "100",
          yon: "未完结"
        },
        {
          times: "第三次出货",
          title: "中国石油",
          model: "桶",
          num: 100,
          id: "AS123456",
          unit: "吨",
          outnum: 0,
          residue: 110,
          thisnum: "20",
          price: "100",
          money: "100",
          yon: "未完结"
        }
      ],
      // 明细弹窗
      tc: false,
      // 商品信息
      details: [],
      // 簽訂時間
      time: "2019-07-30",
      seconed: "10:00",
      // 出现提示
      // 是否显示出货按钮
      show2: true,
      // 是否显示提交按钮
      show: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /**
     * 添加信息
     */
    success(){
      console.log('填写的信息',this.form)
      var idx=this.idx
      this.details[idx].thisnum=this.form.thisnum
      this.details[idx].price=this.form.price
      this.details[idx].moneys=this.form.moneys
      /**
     *上传商品信息
      */
     var	Token=window.localStorage.getItem('token')
      var details=this.details
      var	params={
        Token,
      order_id:this.order_id,
      goods_id:details[idx].id,
      out_num:details[idx].shipment_num,
      remnant_num:Number(details[idx].number)-Number(details[idx].shipment_num),
      this_num:this.form.thisnum,
      price:this.form.price,
      declared_amount:this.form.moneys
      }
      this.$ajax.post('/order/setShipment',params).then((res)=>{
        console.log('请求装配出货结果',res)
        if(res.data.code==200){
          
        }else{
          alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
        setTimeout(() => {
          this.dialogFormVisible =false         
          this.form={}
        }, 1000);
    },
    /**
     * 添加信息
     */
    /**
     * 出货按钮
     */
    dialogs(i){
      console.log(123,i)
      this.dialogFormVisible =true
      this.idx=i
    },
    /**
     * 出货按钮
     */


    getFileName() {},
    upsuc(e) {
      console.log("上传成功", e);
      this.files1.push(e.data);
      this.look = e.data.full_path;
      console.log("查看的地址", this.look);
      // this.sp.push(e.data.path('_'))
      // 为原数组添加新的下标
      this.files1.forEach((item, index) => {
        item.num = index + 1;
        item.type = 5;
      });
    },
    submitUpload(file) {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList, e) {
      console.log("删除的文件地址", file, "删除的文件路径", fileList, e);
      // this.files
      for (var i in file) {
        for (var m in this.files1) {
          if (file[i].name == this.files1[m].file_name) {
            this.files1.splice(m, 1);
          }
        }
      }
    },
    handlePreview(file) {
      // console.log('文件列表',file);
      console.log("查看的文件地址", this.look);
      window.open(this.look);
    },
    // 确认提交
    sub() {
      // this.showsuccess = ture;
      /**
       * 保存文件
       */
      // var	params={data:this.files}


            // ////////////////////////////////////////////////////
         this.$ajax.post("/tools/saveFile", {
          order_: that.order_id,
          type: 3,
          data: this.files1
        })
        .then(res => {
          console.log("上传文件结果", res);
          if (res.data.code == 200) {
            /**
             * 设置订单状态
             */
            var	Token=window.localStorage.getItem('token')
            var	that=this
            var	params={
            Token,
            order_id:this.order_id,
            type:1,
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
            this.$message({
              message: "上传成功",
              type: "success"
            });
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    /**
     *
     */

    // 关闭遮罩按钮
    close() {
      this.tc = false;
            var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "block";
      document.addEventListener("touchmove", mo, true); //禁止页面滑动
    },
    // // 提交按钮
    // sub(){
    //   console.log("提交")
    //   console.log(i)
    // },
    // 出货按钮
    shiment(i) {
      console.log(i);
    },
    // 明细按钮
    /***取消滑动限制***/
    // move(){
    //   var mo=function(e){e.preventDefault();};
    //   document.body.style.overflow='';//出现滚动条
    //   document.removeEventListener("touchmove",mo,false);
    // }
    // 禁止滚动
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    list(i) {
      console.log(i);
      this.stop();
      this.tc = true;
      var	Token=window.localStorage.getItem('token')
      var	that=this
      var	params={
      Token,
      goods_id:i
      }
      this.$ajax.post('/order/getShipmentDetail',params).then((res)=>{
          console.log('请求验货出货明细结果',res)
        if(res.data.code==200){
          this.details2=res.data.data
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
     * 商品列表详情
     */
    // setTimeout(() => {
      var	Token=window.localStorage.getItem('token')
      var	that=this
      var	params={
      Token,
      order_id:that.order_id,
  
      }
      this.$ajax.post('/order/getGoodsList',params).then((res)=>{
          console.log('请求商品列表结果',res)
        if(res.data.code==200){
          this.details=res.data.data
        }else{
        alert(res.data.msg)
      }
        }).catch((err)=>{
          console.log('请求失败',err)
        })
    // }, 1000);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {
    var order_id = this.$route.query.order_id;
    console.log("验货出货", order_id);
    this.order_id=order_id
  }, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
/* 验货出货样式 */
.examine {
  overflow-x: hidden;
  /* height:100%; */
}
.examineTitle {
  width: 160px;
  height: 46px;
  background: rgba(154, 195, 220, 1);
  border-radius: 10px;
  text-align: center;
  line-height: 46px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  margin-bottom: 30px;
}
/* 签订时间 */
.time {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.time + div {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(6, 102, 164, 1);
  margin-left: 20px;
  margin-top: 1px;
}
table > thead td {
  height: 40px;
  background: rgba(237, 237, 237, 1);
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  border-right: 1px solid #ccc;
}
table {
  border-collapse: collapse;
}
tbody td {
  text-align: center;
  height: 40px;
  border-right: 1px solid #ccc;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
table > :nth-child(odd) {
  background: rgba(234, 241, 246, 1);
}
tbody td > input {
  height: 40px;
  border: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  color: #0666a4;
}
/* 出货按钮 */
.shipment {
  width: 60px;
  height: 20px;
  background: rgba(255, 144, 0, 1);
  border-radius: 3px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border: 0;
}
/* 明细按钮 */
.list {
  width: 60px;
  height: 20px;
  background: rgba(0, 113, 48, 1);
  border-radius: 3px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border: 0;
}
.report {
  width: 14px;
  height: 14px;
  background: rgba(255, 0, 0, 1);
  text-align: center;
  line-height: 14px;
  color: #fff;
  border-radius: 50%;
  font-size: 8px;
  margin-top: 10px;
}
.reporttitle {
  width: 260px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(6, 102, 164, 1);
  border-radius: 10px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 0, 0, 1);
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
}
.last {
  border: 0;
}
.tc {
  /* width:100%;height:100%; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.alert {
  width: 1553px;
  /* height:280px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(204, 204, 204, 1);
  border-radius: 10px;
  position: relative;
  top: 50%;
  margin-top: -140px;
  left: 50%;
  margin-left: -776.5px;
  padding-left: 30px;
  padding-bottom: 49px;
}
/* 上传按钮 */
.mybtn {
  width: 100px;
  height: 30px;
  background: rgba(255, 102, 0, 1);
  border-radius: 10px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 30px;
  margin-top: 19px;
}
.upload {
  width: 100px;
  height: 30px;
  background: rgba(154, 195, 220, 1);
  border-radius: 10px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border: 0;
}
/deep/ .el-upload-list__item {
  width: 300px;
}
/* 上传贸易合同文字 */
.uptitle {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(6, 102, 164, 1);
  padding-top: 34px;
}
ul li {
  list-style: none;
}
</style>