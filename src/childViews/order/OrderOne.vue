<template>
    <div>
        <div>
        <img src="../../assets/orderone2.jpg" alt="order one" class="image2" width=390 height=290>
        <img src="../../assets/orderone.jpg" alt="order one" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'OrderOnePage'
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