<template>
  <div class="back">
    <div class="main">
      <div class="sub">
        商品管理列表
        <el-button type="primary" size="small">返回</el-button>
      </div>
      <div class="list">
        <div class="list-choose">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="全部"></el-tab-pane>
            <el-tab-pane label="待发布" name="待发布"></el-tab-pane>
            <el-tab-pane label="待审核" name="待审核"></el-tab-pane>
            <el-tab-pane label="审核通过" name="审核通过"></el-tab-pane>
            <el-tab-pane label="审核驳回" name="审核驳回"></el-tab-pane>
            <el-tab-pane label="已下架" name="已下架"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="search">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="inputsearch" placeholder="请输入产品名称"></el-input>
            </el-form-item>
            <el-form-item label="创建时间：">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="Search(inputsearch)">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="AddProduct">添加商品</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="tabletop">
          <el-row :gutter="20">
            <el-col span="3">
              <el-checkbox name="type"></el-checkbox>全选
            </el-col>
            <el-col span="12">商品信息</el-col>
            <el-col span="3">状态</el-col>
            <el-col span="6">操作</el-col>
          </el-row>
        </div>
        <div class="tableitem" v-for="item,index in tabledata.slice((currentPage-1)*10,currentPage*10)">
          <div class="tabletop">
            <el-row :gutter="20">
              <el-col span="2">
                <el-checkbox name="type"></el-checkbox>
              </el-col>
              <el-col span="2">{{(currentPage-1)*10+index+1}}</el-col>
              <el-col span="8" style="text-align:left">
                {{item.product_name}}
                <el-tag type="warning" effect="dark" size="mini">标签</el-tag>
              </el-col>
            </el-row>
          </div>
          <div class="tablecontent">
            <el-row :gutter="20">
              <el-col span="3">
                <div class="contain">
                  <img :src="'http://127.0.0.1:8892/api/backmanage/getProductImage'+item.image" alt width="80px" height="80px" />
                </div>
              </el-col>
              <el-col span="5">
                <div class="contain">
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">创建日期：</span>
                    <span class="tabletext">{{item.created_time}}</span>
                  </p>
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">库存量：</span>
                    <span class="tabletext">{{item.stock}}</span>
                  </p>
                </div>
              </el-col>
              <el-col span="7">
                <div class="contain">
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">操作人：</span>
                    <span class="tabletext">{{item.created_by}}</span>
                  </p>
                  <p class="d-flex justify-content-between">
                    <span class="tabletext">所属分类：</span>
                    <span class="tabletext">{{item.class1}}>{{item.class2}}>{{item.class3}}</span>
                  </p>
                </div>
              </el-col>
              <el-col span="3">
                <div class="contain">{{item.state}}</div>
              </el-col>
              <el-col span="6">
                <div class="contain">
                  <el-button size="mini" @click="ShelfUp(item.id)">上架</el-button>
                  <el-button size="mini" @click="ShelfDown(item.id)">下架</el-button>
                  <el-button size="mini">修改</el-button>
                  <el-button size="mini">预览</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="itemtotal" class="page" :current-page="currentPage" :page-size="10" :page-count="pagetotal" @current-change="handleCurrentChange"></el-pagination>
        </div>
      </div>
    </div>

    <el-dialog title="添加商品" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
      <el-form ref="dialogform" :model="dialogform" label-width="120px">
        <el-form-item label="产品名称">
          <el-input v-model="dialogform.product_name"></el-input>
        </el-form-item>
         <el-form-item label="一级分类">
          <el-input v-model="dialogform.class1"></el-input>
        </el-form-item>
         <el-form-item label="二级分类">
          <el-input v-model="dialogform.class2"></el-input>
        </el-form-item>
         <el-form-item label="三级分类">
          <el-input v-model="dialogform.class3"></el-input>
        </el-form-item>
      
        <el-form-item label="计量单位">
          <el-input v-model="dialogform.unit"></el-input>
        </el-form-item>

        <el-form-item label="库存数量">
          <el-input v-model="dialogform.stock"></el-input>
        </el-form-item>

        <el-form-item label="价格">
          <el-input v-model="dialogform.price"></el-input>
        </el-form-item>

        <el-form-item label="生产厂家">
          <el-input v-model="dialogform.manufacturer"></el-input>
        </el-form-item>

        <el-form-item label="品牌">
          <el-input  v-model="dialogform.brand"></el-input>
        </el-form-item>
        
        <el-form-item label="生产日期">
          <el-input  v-model="dialogform.start_date"></el-input>
        </el-form-item>
        
        <el-form-item label="过期日期">
          <el-input  v-model="dialogform.end_date"></el-input>
        </el-form-item>
        
        <el-form-item label="炉（批）号">
          <el-input  v-model="dialogform.batch_number"></el-input>
        </el-form-item>
       
        <el-form-item label="核心标准">
          <el-input  v-model="dialogform.standard"></el-input>
        </el-form-item>
       

        <el-form-item label="供货周期">
          <el-input v-model="dialogform.period"></el-input>
        </el-form-item>
       

        <el-form-item label="产品介绍">
          <el-input type="textarea" v-model="dialogform.product_profile"></el-input>
        </el-form-item>

        <el-form-item label="产品图片">    
       <el-upload
          class="avatar-uploader"
          action="http://127.0.0.1:8892/api/backmanage/addProductImage"
          :show-file-list="false"
          :on-change="handlePhotoChange"
          :on-success="handlePhotoSuccess"
          :before-upload="beforePhotoUpload"
          :file-list="fileList"
          :limit="5"
          >
          <img v-for="item in fileList" :src="'http://127.0.0.1:8892/api/backmanage/getProductImage'+item.name" class=" pic avatar" >
          <i class="el-icon-plus avatar-uploader-icon"></i>
       </el-upload>
      </el-form-item>



        <div class="btn">
          <el-button type="primary" @click="AddConfirm">确 定</el-button>
          <el-button @click="AddCancel">取 消</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Productmanage",
  data() {
    return {
      activeName: "全部",
      inputsearch:'',
      tabledata:[],
      procuctlist:[],
      dialogVisible: false,
      dialogform:{},
      fileList:[],
      pagetotal:1,
      currentPage:1,
      itemtotal:0,
      imgUrl:''
      
    };
  },
  created(){
    this.GetProduct()
  },
  methods: {
  handlePhotoSuccess(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw);
      this.fileList.push(res.data)  
},
   
