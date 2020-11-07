<template>
    <div>
        <p>{{$t('this is stage component')}}</p>   
        <StageIcone  v-for="(stage, index) in stages" :key="index" :stage="stage"/>       
    </div>
</template>


<script>
import StageIcone from '@/components/StageIcone.vue'
import json from "../assets/data.json";
export default {
    name: "Stage",
    data () {

        return {
            stages : json.stages
        }
    },
    components : {
     StageIcone
    }
}
</script>