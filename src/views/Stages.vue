<template>
    <div id="stages">
        <p>Ceci est la page Stages</p>
        <Stage />
    </div>
</template>

<script>
import Stage from '@/components/CardStage.vue'
export default {
    name: "Stages",
    components: {
        Stage
    }
}
</script>