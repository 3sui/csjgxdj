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
  <div id="compaines" class="w d-flex jc-between">
    <div class="left">
      <!-- 搜索框 -->
      <div class="search mt-3 shadow">
        <el-input placeholder="请输入内容" v-model="searchQuery" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

      <!-- 筛选 -->
      <div class="filter my-3 px-3 py-4 shadow bg-white">
        <el-tabs v-model="isclass1" @tab-click="handleClick">
          <!-- 产品 -->
          <el-tab-pane label="产品" name="产品">
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">区域:</div>
              <div class="items d-flex flex-wrap">
                <el-select
                  v-model="province"
                  placeholder="请选择省"
                  @change="handelChange"
                  class="selectitem"
                >
                  <el-option
                    v-for="item in provinces"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                  ></el-option>
                </el-select>
                <el-select v-model="city" placeholder="请选择市" class="selectitem">
                  <el-option
                    v-for="item in citiestemp"
                    :key="item.laber"
                    :label="item.laber"
                    :value="item.laber"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">分类:</div>
              <div class="items d-flex flex-wrap">
                <span
                  v-for="(item, index) in class2"
                  @click="changeclass2(item.name)"
                  :key="item.name"
                  :class="{active: item.name == isclass2}"
                >{{item.name}}</span>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">价格:</div>
              <div class="items d-flex flex-wrap">
                <span
                  @click="changepriceclass(item.name)"
                  v-for="(item, index) in priceclass"
                  :key="item.name"
                  :class="{active: item.name == isprice}"
                >{{item.name}}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="能力" name="能力">
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">区域:</div>
              <div class="items d-flex flex-wrap">
                <el-select
                  v-model="province"
                  placeholder="请选择省"
                  @change="handelChange"
                  class="selectitem"
                >
                  <el-option
                    v-for="item in provinces"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                  ></el-option>
                </el-select>
                <el-select v-model="city" placeholder="请选择市" class="selectitem">
                  <el-option
                    v-for="item in citiestemp"
                    :key="item.laber"
                    :label="item.laber"
                    :value="item.laber"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">分类:</div>
              <div class="items d-flex flex-wrap">
                <span
                  @click="changeclass2(item.name)"
                  v-for="(item, index) in class2"
                  :key="item.name"
                  :class="{active: item.name == isclass2}"
                >{{item.name}}</span>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">价格:</div>
              <div class="items d-flex flex-wrap">
                <span
                  @click="changepriceclass(item.name)"
                  v-for="(item, index) in priceclass"
                  :key="item.name"
                  :class="{active: item.name == isprice}"
                >{{item.name}}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="创意" name="创意">
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">区域:</div>
              <div class="items d-flex flex-wrap">
                <el-select
                  v-model="province"
                  placeholder="请选择省"
                  @change="handelChange"
                  class="selectitem"
                >
                  <el-option
                    v-for="item in provinces"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                  ></el-option>
                </el-select>
                <el-select v-model="city" placeholder="请选择市" class="selectitem">
                  <el-option
                    v-for="item in citiestemp"
                    :key="item.laber"
                    :label="item.laber"
                    :value="item.laber"
                  ></el-option>
                </el-select>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">分类:</div>
              <div class="items d-flex flex-wrap">
                <span
                  @click="changeclass2(item.name)"
                  v-for="(item, index) in class2"
                  :key="item.name"
                  :class="{active: item.name == isclass2}"
                >{{item.name}}</span>
              </div>
            </div>
            <div class="d-flex jc-start mb-3">
              <div class="fs-lg type">价格:</div>
              <div class="items d-flex flex-wrap">
                <span
                  @click="changepriceclass(item.name)"
                  v-for="(item, index) in priceclass"
                  :key="item.name"
                  :class="{active: item.name == isprice}"
                >{{item.name}}</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 列表 -->
      <div class="shadow bg-white list">
        <div class="sort">
          <span class="listtitle">
            产品
            <span class="listtitlesub">列表</span>
          </span>

          <span>
            发布时间
            <i class="el-icon-sort-up sorticon"></i>
          </span>
          <span class="fl" style="padding:0 20px;color: #ededed">|</span>
          <span>
            价格
            <i class="el-icon-sort-up sorticon"></i>
          </span>
        </div>

        <div type="flex" flex-wrap="wrap" justify="space-between">
          <el-col v-for="(item, index) in listdata" :key="index" class="list_item">
            <div class="imgicon">
              <img :src="item.url" alt width="100%" height="180px" />
              <div class="price">{{item.price}}</div>
            </div>
            <div class="text">
              <div class="text-1">{{item.productname}}</div>
              <div>{{item.enterprisename}}</div>
              <div>分类：{{item.class2}}</div>
            </div>
            <div class="text-2">立即询价</div>
          </el-col>
        </div>
        <div class="clearfloat"></div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" class="page"></el-pagination>
    </div>
  </div>
</template>

<script>
import provinces from "../../plugins/provinces";
import cities from "../../plugins/cities";

