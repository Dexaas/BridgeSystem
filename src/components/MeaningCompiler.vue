<template>
    <ButtonCompiler @benz="getClick"/>
    <div class="tlab">{{ this.clickedName }}</div>
  </template>
  
  <script>
  import openings from '../../openings.json'
  import ButtonCompiler from './ButtonCompiler.vue'
  export default {
    components: {
      ButtonCompiler
    },
    data() {
      return {
        respond: 'a',
        cmeaning: 'a ',
        openings: openings.openings,
        clickedName: 'clickedName'
      }
    },
    methods: {
    getClick(value) {
      this.clickedName = value
      console.log(this.clickedName)
   }
  }
  }
  </script>
  <style>

  </style>
  