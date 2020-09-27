<template>

    <div :id="massage.massageName" class="massageIcone">
       <h1>{{massage.titre}}</h1> 
       <div>
       <img :src="`static/${massage.image}`" class="image" :alt="massage.massageName" /></div>
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


<style lang="scss" scoped>
@import "@/assets/css/styles.scss";
.massageIcone {
   padding: 50px;
}
img{
   width: auto;
   height: 300px;
}
</style>