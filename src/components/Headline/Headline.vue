<template>
  <h1 class="headline">
    Hello {{ name }}!
  </h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
