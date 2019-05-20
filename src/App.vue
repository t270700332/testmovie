<template>
  <div id="app">
   <app-header></app-header>
   <app-footer></app-footer>
   <router-view> </router-view>
  </div>
</template>

<script>
import Header from "./components/MovieIndexHeader";
import Footer from "./components/CommonFooter";


export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    "app-header":Header,
    "app-footer":Footer,
  }
}
</script>

<style>

</style>
