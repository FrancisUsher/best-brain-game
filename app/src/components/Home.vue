<template lang="pug">
  .home
    md-content
      md-card
        md-card-header
          .md-title What are you thinking about?
          .md-subhead Let's think it through together.
        md-card-content
          md-field
            label Type here.
            md-textarea(v-model="textarea")
            span.md-helper-text Don't be afraid! Let your heart spill.
        md-card-actions
          md-button Action 1
          md-button Action 2
      md-list.md-triple-line
        message-list-item(top="asdf" middle="lololol")
        md-list-item
          md-avatar
            img(src="/static/img/icons/apple-touch-icon-60x60.png" alt="People")
          
          .md-list-item-text
            span Normal
            span Brunch this weekend?
            p I'll be in your neighborhood doing errands this week. Do you want to meet for brunch?

          md-button.md-icon-button.md-list-action
            md-icon.md-primary star
        md-divider.md-inset
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    textarea: null,
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
    ],
  }),
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
