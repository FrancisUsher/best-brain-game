<template lang="pug">
  .home
    md-content
      h2 What are you thinking about?
      md-field
        label Type here!
        md-textarea(v-model="textarea")
        span.md-helper-text Don't be afraid! Let your heart spill.
      md-list.md-triple-line
        md-list-item
          md-avatar
            img(src="https://placeimg.com/40/40/people/1" alt="People")
          
          .md-list-item-text
            span Ali Connors
            span Brunch this weekend?
            p I'll be in your neighborhood doing errands this week. Do you want to meet?

          md-button.md-icon-button.md-list-action
            md-icon.md-primary star
        md-divider.md-inset
        md-list-item
          md-avatar
            img(src="https://placeimg.com/40/40/people/1" alt="People")
          
          .md-list-item-text
            span Ali Connors
            span Brunch this weekend?
            p I'll be in your neighborhood doing errands this week. Do you want to meet?

          md-button.md-icon-button.md-list-action
            md-icon.md-primary star

</template>

<script>
export default {
  name: 'home',
  data: () => ({
    textarea: null,
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
