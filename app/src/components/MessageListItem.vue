<template lang="pug">
  md-list-item
    md-avatar
      img(src="/static/img/icons/apple-touch-icon-60x60.png" alt="People")
    
    .md-list-item-text
      span {{ top }}
      span {{ middle }}
      p {{ bottom }}

    md-button.md-icon-button.md-list-action
      md-icon.md-primary star
</template>

<script>
export default {
  name: 'message-list-item',
  data: () => ({
    top: null,
    middle: null,
    bottom: null,
  }),
  props: ['top', 'middle', 'bottom'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>
