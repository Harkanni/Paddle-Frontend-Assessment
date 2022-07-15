<template>
   <nav class="home_nav d-flex navbar navbar-expand-lg">
      <router-link to="/contact" class="router-links navbar-brand">
        <h2>Maverick</h2>
      </router-link>
      <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border: 1px solid #202020">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="menu">
        <ul class="d-flex align-items-center navbar-nav">
          <li v-for="(route, i) in routes" :key="i" class="nav-items">
            <router-link :to="route.to" class="router-links" :class="route.class">
              <h2 :class="route.class">{{ route.title }}</h2>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script type="text/javascript">
export default {
  data: function () {
    return {
      isViscible: false,
      routes: [
        { title: 'About Us', to: '/about', class: '' },
        { title: 'Blog', to: '/blog', class: '' },
        { title: 'Github', to: '/github', class: '' },
        { title: 'Contact Us', to: '/contact', class: 'contact-link contact' }
      ]
    }
  }
}
</script>

<style></style>
