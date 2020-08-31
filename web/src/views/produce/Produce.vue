<!--
 * @Author: your name
 * @Date: 2020-07-31 09:28:50
 * @LastEditTime: 2020-07-31 17:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\companies\Compaines.vue
--> 
<!--  -->
<template>
  <div id="produce">
    <!-- 头部banner -->
    <!-- <div class="baner">
      <h1>生产对接</h1>
      <div class="title">生产对接 降本增效好途径</div>
      <div class="subtitle">生产设备与生产订单共享，实现区域协调</div>
    </div> -->
    <!-- 选择生产设备类型区域 -->
    <div class="choosearea">
      <div class="choosetop">
        <el-row type="flex" :gutter="20">
          <el-col :span="6" class="choosetop-1">
            <div class="shape"></div>
          </el-col>
          <el-col :span="6" class="choosetop-2">我是供应方</el-col>
          <el-col :span="6" class="choosetop-1">
            <div class="shape"></div>
          </el-col>
        </el-row>
      </div>
      <div class="choosecontent">
        <el-row type="flex" class="row-bg" justify="space-between" >
          <!-- <el-col > -->
            <div class="chooseitem">
              <div class="img-icon icon1"></div>
              <div class="text">生产订单</div>
            </div>
          <!-- </el-col> -->
          <!-- <el-col > -->
            <div class="chooseitem">
              <div class="img-icon icon2"></div>
              <div class="text">设备</div>
            </div>
          <!-- </el-col> -->
          <!-- <el-col > -->
            <div class="chooseitem">
              <div class="img-icon icon3"></div>
              <div class="text">产品</div>
            </div>
          <!-- </el-col> -->
          <!-- <el-col> -->
            <div class="chooseitem">
              <div class="img-icon icon4"></div>
              <div class="text">材料</div>
            </div>
          <!-- </el-col> -->
        </el-row>
      </div>
    </div>
    <!-- 生产订单发布 -->
    
    <!-- <div class="choosearea">
      <div class="choosetop">
        <el-row type="flex" :gutter="20">
          <el-col :span="6" class="choosetop-1">
            <div class="shape"></div>
          </el-col>
          <el-col :span="6" class="choosetop-2">协同生产订单</el-col>
          <el-col :span="6" class="choosetop-1">
            <div class="shape"></div>
          </el-col>
        </el-row>
      </div>
      <div class="choosecontent orderlist" >
        <el-row type="flex" class="row-bg" justify="space-between" :gutter="40">
         
          <el-col :span="12">
            <div class="orderitem">
              <div class="ordertop">
                <div class="beforetab"></div>
                <div class="ordertitle">即将到期</div>
                <div class="more">更多 ></div>
              </div>
            </div>
            <div class="ordercontent">
              <el-tabs v-model="activeName1" @tab-click="handleClick">
                <el-tab-pane label="全部" name="全部">
                  <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items1" :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="棉花" name="棉花">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items1.filter(unit=>unit.title==='棉花')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="钢铁" name="钢铁">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items1.filter(unit=>unit.title==='钢铁')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="电子元器件" name="电子元器件">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items1.filter(unit=>unit.title==='电子元器件')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
   
          <el-col :span="12">
            <div class="orderitem">
              <div class="ordertop">
                <div class="beforetab"></div>
                <div class="ordertitle">最新发布</div>
                <div class="more">更多 ></div>
              </div>
              <div class="ordercontent">
              <el-tabs v-model="activeName2" @tab-click="handleClick">
                <el-tab-pane label="全部" name="全部">
                  <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items2" :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="棉花" name="棉花">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items2.filter(unit=>unit.title==='棉花')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="钢铁" name="钢铁">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items2.filter(unit=>unit.title==='钢铁')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="电子元器件" name="电子元器件">
                   <ul ref="con2" class="orderold">
                    <li
                      class="d-flex jc-between border-bottom py-3"
                      v-for="(item,index) in items2.filter(unit=>unit.title==='电子元器件')"  :key="index" v-if="index<5"
                    >
                      <span class="sp">{{item.info}}</span>
                      <span class="dt">{{item.time}}</span>
                      <span class="bj">立即报价</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div> -->
  
  </div>
