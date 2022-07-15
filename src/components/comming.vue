<template>
   <div class="home_comming mt-2 mb-2">
     <h1 class="text-center">Something Awesome is coming soon</h1>
     <p class="text-center font-weight-light">Your all in one affiliate marketing tracking software <b>track</b>, <b>automate</b> and <b>optimize</b> your campaigns</p>

     <div class="timer d-flex justify-content-center mb-5">
       <div class="day">
        <h2>{{ day }}</h2>
        <span>Days</span>
       </div>
       <div class="hour">
        <h2>{{ hour }}</h2>
        <span>Hours</span>
       </div>
       <div class="min">
        <h2>{{ minutes }}</h2>
        <span>minutes</span>
       </div>
       <div class="sec">
        <h2>{{ second }}</h2>
        <span>second</span>
       </div>
     </div>

     <div class="d-flex justify-content-center form">
      <input type="text" placeholder="First Name" name="">
      <input type="text" placeholder="Last Name" name="">
     </div>

     <div class="d-flex justify-content-center contact-form">
       <input type="email" placeholder="Enter your email address" name="">
       <button><p>JOIN OUR WAITING LIST</p></button>
     </div>
    </div>
</template>

<script type="text/javascript">
export default {
  data: function () {
    return {
      day: 7,
      hour: 23,
      minutes: 54,
      second: 11,
      interval: null
    }
  },
  methods: {
    timer () {
      console.log('Hello')
    }
  },
  mounted: function () {
    this.timer()
    this.interval = setInterval(() => {
      this.second--
      if (this.second === 0) {
        this.minutes--
        this.second = 59
      }
      if (this.minutes === 0) {
        this.hour--
        this.minutes = 59
      }
      if (this.hour === 0) {
        this.day--
        this.hour = 23
      }
    }, 1000)
  }
}
</script>

<style></style>
