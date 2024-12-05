<template>
    <div class="w-full flex justify-center">
        <div class="w-full max-w-[88rem] px-10 xl:px-0 customContainer">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "CustomContainer",
};
</script>
