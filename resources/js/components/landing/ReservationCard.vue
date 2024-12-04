<template>
    <div class="bg-white rounded-xl shadow-md grid grid-cols-4">
        <div class="col-span-3 flex flex-col">
            <div
                class="py-5 ms-5 flex items-end gap-4 border-b border-dark-100 w-max"
            >
                <h1 class="text-lg w-[11.5rem]">
                    {{ day }} <br />
                    {{ date }}
                </h1>
                <label class="flex items-center gap-2 text-lg">
                    <i class="text-dark-400">
                        <location-icon
                            :fill="'currentColor'"
                            :stroke="'white'"
                            size="28"
                        />
                    </i>
                    {{ location }}
                </label>
            </div>
            <div class="p-5 flex gap-4">
                <label
                    class="inline-flex px-6 py-2.5 rounded-sm bg-gray-50 justify-center items-center gap-2 text-accent-500"
                    ><span class="font-bold">{{ number }} </span>
                    <span>{{ assignation }}</span></label
                >

                <p
                    class="text-[#B90909] text-xs inline-flex gap-2 font-semibold"
                >
                    <i>
                        <alert-icon
                            size="20"
                            :fill="'currentColor'"
                            :stroke="'white'"
                        />
                    </i>
                    <span class="mt-1">Dernière places à cette date</span>
                </p>
            </div>
        </div>
        <div
            class="flex flex-col items-center gap-2 py-5 justify-center border-l-2 border-dark-100"
        >
            <h1>
                <span class="font-bold text-3xl">77€</span>
                {{ " " }}
                <span class="line-through text-dark-400">120€</span>
            </h1>
            <p class="text-xs">Après remboursement*</p>
            <button
                class="ps-[2rem] py-3 pe-[1rem] rounded-md shadow inline-flex items-center w-max bg-accent-500 text-white px-20"
            >
                <p>RESERVER</p>
                <i class="inline-flex px-2">
                    <chevron-right-icon size="24" />
                </i>
            </button>
            <p class="text-xs">3 places disponibles à cette date</p>
        </div>
    </div>
</template>
<script>
import LocationIcon from "@/components/icons/LocationIcon.vue";
import AlertIcon from "@/components/icons/AlertIcon.vue";

export default {
    name: "ReservationCard",
    components: { LocationIcon, AlertIcon },
    props: {
        day: {
            type: String,
            required: true,
        },
        date: {
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
