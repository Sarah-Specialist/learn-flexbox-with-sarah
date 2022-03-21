<template>
    <div>
        <div>
        <img src="../../assets/ac-center2.jpg" alt="align content center" class="image2" width=390 height=290>
        <img src="../../assets/ac-center.jpg" alt="align content center" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AcCenterPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2980px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2980px;
}
</style>