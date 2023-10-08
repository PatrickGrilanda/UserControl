<template>
    <section>
        <h1 class="text-3xl">
            Users
        </h1>
        <hr class="my-4">
        <div class="flex justify-end">
            <div class="">
                <router-link class="btn btn-primary" to="/users/create">
                    <span class="bi bi-plus"></span>
                    Add user
                </router-link>
            </div>
        </div>
        <hr class="my-4">
        <input type="text" placeholder="Search user" class="w-full p-2 mb-4 border border-gray-300 rounded shadow">
        <LoadingComponent v-if="loading"></LoadingComponent>
        <div class="grid gap-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-100">
            <div v-for="user in users" :key="user.id"
                class="flex items-center justify-between p-4 mb-4 bg-white rounded shadow border">
                <div class="flex gap-2">
                    <div class="flex gap-4 items-center">
                        <div class="avatar">
                            <img class="avatar-img" :src="user.image" loading="lazy">
                        </div>
                        <ul class="flex flex-col gap-1">
                            <li class="text-md font-bold">
                                {{ user.name }}
                                <span v-if="user.id == this.$store.state.user.id"
                                    class="bi bi-check-circle-fill text-success">
                                </span>
                            </li>
                            <li class="text-sm text-gray-500">{{ user.age }} years old</li>
                            <li class="text-sm text-gray-500">{{ user.city }}</li>
                        </ul>
                    </div>
                </div>
                <DropdownComponent v-if="user.id != this.$store.state.user.id">
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
                                <button @click="deleteUser(user.id)">
                                    <span class="bi bi-trash"></span>
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </template>
                </DropdownComponent>
            </div>
        </div>
    </section>
</template>
<script>
import LoadingComponent from "@/components/utilities/LoadingComponent.vue"
import DropdownComponent from "@/components/utilities/DropdownComponent.vue"
import { api } from '@/services/api'
export default {
    name: "ListUsers",
    data() {
        return {
            loading: true
        }
    },
    components: {
        LoadingComponent,
        DropdownComponent
    },
    computed: {
        users() {
            return this.$store.state.users
        },
    },
    methods: {
        getUsers() {
            setTimeout(() => {
                this.$store.dispatch("getUsers", true)
                    .then(() => {
                        this.loading = false
                    })
            }, 2000)
        },
        verifyUsers() {
            if (this.users.length == this.$store.state.users.length && this.users.length !== 0) {
                this.loading = false
            }
        },
        deleteUser(id) {
            api.delete(`/users/${id}`)
                .then(() => {
                    this.$store.dispatch("getUsers", true)
                })
        }
    },
    created() {
        this.getUsers(),
            this.verifyUsers()
    }
}
</script>