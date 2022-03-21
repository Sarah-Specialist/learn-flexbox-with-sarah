<template>
    <div>
        <div>
        <img src="../../assets/orderthree2.jpg" alt="order three" class="image2" width=390 height=290>
        <img src="../../assets/orderthree.jpg" alt="order three" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'OrderThreePage'
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
    top: 373px;
}
</style>