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
        <div class="d-flex jc-start mb-2">
          <div class="fs-lg type">产品工艺:</div>
          <div class="items d-flex flex-wrap">
            <span
              @click="changeType1(item.value)"
              v-for="(item, index) in Type1"
              :key="index"
              :class="{active: item.value == isType1}"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="d-flex jc-start mb-2">
          <div class="fs-lg type">产品工艺:</div>
          <div class="items d-flex flex-wrap">
            <span
              @click="changeType2(item.value)"
              v-for="(item, index) in Type2"
              :key="index"
              :class="{active: item.value == isType2}"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="d-flex jc-start mb-2">
          <div class="fs-lg type">价格区间:</div>
          <div class="items d-flex flex-wrap">
            <span
              @click="changeType3(item.value)"
              v-for="(item, index) in Type3"
              :key="index"
              :class="{active: item.value == isType3}"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div class="list">
        <div v-for="(item, index) in tableData" :key="index" class="d-flex shadow list_item mb-3">
          <div class="d-flex flex-row title-icon">
            <div class>
              <img :src="item.url" class="listimg" />
            </div>
          </div>

          <div class="d-flex flex-column detail">
            <div class="p-2">
              <div class="d-flex flex-row">
                <div class="p-2">
                  <h3 class="enterprise">{{item.enterpriseName}}</h3>
                </div>
                <div class="p-2">
                  <button type="button" class="btn consult">询价</button>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="d-flex item-key key-first">工艺</div>
                <div class="d-flex item-value value-first">{{item.craft}}</div>
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="d-flex item-key">区域</div>
                <div class="d-flex item-value">{{item.region}}</div>
                <div class="d-flex item-key">企业类型</div>
                <div class="d-flex item-value">{{item.enterpriseType}}</div>
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="d-flex item-key">工厂面积</div>
                <div class="d-flex item-value">{{item.area}}</div>
                <div class="d-flex item-key">员工数量</div>
                <div class="d-flex item-value">{{item.employeeSum}}</div>
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="d-flex item-key">年产值</div>
                <div class="d-flex item-value">{{item.annualIncome}}</div>
                <div class="d-flex item-key">资质认证</div>
                <div class="d-flex item-value">{{item.certification}}</div>
              </div>
            </div>
            <div class="p-3">
              <div class="d-flex flex-row">
                <div class="d-flex item-key">生产设备</div>
                <div class="d-flex item-value">{{item.productionEquipment}}</div>
                <div class="d-flex item-key">检测设备</div>
                <div class="d-flex item-value">{{item.testingEquipment}}</div>
              </div>
            </div>
          </div>

          <!-- <div class="d-flex flex-column jc-between "> -->

          <!-- <button type="button" class="btn btn-primary">Primary</button> -->
          <!-- <p class="fs-lg text-grey">
              已竞标:
              <span class="fs-xxl text-black">{{item.people}}</span>
              人
              <span class="mx-3">|</span> 发布于
              <span>{{item.time}}</span>
          </p>-->
          <!-- </div> -->
          <img
            v-if="item.isLegalize"
            class="qualifications"
            src="https://zb.oschina.net/static/images/project/time.png"
            width="100"
            alt
          />
          <img
            v-if="true"
            class="vip"
            src="https://zb.oschina.net/static/images/project/member1.png"
            alt
          />
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" class="page"></el-pagination>
    </div>

    <div class="right">
      <div class="mt-3">
        <el-button class="w-100">免费发布需求</el-button>
      </div>
      <div class="p-4 bg-white mt-3 shadow">
        <div class="d-flex jc-between">
          <h3 class="fs-xxl text-info">采购中心</h3>
          <span class="text-blue-1">查看更多>></span>
        </div>

        <div class="mt-3 info">
          <ul ref="con1" :class="{anim: animate1}" @mouseenter="mEnter1" @mouseleave="mLeave1">
            <li
              class="d-flex jc-between border-bottom py-3"
              v-for="(item,index) in items1"
              :key="index"
            >
              <span>[{{item.title}}] {{item.info}}</span>
              <span class="fs-xs">{{item.time}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compaines",
  data() {
    return {
      searchQuery: "",
      isType1: 0,
      Type1: [
        { name: "不限", value: 0 },
        { name: "产品1", value: 1 },
        { name: "产品2", value: 2 },
        { name: "产品3", value: 3 },
        { name: "产品4", value: 4 },
        { name: "产品5", value: 5 },
        { name: "产品6", value: 6 },
        { name: "产品7", value: 7 },
      ],
      isType2: 0,
      Type2: [
        { name: "不限", value: 0 },
        { name: "产品1", value: 1 },
        { name: "产品2", value: 2 },
        { name: "产品3", value: 3 },
        { name: "产品4", value: 4 },
        { name: "产品5", value: 5 },
        { name: "产品6", value: 6 },
        { name: "产品7", value: 7 },
      ],
      isType3: 0,
      Type3: [
        { name: "不限", value: 0 },
        { name: "5000以下", value: 1 },
        { name: "5000-10000", value: 2 },
        { name: "10000-50000", value: 3 },
        { name: "50000以上", value: 4 },
      ],
      timer1: "",

      animate1: true,

      items1: [
        { title: "棉花1", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花2", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花3", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
        { title: "棉花", info: "大量出售棉花,价格面议", time: "2020-7-24" },
      ],

      tableData: [
        {
          enterpriseName: "航天云网数据研究院（江苏）有限公司",
          url: "http://119.3.108.13/50057bee-003d-4f50-bb06-5be1ba3273cb.png",
          craft: "工艺",
          region: "江苏省常州市",
          enterpriseType: "国企",
          area: "0-1,000 ㎡",
          employeeSum: "1-50",
          annualIncome: "￥0-5,000,000",
          certification: "ISO 9001",
          productionEquipment: "20种",
          testingEquipment: "10种",
          isLegalize: true,
        },
        {
          enterpriseName: "航天云网数据研究院（江苏）有限公司",
          url: "http://119.3.108.13/50057bee-003d-4f50-bb06-5be1ba3273cb.png",
          craft: "工艺",
          region: "江苏省常州市",
          enterpriseType: "国企",
          area: "0-1,000 ㎡",
          employeeSum: "1-50",
          annualIncome: "￥0-5,000,000",
          certification: "ISO 9001",
          productionEquipment: "20种",
          testingEquipment: "10种",
          isLegalize: true,
        },
        {
          enterpriseName: "航天云网数据研究院（江苏）有限公司",
          url: "http://119.3.108.13/50057bee-003d-4f50-bb06-5be1ba3273cb.png",
          craft: "工艺",
          region: "江苏省常州市",
          enterpriseType: "国企",
          area: "0-1,000 ㎡",
          employeeSum: "1-50",
          annualIncome: "￥0-5,000,000",
          certification: "ISO 9001",
          productionEquipment: "20种",
          testingEquipment: "10种",
          isLegalize: true,
        },
        {
          enterpriseName: "航天云网数据研究院（江苏）有限公司",
          url: "http://119.3.108.13/50057bee-003d-4f50-bb06-5be1ba3273cb.png",
          craft: "工艺",
          region: "江苏省常州市",
          enterpriseType: "国企",
          area: "0-1,000 ㎡",
          employeeSum: "1-50",
          annualIncome: "￥0-5,000,000",
          certification: "ISO 9001",
          productionEquipment: "20种",
          testingEquipment: "10种",
          isLegalize: true,
        },
        {
          enterpriseName: "航天云网数据研究院（江苏）有限公司",
          url: "http://119.3.108.13/50057bee-003d-4f50-bb06-5be1ba3273cb.png",
          craft: "工艺",
          region: "江苏省常州市",
          enterpriseType: "国企",
          area: "0-1,000 ㎡",
          employeeSum: "1-50",
          annualIncome: "￥0-5,000,000",
          certification: "ISO 9001",
          productionEquipment: "20种",
          testingEquipment: "10种",
          isLegalize: true,
        },
      ],

    };
  },

  components: {},

  computed: {},
  mounted() {
    this.timer1 = setInterval(this.scroll1, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
  },
  methods: {
    changeType1(a) {
      this.isType1 = a;
    },
    changeType2(a) {
      this.isType2 = a;
    },
    changeType3(a) {
      this.isType3 = a;
    },

    scroll1() {
      let con1 = this.$refs.con1;
      window.console.log(con1.style);
      this.animate1 = true;

      con1.style.marginTop = "-42px";

      // window.console.log(this.animate1);
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function () {
        that.animate1 = false;
        that.items1.push(that.items1.shift());
        con1.style.marginTop = "0px";
      }, 1000);
    },
    mEnter1() {
      clearInterval(this.timer1);
    },
    mLeave1() {
      this.timer1 = setInterval(this.scroll1, 2000);
    },
  },
};
</script>
<style scoped lang="scss">
.left {
  width: 73%;
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
  width: 100%;
  .list_item {
    position: relative;
    padding: 15px;
    height: 240px;
    background-color: #fff;
    .claim {
      span {
        display: inline-block;
        margin: 5px 4px 10px;
        padding: 3px 8px;
        font-size: 12px;
        background-color: #f9f9f9;
        border-radius: 0.3rem;
      }
    }
    .qualifications {
      position: absolute;
      right: 30px;
      top: 30px;
    }
    .vip {
      position: absolute;
    }
  }
}

.list_item:hover {
  border: 1px solid rgba(0, 135, 207, 0.5);
}

.listimg {
  width: 210px;
  height: 210px;
}

.consult {
  background-color: #e7f1f8;
  border: 1px solid #0e6eb8;
  color: #0e6eb8;
  font-size: 14px;
  line-height: 24px;
  height: 30px;
 
  width: 60px;
}
.consult:hover {
  background-color: #0e6eb8;
  color: white;
}

.list_item .item-key {
  color: #666666;
  background-color: #f9f9f9;
  border: 1px solid #f0f0f0;
  font-size: 12px;
  width: 40%;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
}
.list_item {
  height: 240px;
}

.list_item .item-value {
  color: #666666;
  // background-color: #f9f9f9;
  border: 1px solid #f0f0f0;
  // border-left: none;
  font-size: 12px;
  width: 60%;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
}

.list_item .key-first{
  width: 20%;
}

.list_item .value-first{
  width: 80%;
}

.list_item .p-3 {
  padding: 0 !important;
}

.detail {
  width: 80%;
}

.enterprise {
  line-height: 30px;
}
.page{
  width: 50%;
  margin: 20px auto;
 
}

</style>