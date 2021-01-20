<template>
    <div class="header">
        <div class="header__logo">
            <a href="/"><img alt="logo" src="../assets/logo.png"></a> 
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
  .header {
      display: flex;
      justify-content: space-between;
      margin: 30px;
  }
  .header__info span {
      padding-right: 10px;
  }
  .header__logo img {
      width: 200px;
      height: auto;
  }
</style>
