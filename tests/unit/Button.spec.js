import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders props when passed and emit correct value', () => {
    const name = "new button";

    const wrapper = mount(Button, {
      propsData: {
        name: name,
      }
    });
    const buttonElement = wrapper.find('button');
    expect(buttonElement.text()).toMatch(name);

    buttonElement.trigger('click');
    expect(wrapper.emitted().clicked[0]).toEqual([true])
  })
})