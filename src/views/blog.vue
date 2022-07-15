<template>
  <div class="blog">
    <div class="blog_banner">
      <div class="desc">
        <h2>Articles and News</h2>
      </div>
   </div>

   <!-- LATEST NEWS -->
   <div class="blog_info mt-5 col-lg-12 mb-3">
     <h1>Latest From The Blog</h1>
     <div class="col-lg-12" style="padding-left: 0">
       <div class="row">
         <div class="col-lg-6 col-sm-12">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         </div>
         <div class="col-lg-6 col-sm-12 search">
           <div class="searchbox">
            <i class="fa fa-search mr-2"></i>
            <input type="search" name="">
           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="col-lg-12">
     <div class="d-flex row pr-4">
       <newsCard v-for="num in 6" :key="num" class="mb-3"/>
     </div>
   </div>

   <!-- RESENT NEWS -->
   <div class="blog_info mt-5 col-lg-12 mb-3">
     <h1>Latest From The Blog</h1>
     <div class="col-lg-12" style="padding-left: 0">
       <div class="row">
         <div class="col-lg-6 col-sm-12">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         </div>
       </div>
     </div>
   </div>
  </div>

  <div class="col-lg-12">
     <div class="d-flex row pr-4">
       <resentCards v-for="num in 6" :key="num" class="mb-3"/>
     </div>
   </div>

   <div class="blog_readmore">
     <button>Read More</button>
   </div>

   <footer>
    <footerSection class="home_footer"/>
  </footer>

</template>

<script type="text/javascript">
import newsCard from '@/components/newsCard.vue'
import resentCards from '@/components/resentCards.vue'
import footerSection from '@/components/footer.vue'
export default {
  components: {
    newsCard,
    resentCards,
    footerSection
  }
}
</script>

<style></style>
