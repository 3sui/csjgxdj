(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1347d2f7"],{"05dd":function(t,e,a){},"07f1":function(t,e,a){},"1f95":function(t,e,a){"use strict";var o=a("dddb"),s=a.n(o);s.a},"21bb":function(t,e,a){"use strict";var o=a("2dad"),s=a.n(o);s.a},2552:function(t,e,a){"use strict";var o=a("07f1"),s=a.n(o);s.a},"2dad":function(t,e,a){},"354e":function(t,e,a){"use strict";var o=a("05dd"),s=a.n(o);s.a},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.254fcf8c.png"},"52c3":function(t,e,a){t.exports=a.p+"img/htyw_ewm.f1fae84d.jpg"},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[[a("el-backtop",{attrs:{target:".home",bottom:100,"visibility-height":10}},[a("div",{staticStyle:{"{\n      height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","text-align":"center","line-height":"40px",color:"#1989fa"}},[t._v("UP")])])],a("Header",{staticClass:"header"}),a("router-view"),a("Footer")],2)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-100 header shadow"},[o("div",{staticClass:"top bg-light-2"},[o("div",{staticClass:"w text-grey d-flex jc-between"},[o("p",[t._v(" Hi~ 欢迎来到长三角供需对接平台 "),t.userName?o("span",{staticClass:"ml-3"},[o("router-link",{staticClass:"cp",attrs:{to:"#",tag:"span"}},[t._v(" 你好 "),o("span",{staticClass:"text-red"},[t._v(t._s(t.userName))])]),o("span",{staticClass:"mx-2"},[t._v("|")]),o("span",{staticClass:"cp",on:{click:t.delUser}},[t._v("注销")])],1):o("span",{staticClass:"ml-3"},[o("span",{staticClass:"cp",on:{click:t.login}},[t._v("登录")]),o("span",{staticClass:"mx-2"},[t._v("|")]),o("router-link",{staticClass:"cp",attrs:{to:"login",tag:"span"}},[t._v("登录")]),o("span",{staticClass:"mx-2"},[t._v("|")]),o("router-link",{staticClass:"cp",attrs:{to:"register",tag:"span"}},[t._v("注册")])],1)]),o("div",{staticClass:"text-right"},[o("router-link",{attrs:{to:"",tag:"span"}},[t._v("帮助中心")]),o("span",{staticClass:"mx-2"},[t._v("|")]),o("span",[t._v("客服电话：400-853-686")])],1)])]),o("div",{staticClass:"w d-flex jc-between py-3 mb-3 ai-center"},[o("div",{},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:a("4ffd"),alt:"",height:"60"}})])],1),o("div",{staticStyle:{width:"450px","flex-shrink":"1"}},[o("el-input",{staticClass:"input-with-select",staticStyle:{border:"2px solid #1875f0","border-radius":"4px"},attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[o("el-select",{staticClass:"bg-light-2 text-grey-1",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[o("el-option",{attrs:{label:"设备",value:"设备"}}),o("el-option",{attrs:{label:"产品",value:"产品"}}),o("el-option",{attrs:{label:"企业",value:"企业"}})],1),o("el-button",{staticClass:"bg-info text-white fs-sm",attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[t._v("搜索")])],1),o("div",{staticClass:"mt-2 searchMessage text-grey"},[o("router-link",{attrs:{to:"",tag:"span"}},[t._v("加工中心")]),o("i",[t._v("|")]),o("router-link",{attrs:{to:"",tag:"span"}},[t._v("焊接机")]),o("i",[t._v("|")]),o("router-link",{attrs:{to:"",tag:"span"}},[t._v("钣金加工")]),o("i",[t._v("|")]),o("router-link",{attrs:{to:"",tag:"span"}},[t._v("机械加工")]),o("i",[t._v("|")]),o("router-link",{attrs:{to:"",tag:"span"}},[t._v("ERP系统")])],1)],1)]),o("div",{staticClass:"w nav"},[o("p",[o("el-dropdown",{attrs:{placement:"bottom"},on:{command:t.handleCommand}},[o("span",{staticClass:"el-dropdown-link"},[t._v("设备物联")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"/demand"}},[t._v("接入设备")]),o("el-dropdown-item",{attrs:{command:"/newneeds"}},[t._v("设备管理")]),o("el-dropdown-item",{attrs:{command:"/demand"}},[t._v("设备预警")]),o("el-dropdown-item",{attrs:{command:"/demand"}},[t._v("设备租债")]),o("el-dropdown-item",{attrs:{command:"/demand"}},[t._v("查找设备")])],1)],1),o("el-dropdown",{attrs:{placement:"bottom"},on:{command:t.handleCommand}},[o("span",{staticClass:"el-dropdown-link"},[t._v("应用市场")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("ERP")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("MES")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("CRM")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("SRM")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("WMS")])],1)],1),o("el-dropdown",{attrs:{placement:"bottom"},on:{command:t.handleCommand}},[o("span",{staticClass:"el-dropdown-link"},[t._v("供需对接")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("div",[o("div",{staticStyle:{display:"inline-block"}},[o("h3",{staticClass:"mx-4 pb-2 border-bottom"},[t._v("需求发布- 外协生产需求")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("设备需求")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("产品需求")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("原材料需求")])],1),o("div",{staticStyle:{display:"inline-block"}},[o("h3",{staticClass:"mx-4 pb-2 border-bottom"},[t._v("能力发布- 生产能力发布")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("设备能力发布")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("产品发布")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("原材料发布")])],1)]),o("div",{staticClass:"mt-3"},[o("div",{staticStyle:{display:"inline-block"}},[o("h3",{staticClass:"mx-4 pb-2 border-bottom"},[t._v("需求对接- 对接生产需求")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("对接设备需求")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("对接原料需求")])],1),o("div",{staticStyle:{display:"inline-block"}},[o("h3",{staticClass:"mx-4 pb-2 border-bottom"},[t._v("能力对接- 下生产订单")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("采购产品")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("采购原料")])],1)])])],1),o("el-dropdown",{attrs:{placement:"bottom"},on:{command:t.handleCommand}},[o("span",{staticClass:"el-dropdown-link"},[t._v("企业服务")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("量化融合贯标")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("省、市智能车间")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("星级上云")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("智能化改造")]),o("el-dropdown-item",{attrs:{command:"/compaines"}},[t._v("系统集成服务")])],1)],1)],1)])])},i=[],d=a("f5ef"),l={name:"Header",data:function(){return{select:"设备",input:"",userName:"",menu:[{title:"供需对接",children:[{title:"工厂对接",path:"/login"},{title:"生产对接",path:"/login"},{title:"产品对接",path:"/login"},{title:"原料/辅料对接",path:"/login"}]},{title:"设备联网",children:[{title:"工厂对接",path:"/login"},{title:"生产对接",path:"/login"},{title:"产品对接",path:"/login"},{title:"原料/辅料对接",path:"/login"}]},{title:"工业app",children:[{title:"自定义应用中心类目",path:"/login"},{title:"订阅到期提醒",path:"/login"},{title:"后台管理",path:"/login"}]}]}},components:{},computed:{},methods:{fetchUserInfo:function(){window.console.log(localStorage.userName),this.userName=localStorage.userName},delUser:function(){localStorage.clear(),this.userName=localStorage.userName,d["a"].$emit("logout")},handleCommand:function(t){this.$router.push(t)},login:function(){this.axios({method:"get",url:"http://auth.mst.casicloud.com/1/oauth/authorize",params:{client_id:"3e55qge5xjvagi1n",redirect_uri:"http://58.216.47.108:8893",response_type:"code"}})}},mounted:function(){this.fetchUserInfo()}},r=l,c=(a("354e"),a("2552"),a("2877")),m=Object(c["a"])(r,n,i,!1,null,"6628f432",null),p=m.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-dark"},[o("div",{staticClass:"w py-5"},[o("div",{staticClass:"d-flex jc-between text-grey border-bottom p-3",staticStyle:{"line-height":"30px"}},[o("div",{staticClass:"border-right fs-xxl-2 p-2 mb-3",staticStyle:{width:"200px"}},[t._v(" 售前咨询热线 "),o("br"),t._v("95187转1 ")]),o("dl",[o("dt",[t._v("工业互联网")]),o("dd",[t._v("IOT物联网")]),o("dd",[t._v("设备管理")])]),o("dl",[o("dt",[t._v("应用市场")]),o("dd",[t._v("APP中心")]),o("dd",[t._v("生态中心")])]),o("dl",[o("dt",[t._v("供需对接")]),o("dd",[t._v("工厂对接")]),o("dd",[t._v("设备对接")]),o("dd",[t._v("产品对接")]),o("dd",[t._v("辅料对接")])]),o("dl",[o("dt",[t._v("企业服务")]),o("dd",[t._v("标识解析")]),o("dd",[t._v("两化融合")]),o("dd",[t._v("智能车间")]),o("dd",[t._v("星级上云")])]),o("dl",[o("dt",[t._v("解决方案")]),o("dd",[t._v("系统集成")]),o("dd",[t._v("智能化改造")])])]),o("div",{staticClass:"text-grey d-flex jc-between mt-5"},[o("div",{staticClass:"about"},[o("p",[o("span",[t._v("关于我们")]),o("span",[t._v("法律声明")]),o("span",[t._v("隐私政策")]),o("span",[t._v("廉政举报")]),o("span",[t._v("联系我们")]),o("span",[t._v("加入我们")])]),o("p",{staticClass:"my-3"},[t._v("2009-2019 Htyw.com 版权所有 ICP证：苏D-20200806")]),o("p",[t._v("公安局备案 33010602009975号")])]),o("div",[o("img",{attrs:{src:a("52c3"),alt:""}})])])])])}],_={name:"footer",data:function(){return{}},components:{},computed:{},methods:{}},h=_,w=(a("1f95"),Object(c["a"])(h,v,u,!1,null,null,null)),f=w.exports,b={name:"Home",components:{Header:p,Footer:f}},g=b,C=(a("21bb"),Object(c["a"])(g,o,s,!1,null,null,null));e["default"]=C.exports},dddb:function(t,e,a){},f5ef:function(t,e,a){"use strict";var o=a("2b0e"),s=new o["default"];e["a"]=s}}]);
//# sourceMappingURL=chunk-1347d2f7.1b189d13.js.map