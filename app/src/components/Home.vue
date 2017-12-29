<template lang="pug">
  .home
    md-content
      h2 What are you thinking about?
      md-field
        label Type here!
        md-textarea(v-model="textarea")
        span(class="md-helper-text") Don't be afraid! Let your heart spill.
</template>

<script>
export default {
  name: 'home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h2
    :font-weight normal

  ul
    :list-style-type none
    :padding 0

  li
    :display inline-block
    :margin 0 10px

  a
    :color #35495E
</style>
