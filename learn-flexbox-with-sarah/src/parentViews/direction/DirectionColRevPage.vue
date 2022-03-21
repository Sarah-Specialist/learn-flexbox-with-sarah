<template>
    <div>
        <div>
        <img src="../../assets/column-reverse2.jpg" alt="column reverse" class="image2" width=390 height=290>
        <img src="../../assets/column-reverse.jpg" alt="column reverse" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'DirectionColRevPage'
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