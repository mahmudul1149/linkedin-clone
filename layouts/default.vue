<template>
  <div id="app">
    <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {

  components: {
   Header: Header
  },
};
</script>

<style>
.container {
  max-width: 1300px;
  margin: auto;
  /* padding: 0 2rem; */
}
</style>