<!-- resources/js/pages/LandingPage.vue -->
<template>
    <div>
        <!-- Composant Footer -->
        <footer-component />
    </div>
</template>

<script>
import FooterComponent from "@/components/landing/FooterComponent.vue";

export default {
    name: "LandingPage",
    components: {
        FooterComponent,
    },
};
</script>

<style scoped>
section {
    margin-top: 3rem;
}
</style>
