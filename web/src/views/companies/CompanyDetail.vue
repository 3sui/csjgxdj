<!--
 * @Author: your name
 * @Date: 2020-08-03 16:14:42
 * @LastEditTime: 2020-08-04 17:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\companies\CompanyDetail.vue
-->
<!--  -->
<template>
  <div>
    <div class="w-100 bg-white">
      <div class="w company-title d-flex ai-center">
        <div class="company-icon">
          <img
            src="https://res.haizol.com/attachments/public/static/2018/11/20/24862abf-d9c7-417c-b43c-e890d2d60eab-thumbnail"
            alt
            width="130"
          />
        </div>
        <div class="ml-4">
          <p class="fs-xxl-2">南京捷航精密机械有限公司</p>
          <span class="vip">数采宝VIP会员</span>
        </div>
        <div class="attest">
          <img src="https://res.haizol.com/base/images/profile_verified.png" alt />
        </div>
      </div>
    </div>
    <div class="w">
      <div class="nav mt-4">
        <span
          v-for="(item, index) in nav"
          :key="index"
          :class="{active: isActive == index}"
          @click="isActive = index"
        >
          <router-link to="#">{{item}}</router-link>
        </span>
        <!-- <span>产品展示</span>
        <span>企业图片</span>
        <span>评价</span>-->
      </div>
      <div class="mt-4 detail d-flex jc-between">
        <div class="left">
          <div class="present d-flex shadow">
            <div class="crafts p-3 border-right">
              <h3 class="py-3 border-bottom">主要涉及工艺</h3>
              <p class="py-3 border-bottom">第一主要工艺: 机加工</p>
              <p class="py-3 border-bottom">第二主要工艺: 机加工</p>
              <p class="py-3 border-bottom">第三主要工艺: 机加工</p>
            </div>
            <div class="introduce px-2">
              <h2 class="text-grey text-center my-4 pb-3 border-bottom">公司简介</h2>
              <p
                class="text-grey-1"
              >深圳市金佳利机电有限公司成立于2013年，是一家自主研发、生产、销售及服务于一体的民营企业。公司专注于机械零件CNC精密加工，主要应用于机器人、 通信领域；医疗，自动化领域，以及客户定制精密复杂零件加工。以快速反应能力 、品质保障系统及成本控制水平为核心竞争力。我们通过更加贴近客户的技术服务、品质流程及业务处理能力为顾客提供增值服务，让客户更专注于自己的主业，从而提升顾客价值。 深圳市金佳利机电有限公司現拥有台湾进口高精度CNC立式加工中心机，5轴加工中心、4轴加工中心，精密磨床，精密线切割及数控车床共50台，最大加工范围为2100*1600*800mm，加工精度为0.01mm；检测仪器有三次元、二次元、数显千分尺、垂直度仪、高度仪、内孔千分尺、内孔千分尺、百分表等各种常用量测仪器，专业而富有经验的工程人员，检验人员和生产人员达到80人左右。主要加工的材料有铸铁、钢件、铝合金、铜、不锈钢、各种工程塑料等。 本公司以“专业品质，精益求精”为宗旨，并先后通过ISO9001：2015和ISO13485：2016质量管理体系认证。公司成立至今，一直以客户需求为导向，尊重人才，不断提升自身实力及水平，提高服务水平及质量。与欧美、亚洲和国内多个客户建立了长期合作共赢，共同进步的良好关系。真诚期望与您携手并进，共创未来！</p>
            </div>
          </div>
          <div class="photo mt-3 p-2">
            <h2 class="text-center my-4 pb-3 border-bottom">照片</h2>
            <div class="d-flex jc-around photo-wall">
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=82954f8f-0241-4e26-8779-338544c2a655"
                  alt
                />
              </div>
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=1af36483-823c-454e-8f98-18e0ea8e2aac"
                  alt
                />
              </div>
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=82954f8f-0241-4e26-8779-338544c2a655"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="photo mt-3 p-2">
            <h2 class="text-center my-4 pb-3 border-bottom">车间与设备照片</h2>
            <div class="d-flex jc-around photo-wall">
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=deef98a7-9c6a-4a44-8a49-fafa12552a96"
                  alt
                />
              </div>
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=05558378-6002-4f20-87dd-a594096e5905"
                  alt
                />
              </div>
              <div>
                <img
                  src="https://res.haizol.com/preview-static?ne=1&thn=240180&code=66b25f95-5cfb-4b01-bf43-fa34df13143a"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="information mt-3 p-2">
            <h2 class="text-center my-4 pb-3 border-bottom">公司信息</h2>
            <div class="table d-flex flex-wrap fs-xxl text-grey">
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家:</span>
                <span>{{123}}</span>
              </div>
              <div>
                <span>国家和地区:</span>
                <span>{{12312346794647312312}}国家和地区国家和地区国家和地区国家和地区国家和地区</span>
              </div>
            </div>
            <div class="table1 fs-xxl text-grey">
              <span>国家和地区:</span>
              <span>{{12312346794647312312}}国家和地区国家和地区国家和地区国家和地区国家和地区</span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyDetail",
  data() {
    return {
      nav: ["供应商档案", "产品展示", "企业图片", "评价"],
      isActive: 0,
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.company-title {
  position: relative;
  background-color: #fff;
  height: 200px;
  .company-icon {
    width: 150px;
    height: 150px;
    line-height: 150px;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #999;
    img {
      vertical-align: middle;
    }
  }
  span {
    &.vip {
      margin-top: 10px;
      display: inline-block;
      width: 120px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      background-color: #fa6800;
    }
  }
  .attest {
    position: absolute;
    top: 15px;
    right: 30px;
  }
}

.nav {
  height: 60px;
  background-color: #1875f0;
  span {
    display: inline-block;
    width: 150px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;

    text-align: center;
    cursor: pointer;
    a {
      color: #fff;
    }
    &.active {
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
        color: #1875f0;
        background-color: #fff;
      }
    }
    &:hover {
      // color: #fff;
      background-color: #5d9ff5;
      // opacity: 0.3;
    }
  }
}

.detail {
  .left {
    width: 80%;
    .present {
      background-color: #fff;

      .crafts {
        flex: 1;
      }
      .introduce {
        flex: 2;
        p {
          line-height: 30px;
          text-indent: 2em;
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 6;
          // overflow: hidden;
        }
      }
    }
    .photo {
      height: 300px;
      background-color: #fff;

      .photo-wall {
        div {
          width: 200px;
          height: 200px;
          text-align: center;
          border: 1px solid #eee;
          line-height: 200px;

          img {
            // vertical-align: middle;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    .information {
      // height: 300px;
      background-color: #fff;
      .table div {
        // flex: 1;
        padding-left: 10px;
        width: 50%;
        line-height: 60px;
        border-top: 1px solid #eee;
        border-left: 1px solid #eee;
        &:nth-child(2n) {
          border-right: 1px solid #eee;
        }
        span:nth-child(1) {
          display: inline-block;
          vertical-align: top;

          width: 120px;
        }
        span:nth-child(2) {
          display: inline-block;
          width: calc(100% - 130px);
          color: #333;
        }
      }
      .table1 {
        padding-left: 10px;
        line-height: 60px;
        width: 100%;
        border: 1px solid #eee;

        span:nth-child(1) {
          display: inline-block;
          vertical-align: top;

          width: 120px;
        }
        span:nth-child(2) {
          display: inline-block;
          width: calc(100% - 130px);
          color: #333;
        }
      }
    }
  }
  .right {
    margin-left: 10px;
    width: 20%;
    height: 300px;
    background-color: red;
  }
}
</style>