<template>
  <MeaningCompiler @responseClicked="getClick" @answer="getName"/>
  <table class="meaningLabel" >
    <tbody v-if="this.responds != ''">
      <div>{{ this.responds }}</div>
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
      responds: '', 
      openings: openings.openings,
      clickedResponse: '',
    }
  },
  updated(){
     this.responds = 'Work in progress'//this.responds.find(responses => responses.name === this.clickedResponse).responses
  },
  methods: {
    getClick(value) {
      this.clickedResponse=value
      console.log(this.clickedResponse)
 },
    getName(value){
      this.responds = value  
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
