<template>
  <div>
    <a href="#" @click.prevent="setLocale('en')">
      <img src="../assets/img/en.svg" alt="english flag" class="svg" />
      <span class="langue">EN</span>
    </a>
    <a href="#" @click.prevent="setLocale('fr')">
      <img src="../assets/img/fr.svg" alt="french flag" class="svg" />
      <span class="langue">FR</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  methods: {
   
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    
    },
  },
};
</script>
<style lang="scss">
.svg {
  width: 30px;
  height: 30px;
  margin: 5px;
}
.langue {
  margin-right: 10px;
}
</style>