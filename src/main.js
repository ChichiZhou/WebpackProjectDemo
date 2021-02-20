// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

// 引入路由模块
import VueRouter from "vue-router";
// 引入创建的路由
import router from "./router";
// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 使用路由模块
Vue.use(VueRouter);
// 使用 Element-UI
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
