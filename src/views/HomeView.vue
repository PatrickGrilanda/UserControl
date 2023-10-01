<template>
  <div class="home">
    <h1 class="text-4xl text-center my-4">Welcome {{ this.$store.state.user.name }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>
