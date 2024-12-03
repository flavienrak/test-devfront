<template>
    <button
        :class="[
            'ps-[1.25rem] py-3.5 rounded-xl shadow inline-flex items-center font-semibold',
            className,
        ]"
    >
        <p>{{ label }}</p>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "CustomButton",
    props: {
        label: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            required: false,
        },
    },
};
</script>
