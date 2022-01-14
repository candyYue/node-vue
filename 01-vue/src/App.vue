<template>
  <header-bar :minLayout='minLayout'></header-bar>
  <sider-bar v-if="!minLayout"></sider-bar>

  <div :class="['view-content',minLayout?'min-view-content':'']">
    <router-view></router-view>
  </div>

  <footer-bar></footer-bar>
</template>

<script>
import siderBar from './components/siderBar'
import headerBar from './components/headerBar'
import footerBar from './components/footerBar'
import bannerPage from './components/bannerPage'
export default {
  name: 'App',
  components: {
    siderBar,
    headerBar,
    footerBar
  },
  data(){
    return{
      minLayout:true
    }
  },
  methods:{
    pageResize(){
      const clientWidth = document.body.clientWidth
      if (clientWidth > 680) {
        this.minLayout= true
      }else{
        this.minLayout= true
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.pageResize)
  },
  unmounted(){
    // window.onresize = null;
    window.removeEventListener('resize', this.pageResize)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
