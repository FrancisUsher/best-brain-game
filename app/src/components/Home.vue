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
          md-button(v-on:click="addMessageListItem") Submit
          md-button Cancel
      md-list.md-triple-line
        message-list-item(v-for="(item, index) in this.$store.state.messageListItems" :key="item.key" :top="item.top" :middle="item.middle" :bottom="item.bottom")
        md-divider.md-inset
</template>

<script>
import jsSha from 'jssha/src/sha512'

export default {
  name: 'home',
  data: () => ({
    textarea: null,
    inline: null,
  }),
  methods: {
    addMessageListItem() {
      const itemToPrepend = {
        top: this.inline,
        middle: this.textarea,
        bottom: 'Bottom',
      }
      this.$store.commit('prepend', {
        item: {
          key: this.getMessageKey(itemToPrepend),
          ...itemToPrepend,
        },
      })
    },
    s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    },
    guid() {
      const s5 = m => this.s4(m).toString()
      return `${s5()}${s5()}-${s5()}-${s5()}-${s5()}-${s5()}${s5()}${s5()}`
    },
    getMessageKey(messageObject) {
      const JsSha = jsSha
      const transformedMessage = JSON.stringify(messageObject)
      const hasher = new JsSha('SHA-512', 'TEXT')
      hasher.update(transformedMessage)
      const hashedMessage = hasher.getHash('B64')
      const timestamp = Date.now()
      const guid = this.guid()
      // Newest messages first, then by message content, then a random number
      return `${timestamp}${hashedMessage}${guid}`
    },
  },
  computed: {
    messageListItems() {
      return this.$store.state.messageListItems
    },
  },
}
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
