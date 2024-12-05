<template>
    <div class="bg-white rounded-xl shadow-md flex">
        <div class="flex-1 flex flex-col max-w-2/3">
            <div
                class="py-5 ms-5 flex items-center lg:items-end flex-col lg:flex-row gap-4 border-b border-dark-100 w-max"
            >
                <h1 class="inline-flex text-lg w-full lg:w-auto">
                    {{ date }}
                </h1>
                <label class="flex items-center flex-wrap gap-2 text-lg">
                    <i class="text-dark-400">
                        <location-icon
                            :fill="'currentColor'"
                            :stroke="'white'"
                            size="1.75rem"
                        />
                    </i>
                    <span>
                        {{ location }}
                    </span>
                    <span class="hidden xl:inline">{{ `, ${adresse}` }}</span>
                </label>
            </div>
            <div class="p-5 flex gap-4 flex-col lg:flex-row">
                <label
                    class="w-max inline-flex px-4 lg:px-6 py-2 lg:py-2.5 rounded-sm bg-gray-50 justify-center items-center gap-2 text-accent-500"
                    ><span class="font-bold text-base">{{ number }} </span>
                    <span class="text-base">{{ assignation }}</span></label
                >

                <p
                    class="text-[#B90909] text-xs inline-flex gap-2 font-semibold"
                >
                    <i>
                        <alert-icon
                            size="1.25rem"
                            :fill="'currentColor'"
                            :stroke="'white'"
                        />
                    </i>
                    <span class="mt-1 text-base"
                        >Dernière places à cette date</span
                    >
                </p>
            </div>
        </div>
        <div
            class="flex flex-col items-center gap-2 p-5 justify-center lg:border-l-2 border-dark-100"
        >
            <h1>
                <span class="font-bold text-3xl">77€</span>
                {{ " " }}
                <span class="line-through text-dark-400 text-base">120€</span>
            </h1>
            <p class="text-xs">Après remboursement*</p>
            <button
                class="py-1 lg:py-3 rounded-md shadow inline-flex justify-center items-center bg-accent-500 text-white px-2 lg:px-10"
            >
                <p class="text-base">RESERVER</p>
                <i class="inline-flex ps-1 lg:px-2">
                    <chevron-right-icon size="1.5rem" />
                </i>
            </button>
            <p class="text-xs text-center">3 places disponibles à cette date</p>
        </div>
    </div>
</template>
<script>
import LocationIcon from "@/components/icons/LocationIcon.vue";
import AlertIcon from "@/components/icons/AlertIcon.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";

export default {
    name: "ReservationCard",
    components: { LocationIcon, AlertIcon, ChevronRightIcon },
    props: {
        date: {
            type: String,
            required: true,
        },
        adresse: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        assignation: {
            type: String,
            required: true,
        },
    },
};
</script>
