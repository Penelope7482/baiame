<template>

  <div id="formStage">

    <h1>{{$t('stageForm')}}</h1>
    <!-- <form @submit="saveStage" action="../assets/data.json" method="post"> -->
<form>
    <!-- <form @submit.prevent="saveStage" method="post"> -->
      <label for="stageName">Nom du stage </label>
      <input type="text" v-model="stageName" name="stageName" id="stageName" /><br /><br />

      <label for="titre">Titre du stage </label>
      <input type="text" v-model="titre" name="titre" id="titre" /><br /><br />
      <label for="image">Image </label>
      <input type="file" name="image" id="image" /><br /><br />
      <label for="nomImage">Nom de l'image </label>
      <input type="text" name="nomImage" id="nomImage"><br><br>

      <legend>Objectifs</legend>
      <br /><br />
      <label for="objectif1">Objectif 1 </label>
      <input type="text" v-model="objectif1" name="objectif1" id="objectif1" /><br /><br />
      <label for="objectif2">Objectif 2 </label>
      <input type="text" v-model="objectif2" name="objectif2" id="objectif2" /><br /><br />
      <label for="objectif3">Objectif 3 </label>
      <input type="text" v-model="objectif3" name="objectif3" id="objectif3" /><br /><br />

      <legend>Description</legend>
      <br /><br />
      <label for="phraseDescription1">Phrase 1 </label>
      <input
        type="text"
        name="phraseDescription1"
        id="phraseDescription1"
        v-model="phraseDescription1"
      /><br /><br />
      <label for="phraseDescription2">Phrase 2 </label>
      <input
        type="text"
        name="phraseDescription2"
        id="phraseDescription2"
        v-model="phraseDescription2"
      /><br /><br />
      <label for="phraseDescription3">Phrase 3 </label>
      <input
        type="text"
        name="phraseDescription3"
        id="phraseDescription3"
        v-model="phraseDescription3"
      /><br /><br />
      <label for="phraseDescription4">Phrase 4 </label>
      <input
        type="text"
        name="phraseDescription4"
        id="phraseDescription4"
        v-model="phraseDescription4"
      /><br /><br />
      <label for="phraseDescription5">Phrase 5 </label>
      <input
        type="text"
        name="phraseDescription5"
        id="phraseDescription5"
        v-model="phraseDescription5"
      /><br /><br />

      <legend>Infos Pratiques</legend>
      <label for="duree">Durée </label>
      <input type="text" name="duree" id="duree" v-model="duree"/><br /><br />
      <label for="participants">Participants </label>
      <input type="text" name="participants" id="participants" v-model="participants"/><br /><br />
      <label for="tarif" >Tarif </label>
      <input type="text" name="tarif" id="tarif" v-model="tarif" /><br /><br />
      <input type="submit" @submit="saveStage" value="Enregister la fiche de stage">
      
    </form>
  </div>
</template>

<script>
// import json from "../assets/data.json"
export default {
  name: "FormStage",
  data: () => {
    return {
      stageName: '',
      titre: '',
      nomImage:'',
      objectif1: '' ,
      objectif2: '' ,
      objectif3: '' ,
      phraseDescription1:'' ,
      phraseDescription2:'' ,
      phraseDescription3:'' ,
      phraseDescription4:'' ,
      phraseDescription5:'' ,
      duree: '',
      participants:'' ,
      tarif: ''
    }
  },
  methods: {
    saveStage : (e) => {
      e.preventDefault();
      console.log("test")
     const data =
     {
            "stageName " : this.stageName ,
            "titre": this.titre,
            "image": this.nomImage,         
            "objectif1": this.objectif1,
            "objectif2": this.objectif2,
            "objectif3": this.objectif3,
            "phraseDescription1": this.phraseDescription1 ,
            "phraseDescription2": this.phraseDescription2,
            "phraseDescription3": this.phraseDescription3,
            "phraseDescription4": this.phraseDescription4,
            "phraseDescription5": this.phraseDescription5,
            "durée":this.duree,
            "participants":this.participants,
            "tarif": this.tarif
     }
      alert('message sauvegardé')
      console.log(data)
      // recupérer el fichier data.json
      // créer un nouvel objet avec les data du formulaire
      // pusher nouvel objet dans tableau Stage du data.json

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
