<!--
 * @Author: your name
 * @Date: 2020-07-02 14:09:04
 * @LastEditTime: 2020-08-12 15:25:19
 * @LastEditors: Please set LastEditors
 * @Description: 尾部
 * @FilePath: \web\src\components\footer.vue
--> 
<!--  -->
<template>
  <div class="bg-dark">
    <div class="w py-5">
      <div class="d-flex jc-between text-grey border-bottom p-3" style="line-height: 30px">
        <div class="border-right fs-xxl-2 p-2 mb-3" style="width: 200px">
          售前咨询热线
          <br />95187转1
        </div>
        <dl>
          <dt>工业互联网</dt>
          <dd>IOT物联网</dd>
          <dd>设备管理</dd>
        </dl>
        <dl>
          <dt>应用市场</dt>
          <dd>APP中心</dd>
          <dd>生态中心</dd>
        </dl>
        <dl>
          <dt>供需对接</dt>
          <dd>工厂对接</dd>
          <dd>设备对接</dd>
          <dd>产品对接</dd>
          <dd>辅料对接</dd>
        </dl>
        <dl>
          <dt>企业服务</dt>
          <dd>标识解析</dd>
          <dd>两化融合</dd>
          <dd>智能车间</dd>
          <dd>星级上云</dd>
        </dl>
        <dl>
          <dt>解决方案</dt>
          <dd>系统集成</dd>
          <dd>智能化改造</dd>
        </dl>
      </div>
      <div class="text-grey d-flex jc-between mt-5">
        <div class="about">
          <p>
            <span>关于我们</span>
            <span>法律声明</span>
            <span>隐私政策</span>
            <span>廉政举报</span>
            <span>联系我们</span>
            <span>加入我们</span>
          </p>
          <p class="my-3">2009-2019 Htyw.com 版权所有 ICP证：苏D-20200806</p>
          <p>公安局备案 33010602009975号</p>
        </div>
        <div>
          <img src="@/assets/img/htyw_ewm.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="scss" scope>
.about {
  span {
    margin-right: 30px;
    font-size: 14px;
    color: #ccc;
  }
}
dt {
  color: #ccc;
  font-size: 16px;
}
</style>
