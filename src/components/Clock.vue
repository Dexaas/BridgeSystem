<script>
export default {
  data() {
    return {
      time: '00:00:00',
      pumps: 0,
      hours: 0,
      minutes: 0
    }
  },
  mounted() {
    this.setTime()
    this.setPumps()
    setInterval(() => this.setTime(), 100)
    setInterval(() => this.setPumps(), 100)
  },
  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      this.hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      this.minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.time = this.hours + ":" + this.minutes + ":" + seconds
      },  
    setPumps() {
      if(this.hours>=17){
        let MinfromHours = (this.hours - 17)*60
        this.pumps=MinfromHours + this.minutes + 1
    }
  }
  }
}
</script>

<template>
  <div>
    <div class="pumps"><a>Zegar liczy brzuszki dla spóźnialskich od 17:00</a></div>
    <div class="clock"><a>{{ this.time }}</a></div>
    <div class="pumps"><a>Brzuszki do zrobienia: <span class="bolded">{{ this.pumps }}</span></a></div>
  </div>
</template>

<style scoped>
.bolded{
  font-weight: bold;
}
.clock{
  text-align: center;
}
.clock a {
  color: hsla(160, 100%, 37%, 1);
  font-size: 2250%;
  text-align: center;
  background-color: hsla(160, 100%, 37%, 0.2);
  border: solid;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  border-color: white;
  margin-top: 0px;
}
.pumps{
  text-align: center;
}
.pumps a{
  color: hsla(160, 100%, 37%, 1);
  font-size: 90px;
  text-align: center;
  vertical-align: super;
}
</style>