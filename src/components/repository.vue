<template>
   <div class="col-sm-12 col-lg-12 col-md-12 d-flex">
       <div class="col-sm-2 col-lg-2 col-md-2 mr-1">
         <img :src="item.owner.avatar_url" class="rounded" style="height: 150px">
       </div>
       <div class="desc d-flex justify-content-center col-sm-9 col-md-9 col-lg-9" style="flex-direction: column;">
         <h1>{{ item.name }}</h1>
         <p>{{item.description}}</p>
         <div style="display: flex;">
             <div class="mr-1">
               <p>Stars: <span>{{item.watchers_count}}</span></p>
             </div>
             <div class="mr-1">
               <p>Issues: <span>{{item.open_issues}}</span></p>
             </div>
             <div class="mr-1">
               <p>Submitted <span>{{ time(item.created_at) }}</span> ago by <b>{{ item.owner.login }}</b></p>
             </div>
         </div>
       </div>
   </div>
</template>

<script type="text/javascript">
const moment = require('moment')
export default {
  props: ['item'],

  methods: {
    time: function (timer) {
      const a = moment([2021, 9, 13])
      const b = moment(timer)
      // return moment(timer).fromNow()
      return b.from(a)
    }
  }
}
</script>

<style></style>
