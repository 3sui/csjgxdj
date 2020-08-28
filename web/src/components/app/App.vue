<!--
 * @Author: your name
 * @Date: 2020-08-11 16:27:05
 * @LastEditTime: 2020-08-20 14:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\AppCenter.vue
-->
<!--  -->
<template>
  <div class="bg-white">
    <div class="w  py-5 ">
      <div class="d-flex jc-left ai-end">
        <h2 class="mr-3 fs-xxl-2">研发设计</h2>
        <p class="mr-5 text-grey">划线价格为产品历时销售价而非原价</p>
        <div class="fs-md btn">
          <!-- <span
            :class="{active: isActive == index}"
            v-for="(item, index) in list"
            :key="index"
            @click="isActive = index"
          >{{item}}</span> -->
        </div>
      </div>
      <div class="more d-flex mt-5">
        <div class="left p-3 text-white">
          <div>
            <h3 class="fs-xxl border-bottom py-2 mb-2">欧盟RoHS测试</h3>
            <p>
              RoHS一站式解决方案
              <br />增强产品绿色竞争力
            </p>
            <span class="hot">hot</span>
          </div>
          <div class="show text-center w-100">立即查看</div>
        </div>
        <div class="right">
          <div class="d-flex flex-wrap goods-list">
            <div class="p-4" v-for="(item, index) in 6" :key="index">
              <h3 class="fs-xxl">服装鞋包热门测试套餐</h3>
              <p class="my-2 text-grey">电商平台入驻,太保天猫京东认可</p>
              <div class="w-100 text-center">
                <img src="@/assets/img/ad1.jpg"  alt />
              </div>
              <span class="hot">hot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: ["研发设计1", "研发设计2", "研发设计3", "研发设计4"],
      isActive: 0,
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.btn {
  span {
    // display: inline-block;
    margin-right: 15px;
    padding: 10px 25px;
    color: #999;
    border: 1px solid #999;
    cursor: pointer;
    &.active {
      color: #1875f0;
      border-color: #1875f0;
    }
  }
}
.left {
  width: 25%;
  height: 415px;
  background-color: red;
  background: url("../../assets/img/ad.jpg") no-repeat;
  background-size: cover;

  > div {
    position: relative;
    width: 130px;
    // background-color: #fff;
  }
  p {
    line-height: 18px;
  }
  .show {
    margin-top: 260px;
    padding: 8px 0;
    border: 1px solid #fff;
  }
}
.right {
  flex: 1;
  //   background-color: green;
  .goods-list {
    height: 100%;
    > div {
      // flex-shrink: 1;
      position: relative;
      width: 33.3%;
      height: 50%;
      line-height: 30px;
      border: 1px solid #eee;
      background-color: #fff;
      transition: 0.5s all;

      &:hover {
        // transform: scale(1.1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
        z-index: 1000;
      }
      .hot {
        top: 15px;
        right: 25px;
        line-height: 1.5;
      }
    }
  }
}
.hot {
  position: absolute;
  top: 0;
  right: -30px;
  padding: 2px 6px;
  border-radius: 5px;
  color: #fff;
  background-color: orange;
}

</style>