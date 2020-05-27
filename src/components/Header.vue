<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.svg"> 
        </div>
        <div class="info">
            <span>About Frankie </span>
            <i class="fas fa-user-circle"></i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style>
  .header {
      display: flex;
      justify-content: space-between;
      margin: 30px;
  }
  .info span {
      padding-right: 10px;
  }
  .logo img {
      width: 200px;
      height: auto;
  }
</style>