beforePhotoUpload(file) {
      const isJPG = ~['image/jpeg', 'image/png'].indexOf(file.type)  ;
      const isLt1M = file.size /  1024 / 1024 < 2;
 
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
 
      if (!isLt1M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt1M;
},
//替换图片
handlePhotoChange(){

},
   
    AddProduct() {
     
      this.dialogVisible = true;
      this.fileList=[];
    },
    handleClose(){
      this.dialogform={}
      this.dialogVisible = false;
    },
    //添加商品确认

    AddConfirm(){  
      console.log(this.dialogform);
      this.dialogform.created_by="管理员"
      this.dialogform.updated_by="管理员"
      this.dialogform.enterprise_id=1
      this.dialogform.sales=0
      this.dialogform.state="待发布"

      this.dialogform.image=this.fileList.map(item=>item.name)
      this.dialogform.image= this.dialogform.image.toString()
    
      this.$axios.post('/backmanage/addProduct',this.dialogform)
      .then(res=>{
        if(res.data || res.data.length>0){
          this.handleClose()
          this.GetProduct()
        }  
      })

    },
    AddCancel(){
      this.dialogform={}
      this.dialogVisible = false;
    },
    //获取商品列表
    GetProduct(){
      this.$axios.get('/backmanage/getProduct')
      .then(res=>{
        console.log(res.data);
        this.tabledata=res.data.filter(item=>{
          if(this.activeName==='全部')
          return item
          else
          return item.state===this.activeName
        });
        this.pagetotal=parseInt(this.tabledata.length/10)+1
        this.itemtotal=this.tabledata.length
        this.currentPage=1
        this.procuctlist=this.tabledata
      })
    },
    //上架
    ShelfUp(id){
      let data={
        id:id
      } 
      this.$axios.post('/backmanage/ProductShelfUp',data)
      .then(res=>{
       this.GetProduct()
      })
    },
    //下架
      ShelfDown(id){
      let data={
        id:id
      } 
      this.$axios.post('/backmanage/ProductShelfDown',data)
      .then(res=>{
       this.GetProduct()
      })
    },
    //切换标签卡
    handleClick(tab, event){
      this.activeName=tab.name
      this.inputsearch=''
      this.GetProduct()
    },
    //分页切换
    handleCurrentChange(index){
      this.currentPage=index
     
    },
    Search(inputsearch){
      this.tabledata= this.procuctlist.filter(item=>{
        return item.product_name.match(inputsearch)
      })
      this.pagetotal=parseInt(this.tabledata.length/10)+1
      this.itemtotal=this.tabledata.length
      this.currentPage=1
    }
  },
};
</script>

<style scoped lang="scss">
.main {
  margin: auto;
}

.main .sub {
  padding: 10px;
}
.sub {
  line-height: 50px;
  background-color: white;
  font-size: 20px;
  position: relative;
  margin: 20px 0;
}
.sub .el-button {
  position: absolute;
  top: 15px;
  right: 15px;
}
.list {
  background-color: white;
  padding: 10px;
  margin-bottom: 50px;
}

.tabletop {
  background: #eeeeee;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}

.tableitem {
  margin: 10px auto;
  border: 1px solid #dddddd;
}
.tableitem:hover {
  box-shadow: 0 0 10px #999999;
}

.tabletext {
  color: #383838;
  line-height: 20px;
  overflow: hidden;
}

.contain {
  padding: 20px;
  width: 95%;
  margin: auto;
  text-align: center;
}

.page {
  background-color: white;
  margin: 30px auto;
  text-align: center;
}

.btn{
  width: 30%;
  margin: auto;
}

.pic{
  margin-right:10px ;
  margin-bottom:10px;
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