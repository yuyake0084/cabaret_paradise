<template>
  <div class="faceData__container">
    <div
      class="faceData__frame"
      :style="{
        top: `${faceData.faceRectangle.top * .56}px`,
        left: `${faceData.faceRectangle.left * .56}px`,
        width: `${faceData.faceRectangle.width * .56}px`,
        height: `${faceData.faceRectangle.width * .56}px`
      }"
    >
      <div class="faceData__detail__container">
        <ul class="faceData__list">
          <li>
            <h4 class="faceData__list__ttl">年齢</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.age }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">性別</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.gender }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">笑顔</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.smile }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">怒り</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.anger }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">軽蔑</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.contempt }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">嫌悪感</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.disgust }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">恐怖</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.fear }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">喜び</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.happiness }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">悲しみ</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.sadness }}</p>
          </li>
          <li>
            <h4 class="faceData__list__ttl">驚き</h4>
            <p class="faceData__list__value">{{ faceData.faceAttributes.emotion.surprise }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters({
      faceData: 'setFaceData'
    })
  }
</script>

<style lang="scss">
  .faceData {
    &__container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &__frame {
      position: absolute;
      box-sizing: border-box;
      border: 4px solid #ff66e7;
    }

    &__detail {
      &__container {
        position: absolute;
        top: 30px;
        left: -180px;
        max-width: 300px;
        width: 100%;
        padding: 12px;
        background-color: #fff;
        border: 2px solid #ff66e7;
        border-radius: 4px;

        &::before {
          position: absolute;
          top: 15px;
          right: -10px;
          content: '';
          border: 10px solid transparent;
          border-right: 10px solid #ff66e7;
          border-top: 10px solid #ff66e7;
          transform: rotate(45deg);
        }

        &::after {
          position: absolute;
          top: 10px;
          right: -26px;
          content: '';
          border: 15px solid transparent;
          border-left: 15px solid #fff;
        }
      }
    }

    &__list {
      & > li {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>