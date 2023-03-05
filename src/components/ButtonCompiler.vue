<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td v-for="(opening, openingIndex) in openings" :key="openingIndex">
            <button class="button1">{{ opening.name }}</button>
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
      colors: ['♣', '♦', '♥', '♠', 'NT'],
      openings: openings.openings
    }
  },
  methods: {}
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
</style>
