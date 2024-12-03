<template>
    <div ref="selectElement" class="relative w-full flex items-center">
        <input
            type="text"
            readonly
            :value="value"
            @click="isOpen = !isOpen"
            :placeholder="placeholder"
            class="bg-white rounded-md p-3 flex items-center text-sm text-[#1F2937] placeholder:text-[#1F2937] w-full h-10 cursor-default focus:outline-none"
        />
        <!-- Chevron Icon -->
        <i
            @click="isOpen = !isOpen"
            :class="[
                'absolute right-3 transition-transform duration-500 cursor-pointer text-[#1F2937]',
                isOpen ? 'rotate-180' : '',
            ]"
        >
            <chevron-down-icon size="20" />
        </i>

        <div
            :class="[
                'absolute w-full bg-white top-[110%] rounded-md cursor-pointer p-1 shadow z-10',
                isOpen ? '' : 'hidden',
            ]"
        >
            <component
                v-for="(item, index) in options"
                :is="item.href ? 'a' : 'label'"
                :href="item.href"
                target="_blank"
                :class="[
                    'text-sm px-2 py-[2px] rounded-sm flex',
                    value === item.label ? 'bg-gray-200' : 'hover:bg-gray-100',
                    item.href ? 'cursor-pointer' : 'cursor-default',
                ]"
                @click="onchange(item.label)"
            >
                {{ (index + 1).toString().padStart(2, "0") }} - {{ item.label }}
            </component>
        </div>
    </div>
</template>

<script>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";

export default {
    name: "CustomSelectComponent",
    components: { ChevronDownIcon },
    props: {
        placeholder: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
        },
        onclick: {
            type: Function,
            required: false,
        },
    },
    methods: {
        onchange(value) {
            this.isOpen = false;
            if (this.onclick) {
                this.onclick(value);
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
    data() {
        return {
            isOpen: false, // Gère l'état ouvert/fermé du select
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
};
</script>
