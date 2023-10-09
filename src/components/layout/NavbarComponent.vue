<template>
    <section>
        <ul class="flex md:flex-row flex-col gap-2 md:gap-4" v-if="this.$store.state.user.id">
            <li><router-link class="linkBtn" to="/users/">List users</router-link></li>
        </ul>
        <ul class="flex md:flex-row flex-col  gap-2 md:gap-4" v-if="this.$store.state.user.id == null">
            <li><router-link class="linkBtn" to="/login">Login</router-link></li>
            <li><router-link class="linkBtn" to="/register">Register</router-link></li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "NavbarComponent"
}
</script>