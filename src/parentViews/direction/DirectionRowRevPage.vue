<template>
    <div>
        <div>
        <img src="../../assets/row-reverse2.jpg" alt="row reverse" class="image2" width=390 height=290>
        <img src="../../assets/row-reverse.jpg" alt="row reverse" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'DirectionRowRevPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 870px;
    left: 240px;
}

.image {
    position: absolute;
    top: 870px;
}
</style>