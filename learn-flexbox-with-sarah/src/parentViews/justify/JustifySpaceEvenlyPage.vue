<template>
    <div>
        <div>
        <img src="../../assets/justify-evenly2.jpg" alt="justify evenly" class="image2" width=390 height=290>
        <img src="../../assets/justify-evenly.jpg" alt="justify evenly" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'JustifySpaceEvenlyPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1922px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1925px;
}
</style>