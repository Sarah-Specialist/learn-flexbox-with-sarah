<template>
    <div>
        <div>
        <img src="../../assets/wrap-reverse2.jpg" alt="wrap reverse" class="image2" width=390 height=290>
        <img src="../../assets/wrap-reverse.jpg" alt="wrap reverse" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'WrapReversePage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1396px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1396px;
}
</style>