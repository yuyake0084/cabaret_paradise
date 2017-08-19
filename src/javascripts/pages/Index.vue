<template>
  <div>
    <h2 class="ttl"></h2>
    <vue-list></vue-list>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VueList from '../components/List';

  export default {
    created() {
      this.$store.dispatch('fetchListAll');
      /**
       * 取得してきたデータをcommit
       **/
      // this.$store.commit('SET_LIST', data);
    },

    components: { VueList }
  }
</script>

<style>
  body {
/*background-image: linear-gradient(-90deg, #102784, #841023);*/
    background-image: linear-gradient(-90deg, #C59716, #FF0FEF);
  }

  .lyt-header {
    position: relative;
  }

  .lyt-header:before {
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

  .lyt-header:after {
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

  .ttl {
    font-size: 20px;
  }

  li:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  img {
    vertical-align: bottom;
  }

  h3 {
    padding: 1.4vw 1vw 1vw;
    text-align: center;
    font-size: 18px;
    background-color: #000;
    color: #BF00FF;
  }

</style>