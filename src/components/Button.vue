<template>
    <div>
        <button type="button" class="button" v-on:click="submit"> {{ name }} <span class="button__icon"><i class="fas fa-arrow-right"></i></span></button>
    </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
        name: {
            type: String,
        }
    },  
    methods: {
        submit: function(){
          this.$emit("clicked", true);
        }
      }
  }
</script>

<style>
  .button {
    background-color: #dadcde;
    border: none;
    color: white;
    padding:  8px 80px 8px 10px;
    text-align: left;
    text-decoration: none;
    display: block;
    font-size: 16px;
    border-radius: 5px;
    position:relative;
    margin:20px;
  }

  .button__icon {
      right: 10px;
      position: absolute;
      top: 8px;
  }
</style>