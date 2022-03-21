<template>
    <div>
        <div>
        <img src="../../assets/ai-end2.jpg" alt="align items end" class="image2" width=390 height=290>
        <img src="../../assets/ai-end.jpg" alt="align items end" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AiEndPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2450px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2450px;
}
</style>