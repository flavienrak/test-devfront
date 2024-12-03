<!-- resources/js/pages/LandingPage.vue -->
<template>
    <div>
        <!-- Composant Presentation -->
        <presentation-component />
        <!-- Composant Etapes -->
        <steps-component />
        <!-- Composant Avis -->
        <notice-component />
        <!-- Composant Stats -->
        <stats-component />
        <!-- Composant Preparation -->
        <preparation-component />
        <!-- Composant Footer -->
        <footer-component />
    </div>
</template>

<script>
import FooterComponent from "@/components/landing/FooterComponent.vue";
import PresentationComponent from "@/components/landing/PresentationComponent.vue";
import StepsComponent from "@/components/landing/StepsComponent.vue";
import NoticeComponent from "@/components/landing/NoticeComponent.vue";
import StatsComponent from "@/components/landing/StatsComponent.vue";
import PreparationComponent from "@/components/landing/PreparationComponent.vue";

export default {
    name: "LandingPage",
    components: {
        FooterComponent,
        PresentationComponent,
        StepsComponent,
        NoticeComponent,
        StatsComponent,
        PreparationComponent,
    },
};
</script>

<style scoped>
section {
    margin-top: 3rem;
}
</style>
