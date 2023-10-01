<template>
    <div class="toast" v-if="toast" :class="type">
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
    name: "ToastComponent",

}
</script>