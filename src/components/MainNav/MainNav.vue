<template>
  <div class="main-nav">
    <div class="main-nav-item">
      <router-link
        to="/"
        class="main-nav-link"
      >
        Home
      </router-link>
    </div>
    <div class="main-nav-item">
      <router-link
        to="/about"
        class="main-nav-link"
      >
        About
      </router-link>
    </div>
    <div class="main-nav-item">
      <router-link
        to="/contact"
        class="main-nav-link"
      >
        Contact
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>
