<template lang="pug">
  md-bottom-bar.md-accent(md-sync-route)
    md-bottom-bar-item(to="/" md-label="Home" md-icon="home")
    md-bottom-bar-item(to="/explore" md-label="Explore" md-icon="nature_people")
    md-bottom-bar-item(to="/resume" md-label="Resume" md-icon="library_books")
</template>

<script>
  export default {
    name: 'bar-router',
  };
</script>

<style lang="sass" scoped>

</style>