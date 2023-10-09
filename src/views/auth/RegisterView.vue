<template>
    <section class="flex justify-center items-center">
        <CardComponent class="w-full lg:w-1/2" title="Register">
            <template v-slot:card-content>
                <form @submit.prevent="register">
                    <div class="p-4 border rounded-lg">
                        <label for="name">Name</label>
                        <input class="form-input" type="text" id="name" v-model="form.name">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="email">Email</label>
                        <input class="form-input" type="email" id="email" v-model="form.email">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="password">Password</label>
                        <input class="form-input" type="password" id="password" v-model="form.password">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="password_confirmation">Confirm Password</label>
                        <input class="form-input" type="password" id="password_confirmation"
                            v-model="form.password_confirmation">
                    </div>
                    <div class="flex justify-end">
                        <div>
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </div>
                </form>
            </template>
        </CardComponent>
    </section>
</template>
<script>
import { api } from '@/services/api.js'
import CardComponent from '@/components/utilities/CardComponent.vue'
export default {
    name: 'RegisterView',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    components: {
        CardComponent
    },
    methods: {
        register() {
            api.post('/users', this.form)
                .then(() => {
                    this.$router.push({ name: 'login' })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>