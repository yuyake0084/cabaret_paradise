<template>
  <ul class="list">
    <li v-for="h in hostesses">
      <router-link :to="h.id" class="list__link">
        <figure>
          <img :src="h.src" />
        </figure>
        <h3 class="list__ttl">{{ h.name }}</h3>
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

<style lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 70px;

    @media screen and (max-width: 600px) {
      margin-top: 30px;
    }

    & > li {
      width: 30%;
      box-sizing: border-box;

      &:first-child {
        @media screen and (max-width: 600px) {
          margin-top: 0;
        }
      }

      &:nth-child(n+4) {
        margin-top: 50px;

        @media screen and (max-width: 600px) {
          margin-top: 20px;
        }
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
      }
    }

    &__link {
      display: block;
      transition: .3s;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .6);
      text-decoration: none;

      &:hover {
        transform: scale(1.05);
        transition: .3s;
      }
    }

    &__ttl {
      padding: 1.4vw 1vw 1vw;
      text-align: center;
      font-size: 18px;
      background-color: #000;
      color: #BF00FF;
    }
  }
</style>