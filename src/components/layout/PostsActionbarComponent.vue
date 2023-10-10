<template>
    <section>
        <ul class="flex flex-col md:flex-row items-center gap-4">
            <li class="btn min-w-max btn-primary gap-2 cursor-pointer">
                <span class="bi bi-hand-thumbs-up-fill"></span>
                <span>Like ({{ likes }})</span>
            </li>
            <li class="btn gap-2 min-w-max bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer">
                <span class="bi bi-chat-left-text-fill"></span>
                <span class="flex flex-row gap-2">Comment ({{ comments }})</span>
            </li>
            <li class="btn gap-2 min-w-max bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer">
                <span class="bi bi-share-fill"></span>
                <span>Share ({{ shared }})</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "PostsActionbarComponent",
    props: {
        likes: {
            type: Number,
            default: 0
        },
        shared: {
            type: Number,
            default: 0
        },
        comments: {
            type: Number,
            default: 0
        }
    }
}
</script>