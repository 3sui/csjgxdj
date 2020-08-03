<!--
 * @Author: your name
 * @Date: 2020-07-02 14:09:04
 * @LastEditTime: 2020-07-13 10:04:30
 * @LastEditors: Please set LastEditors
 * @Description: 尾部
 * @FilePath: \web\src\components\footer.vue
--> 
<!--  -->
<template>
  <div id="footer" class="bg-dark">
    <div class="w py-5">
      <div class="d-flex jc-between text-grey" style="line-height: 30px">
        <div class="d-flex">
          <div class="text-center">
            <img src="../assets/img/pingtaierweima.png" alt height="80px" />
            <p>平台中心</p>
          </div>
          <div class="text-center ml-4">
            <img src="../assets/img/htyw_ewm.jpg" alt height="80px" />
            <p>航天云网公众号</p>
          </div>
        </div>
        <div class="text-grey">
          <dl>
            <dt class="text-white-1 fs-xl mb-2">关于我们</dt>
            <dd>常州工业物联大数据平台</dd>
            <dd>航天云网数据研究院（江苏）有限公司</dd>
          </dl>
        </div>
        <div class="text-grey">
          <dl>
            <dt class="text-white-1 fs-xl mb-2">专栏专区</dt>
            <dd>商业航天专区</dd>
            <dd>航天精工专区</dd>
            <dd>江阴鑫澄转融网</dd>
            <dd>工业设计云平台</dd>
            <dd>安徽工业云</dd>
            <dd>模具产业云专区</dd>
          </dl>
        </div>
        <div class="text-grey">
          <dl>
            <dt class="text-white-1 fs-xl mb-2">联系我们</dt>
            <dd>市场商务：0519-69663136</dd>
            <dd>客服邮箱：</dd>
            <dd>service@casicloudata.com</dd>
            <dd>邮政编号：213000</dd>
            <dd>联系地址：常州市天宁区竹林北路256</dd>
            <dd>号工业互联网培训体验中心</dd>
          </dl>
        </div>
      </div>
      <p class="text-grey-1">copyright©2019 常州工业物联大数据平台</p>
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

  methods: {}
};
</script>
<style lang="scss" scope>
</style>
