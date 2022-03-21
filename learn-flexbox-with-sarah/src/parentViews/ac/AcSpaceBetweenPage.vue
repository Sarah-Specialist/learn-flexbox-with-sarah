<template>
    <div>
        <div>
        <img src="../../assets/ac-between2.jpg" alt="align content between" class="image2" width=390 height=290>
        <img src="../../assets/ac-between.jpg" alt="align content between" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AcSpaceBetweenPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2975px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2975px;
}
</style>