<template>
    <div>
        <p>ceci est le composant carousel </p>
        <p>Voilà les CarouselIcones </p>      
        <CarouselIcone />       
    </div>
</template>


<script>
import CarouselIcone from '@/components/CarouselIcone.vue'

export default {
    name: "Carousel",
    // props: ['titre', 'description', 'massageName'],
    data () {

        return {
            msg: 'test'
        }
    },
    components : {
     CarouselIcone
    }
}
</script>