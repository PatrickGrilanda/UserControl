<template>
    <section>
        <h1 class="text-3xl">
            Users
        </h1>
        <hr class="my-4">
        <input type="text" placeholder="Search user" class="w-full p-2 mb-4 border border-gray-300 rounded shadow">
        <LoadingComponent v-if="loading"></LoadingComponent>
        <ul v-for="user in users" :key="user.id">
            <li class="flex items-center justify-between p-4 mb-4 bg-white rounded shadow w-full">
                <div class="flex gap-2">
                    <div class="flex items-center">
                        <div class="avatar">
                            <img class="avatar-img" :src="user.image" loading="lazy">
                        </div>
                        <p class="text-xl font-bold">{{ user.name }}, {{ user.age }}</p>
                    </div>
                </div>
                <DropdownComponent>
                    <template v-slot:dropdown-title>
                        <span class="bi bi-three-dots"></span>
                    </template>
                    <template v-slot:dropdown-content>
                        <ul class="flex flex-col gap-2">
                            <li class="linkBtn">
                                <router-link :to="'/users/' + user.id">
                                    <span class="bi bi-eye"></span>
                                    View
                                </router-link>
                            </li>
                            <li class="linkBtn">
                                <router-link :to="'/users/' + user.id + '/edit'">
                                    <span class="bi bi-pencil-square"></span>
                                    Edit
                                </router-link>
                            </li>
                            <li class="linkBtn">
                                <router-link :to="'/users/' + user.id + '/delete'">
                                    <span class="bi bi-trash"></span>
                                    Delete
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </DropdownComponent>
            </li>
        </ul>
    </section>
</template>
<script>
import { api } from "@/services/api.js"
import LoadingComponent from "@/components/utilities/LoadingComponent.vue"
import DropdownComponent from "@/components/utilities/DropdownComponent.vue"
export default {
    name: "ListUsers",
    data() {
        return {
            users: [],
            loading: true
        }
    },
    components: {
        LoadingComponent,
        DropdownComponent
    },
    methods: {
        getUsers() {
            setTimeout(() => {
                api.get("http://localhost:3000/users").then((response) => {
                    this.loading = false
                    this.users = response.data
                }).catch((error) => {
                    console.log(error)
                })
            }, 2000)
        }
    },
    created() {
        this.getUsers()
    }
}
</script>