<template>
  <!-- BANNER -->
  <div class="about">
   <div class="about_banner col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between">
     <div class="col-lg-7 col-md-7 col-sm-7 about_us">
       <p>About Us</p>
     </div>

     <div class="col-lg-4 col-sm-4 col-md-4 what-we-do d-flex">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
     </div>
     <div class="about_desc">
       <p>
         <b>Built for Saas <br>and e-Commerce</b>
       </p>
     </div>
   </div>

   <!-- END OF BANNER -->

   <!-- ABOUT METRIK -->
   <div class="col-lg-12 col-md-12 col-sm-12 mt-3 about_metrik">
     <p>
       Metrik was developed because just like you, we needed a product that could give us <b>good value.</b>
     </p>
   </div>

   <!-- WHY CHOOSE US -->
   <div class="col-lg-12 col-md-12 col-sm-12 mt-3 about_why-us d-flex">
     <div class="row" style="width: 100%">
       <div class="col-md-6 col-sm-12 col-lg-6 q_01">
        <div class="d-flex align-items-center">
          <p class="n_01">01</p>
          <p>WHY US?</p>
        </div>
        <p>We pride ourselves in our ability to innovate and create a world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
       </div>

       <div class="col-md-6 col-sm-12 col-lg-6" style="background: rgba(18, 17, 17, 0.63)">
          <div style="width: 80%; margin: 1rem auto;">
              <div class="d-flex align-items-center">
                <p class="n_01">01</p>
                <p>  GROWING WITH YOU</p>
              </div>
              <p>Leveraging the world best, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
              <p>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
          </div>
       </div>
     </div>
   </div>
   <!-- END WHY CHOOSE US -->
   <!-- END ABOUT METRIK -->

   <!-- GOT A QUESTION -->
   <div class="about_question mt-5">
     <div class="question">
       <h1>Got a Question ?</h1>
       See how Metricks can help your business grow with the best affiliate marketing <br> software
     </div>
   </div>
   <!-- END GOT A QUESTION -->

   <footer>
    <footerSection class="home_footer"/>
  </footer>
  </div>

  <!-- END ABOUT -->
</template>

<script type="text/javascript">
import footerSection from '@/components/footer'
export default {
  components: {
    footerSection
  }
}
</script>

<style></style>
