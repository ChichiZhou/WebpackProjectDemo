// 这里和webpack-simple 有所区别
// 路由表的路径是 src/router/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import HelloWorld from "../components/HelloWorld";

// 同样需要安装路由
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    //   传递参数 id，前面用 ':'
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
