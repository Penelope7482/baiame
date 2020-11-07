<template>
  <div id="app">
    <Navbar />

    <!-- <router-link v-if="authenticated" to="/formstage">Formulaire de création de stage</router-link> -->

    <!-- <router-link
      v-if="authenticated"
      to="/login"
      v-on:click.native="logout()"
      replace
      >Déconnexion</router-link > -->
    <!-- <router-view @authenticated="setAuthenticated" /> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data: () => {
    return {
      authenticated: false,
      mockAccount: {
        username: "baiame",
        password: "baiame",
      },
    };
  },
  components: {
    Navbar,
  },
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
  margin: 0;
}

a {
  text-decoration: none;
}
</style>

