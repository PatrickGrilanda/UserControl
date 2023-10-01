<template>
    <section>
        <div class="border rounded-xl shadow-lg p-4">
            <div class="p-4">
                <h1 class="text-3xl">{{ title }}</h1>
            </div>
            <div class="p-4">
                <slot name="card-content"></slot>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "CardComponent",
    props: {
        title: {
            type: String,
            required: true
        },
    }
}
</script>