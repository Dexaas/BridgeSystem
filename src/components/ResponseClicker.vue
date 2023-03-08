<template>
  <MeaningCompiler @responseClicked="getClick"/>
  <table class="meaningLabel" >
    <tbody>
      <div>{{ this.answers }}</div>
    </tbody>
  </table>
</template>

<script>
import openings from '../../openings.json'
import MeaningCompiler from './MeaningCompiler.vue'

export default {
  components: {
    MeaningCompiler
  },
  data() {
    return {
      answers: [], 
      openings: openings.openings,
      clickedResponse: '',
    }
  },
  methods: {
    getClick(value) {
      this.clickedResponse=value
      console.log(this.clickedResponse)
      this.answers = this.openings.find(opening => opening.name.responses === this.clickedResponse).responses
      console.log(this.answers)
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
