<template>
    <div>
        <div>
        <img src="../../assets/growone2.jpg" alt="grow one" class="image2" width=390 height=290>
        <img src="../../assets/growone.jpg" alt="grow one" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'GrowOnePage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 948px;
    left: 240px;
}

.image {
    position: absolute;
    top: 948px;
}
</style>