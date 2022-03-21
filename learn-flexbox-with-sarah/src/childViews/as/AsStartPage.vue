<template>
    <div>
        <div>
        <img src="../../assets/as-start2.jpg" alt="align self start" class="image2" width=390 height=290>
        <img src="../../assets/as-start.jpg" alt="align self start" class="image" width=390 height=290>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'AsStartPage'
}
</script>

<style scoped>
.image2 {
    position: absolute;
    top: 1473px;
    left: 240px;
}

.image {
    position: absolute;
    top: 1475px;
}
</style>