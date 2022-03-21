<template>
    <div>
        <div>
        <img src="../../assets/justify-around2.jpg" alt="justify around" class="image2" width=390 height=290>
        <img src="../../assets/justify-around.jpg" alt="justify around" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'JustifySpaceAroundPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1924px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1924px;
}
</style>