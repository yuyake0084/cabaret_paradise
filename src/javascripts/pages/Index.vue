<template>
  <div class="inner">
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
  .ttl {
    font-size: 20px;
  }
</style>