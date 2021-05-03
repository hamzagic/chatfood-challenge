<template>
  <div class="container">
    <div class="horizontal-padding">
      <p class="titles">Search</p>
      <div class="input-container">
        <img src="../assets/Search.svg" alt="search" class="search-icon" />
        <input
          type="text"
          v-model="queryInput"
          placeholder="Search for dishes..."
          class="input"
        />
      </div>
    </div>
    <div v-for="(cat, id) in categories" :key="id" class="content-container">
      <div class="titles horizontal-padding" id="categories" >{{ cat.name }}</div>
      <div v-for="(item, id) in queryResult" :key="id">
        <div v-if="item.category_id == cat.id" class="item-container">
          <div class="item-data">
            <p class="dish-title horizontal-padding" @click="addToBasket(item)">
              {{ item.name }}
            </p>
            <div class="dish-description horizontal-padding">
              {{ item.description }}
            </div>
            <div class="prices">
              <div class="item-current horizontal-padding">
                {{ calculateDiscount(item.price, item.discount_rate) }}
              </div>
              <div class="item-price-original" v-if="item.discount_rate != 0">
                {{ formatPrice(item.price) }}
              </div>
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
import menuData from "@/data/menu.json";
import formatPrice from '@/mixins/formatPrice';
import calculateDiscount from '@/mixins/calculateDiscount';

export default {
  name: "FoodMenu",
  components: {},
  props: {},
  mixins: [formatPrice, calculateDiscount],
  data() {
    return {
      queryInput: "",
      count: 1,
      itemCount: 0,
      fullMenu: null
    };
  },
  created() {
    this.fullMenu = Object.values(menuData);
    this.categories = this.fullMenu[0];
    this.items = this.fullMenu[1];
  },
  methods: {
    addToBasket(item) {
      this.itemCount = localStorage.getItem(item.name);
      if (!this.itemCount) {
        console.log("New item added");
        return localStorage.setItem(item.name, this.count);
      }

      if (
        this.itemCount &&
        item.stock.availability > parseInt(this.itemCount)
      ) {
        console.log("Item added")
        return localStorage.setItem(item.name, parseInt(this.itemCount) + 1);
      } else {
        return console.log("Item unavailable");
      }
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
.container {
  margin: 0 auto;
}

.horizontal-padding {
  padding: 0px 16px;
}
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
}

.item-current {
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
}

.item-price-original {
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #838da6;
  text-decoration: line-through;
}

.active {
  background-color: #1258ff;
}

.input-container {
  display: flex;
  padding: 14px;
  width: 333px;
  border: 2px solid #EBEFF4;
  border-radius: 7px;
}

.input {
  border: none;
}

.input::placeholder {
  line-height: 21px;
  font-weight: 400;
  font-size: 14px;
}

.search-icon {
  height: 15px;
  width: 15px;
  padding-right: 5px;
}

.content-container {
  margin-top: 21px;
}
</style>