<template>
    <div class="header">
        <div class="header__logo">
            <a href="/"><img alt="logo" src="../assets/logo.svg"></a> 
        </div>
        <div class="header__info">
            <span>About Frankie </span>
            <i class="fas fa-user-circle"></i>
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
