<template>
    <div class="relative inline-block text-left">
        <button @click="toggle">
            <slot name="dropdown-title"></slot>
        </button>
        <Transition name="fade">
            <div v-if="show" @mouseleave="show = false" class="
                origin-top-right 
                absolute 
                right-0 
                mt-2 
                w-56 
                rounded-md 
                shadow-lg 
                bg-white 
                ring-1 
                ring-black 
                ring-opacity-5 
                focus:outline-none
                p-4
                z-10
                ">
                <slot name="dropdown-content">
                </slot>
            </div>
        </Transition>
    </div>
</template>
<script>
export default {
    name: "DropdownComponent",
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
}
</script>
<style scope>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>