<template>
  <div class="page-wrap">
    <Header />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      isVisible: false
    }
  }
}
</script>
