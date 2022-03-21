<template>
    <div>
        <div>
        <img src="../../assets/gaptwenty2.jpg" alt="gap twenty" class="image2" width=390 height=290>
        <img src="../../assets/gaptwenty.jpg" alt="gap twenty" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'GapTwenty'
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