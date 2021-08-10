<template>
  <div>
    <div class="container ">
      <NavBar></NavBar>
    </div>
    <div class="container has-background-color-dark">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Carousel from "./components/Carousel.vue";
export default {
  components: {
    NavBar,
    // Carousel,
  },
};
</script>
