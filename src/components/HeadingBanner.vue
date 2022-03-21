<template>
  <div class="heading">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeadingBanner',
  props: {
    title: String
  }
}
</script>

<style scoped>
.heading {
  background-color: #E8D3FE;
  padding: 10px 0;
}
</style>
