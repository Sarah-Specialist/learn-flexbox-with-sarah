<template>
    <div>
        <div>
        <img src="../../assets/growtwo2.jpg" alt="grow two" class="image2" width=390 height=290>
        <img src="../../assets/growtwo.jpg" alt="grow two" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'GrowTwoPage'
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