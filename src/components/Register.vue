<template>
    <div class="container">
        <div class="form">
            <div class="form__fields">
                <div class="heading"><span>New Password</span></div>
                <div>
                    <Input label="New password" type="password" name="newPassword" placeholder="Enter new password" v-on:change="getPassword($event)"/>
                    <Input label="Confirm password" type="password" name="confirmNewPassword" placeholder="Confirm your new password" v-on:change="getConfirmPassword($event)"/>
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
  data: () => ({ confirmPassword: '', password: '', result: '' }),
  methods: {
    register () {
      const url = 'https://reqres.in/api/register'
      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          password: this.password
        })
      }

      fetch(url, options)
        .then(response => {
          if (response.status === 200) {
            this.result = true
          } else {
            this.result = false
          }
        })
    },
    getPassword: function (value) {
      this.password = value
    },
    getConfirmPassword: function (value) {
      this.confirmPassword = value
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/styles/form.scss';
</style>
