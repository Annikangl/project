<template>
    <mainTable
      :table_data="items"
    ></mainTable>
</template>

<script>


import axios from 'axios';
import mainTable from './components/main-table'



export default {
  name: 'App',
  components: {
    mainTable
  },
  data() {
    return {
      items: null,
    }
  },

  methods: {},

  mounted() {
    axios
      .get('http://localhost:3000/items')
      .then(response => (this.items = response.data))
      .catch(error => console.log(error));
    },

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
