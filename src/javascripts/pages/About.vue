<template>
  <vue-profile></vue-profile>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VueProfile from '../components/Profile';
  export default {
    created() {
      this.$store.dispatch('fetchAbout', this.$route.params.id);
    },

    components: { VueProfile }
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
