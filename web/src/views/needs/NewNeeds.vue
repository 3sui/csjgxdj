<template>
  <div class="newneeds">
    <div class="inquiry_content"></div>
    <div class="main">
      <div class="sub">发布需求</div>

      <div class="form">
        <el-form :model="ruleForm" ref="ruleForm"  >
          <!-- 询价信息 -->
          <div class="team">询价信息</div>
          <div class="team-con">
            <el-form-item label="选择分类"  label-width="150px" prop="classsub">
              <el-cascader :options="classoptions" clearable v-model="classsub"  @change="handleChangeClass"></el-cascader>
            </el-form-item>
            <el-form-item label="询价主题" label-width="150px" prop="ability_name">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="ruleForm.ability_name"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item  label="询价截止日期" label-width="150px" prop="closing_date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                 value-format="yyyy-MM-dd"
                v-model="ruleForm.closing_date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item  label="要求交货日期" label-width="150px" prop="arrival_date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                 value-format="yyyy-MM-dd"
                v-model="ruleForm.arrival_date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </div>

          <div class="team">询价对象信息</div>

          <div class="team-con">
            <el-row>
              <el-button type="primary" plain @click="addneedtable">添加询价对象</el-button>
              <!-- <el-button type="primary" plain>导入询价对象</el-button> -->
            </el-row>

            <el-table :data="needtable" empty-text="请添加" style="width: 100%">
              <el-table-column label="对象名称" width="180" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.needname" :disabled="!scope.row.show"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="需求数量" width="100" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.needcount" :disabled="!scope.row.show"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="计量单位" width="100" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.needunit" :disabled="!scope.row.show"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="要求备注" width="340" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.needtips" :disabled="!scope.row.show"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="期望单价" width="120" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.needexpectprice" :disabled="!scope.row.show"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button
                  v-show="scope.row.show"
                  circle
                    size="mini"
                    type="success"
                    icon="el-icon-check"
                    @click="handleAdd(scope.$index, scope.row)"
                  ></el-button>
                  <el-button
                   v-show="!scope.row.show"
                    circle
                    size="mini"
                    type="danger"
                    icon="el-icon-delete" 
                    @click="handleDelete(scope.$index, scope.row)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="sumarry">期望总价: {{Summary}}元</div>
            <!-- <el-form-item label="是否显示期望报价" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="否"></el-radio>
                <el-radio label="是"></el-radio>
              </el-radio-group>
            </el-form-item> -->
            <el-form-item label="附件"  label-width="150px" prop="fileList">
              <el-upload
              class="upload-demo"
               action="http://127.0.0.1:8892/api/backmanage/addneedenclosure"
              
               
                :on-success="handleFileSuccess"
                :before-upload="beforeFileUpload"
                :file-list="fileList"
                :limit="1"
              >
                <el-button size="small" type="primary">添加附件</el-button>
                <div slot="tip" class="el-upload__tip">(最多可添加1个附件，大小不超过100M,格式限Word、PDF)</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="上传图片"  label-width="150px" prop="picList">
              <el-upload
                  class="avatar-uploader"
                  action="http://127.0.0.1:8892/api/backmanage/addProductImage"
              
                  :show-file-list="false"
                  :on-success="handlePhotoSuccess"
                  :before-upload="beforePhotoUpload"
                  :file-list="picList"
                  :limit="5"
                  :on-exceed="inform"
                  >
                <div><el-button size="small" type="primary">添加图片</el-button></div>
                <img v-for="item in picList" :src="'http://127.0.0.1:8892/api/backmanage/getProductImage'+item.name" class=" avatar pic" >
                
                <div
                  slot="tip"
                  class="el-upload__tip"
                >(最多可上传5张图片，大小不超过2M，格式限jpeg、jpg、png)</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="需求详情描述" label-width="150px" >
              <vue-quill-editor @content="getcontent" ref="editor" ></vue-quill-editor>
            </el-form-item>
            <!-- <el-form-item label="需求关键字" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item> -->

          </div>
          <div class="team">商务条款</div>
          <div class="team-con">
              <el-form-item label="交易方式"  label-width="150px" prop="transaction_mode">
                <el-radio-group v-model="ruleForm.transaction_mode">
                  <el-radio label="货到付款" name="货到付款"></el-radio>
                  <el-radio label="预付款" name="预付款"></el-radio>
                  <el-radio label="其他" name="其他"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="付款方式" label-width="150px" prop="pay_way">
                <el-radio-group v-model="ruleForm.pay_way">
                  <el-radio label="支票"></el-radio>
                  <el-radio label="汇票"></el-radio>
                  <el-radio label="本票"></el-radio>
                  <el-radio label="现金"></el-radio>
                  <el-radio label="银行转账"></el-radio>
                  <el-radio label="其他"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="发票类型" label-width="150px" prop="invoice_type">
                <el-radio-group v-model="ruleForm.invoice_type">
                  <el-radio label="增值税发票"></el-radio>
                  <el-radio label="普通发票"></el-radio>
                  <el-radio label="无需发票"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="承运方" label-width="150px" prop="freight_bearing">
                <el-radio-group v-model="ruleForm.freight_bearing">
                  <el-radio label="供应方"></el-radio>
                  <el-radio label="采购方"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="收货地址" label-width="150px">
                <choosearea @getprovince="getprovince" @getcity="getcity" ref="choosearea"></choosearea>
              </el-form-item>
              <el-form-item label="详细地址" label-width="150px" prop="addressdetail">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="addressdetail"
                  maxlength="20"
                  show-word-limit
                ></el-input>
              </el-form-item>
                 <!-- <el-form-item label="交付类型" prop="resource" label-width="150px">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="一次性交付"></el-radio>
                  <el-radio label="分批交付"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="交付对象" prop="name" label-width="150px">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="text"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item label="交付要求说明" prop="name" label-width="150px">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="text"
                  maxlength="50"
                  show-word-limit
                ></el-input>
              </el-form-item> -->
          </div>
          
          <!-- <div class="team">发布方式</div>
          <div class="team-con">
             </el-form-item>
                 <el-form-item label="发布方式" prop="resource" label-width="150px">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="全网发布"></el-radio>
                  <el-radio label="邀请供应商"></el-radio>
                </el-radio-group>
              </el-form-item>

          </div> -->


          <div class="team">联系方式</div>
          <div class="team-con">
             <el-form-item label="联系人" label-width="150px" prop="consignee">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="ruleForm.consignee"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
               <el-form-item label="联系方式"  label-width="150px" prop="consignee_phone">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="ruleForm.consignee_phone"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
               <el-form-item label="email" label-width="150px"  prop="email">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="ruleForm.email"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
          </div>
          <div class="team-con">
            <el-form-item>
              <div class="btn">
               <!-- <el-button type="primary" @click="onSubmitReview">预览</el-button> -->
               <el-button type="primary" @click="onSubmitSave">保存</el-button>
               <el-button type="success" @click="onSubmit">发布</el-button>
               <el-button type="info" @click="onCancel('ruleForm')">取消</el-button>
              </div>
           </el-form-item>
           
          </div>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import TextEdit from "../../components/tools/TextEdit";
