<template>
  <div class="control">
    <div class="top">
      <el-carousel :interval="15000" arrow="always" height="200px" trigger="click">
        <!-- 外协-我是应用方 -->
        <el-carousel-item>
          <el-row :gutter="20">
            <el-col span="4" offset="1">
              <div class="top-left">
                <div class="icon">
                  <i class="el-icon-user-solid title-icon"></i>
                </div>
                <div class="title">外协-我是供应方</div>
              </div>
            </el-col>
            <el-col span="17">
              <div class="top-right">
                <el-steps align-center>
                  <el-step title icon="el-icon-edit">
                    <template slot="description">
                      <div class="des">发布能力</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-success">
                    <template slot="description">
                      <div class="des">审核通过</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-question">
                    <template slot="description">
                      <div class="des">企业询价</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-check">
                    <template slot="description">
                      <div class="des">报价中标</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-order">
                    <template slot="description">
                      <div class="des">生成订单</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-money">
                    <template slot="description">
                      <div class="des">收款</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-comment">
                    <template slot="description">
                      <div class="des">评价</div>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <!-- 外协-我是需求方 -->
        <el-carousel-item>
          <el-row :gutter="20">
            <el-col span="4" offset="1">
              <div class="top-left">
                <div class="icon">
                  <i class="el-icon-user-solid title-icon"></i>
                </div>
                <div class="title">外协-我是需求方</div>
              </div>
            </el-col>
            <el-col span="17">
              <div class="top-right">
                <el-steps align-center space="40px">
                  <el-step title icon="el-icon-edit">
                    <template slot="description">
                      <div class="des">发布需求</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-success">
                    <template slot="description">
                      <div class="des">审核通过</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-question">
                    <template slot="description">
                      <div class="des">等待企业报价</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-check">
                    <template slot="description">
                      <div class="des">优选优质企业</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-order">
                    <template slot="description">
                      <div class="des">生成订单</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-claim">
                    <template slot="description">
                      <div class="des">等待企业确认</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-money">
                    <template slot="description">
                      <div class="des">付款</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-comment">
                    <template slot="description">
                      <div class="des">评价</div>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <!-- 外购-我是采购方 -->
        <el-carousel-item>
          <el-row :gutter="20">
            <el-col span="4" offset="1">
              <div class="top-left">
                <div class="icon">
                  <i class="el-icon-user-solid title-icon"></i>
                </div>
                <div class="title">外购-我是采购方</div>
              </div>
            </el-col>
            <el-col span="17">
              <div class="top-right">
                <el-steps align-center space="40px">
                  <el-step title icon="el-icon-edit">
                    <template slot="description">
                      <div class="des">发布需求</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-success">
                    <template slot="description">
                      <div class="des">审核通过</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-question">
                    <template slot="description">
                      <div class="des">等待企业报价</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-check">
                    <template slot="description">
                      <div class="des">优选优质企业</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-order">
                    <template slot="description">
                      <div class="des">生成订单</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-money">
                    <template slot="description">
                      <div class="des">等待企业发货</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-finished">
                    <template slot="description">
                      <div class="des">收货</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-comment">
                    <template slot="description">
                      <div class="des">评价</div>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <!-- 外购-我是销售方 -->
        <el-carousel-item>
          <el-row :gutter="20">
            <el-col span="4" offset="1">
              <div class="top-left">
                <div class="icon">
                  <i class="el-icon-user-solid title-icon"></i>
                </div>
                <div class="title">外购-我是销售方</div>
              </div>
            </el-col>
            <el-col span="17">
              <div class="top-right">
                <el-steps align-center>
                  <el-step title icon="el-icon-edit">
                    <template slot="description">
                      <div class="des">发布商品</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-success">
                    <template slot="description">
                      <div class="des">审核通过</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-s-order">
                    <template slot="description">
                      <div class="des">确认订单</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-money">
                    <template slot="description">
                      <div class="des">对方付款</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-truck">
                    <template slot="description">
                      <div class="des">发货</div>
                    </template>
                  </el-step>
                  <el-step title icon="el-icon-finished">
                    <template slot="description">
                      <div class="des">对方收货</div>
                    </template>
                  </el-step>
                  <!-- <el-step title="" icon="el-icon-money">
                      <template slot="description"  >
                           <div class="des">付款</div>                        
                       </template>
                  </el-step>-->
                  <el-step title icon="el-icon-s-comment">
                    <template slot="description">
                      <div class="des">评价</div>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle">
        <div class="showspan">
        <el-row type="flex">
            <el-col>
                <div  class="classspan bg-1">
                  <div class="midtitle"><div class="midspan"><i class="el-icon-s-order"></i></div><div class="midspan">发布外协需求</div></div>
                </div>
            </el-col>
             <el-col>
                <div  class="classspan bg-2">
                   <div class="midtitle"><div class="midspan"><i class="el-icon-s-order"></i></div><div class="midspan">发布外协需求</div>
                   </div></div>
            </el-col>
             <el-col>
                <div  class="classspan bg-3">
                   <div class="midtitle"><div class="midspan"><i class="el-icon-s-order"></i></div><div class="midspan">发布外协需求</div></div></div>
            </el-col>
             <el-col>
                <div  class="classspan bg-4">
                   <div class="midtitle"><div class="midspan"><i class="el-icon-s-order"></i></div><div class="midspan">发布外协需求</div></div></div>
            </el-col>
            
        </el-row>
        </div>
    </div>

    <div class="middle">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="part">
            <div class="orderitem">
              <div class="ordertop">
                <div class="beforetab"></div>
                <div class="ordertitle">我是需求方</div>
              </div>
            </div>
            <div class="orderarea">
              <div class="box">
                <div class="box-left">
                  <div class="box-icon"></div>
                  <div class="box-title">需求管理</div>
                </div>
                <div class="box-right">
                  <p>
                    待审核
                    <span class="ordernum">1</span>
                  </p>
                  <p>
                    询价中
                    <span class="ordernum">2</span>
                  </p>
                  <p>
                    待下单
                    <span class="ordernum">3</span>
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="box-left">
                  <div class="box-icon"></div>
                  <div class="box-title">采购管理</div>
                </div>
                <div class="box-right">
                  <p>
                    待审核
                    <span class="ordernum">1</span>
                  </p>
                  <p>
                    询价中
                    <span class="ordernum">2</span>
                  </p>
                  <p>
                    待下单
                    <span class="ordernum">3</span>
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="box-left">
                  <div class="box-icon"></div>
                  <div class="box-title">订单管理</div>
                </div>
                <div class="box-right">
                  <p>
                    待审核
                    <span class="ordernum">1</span>
                  </p>
                  <p>
                    询价中
                    <span class="ordernum">2</span>
                  </p>
                  <p>
                    待下单
                    <span class="ordernum">3</span>
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="box-left">
                  <div class="box-icon"></div>
                  <div class="box-title">合同管理</div>
                </div>
                <div class="box-right">
                  <p>
                    待审核
                    <span class="ordernum">1</span>
                  </p>
                  <p>
                    询价中
                    <span class="ordernum">2</span>
                  </p>
                  <p>
                    待下单
                    <span class="ordernum">3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="part">
            <div class="orderitem">
              <div class="ordertop">
                <div class="beforetab"></div>
                <div class="ordertitle">我是供应方</div>
              </div>
            </div>
             <div class="orderarea">
                <div class="box">
                    <div class="box-left">
                        <div class="box-icon"></div>
                        <div class="box-title">需求管理</div>
                    </div>
                    <div class="box-right">
                        <p>待审核 <span class="ordernum">1</span></p>
                        <p>询价中 <span class="ordernum">2</span></p>
                        <p>待下单 <span  class="ordernum">3</span></p>
                    </div>
                </div>
                 <div class="box">
                    <div class="box-left">
                        <div class="box-icon"></div>
                        <div class="box-title">采购管理</div>
                    </div>
                    <div class="box-right">
                        <p>待审核 <span class="ordernum">1</span></p>
                        <p>询价中 <span class="ordernum">2</span></p>
                        <p>待下单 <span  class="ordernum">3</span></p>
                    </div>
                </div>
                 <div class="box">
                    <div class="box-left">
                        <div class="box-icon"></div>
                        <div class="box-title">订单管理</div>
                    </div>
                    <div class="box-right">
                          <p>待审核 <span class="ordernum">1</span></p>
                        <p>询价中 <span class="ordernum">2</span></p>
                        <p>待下单 <span  class="ordernum">3</span></p>

                    </div>
                </div>
                 <div class="box">
                    <div class="box-left">
                        <div class="box-icon"></div>
                        <div class="box-title">合同管理</div>
                    </div>
                    <div class="box-right">
                        <p>待审核 <span class="ordernum">1</span></p>
                        <p>询价中 <span class="ordernum">2</span></p>
                        <p>待下单 <span  class="ordernum">3</span></p>
                    </div>
                </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "Control",
  data() {
    return {
        showspan:[{
            title:"发布外协需求",
            icon:"",
            image:img1
        },
        {
            title:"发布能力",
            icon:"",
            image:img2
        },
        {
            title:"发布采购需求",
            icon:"",
            image:img3
        },
        {
            title:"发布商品",
            icon:"",
            image:img4
        },]
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.control {
  padding: 20px;
}

.top {
  height: 200px;
  background: white;
}

.icon {
  width: 100px;
  height: 100px;
  margin: auto;
  background-color: cornflowerblue;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0 0 10px #999999;
}

.title-icon {
  font-size: 60px;
  width: 100%;
  // margin: 0;
  line-height: 100px;
  color: white;
  text-align: center;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #636363;
  text-align: center;
  line-height: 80px;
}

.top-right {
  height: 120x;
  margin: 40px auto;
}

.top-right .des {
  width: 100px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 16px;
  background: linear-gradient(to right, #659eff, #7a88ff);
  box-shadow: 0 0 10px #999999;
  border-radius: 5px;
  margin-top: 30px;
}

.top-right .des::before {
  content: "";
  width: 0;
  height: 0;
  border: 15px solid;
  position: absolute;
  bottom: 40px;
  left: 65px;
  border-color: transparent transparent #7092ff transparent;
}
.middle {
  margin: 20px auto;
}

.part {
  width: 100%;
  min-width: 500px;
  //   height: 20px;
  background-color: white;
  padding: 20px;
}

.ordertop {
  height: 40px;
  padding: 5px 0;
  position: relative;
}

.beforetab {
  width: 5px;
  height: 30px;
  line-height: 30px;
  background-color: #007acc;
  // display: inline-block;
  margin-right: 20px;
  float: left;
}

.orderitem {
  width: 480px;
}

.ordertitle {
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  height: 30px;
  // display: inline-block;
  float: left;
}

.box {
  width: 50%;

  display: inline-block;
}

.middle .box:nth-child(4n + 1) {
  border-right: 0.5px dashed #999999;
}
.middle .box:nth-child(4n + 2) {
  border-bottom: 0.5px dashed #999999;
}

.middle .box:nth-child(4n + 3) {
  border-top: 0.5px dashed #999999;
}

.middle .box:nth-child(4n) {
  border-left: 0.5px dashed #999999;
}

.box-left {
  width: 50%;
  display: inline-block;
}
.box-icon {
  width: 70px;
  height: 70px;
  margin: 20px auto;
  background: url("http://core.casicloud.com/portal/newportal/images/admin_back_countIcon1.png")
    100% 100% no-repeat;
    transition: all 1s linear;
}

.box-icon:hover {
  -webkit-transition: -webkit-transform 1s;
  transition: transform  1s;
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px,-0);
}
.box-title {
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
}
.box-title:hover{
    color: cornflowerblue;
    cursor: pointer;
}

.box-right {
  width: 50%;
  display: inline-block;
}
.box-right p {
  line-height: 40px;
  text-align: left;
  font-size: 14px;
}

.ordernum {
  color: blue;
}
.showspan{
    background: white;
    padding: 20px 0;
}

.showspan .classspan{
    width: 90%;
    margin: auto;
    height: 120px;
    padding: 30px 0 ;
     
}
.bg-1{
  background-image:url("http://core.casicloud.com/portal/newportal/images/admin_back_linkBg1.png") ;
}
.bg-2{
  background-image:url("http://core.casicloud.com/portal/newportal/images/admin_back_linkBg2.png") ;
}
.bg-3{
  background-image:url("http://core.casicloud.com/portal/newportal/images/admin_back_linkBg3.png") ;
}
.bg-4{
  background-image:url("http://core.casicloud.com/portal/newportal/images/admin_back_linkBg4.png") ;
}

.midtitle{
  width: 80%;
  margin: 0 auto;
  height: 60px;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  transition: all 1s linear;
}

.midtitle:hover{
  transition: transform  1s ;
  transform: translate3d(0,-20px 0);
  -webkit-transition: -webkit-transform 1s;
  -webkit-transform: translate3d(0, -20px, 0);
}

.midtitle i{
  font-size: 60px;
}
.midtitle .midspan{
  // line-height: 60px;
  // height: 60px;
  display: inline-block;
 
}







</style>

<style >
.top .el-carousel__button {
  background-color: #7092ff;
  width: 8px;
  height: 8px;
  border: 1px solid #7092ff;
  border-radius: 50%;
}

</style>