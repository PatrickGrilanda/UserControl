<template>
    <section class="flex justify-center items-center h-full">
        <ModalComponent v-if="loading">
            <template v-slot:modal-content>
                <div class="flex justify-center items-center h-screen">
                    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </template>
        </ModalComponent>
        <div class="alert alert-danger" v-if="error">
            {{ error }}
        </div>
        <CardComponent class="lg:w-1/2" title="Login">
            <template v-slot:card-content>
                <form @submit.prevent="login">
                    <div class="grid gap-4">
                        <div class="p-4 border rounded-lg">
                            <label for="email">Email</label>
                            <input class="form-input" type="email" id="email" v-model="email"
                                placeholder="Type your email here" />
                        </div>
                        <div class="p-4 border rounded-lg">
                            <label for="password">Password</label>
                            <input class="form-input" type="password" id="password" v-model="password"
                                placeholder="Type your password here" />
                        </div>
                    </div>
                    <div class="flex justify-end my-4">
                        <div>
                            <button class="btn btn-primary" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </template>
        </CardComponent>
    </section>
</template>
<script>
import CardComponent from '@/components/utilities/CardComponent.vue'
import ModalComponent from '@/components/utilities/ModalComponent.vue'
import Cookies from 'js-cookie'

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: null,
            loading: false
        }
    },
    components: {
        CardComponent,
        ModalComponent
    },
    methods: {
        login() {
            this.loading = true;
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            }).then(() => {
                setTimeout(() => {
                    this.loading = false;
                    Cookies.set('user_id', this.$store.state.user.id)
                    this.$router.push({ name: 'home' })
                }, 1000);
            }).catch((error) => {
                this.error = error
            })
        }
    }
}
</script>