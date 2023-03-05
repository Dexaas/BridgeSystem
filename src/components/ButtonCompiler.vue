<template>
  <div>
    <table>
      <tbody>
        <tr v-for="row in 7" :key="row">
          <td v-for="(col, index) in colors" :key="index">
            <button class="button1">{{ row }} {{ col }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bridgeOpenings from './bridgeOpenings.json';

export default {
  data() {
    return {
      colors: ["♣", "♦", "♥", "♠", "NT"],
      bridgeOpenings: bridgeOpenings.bridgeOpenings
    };
  },
  methods: {
  }
};
</script>

<style>
  .button1{
    background-color: hsla(160, 100%, 37%, 0.2);
    color: aliceblue;
    height: 30px;
    width: 100px;
    cursor: pointer;
    text-align: center; 
    border: none;
    border-radius: 6px;
}
  .button1:hover{
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    transition: 0.7s;
    border-radius: 12px;
  }
</style>
