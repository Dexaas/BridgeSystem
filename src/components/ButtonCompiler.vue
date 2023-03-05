<template>
  <div class="tlab">{{ cmeaning }}</div>
  <div>
    <table>
      <tbody> 
        <tr v-for="(group, index) in openingGroups" :key="index">
          <td v-for="(opening, openingIndex) in group.openings" :key="openingIndex">
            <button class="button1" @mouseover="cmeaning=opening.name + ' - ' + opening.meaning">{{ opening.name }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import openings from '../../openings.json'

export default {
  data() {
    return {
      cmeaning: ' ',
      openings: openings.openings
    }
  },
  computed: {
    openingGroups() {
      // Group the openings based on the first character in their name
      const groups = []
      for (let i = 1; i <= 7; i++) {
        groups.push({
          label: `${i}`,
          openings: this.openings.filter(opening => opening.name.startsWith(`${i}`))
        })
      }
      return groups
    }
  }
}
</script>

<style>
.button1 {
  background-color: hsla(160, 100%, 37%, 0.2);
  color: aliceblue;
  height: 30px;
  width: 100px;
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 6px;
}
.button1:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  transition: 0.7s;
  border-radius: 12px;
}
.tlab {
  color: aliceblue;
}
</style>
