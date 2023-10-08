<template>
    <section class="flex justify-center">
        <CardComponent class="lg:w-1/2 w-full" title="Create User">
            <template v-slot:card-content>
                <div class="grid md:grid-cols-2 gap-2">
                    <div class="p-4 border rounded-lg">
                        <label for="name">Name</label>
                        <input class="form-input" type="text" name="name" id="name" v-model="user.name"
                            placeholder="Insert the name here">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="age">Age</label>
                        <input class="form-input" type="number" name="age" id="age" v-model="user.age"
                            placeholder="Insert age">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="role">Role</label>
                        <input class="form-input" type="text" name="role" id="role" v-model="user.role"
                            placeholder="Insert role">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="email">Email</label>
                        <input class="form-input" type="text" name="email" id="email" v-model="user.email"
                            placeholder="Insert email">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="city">City</label>
                        <input class="form-input" type="text" name="city" id="city" v-model="user.city"
                            placeholder="Insert city">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="image">Image</label>
                        <input class="form-input" type="text" name="image" id="image" v-model="user.image"
                            placeholder="Insert the image link here">
                    </div>
                </div>
                <div class="flex justify-end my-4">
                    <div class="">
                        <button class="btn btn-primary" @click="createUser">Create</button>
                    </div>
                </div>
            </template>
        </CardComponent>
    </section>
</template>
<script>
import CardComponent from '@/components/utilities/CardComponent.vue'
import { api } from '@/services/api'
export default {
    name: "CreateUser",
    data() {
        return {
            user: {
                name: '',
                age: 0,
                city: '',
                role: '',
                email: '',
                image: '',
                friends: []
            }
        }
    },
    components: {
        CardComponent
    },
    methods: {
        newFile(event) {
            this.user.image = event.target.files[0];
        },
        createUser() {
            api.post('/users', this.user)
                .then(() => {
                    console.log('User created')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>