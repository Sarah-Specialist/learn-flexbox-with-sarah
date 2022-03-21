<template>
    <div>
        <div>
        <img src="../../assets/ac-start2.jpg" alt="align content start" class="image2" width=390 height=290>
        <img src="../../assets/ac-start.jpg" alt="align content start" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AcStartPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2977px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2977px;
}
</style>