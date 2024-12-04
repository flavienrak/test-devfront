<template>
    <div class="bg-primary-100 relative h-2 w-full rounded-full">
        <div
            class="bg-primary-500 opacity-100 top-0 left-0 h-full rounded-full transition-[width] duration-500"
            :style="{ width: `${progress}%` }"
        ></div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: { progress: { type: Number, required: true } },
};
</script>
