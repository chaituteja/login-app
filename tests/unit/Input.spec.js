import { mount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input.vue', () => {
  it('renders props when passed and emit correct value', () => {
    const placeholder = "new placeholder";
    const label = "new lable";
    const type = "new type";
    const name = "new name";

    const wrapper = mount(Input, {
      propsData: {
        type: type,
        name: name,
        placeholder: placeholder,
        label: label,
      }
    });
    const inputElement = wrapper.find('input');
    const labelElement = wrapper.find('label');
    expect(inputElement.attributes().type).toMatch(type);
    expect(inputElement.attributes().name).toMatch(name);
    expect(inputElement.attributes().placeholder).toMatch(placeholder);
    expect(labelElement.text()).toMatch(label);

    inputElement.element.value = 'test';
    inputElement.trigger('change')
    expect(wrapper.emitted().change[0]).toEqual(['test'])
  })
})