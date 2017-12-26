<template lang="pug">
  #app
    md-app(md-mode="reveal")
      md-app-toolbar
        img(src="/static/img/icons/apple-touch-icon-60x60.png" alt="A smiley icon with exaggeratedly low upside-down U eyes.")
        span.md-title Francis Usher
      md-app-content
        router-view
    bar-router.bottom-nav

</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  .bottom-nav
    :position fixed
    :bottom 0px
</style>
