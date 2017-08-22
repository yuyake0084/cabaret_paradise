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

<style>
  body {
     font-family: "ヒラギノ丸ゴ Pro W4",
                 "ヒラギノ丸ゴ Pro",
                 "Hiragino Maru Gothic Pro",
                 "ヒラギノ角ゴ Pro W3",
                 "Hiragino Kaku Gothic Pro",
                 "HG丸ｺﾞｼｯｸM-PRO",
                 "HGMaruGothicMPRO";
    background-image: linear-gradient(-90deg, #C59716, #FF0FEF);
  }

  img {
    width: 100%;
    vertical-align: bottom;
  }

  input,
  button,
  textarea,
  select {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: '';
  }

  .wrapper {
    padding: 0;
  }

  .inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>