<!--
 * @Author: your name
 * @Date: 2020-08-21 16:14:15
 * @LastEditTime: 2020-08-21 16:17:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\views\Interconnection\produceInfo.vue
-->
<!--  -->
<template>
  <div>设备信息页面</div>
</template>

<script>
export default {
  name: "ProduceInfo",
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
        url: "/Interconnection/fetch",
      })
        .then((res) => {
          window.console.log(res);
        })
        .catch((err) => {});
    },
  },
};
</script>
<style scoped>
</style>