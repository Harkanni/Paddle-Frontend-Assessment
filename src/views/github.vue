<template>
   <div class="blog_banner">
      <div class="desc">
        <h2>Github Repositories</h2>
      </div>
   </div>

   <!-- REPOSITORIES -->
   <section class="mt-5 repo mb-2">
     <repositoryCard
        v-for="(items, i) in repo"
        :key="i"
        :item="items"
        class="mb-2"
      />

      <pageNav :getRepo="page"/>
   </section>
</template>

<script type="text/javascript">
import repositoryCard from '@/components/repository.vue'
import pageNav from '@/components/pageNav.vue'
export default {
  components: {
    repositoryCard,
    pageNav
  },
  data: function () {
    return {
      repo: [],
      prev: 1,
      next: 2
    }
  },
  methods: {
    page: function (pageId) {
      fetch('https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=' + pageId)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.repo = []
          this.repo = data.items
        })
    }
  },
  computed: {

  },
  async mounted () {
    var data = await fetch('https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=' + this.prev)
    var result = await data.json()
    this.repo = result.items
    console.log(this.repo)
  }
}
</script>

<style></style>
