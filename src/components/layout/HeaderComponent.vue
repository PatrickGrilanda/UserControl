<template>
    <section class="flex flex-row items-center justify-between p-4">
        <h1 class="text-4xl font-bold"><router-link to="/">User Control</router-link></h1>
        <NavbarComponent class="hidden md:block" />
        <DropdownComponent>
            <template v-slot:dropdown-title>
                <span class="bi bi-list"></span>
                Menu
            </template>
            <template v-slot:dropdown-content>
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
    }
}
</script>