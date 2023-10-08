<template>
    <div class="fixed inset-0 bg-black bg-opacity-50">
        <div>
            <slot name="modal-title"></slot>
        </div>
        <div>
            <slot name="modal-content"></slot>
        </div>
        <div>
            <slot name="modal-footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModalComponent",

}
</script>