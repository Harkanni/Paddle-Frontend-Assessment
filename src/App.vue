<template>
   <header>
    <navBar />
  </header>

  <router-view />
</template>

<script type="text/javascript">
import navBar from '@/components/navBar'

export default {
  components: {
    navBar
  },
  methods: {
  }
}
</script>

<style></style>
