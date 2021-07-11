<template>
  <div id="app" @click="reset">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.$countDown({
      time: 60,
      customClass: 'self-countDown', // 样式定制
      handle: function () {
        alert('CountDown Finished...');
      }
    });
  },
  methods: {
    reset() {
      this.$countDown.restart(); // 重置
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
