<template >
<div v-if="authenticated">
  <div id="secure">
    <h1>Secure Area</h1>
    <p>This is a secure area</p>

    <h1>Formulaire de Stages</h1>
    <form action="" method="post">
      <label for="stageName">Nom du stage </label>
      <input type="text" name="titre" id="stageName" /><br /><br />

      <label for="titre">Titre du stage </label>
      <input type="text" name="titre" id="titre" /><br /><br />
      <label for="image">Image </label>
      <input type="file" name="image" id="image" /><br /><br />

      <legend>Objectifs</legend>
      <br /><br />
      <label for="objectif1">Objectif 1 </label>
      <input type="text" name="objectif1" id="objectif1" /><br /><br />
      <label for="objectif2">Objectif 2 </label>
      <input type="text" name="objectif2" id="objectif2" /><br /><br />
      <label for="objectif3">Objectif 3 </label>
      <input type="text" name="objectif3" id="objectif3" /><br /><br />

      <legend>Description</legend>
      <br /><br />
      <label for="phraseDescription1">Phrase 1 </label>
      <input
        type="text"
        name="phraseDescription1"
        id="phraseDescription1"
      /><br /><br />
      <label for="phraseDescription2">Phrase 2 </label>
      <input
        type="text"
        name="phraseDescription2"
        id="phraseDescription2"
      /><br /><br />
      <label for="phraseDescription3">Phrase 3 </label>
      <input
        type="text"
        name="phraseDescription3"
        id="phraseDescription3"
      /><br /><br />
      <label for="phraseDescription4">Phrase 4 </label>
      <input
        type="text"
        name="phraseDescription4"
        id="phraseDescription4"
      /><br /><br />
      <label for="phraseDescription5">Phrase 5 </label>
      <input
        type="text"
        name="phraseDescription5"
        id="phraseDescription5"
      /><br /><br />

      <legend>Infos Pratiques</legend>
      <label for="duree">Durée </label>
      <input type="text" name="duree" id="duree" /><br /><br />
      <label for="participants">Participants </label>
      <input type="text" name="participants" id="participants" /><br /><br />
      <label for="tarif">Tarif </label>
      <input type="text" name="tarif" id="tarif" /><br /><br />
    </form>
  </div>
  </div>
  <div v-else>Vous n'avez pas accès à cette page</div>
</template>

<script>

export default {
  name: "Secure",
  props: ['authenticated'],
  data() {},
    mounted() { 
         if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
      console.log("test")  
         } 
    //  else {
    //      this.$router.$authenticated = true
    //  }
    },

    methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
      logout() {
      this.authenticated = false;
      }
    }
};
</script>

<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
