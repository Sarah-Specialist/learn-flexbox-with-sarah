<template>
    <div>
        <div>
        <img src="../../assets/row2.jpg" alt="row" class="image2" width=390 height=290>
        <img src="../../assets/row.jpg" alt="row" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'DirectionRowPage'
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