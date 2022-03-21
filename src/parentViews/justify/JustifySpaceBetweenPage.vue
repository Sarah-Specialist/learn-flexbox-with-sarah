<template>
    <div>
        <div>
        <img src="../../assets/justify-between2.jpg" alt="justify between" class="image2" width=390 height=290>
        <img src="../../assets/justify-between.jpg" alt="justify between" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'JustifySpaceBetweenPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1930px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1924px;
}
</style>