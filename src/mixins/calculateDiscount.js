export default {
  methods: {
    calculateDiscount(value, discount) {
      this.newValue = value - value * discount;
      return (this.newValue / 100).toFixed(2);
    },
  },
};
