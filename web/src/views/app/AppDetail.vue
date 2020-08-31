<!--
 * @Author: your name
 * @Date: 2020-08-28 13:50:50
 * @LastEditTime: 2020-08-28 17:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\app\appDevice.vue
-->
<!--  -->
<template>
  <div>
    <div class="app-detail">
      <div class="w py-5 text-light d-flex ai-center">
        <div class>
          <h1 class="my-5">产线仿真建模</h1>
          <div
            class="app-rv mb-3"
          >沉浸式VR协同设计软件采用虚拟现实技术，以沉浸式VR的可视化环境为用户提供了从产品早期设计、决策制定、工程评审、虚拟制造的多学科协同设计平台，加快了设计过程中的迭代效率，减少了产品设计、研发、生产、培训时间，为多专业、多部门综合性分析验证提供了一种更加直观有效的方式。虚拟工厂布局仿真、虚拟产线生产仿真、虚拟设计验证、虚拟装配、虚拟维护维修、协同评审各部分功能为产品全生命周期多维度协同提供关键的工具</div>
          <div>
            <span>评分:</span>
            <span>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </span>
            <div class="mt-3">添加订阅</div>
          </div>
          <p>
            <span class="btn bg-info">0元试用</span>
          </p>
        </div>
        <div class="p-3 bg-dark ml-5 user-info">
          <h3>航天科工仿真技术有限责任公司</h3>
          <p>入驻时间: 2020-08-28</p>
          <p>应用数量: 2件应用</p>
          <p>联系人: 曹一丁</p>
          <p>联系电话： 13716114516</p>
        </div>
      </div>
    </div>
    <div class="detail-body bg-white pt-2">
      <div class="w pt-1 mt-3" v-for="(item, index) in tableData" :key="index">
        <h3 class="my-3">{{item.title}}</h3>
        <div v-html="item.body" class="html-info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDetail",
  data() {
    return {
      value: 3.7,
      tableData: [
        {
          title: "产品介绍",
          body:
            "<p style='line-height: 30px; font-size: 14px;text-indent: 2em'>双创企业目前缺少以虚拟样机产品数据为基础、以AR/VR交互设计为手段、基于轻量化3D工业模型的通用模型库快速搭建的沉浸式VR协同设计软件。双创企业当前的物理制造系统按需重构时的布局仿真缺少对模型库的支持，不利于仿真的快速重构。</p><p style='line-height: 30px; font-size: 14px;text-indent: 2em'>在虚拟设计验证、协同评审方面、产品研制过程中更多的是以文档进行交流，缺乏一个共同的可视的沉浸式环境，对产品虚拟样机从各个角度、各个维度对产品设计和研制的质量进行直接的交流。同时与供应商、协作者也缺乏这样的讨论环境。</p><p style='line-height: 30px; font-size: 14px;text-indent: 2em'>目前缺少基于AR/VR的虚拟装配，对已有装配经验无法以虚拟方式动态呈现，因此对装配人员经验要求高、工作量大、效率低下，难以为工作人员智能的提供信息，并将工作中的过程及时反馈与保存。</p>",
        },
        {
          title: "产品介绍",
          body:
            "<p style='line-height: 30px; font-size: 14px;text-indent: 2em'>双创企业目前缺少以虚拟样机产品数据为基础、以AR/VR交互设计为手段、基于轻量化3D工业模型的通用模型库快速搭建的沉浸式VR协同设计软件。双创企业当前的物理制造系统按需重构时的布局仿真缺少对模型库的支持，不利于仿真的快速重构。</p><p style='line-height: 30px; font-size: 14px;text-indent: 2em'>在虚拟设计验证、协同评审方面、产品研制过程中更多的是以文档进行交流，缺乏一个共同的可视的沉浸式环境，对产品虚拟样机从各个角度、各个维度对产品设计和研制的质量进行直接的交流。同时与供应商、协作者也缺乏这样的讨论环境。</p><p style='line-height: 30px; font-size: 14px;text-indent: 2em'>目前缺少基于AR/VR的虚拟装配，对已有装配经验无法以虚拟方式动态呈现，因此对装配人员经验要求高、工作量大、效率低下，难以为工作人员智能的提供信息，并将工作中的过程及时反馈与保存。</p>",
        },
        {
          title: "产品介绍",
          body:
            "<img src='https://img2018.cnblogs.com/blog/1560503/201903/1560503-20190326132250710-460355995.png'>",
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
.app-detail {
  background: url("../../assets/img/proDetail-head-bg.png");
  .app-rv {
    width: 600px;
    height: 60px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-right: 30px;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: red;
  }
  .user-info {
    h3 {
      line-height: 50px;
    }
    p {
      line-height: 30px;
      color: #999;
    }
  }
}
.detail-body {
  h3 {
    display: inline-block;
    font-size: 20px;
    padding: 5px;
    border-left: 3px solid #232323;
  }
}
</style>