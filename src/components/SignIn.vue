<template>
    <div class="container">
        <div class="form">
            <div class="form__fields">
                <div class="heading"><span>Sign In</span></div>
                <div v-show="!result">
                    <Input label="Email" name="email" type="email" placeholder="Enter email" v-on:change="getEmail($event)"/>
                    <p class="form__error" v-if="result === false">Please provide correct email</p>
                    <Input label="Password" name="password" type="password" placeholder="Enter password" v-on:change="getPassword($event)"/>
                    <p class="form__error" v-if="emptyFields === true">Please fill both fields</p>
                    <p><a href="register.html">Want to reset password ?</a></p>
                    <Button name="Login" v-on:clicked="login()"/>
                </div>
                <div v-show="result === true"><h2>Success</h2><b>Token : {{ token }}</b></div>
            </div>
            <div class="form__image">
                <img src="../assets/signin.png">
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'
export default {
  name: 'SignIn',
  components: {
    Button, Input
  },
  data: () => ({ email: '', password: '', result: '', emptyFields: '', token: '' }),
  methods: {
    async login () {
      const url = 'https://reqres.in/api/login'
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }

      if (this.password !== '' && this.email !== '') {
        this.emptyFields = false
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.status === 200) {
            this.result = true
            this.token = data.token
        } else {
            this.result = false
        }
      } else {
        this.emptyFields = true
      }
    },
    getEmail: function (value) {
      this.email = value
    },
    getPassword: function (value) {
      this.password = value
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/styles/form.scss';
</style>
