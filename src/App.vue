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
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.top-bar-nav{display:inline-block}
.top-bar-link span,
.top-bar-cart-link span{display:inline-block;border-right:1px solid var(--topNavColor);padding:15px 19px;color:var(--topNavColor);font-size:16px;text-decoration:none}
.top-bar-link{display:inline-block;text-decoration:none}
.top-bar-link i{margin-left:10px;color:var(--topNavColor);font-size:40px;text-decoration:none;vertical-align:-8px}
.top-bar-link:first-of-type span{padding-left:10px}
.top-bar-link:hover{background:var(--topBarLinkHoverBackground)}
.top-bar-cart-link{text-decoration:none;cursor:default}
.top-bar-cart-link span{border:0px;font-size:16px}
.top-bar-cart-link:hover span{text-decoration:underline}
.top-bar-cart-link i,
.top-bar-cart-link:hover i{margin-right:-7px;color:var(--topNavColor);font-size:31px;text-decoration:none;vertical-align:-4px}
.splash-container{width:100%;height:500px;background-color:var(--spashBackground);background-image:url("../../public/splash.jpg");background-position:center center;background-size:cover}
.splash{display:flex;justify-content:center;height:100%;background-image:url("../../public/grain.png");background-position:top center}
.splash h1{align-self:center;color:var(--splashTextColor);font-family:Modak, tahoma, sans-serif;font-size:10vw;text-align:center;text-shadow:2px 2px 10px var(--splashTextShadow);opacity:0.9}@media (max-width: 920px){
.recommended{flex-direction:column;align-items:center}
.card{width:50%;min-width:300px}}@media (max-width: 840px){.splash h1{font-size:16vw}}@media (max-width: 500px){.top-bar{flex-direction:column}.top-bar-link{width:100%;border:0px;text-align:center}.top-bar-link span{border:0px}
.top-bar-cart-link{text-align:center}}</style>