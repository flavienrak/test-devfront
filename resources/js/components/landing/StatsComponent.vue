<template>
    <div class="bg-accent-500 text-white py-20">
        <custom-container>
            <div class="flex justify-evenly flex-col lg:flex-row items-center">
                <section
                    v-for="item in stats"
                    :key="item.id"
                    class="max-w-[14rem]"
                >
                    <label
                        class="flex flex-col justify-center text-center items-center gap-4"
                    >
                        <component :is="item.icon" size="4rem" />
                        <p class="text-sm">
                            {{ item.label }}
                        </p>
                    </label>
                </section>
            </div>
        </custom-container>
    </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

import ListIcon from "@/components/icons/ListIcon.vue";
import PointerIcon from "@/components/icons/PointerIcon.vue";
import AccreditationIcon from "@/components/icons/AccreditationIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import CustomContainer from "@/components/utils/CustomContainer.vue";

export default {
    name: "StatsComponent",
    components: {
        ListIcon,
        PointerIcon,
        CustomContainer,
    },
    data() {
        return {
            stats: [
                {
                    id: uuidv4(),
                    label: "Repartez directement avec vos résultats de test psychotechnique",
                    icon: ListIcon,
                },
                {
                    id: uuidv4(),
                    label: "Entraînement en ligne pour garantir votre réussite",
                    icon: PointerIcon,
                },
                {
                    id: uuidv4(),
                    label: "Centre enregistré, psychologues certifiés et à l'écoute",
                    icon: AccreditationIcon,
                },
                {
                    id: uuidv4(),
                    label: "Taux de réussite de 97.8%",
                    icon: CheckIcon,
                },
            ],
        };
    },
};
</script>
