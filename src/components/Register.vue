<template>
    <div class="container">
        <div class="form">
            <div class="form__fields">
                <div class="form__heading"><span>New Password</span></div>
                <div v-show="!result">
                    <Input label="Email" type="email" name="email" placeholder="Enter email" v-on:change="getEmail($event)"/>
                    <p class="form__error" v-if="emailError === true">Please provide correct email</p>
                    <Input label="New password" type="password" name="newPassword" placeholder="Enter new password" v-on:change="getPassword($event)"/>
                    <Input label="Confirm password" type="password" name="confirmNewPassword" placeholder="Confirm your new password" v-on:change="getConfirmPassword($event)"/>
                    <p class="form__error" v-if="emptyFields === true">Please fill all fields and match passwords</p>
                    <Button name="Save" v-on:clicked="register()"/>
                </div>
                <div v-show="result === true"><h2>Password reset success</h2></div>
            </div>
            <div class="form__image">
                <img src="../assets/register.png">
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Input from './Input.vue'
export default {
  name: 'Register',
  components: {
    Button, Input
  },
  data: () => ({ confirmPassword: '', password: '', result: '', email: '', emptyFields: '', emailError: '' }),
  methods: {
    async register () {
      const url = 'https://reqres.in/api/register'
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

      if (this.password !== '' && this.email !== '' && this.password === this.confirmPassword) {
          this.emptyFields = false
          const response = await fetch(url, options) 
            if (response.status === 200) {
                this.result = true
            } else {
                this.emailError = true
                this.result = false
            }
      } else {
        this.emptyFields = true
      }
    },
    getPassword: function (value) {
      this.password = value
    },
    getConfirmPassword: function (value) {
      this.confirmPassword = value
    },
    getEmail: function (value) {
      this.email = value
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/styles/form.scss';
</style>
