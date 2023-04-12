<template>
  <div>
    <table class="btntbl">
      <tbody> 
        <tr v-for="(group, index) in openingGroups" :key="index">
          <td v-for="(opening, openingIndex) in group.openings" :key="openingIndex">
            <button class="button1" @click="  setName(opening.name, opening.meaning)" @mouseover="hoverName(opening.name, opening.meaning)">{{ opening.name }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="meaningHover" class="tlab">{{ currentHoverMeaning }}</div>
  <div v-if="meaningClick" class="tlab">{{ currentClickedMeaning }}</div>
</template>

<script>
import openings from '../../openings.json'

export default {
    data() {
        return {
            meaningHover: true,
            meaningClick: false,
            clicked: "",
            currentClickedMeaning: 'ClickedMeaning',
            currentHoverMeaning: "Tutaj pokaże się znaczenie otwarcia!",
            openings: openings.openings
        };
    },
    emits: {
        benz: null
    },
    computed: {
        openingGroups() {
            // Group the openings based on the first character in their name
            const groups = [];
            for (let i = 1; i <= 7; i++) {
                groups.push({
                    label: `${i}`,
                    openings: this.openings.filter((opening) => opening.name.startsWith(`${i}`))
                });
            }
            return groups;
        }
    },
    methods: {
        hoverName(name, meaning){
          this.clicked = name
          this.currentHoverMeaning=name + ' - ' + meaning
            
        },
        setName(name, meaning) {
            this.meaningHover=false
            this.meaningClick=true
            this.currentClickedMeaning=name + ' - ' + meaning
            this.$emit("benz", this.clicked);
        },
    },
}
</script>

<style>
.btntbl{
  margin-top: 10px;
  margin-left: 10px;
}
.button1 {
  font-size: 15px;
  background-color: hsla(160, 100%, 37%, 0.2);
  color: aliceblue;
  height: 35px;
  width: 100px;
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 6px;
  margin-block: 2px;
  margin-inline: 2px;
}
.button1:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: black;
  transition: 0.7s;
  border-radius: 12px;
}
.tlab {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  border: 5px;
  border-color: hsla(0, 0%, 0%, 0.2);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 28%;
}
@media (max-width: 480px){
  .tlab {
  color: aliceblue;
  background-color: hsla(160, 100%, 37%, 0.2);
  border: 5px;
  border-color: hsla(0, 0%, 0%, 0.2);
  margin-top: 10px;
  margin-left: 15px;
  height: auto;
  width: 130%;
}}
</style>
