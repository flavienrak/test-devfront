<template>
    <div class="bg-white py-16 lg:py-32">
        <custom-container>
            <div
                class="w-full flex flex-col gap-10 py-14 px-10 lg:px-20 shadow-md bg-white rounded-xl"
            >
                <h1 class="font-title text-primary-500 font-semibold text-3xl">
                    Préparez votre test psychotechnique
                </h1>
                <div>
                    <div
                        class="accordion-item"
                        v-for="(item, index) in prepa"
                        :key="index"
                    >
                        <div
                            :class="[
                                'flex justify-between items-center py-4 text-dark-400',
                                index !== prepa.length - 1
                                    ? 'border-b border-dark-50 shadow-sm'
                                    : '',
                            ]"
                            @click="toggle(index)"
                        >
                            <h3 class="text-lg cursor-default">
                                {{ item.title }}
                            </h3>
                            <i
                                v-if="active.includes(index)"
                                class="cursor-pointer text-dark-300"
                            >
                                <minus-icon size="1.5rem" />
                            </i>
                            <i v-else class="cursor-pointer text-dark-300">
                                <plus-icon size="1.5rem" />
                            </i>
                        </div>
                        <div
                            :class="[
                                'accordion-content px-5 flex items-center bg-gray-100 text-sm text-gray-700 rounded-sm transition-all duration-300',
                                active.includes(index)
                                    ? 'h-16'
                                    : 'h-0 overflow-hidden',
                            ]"
                        >
                            <p>
                                {{ item.content }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </custom-container>
    </div>
</template>
<script>
import PlusIcon from "@/components/icons/PlusIcon.vue";
import MinusIcon from "@/components/icons/MinusIcon.vue";
import CustomContainer from "@/components/utils/CustomContainer.vue";

export default {
    name: "PreparationComponent",
    components: {
        PlusIcon,
        MinusIcon,
        CustomContainer,
    },
    data() {
        return {
            prepa: [
                {
                    title: "Qu'est-ce qu'un test psychotechnique ?",
                    content:
                        "Un test psychotechnique est une évaluation des aptitudes cognitives et comportementales, souvent utilisée pour valider ou reprendre un permis de conduire.",
                },
                {
                    title: "Quels sont les documents nécessaires ?",
                    content:
                        "Les documents incluent une pièce d'identité, votre courrier d'annulation de permis, et votre attestation d'inscription.",
                },
                {
                    title: "Combien de temps dure le test ?",
                    content:
                        "Le test dure en moyenne 45 minutes, incluant des exercices et des discussions avec un psychologue agréé.",
                },
            ],
            active: [],
        };
    },
    methods: {
        toggle(index) {
            // Si l'index est déjà actif, on le retire
            if (this.active.includes(index)) {
                this.active = this.active.filter((item) => item !== index);
            } else {
                // Sinon, on l'ajoute
                this.active = [...this.active, index];
            }
        },
    },
};
</script>
