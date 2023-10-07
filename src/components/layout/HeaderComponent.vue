<template>
    <section class="flex flex-row items-center justify-between p-4 border shadow-sm">
        <router-link to="/">
            <img class="w-10 h-10 rounded-full" :src="user.image" alt="user image">
        </router-link>
        <NavbarComponent class="hidden md:block" />
        <DropdownComponent>
            <template v-slot:dropdown-title>
                <span class="bi bi-list "></span>
                Menu
            </template>
            <template v-slot:dropdown-content>
                <ul>
                    <li class="flex items-center">
                        <img class="w-10 h-10 rounded-full" :src="user.image" alt="user image">
                        <span class="ml-2">{{ user.name }}</span>
                    </li>
                </ul>
                <hr class="block my-2">
                <NavbarComponent class="block md:hidden" />
                <hr class="block md:hidden my-2">
                <ul>
                    <li>
                        <router-link class="linkBtn" to="/about">About</router-link>
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
    computed: {
        user() {
            return this.$store.state.user
        }
    },
}
</script>