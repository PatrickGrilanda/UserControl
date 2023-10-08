<template>
  <HeaderComponent v-if="isAuthenticated">
  </HeaderComponent>

  <main class="p-4" :class="{ 'h-screen': isAuthenticated == false }">
    <router-view class="h-full" />
  </main>
</template>
<script>
import HeaderComponent from './components/layout/HeaderComponent.vue'
export default {
  name: 'App',
  data() {
    return {
      user: null,
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    getUser() {
      this.user = this.$store.state.user
    },
    verifyAuthentication() {
      if (this.user.id != null) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
        this.redirectToLogin();
      }
    },
    redirectToLogin() {
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    this.getUser(),
      this.verifyAuthentication()
  },
  watch: {
    user() {
      if (this.getUser().id != null) {
        this.isAuthenticated = true;
      } else {
        this.redirectToLogin();
      }
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    }
  }
}
</script>