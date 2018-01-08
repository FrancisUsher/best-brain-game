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
}
</script>

<style lang="sass">
  @import ~vue-material/dist/theme/engine
  +md-register-theme("default", (primary: md-get-palette-color(grey, 900), accent: md-get-palette-color(grey, 900), theme: light ))
  +md-register-theme("vaporwave", (primary: md-get-palette-color(pink, 500), accent: md-get-palette-color(teal, A200), theme: dark ))
  @import ~vue-material/dist/theme/all
  .bottom-nav
    :position fixed
    :bottom 0px
</style>