export default {
  name: "Producelist",
  data() {
    return {
      provinces: provinces,
      cities: cities,
      citiestemp: [],
      province: "",
      city: "",

      isclass1: "产品",

      searchQuery: "",

      class2: [
        { name: "不限", value: 0 },
        { name: "类型1", value: 1 },
        { name: "类型2", value: 2 },
        { name: "类型3", value: 3 },
        { name: "类型4", value: 4 },
        { name: "类型5", value: 5 },
        { name: "类型6", value: 6 },
        { name: "类型7", value: 7 }, 
         { name: "类型8", value: 4 },
        { name: "类型9", value: 5 },
        { name: "类型10", value: 6 },
        { name: "类型11", value: 7 },
      ],

      isclass2: "不限",
      priceclass: [
        { name: "不限", value: 0 },
        { name: "面议", value: 1 },
        { name: "收费", value: 2 },
        { name: "免费", value: 3 },
      ],
      isprice: "不限",

      listdata: [
        {
          url: "https://cdnfile.htres.cn/upload/yunfile/36/zfub8hfl32eq4d",
          productname: "检测设备",
          enterprisename: "航天云网数据研究院（江苏）有限公司",
          price: "面议",
          pv: "江苏",
          ct: "常州",
          class1: "产品",
          class2: "焊接",
        },
        {
          url: "https://cdnfile.htres.cn/upload/yunfile/36/zfub8hfl32eq4d",
          productname: "检测设备",
          enterprisename: "航天云网数据研究院（江苏）有限公司",
          price: "面议",
          pv: "江苏",
          ct: "常州",
          class1: "产品",
          class2: "电器",
        },
        {
          url: "https://cdnfile.htres.cn/upload/yunfile/36/zfub8hfl32eq4d",
          productname: "检测设备",
          enterprisename: "航天云网数据研究院（江苏）有限公司",
          price: "面议",
          pv: "江苏",
          ct: "常州",
          class1: "能力",
          class2: "物流",
        },
        {
          url: "https://cdnfile.htres.cn/upload/yunfile/36/zfub8hfl32eq4d",
          productname: "检测设备",
          enterprisename: "航天云网数据研究院（江苏）有限公司",
          price: "面议",
          pv: "江苏",
          ct: "无锡",
          class1: "能力",
          class2: "营销",
        },
        {
          url: "https://cdnfile.htres.cn/upload/yunfile/36/zfub8hfl32eq4d",
          productname: "检测设备",
          enterprisename: "航天云网数据研究院（江苏）有限公司",
          price: "面议",
          pv: "安徽",
          ct: "合肥",
          class1: "产品",
          class2: "电器",
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {
    //tab选项卡
    handleClick(tab, event) {
      console.log(tab, event);
      this.isclass1 = tab.name;
    },
    //省市选择
    handelChange(value) {
      this.city = "";
      this.citiestemp = this.cities[value];
    },
    //选择分类
    changeclass2(a) {
      this.isclass2 = a;
    },
    //选择价格
    changepriceclass(a) {
      this.isprice = a;
    },
  },
};
</script>
<style scoped lang="scss">
.clearfloat {
  clear: both;
  height: 0;
  font-size: 1px;
  line-height: 0px;
}
.left {
  width: 90%;
  margin: auto;
}
.right {
  width: 25%;
  //   background-color: #fff;
  .info {
    overflow: hidden;
    height: 250px;
  }
  .anim {
    transition: all 0.75s;
  }
}
.filter {
  border-radius: 0.15rem;
  .type {
    flex-shrink: 0;
    width: 80px;
    padding-top: 5px;
  }

  .items .selectitem {
    width: 200px;
    margin-right: 10px;
  }

  .items span {
    display: inline-block;
    margin: 0 5px 8px;
    width: 80px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    color: #999;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: #1876f0cc;
      border-radius: 0.3rem;
    }
  }
}
.list {
  // height: 700px;
  padding: 20px;
}

.list .sort {
  position: relative;
  height: 30px;
  font-weight: bold;
  padding: 5px auto;
  margin-bottom: 10px;
}

.list .listtitle {
  float: left;
  font-size: 20px;
  font-weight: bolder;
  font-style: italic;
  color: #303133;
  background: url(http://www.link2x.cn/public/images/icons/icon_zc_titleLine_bgstar.png)
    0 0 no-repeat;
  padding-left: 20px;
}

.listtitlesub {
  color: #ff6a00;
}

.sorticon {
  font-weight: 700;
}

.sort span {
  float: right;
}

.imgicon {
  // width: 200px;
  height: 180px;
  position: relative;
  overflow: hidden;
}

.imgicon img {
  transition: all 1s;
}
.imgicon img:hover {
  transform: scale(1.4);
}
.price {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: right;
  background-color: rgba($color: #000000, $alpha: 0.5);
  color: orangered;
  font-weight: bold;
  width: 100%;
  padding: 0 10px;
}

.list_item {
  // width: 25%;
  // height: 300px;
  width: 32%;
  margin-right: 2%;
  margin-bottom: 2%;

  border: 1px solid #eeeeee;
}
.list .list_item:nth-child(3n) {
  margin-right: 0;
}

.text {
  color: #999999;

  line-height: 24px;
  padding: 0 10px;
}
.text-1 {
  color: #333333;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.text-1:hover {
  color: #e6a23c;
  cursor: pointer;
}

.text-2 {
  border-top: 1px solid #eeeeee;
  line-height: 36px;
  //   padding: 0 10px;
  color: #999999;
  text-align: center;
  font-size: 16px;
}
.text-2:hover {
  background: #1875f0;
  color: white;
}

.page {
  width: 50%;
  margin: 20px auto;
}
</style>