</template>

<script>
export default {
  name: "Produce",
  data() {
    return {
      items1: [
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
      ],
      items2: [
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
          { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        { title: "钢铁", info: "大量出售钢铁,价格面议", time: "2020-7-24" },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
        {
          title: "电子元器件",
          info: "大量出售电子元器件,价格面议",
          time: "2020-7-24",
        },
      ],
      activeName1: '全部',
      activeName2: '全部',

    };
  },

  components: {},

  computed: {},

  methods: {
     handleClick(tab, event) {
        console.log(tab, event);
     }
  }
};
</script>
<style scoped lang="scss">
.baner {
  background: url(../../assets/img/produce-bg.png) -250px -90px;
  width: 100%;
  height: 400px;
  color: white;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  padding: 120px 150px;
}
.baner h1 {
  font-size: 40px;
  line-height: 60px;
}
.baner .title {
  font-size: 20px;
  line-height: 50px;
}
.baner .subtitle {
  font-size: 16px;
  line-height: 50px;
}

.choosearea {
  // height: 100px;
  padding: 80px 0;
}
.choosetop {
  width: 600px;
  margin: auto;
  height: 100px;
  font-weight: none;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

.choosecontent {
  width: 1000px;
  height: 240px;
  margin: auto;
}
.choosetop-1 {
  width: 180px;
  padding: 26px 0;
}

.choosetop-2 {
  width: 70%;
  text-align: center;
  font-size: 30px;
  line-height: 60px;
}

.shape {
  height: 3px;
  border: 1px solid #d0d0d0;
}

.choosearea .chooseitem {
  height: 200px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  padding: 20px 50px;
  color: #2f2f2f;
  background-color: white;
}

.choosearea .chooseitem:hover {
  border: 1px solid #007acc;
  color: #007acc;
}

.img-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #f4f9f6;
  box-shadow: 5px 5px #f4f9f6;
}

.text {
  width: 100px;
  line-height: 60px;
  height: 60px;
  font-size: 16px;
  // color: #2f2f2f;
  text-align: center;
}
.icon1 {
  background: url(../../assets/img/yjc_tab1.png) no-repeat 20px 20px;
  background-color: #f4f9f6;
}
.icon2 {
  background: url(../../assets/img/yjc_tab2.png) no-repeat 20px 20px;
  background-color: #f4f9f6;
}
.icon3 {
  background: url(../../assets/img/yjc_tab3.png) no-repeat 20px 20px;
  background-color: #f4f9f6;
}
.icon4 {
  background: url(../../assets/img/yjc_tab4.png) no-repeat 20px 20px;
  background-color: #f4f9f6;
}

.ordertop {
  height: 40px;
  padding: 5px 0;
  position: relative;
}

.beforetab {
  width: 2px;
  height: 30px;
  background-color: #007acc;
  // display: inline-block;
  margin-right: 5px;
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

.more {
  float: right;
  line-height: 30px;
  color: #007acc;
  font-size: 14px;
}
.more:hover {
  color: #043d63;
  cursor: pointer;
}

// .left,
// .right {
//   width: 48%;
//   height: 300px;
//   background-color: #fff;
//   .info {
//     overflow: hidden;
//     height: 250px;
//   }
// }
// .anim {
//   transition: all 0.75s;
// }

.orderlist{
  height: 300px;
}

.orderold{
  height: 300px;
  overflow: hidden;
}

.orderold li{
  font-size: 14px;

  color:  #409EFF;
}

.sp{
 
  width: 60%;
}
.orderold li .dt{
width: 20%;
color: #3e3e3e;
}
</style>