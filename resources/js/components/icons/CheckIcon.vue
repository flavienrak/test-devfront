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
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
</template>
<script>
export default {
    name: "CheckIcon",
    props: {
        size: {
            type: [Number, String],
            default: 24, // Taille par défaut
        },
    },
};
</script>
