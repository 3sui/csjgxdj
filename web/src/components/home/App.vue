<!--
 * @Author: your name
 * @Date: 2020-08-12 16:35:30
 * @LastEditTime: 2020-08-20 14:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\web\src\components\home\App.vue
-->
<!--  -->
<template>
  <div class="p-5 bg-white m-3">
    <div class="w text-center">
      <h2 class="mb-5 fs-xxl-3">核心组件介绍</h2>
      <div class="w d-flex jc-center container ai-center">
        <div class="item" :class="{ active: isActive === 0}" @mouseenter="isActive = 0">
          <div :class="{dn: isActive === 0}" class="simple">
            <img src="@/assets/img/banner1.png" alt width="100px" height="100px" />
            <p class="mt-4 fs-xl">设备接入与管理</p>
          </div>
          <div :class="{dn: isActive !== 0}" class="full p-4">
            <h2 class>设备接入与管理</h2>
            <div class="line"></div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item mx-2" :class="{ active: isActive === 1}" @mouseenter="isActive = 1">
          <div :class="{dn: isActive === 1}" class="simple">
            <img src="@/assets/img/banner1.png" alt width="100px" height="100px" />
            <p class="mt-4 fs-xl">设备接入与管理</p>
          </div>
          <div :class="{dn: isActive !== 1}" class="full p-4">
            <h2 class>设备接入与管理</h2>
            <div class="line"></div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item" :class="{ active: isActive === 2}" @mouseenter="isActive = 2">
          <div :class="{dn: isActive === 2}" class="simple">
            <img src="@/assets/img/banner1.png" alt width="100px" height="100px" />
            <p class="mt-4 fs-xl">设备接入与管理</p>
          </div>
          <div :class="{dn: isActive !== 2}" class="full p-4">
            <h2 class>设备接入与管理</h2>
            <div class="line"></div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-5">
              <div class="d-flex">
                <div>
                  <img src="http://zl-test.glodon.com/images/she_bei_jie_ru.png" alt />
                </div>
                <div class="text-left ml-3">
                  <p class="fs-lg text-grey-1">设备接入</p>
                  <p class="fs-xs mt-2 text-grey">提供基于MQTT/HTTP等主流接入协议的双向链接，可实现各种设备平台的轻松接入</p>
                </div>
              </div>
              <div class="d-flex table">
                <div class="d-flex ai-center">
                  <div>
                    <img
                      src="http://zl-test.glodon.com/images/ling_huo_qiang_da.png"
                      width="30px"
                      alt
                    />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">灵活强大</p>
                    <p class="fs-xs mt-2 text-grey">全托管，可伸缩的MQTT服务器</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex ai-center">
                    <img src="http://zl-test.glodon.com/images/an_quan_ke_kao.png" width="30px" alt />
                  </div>
                  <div class="ml-3">
                    <p class="fs-md text-grey-1">安全可靠</p>
                    <p class="fs-xs mt-2 text-grey">丰富的设备认证和权限管理，并提供SSL/TLS加密保证传输安全</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActive: 1,
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container {
  height: 600px;

  .item {
    position: relative;
    width: 35%;
    height: 400px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    transition: 0.5s all;
    h2 {
      font-weight: 500;
    }
    .line {
      margin: 10px auto;
      width: 100px;
      height: 5px;
      background-color: #ccc;
      transition: 0.5s all;
    }
    &.active {
      width: 45%;
      height: 450px;
      transform: scale(1.2);
      z-index: 1000;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    }
    .simple {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s all;

      img {
        border-radius: 50%;
      }
    }
    .full {
      transition: 0.5s all;

      .table {
        border: 1px solid #eee;
        margin: 10px 0;
        > div {
          padding: 5px 10px 5px 5px;
          text-align: left;
          width: 50%;
        }
      }
    }
    .dn {
      opacity: 0;
    }
  }
}
</style>