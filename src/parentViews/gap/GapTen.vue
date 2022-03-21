<template>
    <div>
        <div>
        <img src="../../assets/gapten2.jpg" alt="gap ten" class="image2" width=390 height=290>
        <img src="../../assets/gapten.jpg" alt="gap ten" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'GapTen'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 3505px;
    left: 240px;
}

.image {
    position: absolute;
    top: 3505px;
}
</style>