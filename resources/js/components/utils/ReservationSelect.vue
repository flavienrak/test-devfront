<template>
    <div
        ref="selectElement"
        class="relative inline-flex items-center border-y border-dark-300 text-dark-500 shadow-y-sm"
    >
        <div
            @click="isOpen = !isOpen"
            class="cursor-default select-none pe-10 py-2"
        >
            {{ label }}
        </div>
        <i
            @click="isOpen = !isOpen"
            :class="[
                'transition-transform duration-500 cursor-pointer',
                isOpen ? 'rotate-180' : '',
            ]"
            ><chevron-down-icon size="18"
        /></i>
        <div
            :class="[
                'absolute w-full bg-[#E9E9E9] top-[calc(100%+1px)] rounded-b-sm cursor-pointer p-1 transition-[height] duration-500',
                isOpen
                    ? 'h-auto border border-dark-200 shadow z-10'
                    : 'h-0 p-0 border-none shadow-none overflow-hidden pointer-events-none',
            ]"
        >
            <p
                v-for="item in options"
                :key="item"
                :class="[
                    'rounded-sm px-2',
                    selected.includes(item)
                        ? 'bg-dark-200 cursor-default'
                        : 'hover:bg-dark-100',
                ]"
                @click="handleSelected(item)"
            >
                {{ item }}
            </p>
        </div>
    </div>
</template>
<script>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";

export default {
    name: "ReservationSelect",
    props: {
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
    },
    components: {
        ChevronDownIcon,
    },
    data() {
        return {
            isOpen: false, // Gère l'état ouvert/fermé du select
            selected: [], // Mois sélectionnés
        };
    },
    mounted() {
        // Ajouter un écouteur d'événements global sur window
        window.addEventListener("click", this.handleOutsideClick);
    },
    beforeDestroy() {
        // Supprimer l'écouteur d'événements avant que le composant ne soit détruit
        window.removeEventListener("click", this.handleOutsideClick);
    },
    methods: {
        handleSelected(option) {
            if (this.selected.includes(option)) {
                this.selected = this.selected.filter((m) => m !== option);
            } else {
                // Sinon, on l'ajoute
                this.selected = [...this.selected, option];
            }
        },
        handleOutsideClick(event) {
            if (
                this.$refs.selectElement &&
                !this.$refs.selectElement.contains(event.target)
            ) {
                // Si le clic est à l'extérieur, fermer le menu
                this.isOpen = false;
            }
        },
    },
};
</script>
