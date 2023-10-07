<template>
    <section class="container flex justify-center">
        <CardComponent class="md:w-1/2 w-full" :title="'Details - ' + user.name">
            <template v-slot:card-content>
                <ul class="flex flex-col gap-2">
                    <li>
                        <span class="font-bold">Name:</span>
                        {{ user.name }}
                    </li>
                    <li>
                        <span class="font-bold">Email:</span>
                        {{ user.email }}
                    </li>
                    <li>
                        <span class="font-bold">Role:</span>
                        {{ user.role }}
                    </li>
                    <li>
                        <span class="font-bold">Created at:</span>
                        {{ user.created_at }}
                    </li>
                    <li>
                        <span class="font-bold">Updated at:</span>
                        {{ user.updated_at }}
                    </li>
                </ul>
                <div class="flex justify-end my-4">
                    <router-link class="btn btn-primary" :to="'/users/edit/' + user.id">Edit</router-link>
                </div>
            </template>
        </CardComponent>
    </section>
</template>
<script>
import CardComponent from "@/components/utilities/CardComponent.vue"
export default {
    name: "DetailUser",
    data() {
        return {
            id: this.$route.params.id,
            user: []
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch("getUser", this.$route.params.id)
                .then((response) => {
                    this.loading = false;
                    this.user = response.data;
                })
        },
    },
    components: {
        CardComponent
    },
    computed: {
    },
    created() {
        this.getUser();
    }
}
</script>