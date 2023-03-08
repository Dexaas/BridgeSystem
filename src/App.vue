<template>
  <div v-highlight="['♥']">
    <MeaningCompiler />
  </div>
  <div v-highlight="[1, 3, 5]">
    This is an example text.
  </div>
</template>

<script>
import ButtonCompiler from './components/ButtonCompiler.vue'
import MeaningCompiler from './components/MeaningCompiler.vue';
const highlight ={
  bind(el, binding) {
    const text = el.textContent
    const charactersToHighlight = binding.value // The specific characters to highlight, passed as the directive's value

    let html = ''

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)

      if (charactersToHighlight.includes(i)) {
        html += `<span class="highlight">${char}</span>`
      } else {
        html += char
      }
    }

    el.innerHTML = html
  }
}
export default {
  directives: {
    highlight
  },
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
.highlight{
  color: red;
}
</style>