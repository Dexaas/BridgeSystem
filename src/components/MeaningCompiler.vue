<template>
    <ButtonCompiler @benz="getClick"/>
    <table class="meaningLabel" >
      <tbody>
        <tr v-if="this.clickedName != ''">
          Odpowiedzi do {{ this.clickedName }}
        </tr>
        <tr v-for="(answer, index) in answers" :key="index">
          <div>{{answer.name + ' - ' + answer.meaning}}</div>
        </tr>
      </tbody>
    </table>
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
        answers: [],
        clickedName: '',
        openings: openings.openings
      }
    },
    updated() {
    this.answers= this.openings.find(opening => opening.name === this.clickedName).responses
    console.log(this.answers)
    },
    methods: {
    getClick(value) {
      this.clickedName = value
   }
  }
  }
  </script>
  <style>
.meaningLabel {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  border: 5px;
  border-color: hsla(0, 0%, 0%, 0.2);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 40%;
}
  </style>
  