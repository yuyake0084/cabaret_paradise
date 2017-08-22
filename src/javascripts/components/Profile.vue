<template>
  <div id="content" class="detail">
    <div id="primary" class="primary-content clearfix">
      <div class="img-wrapper">
        <figure class="img-area">
          <img :src="data.data.src" class="img-area__img">

          <vue-facedata v-if="faceData.faceRectangle !== null"></vue-facedata>

        </figure>
      </div>
      <div class="right-content">
        <div class="woman-information">
          <p class="info-title">名前</p>
          <div class="info-text">{{ data.data.name }}</div>
        </div>
        <div class="woman-information">
          <p class="info-title">生年月日</p>
          <div class="info-text">{{ data.data.dob }}</div>
        </div>
        <div class="woman-information">
          <p class="info-title">出身地</p>
          <div class="info-text">{{ data.data.graduate }}</div>
        </div>
        <div class="woman-information">
          <p class="info-title">血液型</p>
          <div class="info-text">{{ data.data.bloodType }}</div>
        </div>
        <div class="woman-information">
          <p class="info-title">身長</p>
          <div class="info-text">{{ data.data.height }}</div>
        </div>
        <div class="woman-information">
          <p class="info-title">バスト</p>
          <div class="info-text">{{ data.data.bust }}</div>
        </div>

        <form>
          <input
            type="submit"
            value="写真の年齢は？"
            class="btn2"
            v-on:click.prevent="getAge(data.data.src)"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VueFacedata from './FaceData';

  export default {
    computed: mapGetters({
      data: 'setData', // modules内のgetters呼び出し
      faceData: 'setFaceData'
    }),

    methods: {
      getAge(imgPath) {
        this.$store.dispatch('getAge', imgPath);
      }
    },

    components: { VueFacedata }
  }
</script>

<style lang="scss">
  #content.detail,
  #primary {
    position: static;
    height: auto;
  }

  .primary-content {
    width: auto;
    border-left: none;
    margin: 0 0 50px 0;
    height: auto;
  }

  .img {
    &-wrapper {
      float: left;
      margin: 0 75px 0 0;
    }

    &-area {
      float: left;
      position: relative;
      margin-top: 50px;

      &__img {
        width: 450px;
      }
    }
  }

  .right-content {
    float: right;
    margin-top: 50px;
    width: 455px;
  }

  .woman-information {
    width: 410px;
  }

  .info {
    &-title {
      border-bottom: 1px solid #000;
      margin: 0 0 15px 0;
      padding-bottom: 5px;
      position: relative;
      font-size: 12px;
    }

    &-text {
      margin: 0 0 30px 0;
    }
  }

  .btn2 {
    display: block;
    text-decoration: none;
    height: 35px;
    width: 240px;
    vertical-align: middle;
    text-align: center;
    color: #cbbe9c;
    background-color:#000;
    font-size: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    cursor: pointer;
  }

</style>
