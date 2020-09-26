<template>
    <div>
        <p>ceci est le composant carousel </p>   
        <CarouselIcone  v-for="(massage, index) in massages" :key="index" :massage="massage"/>       
    </div>
</template>


<script>
import CarouselIcone from '@/components/CarouselIcone.vue'
import json from "../assets/data.json";
export default {
    name: "Carousel",
    data () {

        return {
            massages : json.massages
        }
    },
    components : {
     CarouselIcone
    }
}
</script>