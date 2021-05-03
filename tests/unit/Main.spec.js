import { shallowMount } from "@vue/test-utils";
import Main from "@/components/Main.vue";
import FoodMenu from "@/components/FoodMenu.vue";

describe("Main.vue", () => {
  const wrapper = shallowMount(Main);

  const fakeLocalStorage = {
    localStorage: {
      data: {
        'Cheese Burger': 1,
        'Avo Burger': 2
      },
      length: 0,
      clear() {
        this.data = {};
        this.length = 0;
      },
    },
  };

  it("renders the component correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders FoodMenu.vue", () => {
    const component = wrapper.findComponent(FoodMenu);
    expect(component.exists()).toBe(true);
  });

  it("displays a back button", () => {
    const backButton = wrapper.find('.back');
    expect(backButton.exists()).toBe(true);
  });

  it("clears local storage when calling resetBasket", () => {
    wrapper.vm.resetBasket = jest.fn(fakeLocalStorage.localStorage.clear());
    const backButton = wrapper.find('.back');
    backButton.trigger('click');
    expect(wrapper.vm.resetBasket).toHaveBeenCalled();
    expect(fakeLocalStorage.localStorage.data).toMatchObject({});
  });
});
