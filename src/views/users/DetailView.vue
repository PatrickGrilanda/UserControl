<template>
    <section class="w-full md:justify-center md:flex">
        <div class="w-full lg:w-4/5 md:border md:shadow md:p-4   md:rounded-lg">
            <div class="flex justify-center flex-col md:flex-row items-center md:justify-between ">
                <div class="avatar">
                    <img class="avatar-img" :src="user.image" alt="avatar">
                </div>
                <div class="flex flex-col text-center md:text-end">
                    <h1 class="text-2xl font-bold">{{ user.name }}</h1>
                    <p class="text-sm text-gray-500">{{ user.age }} years old</p>
                    <p class="text-sm text-gray-500">{{ user.role }}</p>
                </div>
            </div>
            <hr class="my-4">
            <div class="flex justify-end gap-2">
                <div>
                    <button class="btn btn-primary gap-2">
                        <span class="bi bi-person-plus  "></span>
                        Add Friend
                    </button>
                </div>
                <div>
                    <button class="btn btn-primary gap-2">
                        <span class="bi bi-chat-dots"></span>
                        Contact
                    </button>
                </div>
            </div>
            <hr class="my-4">
            <div class="flex flex-col md:flex-row justify-end gap-3">
                <div>
                    <button
                        class="btn text-black shadow border-purple-300 hover:bg-purple-600 hover:text-white flex items-center gap-2">
                        <span class="bi bi-person"></span>
                        Friends
                    </button>
                </div>
                <div>
                    <button
                        class="btn text-black shadow border-purple-300 hover:bg-purple-600 hover:text-white flex items-center gap-2">
                        <span class="bi bi-kanban"></span>
                        Projects
                    </button>
                </div>
                <div>
                    <button
                        class="btn text-black shadow border-purple-300 hover:bg-purple-600 hover:text-white flex items-center gap-2">
                        <span class="bi bi-person-badge"></span>
                        Experiences
                    </button>
                </div>
                <div>
                    <button
                        class="btn text-black shadow border-purple-300 hover:bg-purple-600 hover:text-white flex items-center gap-2">
                        <span class="bi bi-book"></span>
                        Education
                    </button>
                </div>
            </div>
            <hr class="my-4">
            <div>
                <h1 class="text-lg font-bold">{{ user.name }}'s' Publications</h1>
            </div>
            <hr class="my-4">
        </div>
    </section>
</template>
<script>

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
    },
    computed: {
    },
    created() {
        this.getUser();
    }
}
</script>