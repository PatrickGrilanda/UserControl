<template>
    <section>
        <ul class="flex flex-col md:flex-row items-center gap-4">
            <li class="btn min-w-max btn-primary gap-2 cursor-pointer">
                <span class="bi bi-hand-thumbs-up-fill"></span>
                <span>Like ({{ likes.length > 0 ? likes.length : 0 }})</span>
            </li>
            <li class="btn gap-2 min-w-max bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer">
                <span class="bi bi-chat-left-text-fill"></span>
                <span class="flex flex-row gap-2">Comment ({{ comments.length > 0 ? comments.length : 0 }})</span>
            </li>
            <li class="btn gap-2 min-w-max bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer">
                <span class="bi bi-share-fill"></span>
                <span>Share ({{ shared.length > 0 ? shared.length : 0 }})</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: "PostsActionbarComponent",
    props: {
        likes: {
            type: Array,
            default: () => []
        },
        comments: {
            type: Array,
            default: () => []
        },
        shared: {
            type: Array,
            default: () => []
        }
    }
}
</script>