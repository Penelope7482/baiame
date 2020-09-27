<template>
 
    <div :id="stage.stageName">
       <h1>{{stage.titre}}</h1> 
        <div class="stageDescription" >
            <img :src="'../assets/img/' + stage.image" :alt="stage.stageName"> <br>
            {{stage.objectif1}} <br>
            {{stage.objectif2}} <br>
            {{stage.objectif3}} <br>
            {{stage.phraseDescription1}} <br>
            {{stage.phraseDescription2}} <br>
            {{stage.phraseDescription3}} <br>
            {{stage.phraseDescription4}} <br>
            {{stage.phraseDescription5}} <br>
            {{stage.durée}} <br>
            {{stage.participants}} <br>
            {{stage.tarif}} <br>
        </div>

    </div>

</template>

<script>

export default {
  name: "stageIcone",
  props: ['stage'], 
  mounted() {
     return true
  }
};

</script> 