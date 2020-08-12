<!--
 * @Author: your name
 * @Date: 2020-07-28 10:09:44
 * @LastEditTime: 2020-08-11 16:21:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\infomation.vue
--> 
<!--  -->
<template>
  <div class="w d-flex jc-between my-3">
    <div class="left p-4">
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
    <div class="right p-4">
      <div class="d-flex jc-between">
        <h3 class="fs-xxl text-info">求购中心</h3>
        <span class="text-blue-1">查看更多>></span>
      </div>

      <div class="mt-3 info">
        <ul ref="con2" :class="{anim:animate2}" @mouseenter="mEnter2" @mouseleave="mLeave2">
          <li
            class="d-flex jc-between border-bottom py-3"
            v-for="(item,index) in items2"
            :key="index"
          >
            <span>[{{item.title}}] {{item.info}}</span>
            <span class="fs-xs">{{item.time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      timer1: "",
      timer2: "",

      animate1: true,
      animate2: false,

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
      items2: [
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
    };
  },

  components: {},

  computed: {},
  mounted() {
    this.timer1 = setInterval(this.scroll1, 2000);
    this.timer2 = setInterval(this.scroll2, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  },
  methods: {
    scroll1() {
      let con1 = this.$refs.con1;
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
    scroll2() {
      let con2 = this.$refs.con2;
      con2.style.marginTop = "-42px";
      this.animate2 = true;
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function () {
        that.animate2 = false;
        that.items2.push(that.items2.shift());
        con2.style.marginTop = "0px";
      }, 1000);
    },
    mEnter1() {
      clearInterval(this.timer1);
    },
    mEnter2() {
      clearInterval(this.timer2);
    },
    mLeave1() {
      this.timer1 = setInterval(this.scroll1, 2000);
    },
    mLeave2() {
      this.timer2 = setInterval(this.scroll2, 2000);
    },
  },
};
</script>
<style scoped lang="scss">
.left,
.right {
  width: 48%;
  height: 300px;
  background-color: #fff;
  .info {
    overflow: hidden;
    height: 250px;
  }
}
.anim {
  transition: all 0.75s;
}
</style>