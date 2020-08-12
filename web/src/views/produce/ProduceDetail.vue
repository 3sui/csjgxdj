<!--
 * @Author: your name
 * @Date: 2020-08-06 16:24:17
 * @LastEditTime: 2020-08-07 11:16:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\produce\ProduceDetail.vue
-->
<!--  -->
<template>
  <div class="ProduceDetail w">
    <div class>
      <div class="d-flex jc-between mt-5 mb-3 bg-white p-3 shadow">
        <h2>QAl7铜合金QAl7特性及适用范围</h2>
        <span>查看此供应商更多的产品</span>
      </div>
      <div class="pro p-3 bg-white d-flex jc-between shadow">
        <div class="img">
          <img src="https://pic.moresu.com/FrbookhuDw5ryeqqDM2ggi0x8r-i" alt />
          <div class="imgList d-flex jc-between my-2">
            <img src="https://pic.moresu.com/FrbookhuDw5ryeqqDM2ggi0x8r-i" alt />
            <img src="https://pic.moresu.com/FrbookhuDw5ryeqqDM2ggi0x8r-i" alt />
            <img src="https://pic.moresu.com/FrbookhuDw5ryeqqDM2ggi0x8r-i" alt />
            <img src="https://pic.moresu.com/FrbookhuDw5ryeqqDM2ggi0x8r-i" alt />
          </div>
        </div>
        <div class="mes ml-5">
          <div class="mes-prise p-4">
            <div>
              <div>价格</div>
              <div>1000元</div>
            </div>
            <div>
              <div>起订量</div>
              <div>1吨以上</div>
            </div>
          </div>
          <div class="mes-choose pl-4 mt-3">
            <p>
              <span class>交货方式</span>
              <span>含税不含运费</span>
            </p>
            <p>
              <span>发货期</span>
              <span>现货</span>
            </p>
            <p>
              <span>牌号</span>
              <span>CR-1100</span>
            </p>
            <p>
              <span>生产厂家</span>
              <span>江阴超润高分子材料有限公司</span>
            </p>
            <p>
              <span>发货地</span>
              <span>无锡市</span>
            </p>
            <p>
              <span>包装</span>
              <span>1吨</span>
            </p>
            <p>
              <span>库存</span>
              <span>1000.000吨</span>
            </p>
            <p>
              <span>购买数量</span>
              <span>
                <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              </span>
            </p>
            <p>
              <span></span>
              <span class="buy-now">立即购买</span>
            </p>
          </div>
        </div>
      </div>
      <div class="info p-3 bg-white d-flex jc-between shadow mt-3">
        <div class="info-left">
          <div class="title">厂家信息</div>
          <p>江阴超润高分子材料有限公司</p>
          <p>资讯热线：</p>
          <p>18014957069/18006181020</p>
          <p>
            <span class="go-shop">进入店铺</span>
          </p>
        </div>
        <div class="info-right ml-2">
          <div class="title">产品详情</div>
          <div class="quality d-flex jc-between text-left border-bottom">
            <div>
              特性级别:
              <span>阻燃级</span>
            </div>
            <div>
              用途 级别:
              <span>通用级</span>
            </div>
          </div>
          <div class="message p-3">
            CR-1100,2.5V0环保阻燃级ABS
            阻燃ABS树脂具有良好的抗冲击性和耐热性、耐低温性、耐化学药品性及电气性能优良，还具有易加工、制品尺寸稳定、表面光泽性好等特点，容易涂装、着色，还可以进行表面喷镀金属、电镀、焊接、热压和粘接等二次加工，广泛应用于机械、汽车、电子电器、仪器仪表、纺织和建筑等工业领域，是一种用途极广的热塑性工程塑料。
            阻燃ABS树脂在一定温度范围内具有良好的抗冲击强度和表面硬度，有较好的尺寸稳定性、一定的耐化学药品性和良好的电气绝缘性。阻燃ABS塑胶不透明，一般呈浅黄色（浅象牙色），但是可以通过着色而制成具有高度光泽的其它任何色泽制品，电镀级的外表可进行电镀、真空镀膜等装饰。
            以ABS树脂为基材，添加高热稳定阻燃剂、添加剂等，经混合、熔融塑炼造粒包装成产品。为白色粒料，具有较高的机械强度，良好的阻燃性和优异的流动性，制品收缩性小，外观光洁且有一定的涂饰性。拉伸强度40MPa，弯曲强度65MPa，热变形温度89℃，阻燃性uL-94，V-O级。用于电视机阻燃前框，及其他各种阻燃电器零部件。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProduceDetail",
  data() {
    return {
      num: 1,
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.pro {
  .img {
    width: 40%;
    // height: 500px;
    > img {
      width: 100%;
      height: 400px;
      object-fit: contain;
    }
    .imgList {
      width: 100%;
      //   background-color: red;
      border: 1px solid #ccc;
      img {
        margin: 5px 0;
        width: 20%;
        height: 100px;
        object-fit: contain;
      }
    }
  }
  .mes {
    width: 60%;
    font-size: 14px;
    line-height: 30px;
    .mes-prise {
      border-top: 2px solid #ff4600;
      background-color: #f8f8f8;
    }
    .mes-choose {
      //   background-color: #f8f8f8;
      p {
        span:nth-child(1) {
          color: #999;
          display: inline-block;
          width: 160px;
          height: 30px;
        }
      }
      .buy-now {
        display: inline-block;
        margin-top: 20px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background-color: #ff4600;
      }
    }
  }
}
.info {
  width: 100%;
  .info-left {
    width: 20%;
    border: 1px solid #ccc;
    line-height: 40px;
    p {
      margin: 15px;

      .go-shop {
        display: inline-block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        background-color: #ff4600;
      }
    }
    .title {
      width: 100%;
      height: 40px;
      text-align: center;
      // color: red;
      background-color: #eee;
    }
  }
  .info-right {
    width: 80%;
    border: 1px solid #ccc;
    line-height: 40px;
    .title {
      width: 100%;
      height: 40px;
      text-align: center;
      // color: red;
      background-color: #eee;
    }
    .quality {
      div {
        padding: 10px 40px;
        width: 50%;
        span {
          margin-left: 40px;
        }
      }
    }
  }
}
</style>