<template>
  <div id="content" class="detail">
    <div id="primary" class="primary-content">
      <div class="img-wrapper">
        <figure class="img-aria">
          <img src="data.data.src">
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
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: mapGetters({
      data: 'setData' // modules内のgetters呼び出し
    })
  }
</script>

<style>
.clearfix:after {
  display: block;
  clear: both;
  content: '';
}

.wrapper {
  padding: 0;
}

.header {
  z-index: 9999;
  padding: 0 0 41px 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  width: auto;
}

.header h1 {
  font-weight: bold;
  font-family: arial;
}

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

.img-aria {
  width: 455px;
  margin: 0 75px 0 0;
  float: left;
  position: relative;
}
.img-aria img {
  width: 455px;
  margin-top: 50px;
}

.img-wrapper {
  width: 940px;
  margin: 0 auto;
}

.right-content {
  float: left;
  margin-top: 50px;
  width: 455px;
}

.woman-information {
  width: 410px;
}

.info-title {
  border-bottom: 1px solid #000;
  margin: 0 0 15px 0;
  padding-bottom: 5px;
  position: relative;
  font-size: 12px;
}

.info-text {
  margin: 0 0 30px 0;
}

</style>