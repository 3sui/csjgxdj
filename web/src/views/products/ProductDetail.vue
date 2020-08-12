<!--
 * @Author: your name
 * @Date: 2020-08-04 13:51:57
 * @LastEditTime: 2020-08-06 15:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\products\ProductDetail.vue
-->
<!--  -->
<template>
  <div class="ProductDetail w">
    <div class="pro-choose bg-white mt-4 p-4 d-flex">
      <div class="pro-img">
        <div class="w-100 big-img">
          <img
            src="http://api.gxrgo.com/upload/product_list/20200513/e290e6e470f21c0717edd12e58dccd84.jpg"
            alt
          />
        </div>
        <div class="small-img">
          <img
            src="http://api.gxrgo.com/upload/product_list/20200513/e290e6e470f21c0717edd12e58dccd84.jpg"
            alt
          />
          <img
            src="http://api.gxrgo.com/upload/product_list/20200513/be3fb10008bdfca65d4f3d2f744432ac.jpg"
            alt
          />
          <img
            src="http://api.gxrgo.com/upload/product_list/20200513/2d393516f574ddc8f1cb609f4fd672a5.jpg"
            alt
          />
        </div>
      </div>
      <div class="pro-choose-more">
        <h2 class="mt-5 mb-3">气源处理元件XYGFC300C二联件</h2>
        <p class="summary mb-5">
          <span>单价：248.4元起</span>
          <span>交期：最快 当天/1天起</span>
          <span>收藏</span>
        </p>
        <h3 class="fs-xxl my-4">型号筛选</h3>
        <div class="choose">
          <p v-for="(item,index) in filters" :key="index">
            {{item.title}}：
            <span
              v-for="(item1, index1) in item.choose"
              :key="index1"
              :class="{active: item.isActive == item1.value}"
              @click="item.isActive = index1"
            >{{item1.name}}</span>
          </p>
        </div>
        <span class="car">加入购物车</span>
        <span class="buy">立即购买</span>
      </div>
    </div>
    <div class="pro-detail d-flex mt-3">
      <div class="left p-5">
        <div class="nav">
          <span
            :class="{active: isActive == index}"
            v-for="(item, index) in nav"
            :key="index"
            @click="isActive = index"
          >
            <router-link to="#">{{item}}</router-link>
          </span>
        </div>
        <p class="mt-5 fs-xxl">品牌: BONESI</p>
        <img
          src="http://api.gxrgo.com/upload/Details_list/20200425/723f7be4af96adeed1290c0aea56f64c.jpg"
          width="100%"
          alt
        />
        <img
          src="http://api.gxrgo.com/upload/Details_list/20200627/d47bb24403c18c25c7597f17412702eb.jpg"
          width="100%"
          alt
        />
      </div>
      <div class="right p-3">
        <p class="fs-xxl-1 my-4">在线咨询</p>
        <p>如想要了解更多产品详情,点击在线咨询了解更多 产品信息</p>
        <div class="mt-5">
          <span>在线咨询</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      nav: ["产品概述", "技术参数", "尺寸图纸", "安装使用"],
      isActive: 0,
      filters: [
        {
          title: "接管口径",
          choose: [
            { name: `1/4"`, value: 0 },
            { name: `3/8"`, value: 1 },
            { name: `1/2"`, value: 2 },
          ],
          isActive: 0,
        },
        {
          title: "接管口径",
          choose: [
            { name: `1/4"`, value: 0 },
            { name: `3/8"`, value: 1 },
            { name: `1/2"`, value: 2 },
          ],
          isActive: 0,
        },
        {
          title: "接管口径",
          choose: [
            { name: `1/4"`, value: 0 },
            { name: `3/8"`, value: 1 },
            { name: `1/2"`, value: 2 },
          ],
          isActive: 0,
        },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.ProductDetail {
  .pro-choose {
    width: 100%;
    .pro-img {
      width: 40%;
      //   height: 600px;
      .big-img img {
        width: 100%;
        height: 550px;
        object-fit: cover;
      }
      .small-img {
        img {
          margin: 0 5px;
          width: 20%;
          height: 90px;
          object-fit: cover;
          border: 1px solid #ccc;
        }
      }
    }
    .pro-choose-more {
      width: 60%;
      height: 600px;
      .summary {
        span {
          margin-right: 30px;
          font-size: 14px;
          color: #999;
        }
      }
      .choose {
        font-size: 14px;
        p {
          margin: 35px 0;
          span {
            margin-right: 20px;
            padding: 10px 40px;
            border: 1px solid #eee;
            border-radius: 5px;
            cursor: pointer;
            &.active {
              //   color: red;
              border: 1px solid #1f3695;
              background-color: #1f369510;
            }
            &:hover {
              //   color: red;
              border-style: dashed;
            }
          }
        }
      }
      .buy,
      .car {
        display: inline-block;
        margin: 30px 20px 0 0;
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background-color: red;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
  .pro-detail {
    .left {
      width: 70%;
      background-color: #fff;

      .nav {
        text-align: center;
        span {
          &.active {
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
              color: #f08301;
              border-bottom: 2px solid #f08301;
            }
          }
          margin: 0 20px 0 0;
          display: inline-block;
          width: 120px;
          height: 40px;
          //   line-height: 40px;
          a {
            font-size: 16px;
            color: #333;
          }
        }
      }
    }
    .right {
      margin-left: 10px;
      width: 30%;
      height: 200px;
      background-color: #fff;
      div {
        text-align: center;
        span {
          // display: inline-block;
          padding: 8px 35px;
          margin: 0 auto;
          background-color: #1e3390;
          color: #fff;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>