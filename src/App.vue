<template>
  <Main />
</template>

<script>
import Main from './components/Main';
export default {
  name: "App",
  components: {
    Main
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");

#app {
  font-family: Inter, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 375px;
  /* height: 2839px; */
  left: 0px;
  top: 0px;
  background-color: #ffffff;
  color: #071C4D;
  height: 100vh;
}

.titles {
  font-size: 26px;
  line-height: 35px;
  font-weight: 600;
}

.dish-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
}

.dish-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #838DA6;
}

.item-image {
  height: 91px;
  width: 91px;
  border-radius: 7px;
}
</style>
