<template>
  <div id="carouselIcon">
    <div v-for="massage in massages" :key="massage.massageName" :id="massage.massageName">
       <h1>{{massage.titre}}</h1> 
        <div class="description" v-html="massage.description"></div>      
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "CarouselIcone",
  data() {
    return {
      massages : json.massages
    };
  },
  mounted() {
       
   //   console.log(this.massages)
     return true
  }
};
// console.log("test");

// console.log(json.massages);
// console.log(json.massages[0].massageName);
</script> 
