<template>
  <div>
    <MeaningCompiler />
  </div>
</template>

<script>
import ButtonCompiler from './components/ButtonCompiler.vue'
import MeaningCompiler from './components/MeaningCompiler.vue';

export default {
  components: {
    ButtonCompiler,
    MeaningCompiler
  },
  data() {
      return {
      }
    }
}
</script>
<style>
::-moz-selection { /* Code for Firefox */
  color: hsla(160, 100%, 37%, 1);
  background: hsl(160, 100%, 21%);
}

::selection {
  color: hsla(160, 100%, 37%, 1);
  background: hsl(160, 100%, 21%);
}

</style>