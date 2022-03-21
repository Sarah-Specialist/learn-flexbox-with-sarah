<template>
    <div>
        <div>
        <img src="../../assets/orderfour2.jpg" alt="order four" class="image2" width=390 height=290>
        <img src="../../assets/orderfour.jpg" alt="order four" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'OrderFourPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 375px;
    left: 240px;
}

.image {
    position: absolute;
    top: 375px;
}
</style>