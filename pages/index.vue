<template>
<div class="bg-dark ">
    <div class="flex-container container">
      <div class="left-sidebar">
         <div class="background"></div>
      </div>
      <div class="main">
       
      </div>
      <div class="right-sidebar">
      
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
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
  background:#F3F2EF;
  height: 100vh;
}
.flex-container {
 display: grid;
 grid-template-columns: auto 500px auto;

}
.background {
  width: 100%;
  height: 120px;
  background-image: linear-gradient(red, yellow);
}
@media screen and (max-width: 900px ) {
  .right-sidebar {
  
   display: none;
  }
  .main {
     padding-right: 3rem;
  }
  .left-sidebar {
    padding-left: 3rem;
  }
}
</style>