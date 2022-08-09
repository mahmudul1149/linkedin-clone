<template>
  <div class="bg-dark">
    <div class="flex-container container">
       <div class="left-sidebar">
      <leftsidebar/>
      </div>

      <div class="main">
        <main-section></main-section>
      </div>
      <div class="right-sidebar">
    
      </div>
    </div>
  </div>
</template>

<script>
import Leftsidebar from "../layouts/leftsidebar.vue";
import MainSection from "../layouts/Main.vue";
export default {
  name: "IndexPage",
  components: {
    Leftsidebar,
    MainSection,
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
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;

}
</style>