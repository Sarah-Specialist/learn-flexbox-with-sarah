<template>
    <div>
        <div>
        <img src="../../assets/as-center2.jpg" alt="align self center" class="image2" width=390 height=290>
        <img src="../../assets/as-center.jpg" alt="align self center" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AsCenterPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1475px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1475px;
}
</style>