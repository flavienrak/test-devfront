<template>
    <div class="relative px-10 flex gap-5 items-center">
        <i
            @click="prevSlide"
            :class="[
                'text-dark-300 absolute left-0',
                currentIndex === 0
                    ? 'cursor-default opacity-50'
                    : 'cursor-pointer',
            ]"
            ><chevron-left-icon size="32"
        /></i>
        <div
            ref="container"
            class="overflow-hidden mask"
            @mousedown="startDrag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag"
            @mousemove="onDrag"
        >
            <div
                class="grid gap-5 transition-transform duration-500"
                :style="{
                    transform: `translateX(${currentTranslate}px)`,
                    gridTemplateColumns: `repeat(${items}, ${Math.floor(
                        100 / slidesPreview
                    )}%)`,
                    padding: `0 ${gap}px`,
                }"
            >
                <slot></slot>
            </div>
        </div>
        <i
            @click="nextSlide"
            :class="[
                'text-dark-300 absolute right-0',
                currentIndex === maxIndex
                    ? 'cursor-default opacity-50'
                    : 'cursor-pointer',
            ]"
            ><chevron-right-icon size="32"
        /></i>
    </div>
</template>

<script>
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";

export default {
    name: "SliderComponent",
    components: {
        ChevronRightIcon,
        ChevronLeftIcon,
    },
    props: {
        items: {
            type: Number,
            required: true,
        },
        slidesPreview: {
            type: Number,
            default: 3,
        },
        gap: {
            type: Number,
            default: 20,
        },
    },
    data() {
        return {
            currentIndex: 0,
            slides: Array.from({ length: 5 }),
            isDragging: false,
            startX: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            containerWidth: 0,
        };
    },
    computed: {
        adjustedSlideWidth() {
            // Ajuste la largeur pour inclure le gap
            const totalGapWidth = (this.slidesPreview - 1) * this.gap; // Gaps totaux visibles
            const containerWidth = this.containerWidth - totalGapWidth; // Largeur restante après gaps
            return containerWidth / this.slidesPreview; // Largeur ajustée des slides
        },
        slideWidth() {
            return this.containerWidth / this.slidesPreview;
        },
        maxIndex() {
            return this.slides.length - this.slidesPreview;
        },
        bounce() {
            return Math.floor(this.slideWidth / this.slidesPreview);
        },
    },
    mounted() {
        this.calculateContainerWidth();
        window.addEventListener("resize", this.calculateContainerWidth);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.calculateContainerWidth);
    },
    methods: {
        calculateContainerWidth() {
            if (this.$refs.container) {
                const style = window.getComputedStyle(this.$refs.container);
                const gap = parseInt(style.getPropertyValue("gap"), 10) || 0; // Récupère la valeur du gap
                this.containerWidth = this.$refs.container.offsetWidth - gap;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.resetPosition();
        },
        nextSlide() {
            if (this.currentIndex < this.maxIndex) {
                this.currentIndex++;
            }
            this.resetPosition();
        },
        startDrag(event) {
            this.isDragging = true;
            this.startX = event.clientX;
            this.prevTranslate = -this.currentIndex * this.slideWidth;
        },
        stopDrag() {
            if (this.isDragging) {
                this.isDragging = false;

                // Calcul du déplacement
                const movedBy = this.currentTranslate - this.prevTranslate;

                // Si le mouvement dépasse le seuil, changer de slide
                if (
                    movedBy < -this.bounce &&
                    this.currentIndex < this.slides.length - 1
                ) {
                    this.nextSlide(); // Glisse vers le prochain slide
                } else if (movedBy > this.bounce && this.currentIndex > 0) {
                    this.prevSlide(); // Glisse vers le slide précédent
                } else {
                    // Revenir à la position initiale si aucun changement de slide
                    this.resetPosition();
                }
            }
        },
        onDrag(event) {
            if (this.isDragging) {
                const deltaX = event.clientX - this.startX;

                // Ajout de l'effet de rebond
                if (
                    (this.currentIndex === 0 && deltaX > 0) || // Limite gauche
                    (this.currentIndex === this.maxIndex && deltaX < 0) // Limite droite
                ) {
                    const bounce = deltaX / this.slidesPreview; // Réduire l'effet de mouvement
                    this.currentTranslate =
                        this.prevTranslate +
                        Math.min(Math.abs(bounce), this.bounce) *
                            Math.sign(bounce);
                } else {
                    this.currentTranslate = this.prevTranslate + deltaX;
                }
            }
        },
        resetPosition() {
            // Revenir à la position du slide actuel
            this.currentTranslate = -this.currentIndex * this.slideWidth;
        },
    },
};
</script>

<style>
.mask {
    -webkit-mask: linear-gradient(90deg, #0000, #000 10% 90%, #0000);
}
</style>
