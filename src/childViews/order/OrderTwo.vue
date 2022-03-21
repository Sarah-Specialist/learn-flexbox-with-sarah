<template>
    <div>
        <div>
        <img src="../../assets/ordertwo2.jpg" alt="order two" class="image2" width=390 height=290>
        <img src="../../assets/ordertwo.jpg" alt="order two" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'OrderTwoPage'
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
    top: 371px;
}
</style>