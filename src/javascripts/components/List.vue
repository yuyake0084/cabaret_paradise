<template>
  <ul class="list">
    <li v-for="h in hostesses">
      <router-link :to="h.id">
        <figure>
          <img :src="h.src" />
        </figure>
        <h3>{{ h.name }}</h3>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters({
      hostesses: 'setList' // modules内のgetters呼び出し
    })
  }
</script>

<style>
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .list > li {
    width: 33.3%;
    padding: 1vw 1.3vw;
    box-sizing: border-box;
  }

  .list img {
    width: 100%;
  }
</style>