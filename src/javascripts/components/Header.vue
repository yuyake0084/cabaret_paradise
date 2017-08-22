<template>
  <header>
    <div class="inner">
      <router-link to="/" class="lyt-header__logo__link">
        <h1 class="lyt-header__logo"></h1>
      </router-link>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  header {
    box-sizing: border-box;
    padding: 4px 10px;
    background-color: #000;
    color: #FFD700;
  }

  .lyt-header {
    &__logo {
      position: relative;
      height: 50px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: url(/img/01.png) no-repeat 7px center;
        background-size: cover;
        width: 50px;
        height: 35px;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 65px;
        background: url(/img/02.png) no-repeat;
        background-size: cover;
        width: 47px;
        height: 50px;
      }

      &__link {
        display: block;
        width: 120px;
      }
    }
  }
</style>