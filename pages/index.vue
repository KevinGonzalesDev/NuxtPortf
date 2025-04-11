<template>
    <div>
        <div class="columns-2 flex">
            <div class="titleRef">
                <img class="aspect-auto" src="/public/makakoIMGpng.png" />
            </div>
            <div>
                <h1>{{ t('title') }}</h1>
            </div>
        </div>
    </div>
</template>
<script setup>
const { t } = useI18n()
import { ref, onMounted } from 'vue'
const titleRef = ref(null)
const { $gsap } = useNuxtApp()


onMounted(() => {
    $gsap.to(titleRef.value, { opacity: 0, duration: 2 })
})
</script>