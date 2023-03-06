<template>
  <div>
    <table class="btntbl">
      <tbody> 
        <tr v-for="(group, index) in openingGroups" :key="index">
          <td v-for="(opening, openingIndex) in group.openings" :key="openingIndex">
            <button class="button1" @click="  setName(opening.name)" @mouseover="cmeaning=opening.name + ' - ' + opening.meaning">{{ opening.name }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tlab">{{ cmeaning }}</div>
</template>

<script>
import openings from '../../openings.json'

export default {
    data() {
        return {
            clicked: " ",
            respond: " ",
            cmeaning: "meaning",
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
        setName(name) {
            this.clicked = name;
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
  color: white;
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
  width: 532px;
}
</style>
