<template>
  <div id="app">
    <div class="main">
      <site-menu></site-menu>
      <div class="site-container">
        <router-view/>
      </div>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
import siteMenu from 'src/components/menu';

export default {
  name: 'app',
  components: {
    siteMenu
  }
};
</script>

<style lang="scss">
.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.cover{
  background-image: url(./assets/images/cover.jpg);
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.site-container{
  background: #fff;
  float: right;
  width: calc(100% - 250px);
  -webkit-transition: -webkit-transform .25s ease-in-out;
  min-height:100%;
}
</style>
