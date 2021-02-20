<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 使用了 HelloWorld 这个组件 -->
    <!-- <HelloWorld/> -->
    <!-- <Login/> -->
    <!-- 必须写这个 router-view，否则什么都显示不出来 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/Login'
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // 首先显示的vue组件
  // 在这里注册
  components: {
    // Login,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
