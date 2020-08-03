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
      <div class="search mt-3 shadow">
        <el-input placeholder="请输入内容" v-model="searchQuery" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
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
      <div class="list">
        <div
          v-for="(item, index) in tableData"
          :key="index"
          class="d-flex jc-between shadow list_item mb-3"
        >
          <div class="d-flex jc-start">
            <div>
              <img :src="item.url" />
            </div>
            <div class="ml-3">
              <h3 class="mb-2">{{item.name}}</h3>
              <p class="claim">
                <span>{{item.type1}}</span>
                <span>{{item.type2}}</span>
                <span>{{item.type3}}</span>
              </p>
              <p class="mt-4 pt-2 fs-lg text-grey">技能要求:</p>
            </div>
          </div>
          <div class="d-flex flex-column jc-between text-right">
            <p class="fs-xxl text-red">¥ {{item.price}}</p>
            <p class="fs-lg text-grey">
              已竞标:
              <span class="fs-xxl text-black">{{item.people}}</span>
              人
              <span class="mx-3">|</span> 发布于
              <span>{{item.time}}</span>
            </p>
          </div>
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
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
          isLegalize: true,
        },
        {
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
          isLegalize: false,
        },
        {
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
          isLegalize: false,
        },
        {
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
          isLegalize: false,
        },
        {
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
          isLegalize: true,
        },
        {
          name: "贷后管理系统",
          url:
            "https://zb.oschina.net/file/get?path=static/project-reward/cover/H5yingyong_3.png",
          type1: "项目",
          type2: "H5应用",
          type3: "15天",
          price: "5000-10000",
          people: 1,
          time: "2020-07-31",
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
    height: 140px;
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
      right: 120px;
      top: 20px;
    }
    .vip {
      position: absolute;
    }
  }
}
</style>