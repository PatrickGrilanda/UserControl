<template>
  <HeaderComponent>
  </HeaderComponent>
  <main class="p-4">
    <router-view />
  </main>
</template>
<script>
import HeaderComponent from './components/layout/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>