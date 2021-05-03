<template>
  <div>
    <img src="@/assets/Back.svg" alt="arrow" @click="resetBasket()" class="back" />
    <div class="container">
      <FoodMenu />
    </div>
  </div>
</template>

<script>
import FoodMenu from "./FoodMenu";

export default {
  name: "Main",
  components: {
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
  width: 100%;
}
.back {
  margin-top: 49px;
  padding: 0px 16px;
  cursor: pointer;
}
</style>
