<template>
    <div>
        <div>
        <img src="../../assets/as-stretch2.jpg" alt="align self stretch" class="image2" width=390 height=295>
        <img src="../../assets/as-stretch.jpg" alt="align self stretch" class="image" width=390 height=295>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AsStretchPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1476px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1476px;
}
</style>