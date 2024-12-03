<template>
    <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M5 12h14" />
    </svg>
</template>
<script>
export default {
    name: "MinusIcon",
    props: {
        size: {
            type: [Number, String],
            default: 24, // Taille par défaut
        },
    },
};
</script>
