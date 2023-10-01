<template>
    <section>
        <ul class="flex md:flex-row flex-col gap-2 md:gap-4">
            <li><router-link to="/users/create">Create</router-link></li>
            <li><router-link to="/users/list">List</router-link></li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "NavbarComponent"
}
</script>