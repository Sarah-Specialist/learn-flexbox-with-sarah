<template>
    <div>
        <div>
        <img src="../../assets/justify-end2.jpg" alt="justify end" class="image2" width=390 height=290>
        <img src="../../assets/justify-end.jpg" alt="justify end" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'JustifyEndPage'
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
    top: 1922px;
}
</style>