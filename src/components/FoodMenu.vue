<template>
  <div>
    <div>
      <img src="../assets/Search.svg" alt="search" />
      <input
        type="text"
        v-model="queryInput"
        placeholder="Search for dishes..."
      />
    </div>
    <div v-for="(cat, id) in categories" :key="id">
      <div class="titles">{{ cat.name }}</div>
      <div v-for="(item, id) in queryResult" :key="id">
        <div v-if="item.category_id == cat.id" class="item-container">
          <div class="item-data">
            <p class="dish-title" @click="addToBasket(item)">{{ item.name }}</p>
            <div class="dish-description">{{ item.description }}</div>
            <div class="prices">
              <div class="item-discount">
                {{ calculateDiscount(item.price, item.discount_rate) }}
              </div>
              <div class="item-full-price">{{ formatPrice(item.price) }}</div>
            </div>
          </div>
          <img
            :src="item.photo"
            alt="menu-image"
            v-if="item.photo"
            class="item-image"
          />
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
      queryInput: "",
      count: 1,
      itemCount: 0
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
      this.newValue = value - value * discount;
      // if(this.newValue != value)
      return (this.newValue / 100).toFixed(2);
    },
    addToBasket(item) {
      this.itemCount = localStorage.getItem(item.name);
      if (this.itemCount) {
          console.log("yep");
          localStorage.setItem(item.name, parseInt(this.itemCount) + 1);
      } 
      else {
          console.log("nope");
          localStorage.setItem(item.name, this.count);
      }
      console.log(localStorage) 
    },
  },
  computed: {
    queryResult() {
      if (this.queryInput.length > 0) {
        return this.items.filter((item) =>
          item.name.toLowerCase().includes(this.queryInput.toLowerCase())
        );
      } else {
        return this.items;
      }
    },
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-between;
}

.item-data {
  max-width: 235px;
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
  cursor: pointer;
}

.dish-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #838da6;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.item-image {
  height: 91px;
  width: 91px;
  border-radius: 7px;
}

.prices {
  display: flex;
  justify-content: space-around;
}

.item-price-full {
}

.item-price-discount {
}

.active {
  background-color: #1258ff;
}
</style>