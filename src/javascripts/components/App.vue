<template>
  <div id="app" class="wrapper">
    <app-header></app-header>

    <!-- routerで定義しているパスに対してのコンポーネントをここに渡している -->
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './Header';

  export default {
    components: { AppHeader }
  }
</script>