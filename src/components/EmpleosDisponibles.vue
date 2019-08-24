<template>
    <div id="empleos">
        <empleos-disponibles-item 
            v-for="empleo of empleos" 
            :key="empleo.index" 
            :item="empleo" />
    </div>
</template>

<script>
import EmpleosDisponiblesItem from "@/components/EmpleosDisponiblesItem.vue"

export default {
    name: "EmpleosDisponibles",
    components: {
        EmpleosDisponiblesItem
    },
    props: {
        empleos: Array
    }
}
</script>