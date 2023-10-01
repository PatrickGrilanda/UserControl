<template>
    <section class="loading-content">
        <span></span>
        <span></span>
        <span></span>
    </section>
</template>
<script>
export default {
    name: "LoadingComponent",

}
</script>
<style scoped>
.loading-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-content span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #17e410;
    margin: 0 5px;
    animation: loading 1s linear infinite;
}

.loading-content span:nth-child(2) {
    background: #d9e410;
    animation-delay: 0.2s;
}

.loading-content span:nth-child(3) {
    background: #e43010;
    animation-delay: 0.4s;
}

@keyframes loading {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}
</style>