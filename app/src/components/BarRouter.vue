<template lang="pug">
  md-bottom-bar.md-accent(md-sync-route)
    md-bottom-bar-item(to="/" md-label="Home" md-icon="home")
    md-bottom-bar-item(to="/explore" md-label="Explore" md-icon="nature_people")
    md-bottom-bar-item(to="/help" md-label="Help" md-icon="live_help")
</template>

<script>
  export default {
    name: 'bar-router',
  };
</script>

<style lang="sass" scoped>

</style>