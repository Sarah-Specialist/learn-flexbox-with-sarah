<template>
    <div>
        <div>
        <img src="../../assets/wrap2.jpg" alt="wrap" class="image2" width=390 height=290>
        <img src="../../assets/wrap.jpg" alt="wrap" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'WrapPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1400px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1400px;
}
</style>