<template>
  <div>
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
export default {
  components:{
    appHeader
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
