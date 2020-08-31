<!--  -->
<template>
  <div class="bg-white">
    <div class="w module-container floor">
      <div class="module-content py-1">
        <!-- <div class="module-title">
          <h3>企业复工复产工具集</h3>
          <p>保障企业恢复生产，守护员工身心健康</p>
        </div>-->

        <div class="pages d-flex jc-between flex-wrap mt-3 text-center">
          <div class="app-box shadow w-30" v-for="(item, index) in tableData" :key="index">
            <img :src="item.icon" alt />
            <p class="app-title" :title="item.title">{{item.title}}</p>
            <p class="app-info" :title="item.info1">{{item.info1}}</p>
            <p class="app-info" :title="item.info2">{{item.info2}}</p>
            <p class="app-price text-red my-3 fs-xl mt-4">疫情期间免费使用</p>
            <span class="app-buy">
              <a class="text-white" href="./tianjianerp.html" target="_blank">立即使用</a>
            </span>
          </div>
          <div class="w-30"></div>
          <!-- <div class="container-fluid app-container pt-2 px-0">
            <div class="row">
              <div class="text-center col-md-4 col-12"></div>
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="泛微OA">泛微OA</p>
                  <p class="app-info" title="应用场景：以协同OA为核心帮助企业构建统一办公平台。 价值：企业办公全面智能化、云端化、全程电子化。">
                    <br />应用场景： 帮助企业构建统一办公平台。
                    <br />
                    <br />价值： 办公智能化、云端化、全程电子化。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./fanweioa.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="德客易采SRM">德客易采SRM</p>
                  <p
                    class="app-info"
                    title="应用场景：企业采购业务全流程管理。 价值：企业采购全程在线化、数字化。打破企业信息孤岛，提升效率、降低成本。
                                    "
                  >
                    <br />应用场景： 企业采购业务全流程管理。
                    <br />
                    <br />价值： 采购在线化、数字化。避免信息孤岛。
                  </p>
                  <p class="app-price">疫情期间免费服务</p>
                  <span class="app-buy">
                    <a href="./dekeyicai.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid app-container pt-2 px-0">
            <div class="row">
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="oneTMS">oneTMS</p>

                  <p class="app-info" title="应用场景：链接运输上下游 大中型企业运输数字化利器。 价值：便捷办公、教学、管理，数字化应用。">
                    <br />应用场景：大中型企业运输数字化利器。
                    <br />
                    <br />价值：链接运输上下游。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="javascript: void(0)" target="_block">立即使用</a>
                  </span>
                </div>
              </div>

              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="焊接资源管理系统">焊接资源管理系统</p>

                  <p class="app-info" title="应用场景：焊接企业、部门资源管理平台。 价值：焊接工程师快速管理焊接工序，强化协作。">
                    <br />应用场景： 焊接企业、部门资源管理平台。
                    <br />
                    <br />价值： 快速管理焊接工序，强化协作。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./hanjieziyuanguanlixitong.html" target="_block">立即使用</a>
                  </span>
                </div>
              </div>

              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="航天云盘">航天云盘</p>
                  <p class="app-info" title="应用场景：文档在线协同、同步、共享、备份。 价值：安全可控管理公司所有文档数据，强化协作。">
                    <br />应用场景： 在线协同、同步、共享、备份。
                    <br />
                    <br />价值： 安全管理文档数据，强化协作。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./nextcloud.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid app-container pt-2 px-0">
            <div class="row">
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="智能云科设备管理">智能云科设备管理</p>
                  <p class="app-info" title="应用场景：企业、组织多人实时协作办公。 价值：随时随地办公，减少反复传递的低效工作，安全可靠。">
                    <br />应用场景：互联网+先进制造业。
                    <br />
                    <br />价值： 互联网+先进制造业。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./shimowendang.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="简睿捷数据采集系统">简睿捷数据采集系统</p>
                  <p
                    class="app-info"
                    title="应用场景：电子与通信,IT产品,信息化解决方案供应商。 价值：电子与通信,IT产品,信息化解决方案供应商。 "
                  >
                    <br />应用场景： 电子通信,信息化解决方案供应商。
                    <br />
                    <br />价值： 电子与通信,IT产品,信息化解决方案供应商。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./jinxiaoyuncrm.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
              <div class="text-center col-md-4 col-12">
                <div class="app-box">
                  <img src="http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg" alt />
                  <p class="app-title" title="博拉云MES">博拉云MES</p>
                  <p class="app-info" title="应用场景：公司与各地分支机构之间的疫情防控信息同步。 价值：安全可靠，快速上报复工和疫情情况。">
                    <br />应用场景： 工业SaaS是未来的重要方向。
                    <br />
                    <br />价值： 工业SaaS是未来的重要方向。
                  </p>
                  <p class="app-price">疫情期间免费使用</p>
                  <span class="app-buy">
                    <a href="./yiqingpingtai.html" target="_blank">立即使用</a>
                  </span>
                </div>
              </div>
            </div>
          </div>-->
        </div>

        <div class="block m-5 text-center">
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppList",
  data() {
    return {
      tableData: [
        {
          icon:
            "http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg",
          title: "天健ERP1",
          info1: "应用场景：汽配行业ERP信息系统",
          info2: "价值：提升汽配行业管理能力，增加管理效益",
          href: "./tianjianerp.html",
        },
        {
          icon:
            "http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg",
          title: "天健ERP1",
          info1: "应用场景：汽配行业ERP信息系统",
          info2: "价值：提升汽配行业管理能力，增加管理效益",
          href: "./tianjianerp.html",
        },
        {
          icon:
            "http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg",
          title: "天健ERP1",
          info1: "应用场景：汽配行业ERP信息系统",
          info2: "价值：提升汽配行业管理能力，增加管理效益",
          href: "./tianjianerp.html",
        },
        {
          icon:
            "http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg",
          title: "天健ERP1",
          info1: "应用场景：汽配行业ERP信息系统",
          info2: "价值：提升汽配行业管理能力，增加管理效益",
          href: "./tianjianerp.html",
        },
        {
          icon:
            "http://file1.casicloud.com/e1a34773479c47d39fff2e950ff53039.jpg",
          title: "天健ERP1",
          info1: "应用场景：汽配行业ERP信息系统",
          info2: "价值：提升汽配行业管理能力，增加管理效益",
          href: "./tianjianerp.html",
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
.w-30 {
  width: 32%;
}
.app-box {
  margin: 30px 0 0 0;
  padding: 30px 0 20px;
  // border: 1px solid #ccc;
  .app-title {
    margin: 15px 0;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .app-info {
    font-size: 14px;
  }
  img {
    width: 25%;
  }
  .app-buy {
    display: inline-block;
    margin-top: 20px;
    width: 160px;
    line-height: 30px;
    color: #fff;
    border-radius: 15px;
    background-color: #308bf3;
    cursor: pointer;
  }
}
</style>