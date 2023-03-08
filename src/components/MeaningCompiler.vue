<template>
    <ButtonCompiler @benz="getClick"/>
    <table class="meaningLabel" >
      <tbody>
        <tr v-if="this.clickedName != ''">
          Odpowiedzi do {{ this.clickedName }}
        </tr>
        <tr v-for="(answer, index) in answers" :key="index">
          <div :class="newlineCSS">{{answer.name + ' - ' + answer.meaning}}</div>
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
        openings: openings.openings,
        newlineCSS: "newlineStringStyle",
      }
    },
    updated() {
    this.answers= this.openings.find(opening => opening.name === this.clickedName).responses
    console.log(this.answers)
    },
    methods: {
      replaceWithBr() {
  return this.answers.replace(/\n/g, "<br />")
},
    getClick(value) {
      this.clickedName = value
   }
  }
  }
  </script>
  <style>
  .newlineStringStyle {
       white-space: pre-wrap;
     }
.meaningLabel {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  border-style: solid;
  border: 5px;
  border-color: hsl(0, 100%, 50%);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 28%;
}
@media (max-width: 480px){
  .meaningLabel {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  border-style: solid;
  border: 2px;
  border-color: hsl(0, 93%, 39%);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 130%;
}
}
  </style>
  