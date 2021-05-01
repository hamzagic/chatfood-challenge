<template>
  <div>
    <img src="../assets/Back.svg" alt="arrow" @click="resetBasket()" />
    <div class="container">
      <p class="titles">Search</p>
      <!-- <Search /> -->
      <FoodMenu />
    </div>
  </div>
</template>

<script>
// import Search from './Search';
import FoodMenu from "./FoodMenu";

export default {
  name: "Main",
  components: {
    // Search,
    FoodMenu,
  },
  props: {},
  methods: {
    resetBasket() {
      localStorage.clear();
    },
  }
};
</script>

<style scoped>
.container {
  /* margin: 0 14px; */
}
</style>
