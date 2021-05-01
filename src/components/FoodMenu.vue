<template>
  <div>
    <div v-for="(cat, id) in categories" :key="id">
      <div class="titles">{{ cat.name }}</div>
      <div v-for="(item, id) in items" :key="id">
        <div v-if="item.category_id == cat.id">
          <p class="dish-title">{{ item.name }}</p>
          <p class="dish-description">{{ item.description }}</p>
          <img
            :src="item.photo"
            alt="menu-image"
            v-if="item.photo"
            class="item-image"
          />
          <div class="prices">
            <div class="item-discount">{{ calculateDiscount(item.price, item.discount_rate) }}</div>
            <div class="item-full-price">{{ formatPrice(item.price) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuData from "../data/menu.json";

export default {
  name: "FoodMenu",
  components: {},
  props: {},
  data() {
    return {
        
    };
  },
  created() {
    this.fullMenu = Object.values(menuData);
    this.categories = this.fullMenu[0];
    this.items = this.fullMenu[1];
  },
  methods: {
    formatPrice(value) {
        return (value / 100).toFixed(2);
    },
    calculateDiscount(value, discount) {
        this.newValue = value - (value * discount)
        // if(this.newValue != value)
        return (this.newValue / 100).toFixed(2)
    },
    searchDishes(param) {

    }
  },
};
</script>

<style scoped>
.prices {
    display: flex;
    justify-content: space-around;
}

.item-price-full {

}

.item-price-discount {

}
</style>