<template>
    <div>
        <div>
        <img src="../../assets/growzero2.jpg" alt="grow zero" class="image2" width=390 height=290>
        <img src="../../assets/growzero.jpg" alt="grow zero" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'GrowZeroPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 949px;
    left: 240px;
}

.image {
    position: absolute;
    top: 949px;
}
</style>