import choosearea from "../../components/tools/choosearea";

export default {
  name: "NewNeeds",
  components: {
    "vue-quill-editor": TextEdit, //富文本编辑器
    "choosearea": choosearea,//省市选择
  },
  data() {
    return {
      classoptions: [],
      needtable: [],
      classsub:"",
      province:"",
      city:"",
      addressdetail:"",


      ruleForm: {
        class1:'',
        class2:'',
        class3:'',
        ability_name:"",
        closing_date:"",
        arrival_date:"",
        needcontentlist:[],
        images:[],
        enclosure:[],
        supplement:'',
        transaction_mode:'',
        pay_way:'',
        invoice_type:'',
        freight_bearing:'',
        address:'',
        consignee:'',
        consignee_phone:'',
        email:'',
        inquiry_order_state:''
      },
      rules:[],
      fileList:[],
      picList:[],
      // imgUrl1:'',
      // imgUrl2:''
    };
  },
  computed: {
    Summary: {
      get() {
        let sum = 0;
        this.needtable.forEach((element) => {
          sum += element.needexpectprice * element.needcount;
        });
        return sum;
      },
    },
   
 
  },

  created(){
    this.getneedsclass()
  },

  methods: {
      //获取分类列表
      getneedsclass(){
        this.$axios.get('/needs/getneedsclass').then(res=>{
         this.classoptions=res.data
        })
      },
      //选择分类
      handleChangeClass(){
        this.ruleForm.class1=this.classsub[0] ||''
        this.ruleForm.class2=this.classsub[1] ||''
        this.ruleForm.class3=this.classsub[2] ||''
      },


      //确认需求的某一对象
      handleAdd(index, row){
        console.log(123);
        let data ={
            needname: row.needname,
            needcount: row.needcount,
            needunit: row.needunit,
            needtips: row.needtips,
            needexpectprice: row.needexpectprice, 
        }
        this.$axios.post('/needs/addneedcontent',data).then(res=>{
          console.log(res.data);
          row.id=res.data.insertId
          this.ruleForm.needcontentlist.push(res.data.insertId)
          this.needtable[index].show=false
        })

      },
      //删除需求的某一对象
      handleDelete(index, row) {
          console.log(123);
        let data ={
        id:row.id
        }
        this.$axios.post('/needs/removeneedcontent',data).then(res=>{
          console.log(res.data);
          this.needtable.splice(index,1)
          this.ruleForm.needcontentlist.splice(index, 1);
        })
    },
    //通知
    inform(files, fileList){
       this.$message.error("只支持上传一个文件！")
    },
    //获取富文本数据
    getcontent(content){
      this.ruleForm.supplement=content

    },
    //获取省
    getprovince(province){
      console.log(province);
      this.province=province
      
    },
    //获取市
    getcity(city){
      console.log(city);
      this.city=city
 
    },
    //保存
    onSubmitSave(){
      let data=JSON.parse(JSON.stringify(this.ruleForm))
      data.address=this.province+this.city+this.addressdetail
      data.inquiry_order_state="保存"  
      data.enclosure=data.enclosure.toString()
      data.images=data.images.toString()
      data.needcontentlist=data.needcontentlist.toString()
      this.$axios.post('/needs/addneed',data).then(res=>{
        console.log(res.data);
        this.$message.success("保存成功，待提交")
      })
    },
    onSubmit(){
      let data=JSON.parse(JSON.stringify(this.ruleForm))
      data.address=this.province+this.city+this.addressdetail
      data.inquiry_order_state="待审核"  
      data.enclosure=data.enclosure.toString()
      data.images=data.images.toString()
      data.needcontentlist=data.needcontentlist.toString()
      this.$axios.post('/needs/addneed',data).then(res=>{
        console.log(res.data);
        this.$message.success("发布成功，待后台管理员审核")
      })
    },
    onSubmitReview(){},

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    onCancel(ruleForm) {
      this.$refs[ruleForm].resetFields();
      this.$refs.choosearea.reset()
      this.$refs.editor.reset()
      // this.needcontentlist=[]
      this.needtable=[]
      this.classsub=[]
      this.$router.push('/index')
    },

  
    addneedtable() {
      let item = {
        show:true
      };
      this.needtable.push(item);
    },



    //图片上传
      handlePhotoSuccess(res, file) {
      // this.imgUrl1 = URL.createObjectURL(file.raw);
      this.picList.push(res.data)  
      this.ruleForm.images.push(res.data.name)
      },
   
      beforePhotoUpload(file) {
      const isJPG = ~['image/jpeg', 'image/png'].indexOf(file.type)  ;
      const isLt1M = file.size /  1024 / 1024 < 2;
 
      if (!isJPG) {
        this.$message.error('图片只能是 JPG 或 PNG 格式!');
      }
 
      if (!isLt1M) {
        this.$message.error('图片大小不能超过 2MB!');
      }
      return isJPG && isLt1M;
      },


       //文件上传
      handleFileSuccess(res, file) {
      // this.imgUrl2 = URL.createObjectURL(file.raw);
      this.fileList.push(res.data)  
      this.ruleForm.enclosure.push(res.data.name)
      },
   
       beforeFileUpload(file) {
      const isJPG = ~['application/pdf', 'application/msword '].indexOf(file.type)  ;
      const isLt1M = file.size /  1024 / 1024 < 100;
 
      if (!isJPG) {
        this.$message.error('文件只能是 PDF、Word 格式!');
      }
 
      if (!isLt1M) {
        this.$message.error('文件大小不能超过 100MB!');
      }
       return isJPG && isLt1M;
      },
      //文件
       handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
  },
};


</script>


<style scoped lang="scss">
.inquiry_content {
  width: 100%;
  height: 200px;
  // width: 1200px;
  margin: 0 auto;
  background: url(http://cocenter.casicloud.com/pages/cloud1.0/image/inquiry_banner.jpg)
    no-repeat;
  padding-top: 160px;
  background-size: cover;
  margin-bottom: 20px;
}

.main {
  width: 1200px;
  margin: auto;
}

.main .sub {
  padding-left: 10px;
}
.sub {
  height: 60px;
  line-height: 60px;
  background-color: white;
  font-size: 20px;
  margin-bottom: 20px;
}

.team {
  font-weight: bold;
  line-height: 40px;
  padding-left: 10px;
}

.form {
  background-color: white;
}

.team-con {
  width: 80%;
  margin:  auto;
  padding: 20px 0;

}

.sumarry {
  color: orangered;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  padding-right: 150px;
  line-height: 40px;
}

.team-con .btn{
width: 40%;
margin: auto;
}

.pic{
  margin-right:10px ;
  margin-bottom:10px;
  display: inline-block;
}
.avatar-uploader .el-upload {
    border: 1px dashed #eeeeee;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #d8d8d8;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
  line-height: 150px;
  }
</style>