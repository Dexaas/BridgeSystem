<template>
    <ButtonCompiler @benz="getClick"/>
    <table class="meaningLabel" >
      <tbody>
        <tr v-if="this.clickedName != ''">
          Odpowiedzi do {{ this.clickedName }}
        </tr>
        <tr v-for="(answer, index) in answers" :key="index">
          <div @click="responsec(answer.name)" :class="meaningButton" >{{answer.name + ' - ' + answer.meaning}}</div>
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
        meaningButton: "meaningButtons",
      }
    },
    updated() {
    this.answers = this.openings.find(opening => opening.name === this.clickedName).responses
    console.log(this.answers)
    },
    methods: {
      responsec(name){
        console.log(name + ' has been clicked')
      },
    getClick(value) {
      this.clickedName = value
   }
  },
  
  }
  </script>
  <style>
.meaningButtons {
  white-space: pre-wrap;
  color: aliceblue;
  cursor: pointer;
  border: none;
  margin-block: 2px;
  margin-inline: 2px;
}
.meaningButtons:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  transition: 0.7s;
  border-radius: 2px;
}
.hearts {
  color: red;
 }
.meaningLabel {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 28%;
}
@media (max-width: 480px){
  .meaningLabel {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 130%;
}}

  </style>
  