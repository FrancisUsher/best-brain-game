<template lang="pug">
  #app
    md-app(md-mode="reveal")
      md-app-toolbar
        img(src="/static/img/icons/apple-touch-icon-60x60.png" alt="A smiley icon with exaggeratedly low upside-down U eyes.")
        span.md-title It's so nice to see you.
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
  @import ~vue-material/dist/theme/engine
  +md-register-theme("default", (primary: md-get-palette-color(cyan, 200), accent: md-get-palette-color(deeppurple, A100), theme: dark ))
  @import ~vue-material/dist/theme/all
  .bottom-nav
    :position fixed
    :bottom 0px
</style>
