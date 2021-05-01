<template>
  <div>
    <img src="../assets/Back.svg" alt="arrow" />
    <div>
      <p class="titles">Search</p>
      <Search />
      <FoodMenu />
    </div>
  </div>
</template>

<script>
import Search from './Search';
import FoodMenu from './FoodMenu';

export default {
  name: "Main",
  components: {
    Search,
    FoodMenu
  },
  props: {},
};
</script>

<style scoped>
</style>
