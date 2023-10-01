<template>
    <section>
        <h1 class="text-xl font-bold md:hidden mb-2">Users</h1>
        <ul class="flex md:flex-row flex-col gap-2 md:gap-4">
            <li><router-link class="linkBtn" to="/users/create">Create</router-link></li>
            <li><router-link class="linkBtn" to="/users/">List</router-link></li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "NavbarComponent"
}
</script>