<template>
    <div class="relative flex gap-5 items-center justify-center">
        <i
            @click="prevSlide"
            :class="[
                'text-dark-300 absolute left-0',
                currentIndex === 0
                    ? 'cursor-default opacity-50'
                    : 'cursor-pointer',
            ]"
            ><chevron-left-icon size="2rem"
        /></i>
        <div
            ref="container"
            :class="[
                'overflow-hidden mask w-[calc(100%-6rem)]',
                isDragging ? 'cursor-grab' : '',
            ]"
            @mousedown="startDrag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag"
            @mousemove="onDrag"
            @touchstart="startDrag"
            @touchmove="onDrag"
            @touchend="stopDrag"
        >
            <div
                class="grid transition-transform duration-500"
                :style="{
                    transform: `translateX(${currentTranslate}px)`,
                    gridTemplateColumns: gridTemplateColumns,
                    gap: `${gap}px`,
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
            ><chevron-right-icon size="2rem"
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
            preview: 3,
            breakpoints: {
                1024: 3,
                768: 2,
                480: 1,
            },
        };
    },
    computed: {
        adjustedSlideWidth() {
            // Ajuste la largeur pour inclure le gap
            const totalGapWidth = (this.preview - 1) * this.gap; // Gaps totaux visibles
            const containerWidth = this.containerWidth - totalGapWidth; // Largeur restante après gaps
            return containerWidth / this.preview; // Largeur ajustée des slides
        },
        gridTemplateColumns() {
            // Génère des colonnes dynamiques en fonction des ajustements
            return `repeat(${this.items}, ${this.adjustedSlideWidth}px)`;
        },
        maxIndex() {
            return this.slides.length - this.preview;
        },
        bounce() {
            return Math.floor(this.adjustedSlideWidth / this.preview);
        },
    },
    methods: {
        calculateContainerWidth() {
            if (this.$refs.container) {
                const style = window.getComputedStyle(this.$refs.container);
                const gap = parseInt(style.getPropertyValue("gap"), 10) || 0; // Récupère la valeur du gap
                this.containerWidth = this.$refs.container.offsetWidth - gap;
            }
        },
        // Ajuste le nombre de slides visibles selon la largeur de l'écran
        adjustSlidesPreview() {
            const width = window.innerWidth;

            for (const [breakpoint, preview] of Object.entries(
                this.breakpoints
            ).sort((a, b) => b[0] - a[0])) {
                if (width >= breakpoint) {
                    this.preview = preview;
                    break;
                }
            }

            this.calculateContainerWidth();
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
            const startX =
                event.type === "touchstart"
                    ? event.touches[0].clientX
                    : event.clientX;
            this.startX = startX;
            this.prevTranslate = -this.currentIndex * this.adjustedSlideWidth;
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
                const currentX =
                    event.type === "touchmove"
                        ? event.touches[0].clientX
                        : event.clientX;
                const deltaX = currentX - this.startX;

                // Ajout de l'effet de rebond
                if (
                    (this.currentIndex === 0 && deltaX > 0) || // Limite gauche
                    (this.currentIndex === this.maxIndex && deltaX < 0) // Limite droite
                ) {
                    const bounce = deltaX / this.preview; // Réduire l'effet de mouvement
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
            // Calculer la position en incluant les gaps
            const totalGapOffset = this.currentIndex * this.gap;

            // Revenir à la position du slide actuel
            this.currentTranslate = -(
                this.currentIndex * this.adjustedSlideWidth +
                totalGapOffset
            );
        },
    },
    mounted() {
        this.preview = this.slidesPreview;
        this.adjustSlidesPreview();
        window.addEventListener("resize", this.adjustSlidesPreview);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.adjustSlidesPreview);
    },
};
</script>

<style>
/* .mask {
    -webkit-mask: linear-gradient(90deg, #0000, #000 10% 90%, #0000);
} */
</style>
