<template>
  <div class="header">
    <div class="center-content">
      <div class="header-item">
        <logo />
      </div>
      <div class="header-item">
        <main-nav />
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '../../components/MainNav/MainNav.vue'
import Logo from '../../components/Logo/Logo.vue'

export default {
  components: {
    MainNav,
    Logo
  },
  props: {

  }
}
</script>
