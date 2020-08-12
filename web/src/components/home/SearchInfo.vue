<!--
 * @Author: your name
 * @Date: 2020-08-03 13:48:11
 * @LastEditTime: 2020-08-11 16:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\SearchInfo.vue
-->
<!--  -->
<template>
  <div class="searchInfo">
    <div class="w pt-1">
      <p class="text-center my-5 fs-xxl-3">供需查找</p>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="企业" value="1"></el-option>
            <el-option label="需求" value="2"></el-option>
            <el-option label="产品" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="d-flex jc-between supply">
        <div class="d-flex jc-start ai-center">
          <div class="mx-5">
            <img
              src="http://file.finance.casicloud.com/cenicloud/images/sad/beipinbeijian%E6%8B%B7%E8%B4%9D.png"
              height="60"
            />
          </div>
          <div class="info">
            <h3 class="text-white fs-xxl my-3">我要看需求</h3>
            <p class="text-primary fs-lg">
              <span>浏览海量需求</span> →
              <span>一键资讯对接</span> →
              <span>线下合同对接</span>
            </p>
            <span class="text-white bg-info mt-3 fs-lg more">查看详情</span>
          </div>
        </div>
        <div
          class="d-flex jc-start ai-center"
          style="background-image: url(http://file.finance.casicloud.com/cenicloud/images/sad/bg02.png)"
        >
          <div class="mx-5">
            <img
              src="http://file.finance.casicloud.com/cenicloud/images/sad/yuanliaoxiaohao%E6%8B%B7%E8%B4%9D.png"
              height="60"
            />
          </div>
          <div class="info">
            <h3 class="text-white fs-xxl my-3">我要找产品</h3>
            <p class="text-primary fs-lg">
              <span>浏览海量产品</span> →
              <span>一键资讯对接</span> →
              <span>达成合作意向</span>
            </p>
            <span class="text-white bg-info mt-3 fs-lg more">查看详情</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInfo",
  data() {
    return {
      input: "",
      select: "",
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.searchInfo {
  width: 100%;
  //   height: 400px;
  background-color: #fff;
  .search {
    width: 70%;
    height: 100px;
    background-color: #fff;
    margin: 0 auto;
  }
  .supply {
    width: 100%;
    // height: 400px;
    padding-bottom: 60px;
    > div {
      width: 48%;
      background: url("http://file.finance.casicloud.com/cenicloud/images/sad/bg01.png")
        no-repeat center;
      background-size: cover;
      height: 175px;
      .info {
        .more {
          background-color: #fff;
        }
        span {
          display: inline-block;
          //   margin: 0 5px;
          text-align: center;
          width: 100px;
          height: 25px;
          line-height: 25px;
          color: #fff;
          border-radius: 0.2rem;
          background-color: #db9e3f;
        }
      }
    }
  }
}
</style>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>