import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Main.vue'

describe('Main.vue', () => {
  const wrapper = shallowMount(Main)
  
  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the Search text', () => {
    const searchText = wrapper.find('p')
    expect (searchText.text()).toContain('Search') 
  })
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
