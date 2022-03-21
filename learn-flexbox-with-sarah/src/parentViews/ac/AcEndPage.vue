<template>
    <div>
        <div>
        <img src="../../assets/ac-end2.jpg" alt="align content end" class="image2" width=390 height=290>
        <img src="../../assets/ac-end.jpg" alt="align content end" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AcEndPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 2980px;
    left: 240px;
}

.image {
    position: absolute;
    top: 2980px;
}
</style>