<template>
  <div class="bg-dark">
    <div class="flex-container container">
       <div class="left-sidebar">
      <leftsidebar/>
      </div>

      <div class="main"></div>
      <div class="right-sidebar">
        <img src="https://unsplash.com/images/animals/tiger" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Leftsidebar from "../layouts/leftsidebar.vue";
export default {
  name: "IndexPage",
  components: {
    Leftsidebar,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bg-dark {
  background: #f3f2ef;
  height: 100vh;
}
.flex-container {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: auto 800px auto;
}
</style>