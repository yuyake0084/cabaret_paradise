<template>
  <div class="inner">
    <vue-profile></vue-profile>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VueProfile from '../components/Profile';

  export default {
    created() {
      this.$store.dispatch('resetFaceData');
      this.$store.dispatch('fetchAbout', this.$route.params.id);
    },

    components: { VueProfile }
  }
</script>

<style>
  .ttl {
    font-size: 20px;
  }
</style>
