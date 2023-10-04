<template>
    <section class="container flex justify-center">
        <CardComponent class="md:w-1/2 w-full" title="Create User">
            <template v-slot:card-content>
                <div class="flex flex-col gap-2">
                    <div class="p-4 border rounded-lg">
                        <label for="name">Name</label>
                        <input class="form-input" type="text" name="name" id="name" v-model="user.name">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="age">Age</label>
                        <input class="form-input" type="text" name="age" id="age" v-model="user.age">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="city">City</label>
                        <input class="form-input" type="text" name="city" id="city" v-model="user.city">
                    </div>
                    <div class="p-4 border rounded-lg">
                        <label for="image">Image</label>
                        <input class="form-input" type="text" name="image" id="image" v-model="user.image">
                    </div>
                </div>
                <div class="flex justify-end my-4">
                    <button class="btn btn-primary" @click="createUser">Create</button>
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
                image: '',
                friends: []
            }
        }
    },
    components: {
        CardComponent
    },
    methods: {
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