<template>
    <section>
        <ul class="flex md:flex-row flex-col gap-2 md:gap-4">
            <li><router-link class="linkBtn" to="/users/create">Create user</router-link></li>
            <li><router-link class="linkBtn" to="/users/">List users</router-link></li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "NavbarComponent"
}
</script>