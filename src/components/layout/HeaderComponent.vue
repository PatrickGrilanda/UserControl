<template>
    <section class="flex flex-row items-center p-4 border shadow-sm bg-white h-16"
        :class="{ 'justify-between': user.id != undefined, 'justify-end': user.id == undefined }">
        <router-link to="/" v-if="this.$store.state.user.id">
            <img class="w-10 h-10 rounded-full" :src="user.image" alt="user image">
        </router-link>
        <NavbarComponent class="hidden md:block" />
        <DropdownComponent v-if="user.id">
            <template v-slot:dropdown-title>
                <span class="bi bi-list "></span>
                Menu
            </template>
            <template v-slot:dropdown-content>
                <ul>
                    <li>
                        <router-link class="flex items-center linkBtn" :to="'/users/' + user.id">
                            <img class="w-10 h-10 rounded-full" :src="user.image" alt="user image">
                            <span class="ml-2">{{ user.name }}</span>
                        </router-link>
                    </li>
                </ul>
                <hr class="block my-2">
                <NavbarComponent class="block md:hidden" />
                <hr class="block md:hidden my-2">
                <ul class="grid gap-2">
                    <li>
                        <router-link class="linkBtn" to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link class="linkBtn" to="/contact">Contact</router-link>
                    </li>
                    <li>
                        <button class="linkBtn bg-red-600 text-white" @click="logout">Logout</button>
                    </li>
                </ul>
            </template>
        </DropdownComponent>
    </section>
</template>
<script>
import NavbarComponent from './NavbarComponent.vue'
import DropdownComponent from '@/components/utilities/DropdownComponent.vue'
export default {
    name: "HeaderComponent",
    components: {
        NavbarComponent,
        DropdownComponent
    },
    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => {
                this.$router.push({ name: 'login' })
            })
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
}
</script>