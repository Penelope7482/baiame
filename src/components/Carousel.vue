<template>
  <div>
    <p>ceci est le composant carousel</p>

    <slick ref="slick" :options="slickOptions">
      <CarouselIcone
        v-for="(massage, index) in massages"
        :key="index"
        :massage="massage"
      />
    </slick>
  </div>
</template>


<script>
import CarouselIcone from "@/components/CarouselIcone.vue";
import json from "../assets/data.json";
import Slick from "vue-slick";
import "../../node_modules/slick-carousel/slick/slick.css";

export default {
  name: "Carousel",
  data() {
    return {
      massages: json.massages,

      slickOptions: {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToshow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        focusOnSelect: true,

        // centerMode: true,
        // centerPadding:
        // easing: linear,
        // edgeFriction:0.15
        //lazyLoad: ondemand or progressive?? 
        mobileFirst: true,
        pauseOnFocus: true, 
        pauseOnHover: true, 
        pauseOnDotsHover: true,
        // respondTo: 'window' (defaut)
// Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
        // responsive: none (default) : Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
        // rows: 1 (default), Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
        // swipe: true (default) (enable swiping)
        // swipeToSlide: false (default) (allow users to drag or swipe directly to a slide irrespective to slidesToScroll)
        // touchMove: true Enable slide motion with touch
        // touchThreshold: 5 To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider
        // useCSS: true, Enable/disable CSS transitions
        //useTransform: true Enable/disable CSS transitions
        //rtl: false: change the sliders's direction to become right-to-left
        //wiatForAnimate: true, ignores request to advance the slide while animating
        //zindex: 1000, Set the zIndex values for slides, useful for IE9 and lower

      
      
      },
    };
  },
  methods: {
    next() {
      this.$ref.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
  },
  components: {
    CarouselIcone,
    Slick,
  },
};
</script>

<style lang="scss" scoped>


</style>