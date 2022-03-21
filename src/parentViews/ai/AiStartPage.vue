<template>
    <div>
        <div>
        <img src="../../assets/ai-start2.jpg" alt="align items start" class="image2" width=390 height=290>
        <img src="../../assets/ai-start.jpg" alt="align items start" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AiStartPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2449px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2449px;
}
</style>