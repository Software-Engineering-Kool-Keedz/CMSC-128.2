<template>
  <p>{{ item }}</p>
</template>

<script>
// will place router-view here
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      item: null
    }
  },
  mounted (){
    axios
    .get('http://localhost:3000/')
    .then(res => {
      this.item = res.data;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
