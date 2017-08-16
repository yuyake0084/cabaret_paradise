<template>
  <div>
    <h2 class="ttl">Index</h2>
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
    background-image: linear-gradient(-90deg, #102784, #841023);
  }

  .ttl {
    font-size: 20px;
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