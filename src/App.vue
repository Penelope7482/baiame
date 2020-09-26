<template>
  <div id="app">

    <Navbar />
    <router-view />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/css/styles.scss";
#app {
  padding-top: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
body {
  margin: 0;
}

ul {
  padding: 0;
}

a {
  text-decoration: none;
}
</style>

