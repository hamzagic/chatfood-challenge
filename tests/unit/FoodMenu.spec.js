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

  it('calls addToBasket when clicking on a dish title', () => {
    wrapper.vm.addToBasket = jest.fn();
    const listItems = wrapper.findAll(".dish-title");
    listItems[0].trigger('click');
    expect(wrapper.vm.addToBasket).toHaveBeenCalled();
  });

  it("saves the item and quantity on local storage", () => {
    const listItems = wrapper.findAll(".dish-title");
    const itemText = listItems[0].text();
    wrapper.vm.addToBasket = jest.fn(fakeLocalStorage.localStorage.setItem(itemText, wrapper.vm.count));
    listItems[0].trigger('click');
    
    const key = Object.keys(fakeLocalStorage.localStorage.data);
    const value = parseInt(Object.values(fakeLocalStorage.localStorage.data));
    expect(key).toContain(itemText);
    expect(value).toBe(wrapper.vm.count);
  });
});
