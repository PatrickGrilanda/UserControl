<template>
    <section>
        <h1>Detail - {{ id }}</h1>
        {{user}}
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
            setTimeout(() => {
                this.$store.dispatch("getUser", this.$route.params.id)
                    .then((response) => {
                        this.loading = false;
                        this.user = response.data;
                    })
            }, 1500)
        },
    },
    computed: {
    },
    created() {
        this.getUser();
    }
}
</script>