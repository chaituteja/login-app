import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { mount } from '@vue/test-utils'
import SignIn from '@/components/SignIn.vue'

describe('SignIn.vue', () => {
  it('submits login form - success', async () => {
    // global.fetch = () => Promise.resolve({ status: 200 })  
    global.fetch = () => Promise.resolve({ status: 200 ,json: () => [] })
    const wrapper = mount(SignIn);

    wrapper.vm.email = 'test@email.com';
    wrapper.vm.password = 'password';
    await wrapper.vm.login()
    expect(wrapper.vm.result).toEqual(true)
  })

  it('submits login form - failed', async () => {
    global.fetch = () => Promise.resolve({ status: 400 ,json: () => [] })  
    const wrapper = mount(SignIn);

    wrapper.vm.email = 'test@email.com';
    wrapper.vm.password = 'password';
    await wrapper.vm.login()
    expect(wrapper.vm.result).toEqual(false)
  })
})