<template lang="pug">
  .home
    md-content
      md-card
        md-card-header
          .md-title What are you thinking about?
          .md-subhead Let's think it through together.
        md-card-content
          md-field(md-inline)
            label Short summary
            md-input(v-model="inline")
          md-field
            label Type here.
            md-textarea(v-model="textarea")
            span.md-helper-text Don't be afraid! Let your heart spill.
        md-card-actions
          md-button(v-on:click="addMessageListItem") Action 1
          md-button Action 2
      md-list.md-triple-line
        message-list-item(v-for="(item, index) in items" :key="item.top" :top="item.top" :middle="item.middle" :bottom="item.bottom")
        md-divider.md-inset
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    textarea: null,
    inline: null,
    items: [
      {
        top: 'top',
        middle: 'middle',
        bottom: 'Bottom',
      },
    ],
  }),
  methods: {
    addMessageListItem() {
      this.items.unshift({
        top: this.inline,
        middle: this.textarea,
        bottom: 'Bottom',
      });
    },
  },
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
