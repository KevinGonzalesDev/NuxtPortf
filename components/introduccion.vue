<template>
    <div>
        <h1 ref="titleRef">My name is Kevin Gonzales</h1>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const titleRef = ref(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
    $gsap.to(titleRef.value, { opacity: 0, duration: 2 })
})
</script>