<template>
 
    <div :id="massage.massageName">
       <h1>{{massage.titre}}</h1> 
       <img :src="'../assets/img/' + massage.image" class="image" :alt="massage.massageName" />
        <div class="description" v-html="massage.description"></div>      
    </div>

</template>

<script>

export default {
  name: "CarouselIcone",
  props: ['massage'], 
  mounted() {
     return true
  }
};

</script> 
