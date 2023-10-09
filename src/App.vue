<template>
  <section class="h-full bg-slate-100">
    <HeaderComponent class="sticky top-0 z-50">
    </HeaderComponent>

    <main class="h-full">
      <router-view class="h-full p-4" />
    </main>
  </section>
</template>
<script>
import HeaderComponent from './components/layout/HeaderComponent.vue'
import Cookies from 'js-cookie'
import { api } from '@/services/api'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    verifyAuthentication() {
      const user_id = Cookies.get('user_id');
      if (user_id) {
        api.get('/users/' + user_id).then((response) => {
          this.$store.commit('setUser', response.data)
          this.isAuthenticated = true;
        }).catch(() => {
          this.isAuthenticated = false;
          this.redirectToLogin();
        })
      } else {
        if (this.user.id != null) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
          this.redirectToLogin();
        }
      }
    },
    redirectToLogin() {
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    this.verifyAuthentication()
  },
  watch: {
    user() {
      if (this.user.id != null) {
        this.isAuthenticated = true;
      } else {
        this.redirectToLogin();
      }
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated
    },
    user() {
      return this.$store.state.user
    }
  }
}
</script>