import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { mount } from '@vue/test-utils'
import Register from '@/components/Register.vue'

describe('Register.vue', () => {
  it('submits resets form - success', async () => {
    global.fetch = () => Promise.resolve({ status: 200 ,json: () => [] })
    const wrapper = mount(Register);

    wrapper.vm.email = 'test@email.com';
    wrapper.vm.password = 'password';
    wrapper.vm.confirmPassword = 'password';
    await wrapper.vm.register()
    expect(wrapper.vm.result).toEqual(true)
  })

  it('submits login form - failed', async () => {
    global.fetch = () => Promise.resolve({ status: 400 ,json: () => [] })  
    const wrapper = mount(Register);

    wrapper.vm.email = 'test@email.com';
    wrapper.vm.password = 'password';
    wrapper.vm.confirmPassword = 'password';
    await wrapper.vm.register()
    expect(wrapper.vm.result).toEqual(false)
  })
})