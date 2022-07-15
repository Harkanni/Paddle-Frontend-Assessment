<template>
   <div class="d-flex justify-content-center">
    <div class="mr-3" @click="prevPage()">
      <button class="btn btn-outline-secondary" style="cursor: pointer;">
        <i class="fa fa-less-than"></i>
      </button>
    </div>
    <div class="mr-3">
      <button class="btn btn-outline-secondary" style="cursor: pointer;" @click="getRepo(prev)">
        {{ prev }}
      </button>
    </div>
    <div class="mr-3">
      <button class="btn btn-outline-secondary" style="cursor: pointer;" @click="getRepo(next)">
        {{ next }}
      </button>
    </div>
    <div class="mr-3" @click="nextPage()">
      <button class="btn btn-outline-secondary" style="cursor: pointer;">
        <i class="fa fa-greater-than"></i>
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['getRepo'],
  data: function () {
    return {
      prev: 1,
      next: 2
    }
  },
  methods: {
    prevPage: function () {
      this.getRepo(this.prev)
      return (this.prev <= 1 ? this.prev : this.prev--, this.next <= 2 ? this.next : this.next--)
    },
    nextPage: function () {
      this.getRepo(this.next)
      return (this.next++, this.prev++)
    }
  }
}
</script>

<style></style>
