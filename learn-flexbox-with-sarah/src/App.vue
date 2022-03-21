<template>
  <HeadingBanner title="Learn Flexbox with Sarah"/>
  <span>
    <router-link :to="{name: 'ParentPage'}">
      <button class="btn btn-success btn-lg" id="nav">Parent container</button>
    </router-link>
    <router-link :to="{name: 'ChildPage'}">
      <button class="btn btn-success btn-lg" id="nav">Child item</button>
    </router-link>
  </span>
  <div class="main-app">

  </div>
  <router-view />
</template>

<script>
import HeadingBanner from './components/HeadingBanner.vue'

export default {
  name: 'App',
  components: {
    HeadingBanner
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Open Sans' , Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}

#nav {
  margin: 20px;
}
</style>
