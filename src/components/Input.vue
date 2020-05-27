<template>
<div class="input">
    <label class="input__label" :for="name">{{ label }}</label>
    <input class="input__field" :type="type" :name="name" :placeholder="placeholder" v-model="value" v-on:change="emitValue">
</div>

</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String
    },
    name: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    emitValue: function (evt) {
      this.$emit('change', evt.target.value)
    }
  }
}
</script>

<style>
.input {
    padding: 10px;
}
.input__label {
    text-align: left;
    display: block;
    font-weight: 600;
}
.input__field {
  padding: 12px 20px 12px 0 ;
  display: block;
  border: none;
  border-bottom: 2px solid #ccc;
}

</style>
