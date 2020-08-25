<!--
 * @Author: your name
 * @Date: 2020-08-21 14:54:23
 * @LastEditTime: 2020-08-21 15:30:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\supply&demand\Supply.vue
-->
<!--  -->
<template>
  <div>需求页面</div>
</template>

<script>
export default {
  name: "supply",
  data() {
    return {};
  },

  components: {},

  computed: {},
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios({
        method: "get",
        url: "/docking/fetchSupply",
      });
    },
  },
};
</script>
<style scoped>
</style>