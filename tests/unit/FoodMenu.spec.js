import { shallowMount, mount } from "@vue/test-utils";
import FoodMenu from "@/components/FoodMenu.vue";

describe("FoodMenu.vue", () => {
  const wrapper = mount(FoodMenu);
  
  const fakeLocalStorage = {
    localStorage: {
      data: {},
      length: 0,
      setItem(key, value) {
        this.data[key] = value.toString();
        this.length = Object.keys(this.data).length;
      },
      getItem(key) {
        return this.data[key];
      },
      removeItem(key) {
        delete this.data[key];
        this.length = Object.keys(this.data).length;
      },
      clear() {
          this.data = {};
          this.length = 0;
      }
    },
  };

  it("renders the component correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Search text", () => {
    const searchText = wrapper.find("p");
    expect(searchText.text()).toContain("Search");
  });

  it("renders an input field with a placeholder text", () => {
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(input.attributes("placeholder")).toBe("Search for dishes...");
  });

  it("renders the menu categories", () => {
    const categories = wrapper.vm.categories;
    expect(wrapper.findAll("#categories")).toHaveLength(categories.length);
  });

  it("renders the menu items", () => {
    const items = wrapper.vm.items;
    expect(wrapper.findAll(".dish-title")).toHaveLength(items.length);
  });

  it("saves the item and quantity on local storage", () => {
    const listItems = wrapper.findAll(".dish-title");
    const item = listItems[0].text();
    fakeLocalStorage.localStorage.setItem(item, wrapper.vm.count);
    
    const key = Object.keys(fakeLocalStorage.localStorage.data);
    expect(key).toContain(item);
  });
});
