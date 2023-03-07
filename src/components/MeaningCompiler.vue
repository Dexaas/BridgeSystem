<template>
    <ButtonCompiler @benz="getClick"/>
    <div class="tlab">{{ this.clickedName }}</div>
    <div class="tlab">{{ this.cmeaning }}</div>
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
        cmeaning: 'responses',
        clickedName: 'opening',
        openings: openings.openings
      }
    },
    updated() {
    const response = this.openings.find(opening => opening.name === this.clickedName).responses.find(response => response.name === "2♣");
    console.log(response.meaning);
    this.cmeaning=response.name + "  " + response.meaning
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
  