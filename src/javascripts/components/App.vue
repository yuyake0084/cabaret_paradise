<template>
  <div id="app" class="wrapper">
    <app-header></app-header>

    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './Header';

  export default {
    components: { AppHeader }
  }
</script>