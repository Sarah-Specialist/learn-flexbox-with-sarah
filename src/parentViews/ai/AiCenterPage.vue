<template>
    <div>
        <div>
        <img src="../../assets/ai-center2.jpg" alt="align items center" class="image2" width=390 height=290>
        <img src="../../assets/ai-center.jpg" alt="align items center" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AiCenterPage'
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