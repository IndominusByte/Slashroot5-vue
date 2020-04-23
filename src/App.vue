<template>
  <div id="app">
    <router-view></router-view>
    <app-footer v-if="currentRouter !== '/login'"></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default{
  name:'App',
  computed:{
    currentRouter(){
      return this.$route.path
    }
  },
  components:{
    appFooter:Footer
  }
}
</script>
