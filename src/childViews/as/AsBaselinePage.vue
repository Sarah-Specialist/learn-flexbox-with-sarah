<template>
    <div>
        <div>
        <img src="../../assets/as-baseline2.jpg" alt="align self baseline" class="image2" width=390 height=290>
        <img src="../../assets/as-baseline.jpg" alt="align self baseline" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AsBaselinePage'
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