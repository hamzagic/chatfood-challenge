import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Main from '@/components/Main.vue'

describe("App test", () => {
  const wrapper = shallowMount(App);

  it("renders the component correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the Main component', () => {
      const component = wrapper.findComponent(Main)
      expect(component.exists()).toBe(true)
  })
});
