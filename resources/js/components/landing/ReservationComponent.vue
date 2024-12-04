<template>
    <div class="p-32 bg-[#F8F9FB]">
        <custom-container>
            <div class="flex flex-col gap-14">
                <div>
                    <h1
                        class="font-title text-accent-500 font-semibold text-3xl leading-[2]"
                    >
                        Réservez votre test proche de chez vous
                    </h1>
                    <h1 class="font-title text-accent-500 text-xl">
                        En seulement 3 étapes
                    </h1>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="relative flex items-center">
                        <i class="absolute text-dark-300 left-7">
                            <location-icon size="32" />
                        </i>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            class="h-[5.5rem] w-full rounded-[2rem] px-20 shadow-md outline-none text-lg"
                        />
                        <div class="flex absolute right-3 items-center gap-5">
                            <i class="text-dark-300 cursor-pointer">
                                <send-icon size="28" />
                            </i>
                            <button
                                class="bg-primary-500 flex justify-center items-center px-8 py-5 rounded-3xl"
                            >
                                <p class="text-base text-white uppercase">
                                    Rechercher
                                </p>
                            </button>
                        </div>
                    </div>
                    <div
                        class="bg-[#E9E9E9] rounded-md shadow p-6 grid grid-cols-4 gap-20"
                    >
                        <div class="flex justify-center items-center">
                            <reservation-select
                                label="Filtrer par mois"
                                :options="months"
                            />
                        </div>
                        <div class="flex justify-center items-center">
                            <reservation-select
                                label="Filtrer par jour"
                                :options="days"
                            />
                        </div>
                        <div class="flex justify-center items-center">
                            <reservation-select
                                label="Filtrer par demi-journée"
                                :options="journey"
                            />
                        </div>
                        <div class="flex flex-col gap-2 justify-center ps-20">
                            <button
                                class="bg-[#434343] flex justify-center items-center px-16 py-2 rounded-md"
                            >
                                <p class="text-white uppercase text-sm">
                                    Filtrer
                                </p>
                            </button>
                            <p
                                class="text-center text-xs text-primary-500 underline cursor-pointer"
                            >
                                Réinitialiser les filtres
                            </p>
                        </div>
                    </div>
                    <div class="py-10 flex flex-col gap-5">
                        <label class="inline-flex items-center gap-1">
                            <i class="text-primary-500">
                                <spinner-icon size="32" />
                            </i>
                            <p class="text-xl pt-1">Recherche en cours</p>
                        </label>
                        <div>
                            <progress-bar progress="50" />
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-14">
                        <div class="col-span-3 flex flex-col gap-5">
                            <reservation-card
                                day="Lundi"
                                date="04 Novembre 2024"
                                location="50 avenue d'Essômes, 02400 Château-Thierry"
                                number="02"
                                assignation="Château-Thierry"
                            />
                            <reservation-card
                                day="Lundi"
                                date="04 Novembre 2024"
                                location="50 avenue d'Essômes, 02400 Château-Thierry"
                                number="05"
                                assignation="Château-Thierry"
                            />
                            <reservation-card
                                day="Lundi"
                                date="04 Novembre 2024"
                                location="50 avenue d'Essômes, 02400 Château-Thierry"
                                number="02"
                                assignation="Château-Thierry"
                            />
                            <reservation-card
                                day="Lundi"
                                date="04 Novembre 2024"
                                location="50 avenue d'Essômes, 02400 Château-Thierry"
                                number="05"
                                assignation="Château-Thierry"
                            />
                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="bg-white shadow-md rounded-md">
                                <h1
                                    class="bg-primary-500 flex justify-center items-center py-2 rounded-t-md text-white"
                                >
                                    Les tests par ville à Aisne (02)
                                </h1>
                                <div class="p-5 grid grid-cols-2 gap-5">
                                    <label
                                        class="shadow px-2 py-2.5 flex justify-center items-center bg-gray-100 rounded-lg text-xs"
                                        >Château-Thierry</label
                                    >
                                    <label
                                        class="shadow px-2 py-2.5 flex justify-center items-center bg-gray-100 rounded-lg text-xs"
                                        >Saint-Quentin</label
                                    >
                                </div>
                            </div>
                            <div
                                class="relative p-5 rounded-lg shadow-md bg-white flex justify-center items-center flex-col gap-2"
                            >
                                <i class="absolute left-4 cursor-pointer">
                                    <chevron-left-icon size="24" />
                                </i>
                                <i class="text-[#00D26A]">
                                    <check-icon size="32" />
                                </i>
                                <p class="text-3xl font-bold">97,7%</p>
                                <label class="text-center">
                                    Taux de réussite <br />
                                    à nos tests psychotechniques
                                </label>
                                <i class="absolute right-4 cursor-pointer">
                                    <chevron-right-icon size="24" />
                                </i>
                            </div>

                            <div class="grid grid-cols-2 auto-rows-max gap-5">
                                <!-- Google -->
                                <section>
                                    <div
                                        class="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-md h-full"
                                    >
                                        <div class="relative h-6 w-6">
                                            <img
                                                :src="'/images/google.png'"
                                                alt="Cursor"
                                                class="absolute h-full w-full top-0"
                                            />
                                        </div>
                                        <div
                                            class="flex items-center gap-[1px]"
                                        >
                                            <i
                                                v-for="(_, index) in Array.from(
                                                    {
                                                        length: 5,
                                                    }
                                                )"
                                                :key="'pr-' + index"
                                                class="text-yellow-500"
                                            >
                                                <star-icon size="14" />
                                            </i>
                                        </div>
                                        <p class="text-[0.5rem]">
                                            <span
                                                class="font-bold text-[0.5rem]"
                                                >4.7 | 8.085</span
                                            >
                                            avis
                                        </p>
                                    </div>
                                </section>

                                <!-- Trust -->
                                <section>
                                    <div
                                        class="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg shadow-md h-full"
                                    >
                                        <label
                                            class="font-semibold text-xs inline-flex items-center gap-1"
                                        >
                                            <i class="text-green-500">
                                                <star-icon size="16" />
                                            </i>
                                            <p>Trustpilot</p>
                                        </label>
                                        <div
                                            class="flex items-center gap-[2px]"
                                        >
                                            <i
                                                v-for="(_, index) in Array.from(
                                                    {
                                                        length: 5,
                                                    }
                                                )"
                                                :key="'footer-star-' + index"
                                                :class="[
                                                    'inline-flex justify-center items-center p-1 text-white',
                                                    index === 4
                                                        ? 'bg-half-gradient'
                                                        : 'bg-green-500',
                                                ]"
                                                ><star-icon size="10"
                                            /></i>
                                        </div>
                                        <p class="text-[0.5rem]">
                                            TrustScore
                                            <span
                                                class="font-bold text-[0.5rem]"
                                                >4.7 | 8.085</span
                                            >
                                            avis
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div
                                class="relative w-full h-40 rounded-xl shadow-md"
                            >
                                <img
                                    :src="'/images/voiture.jpg'"
                                    alt="Voiture"
                                    class="absolute object-cover h-full w-full top-0 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </custom-container>
    </div>
</template>
<script>
import SendIcon from "@/components/icons/SendIcon.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import ReservationSelect from "@/components/utils/ReservationSelect.vue";
import SpinnerIcon from "@/components/icons/SpinnerIcon.vue";
import ProgressBar from "@/components/utils/ProgressBar.vue";
import CustomButton from "@/components/utils/CustomButton.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";
import ReservationCard from "@/components/landing/ReservationCard.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import CustomContainer from "@/components/utils/CustomContainer.vue";

export default {
    name: "ReservationComponent",
    components: {
        SendIcon,
        SpinnerIcon,
        ChevronDownIcon,
        ReservationSelect,
        ProgressBar,
        CustomButton,
        ChevronRightIcon,
        ReservationCard,
        CheckIcon,
        ChevronLeftIcon,
        StarIcon,
        CustomContainer,
    },
    data() {
        return {
            months: [], // Liste des mois
            selectedMonths: [], // Mois sélectionnés
            days: [], // Liste des jours
            selectedDays: [], // Jours sélectionnés
            journey: ["Matin", "Midi", "Soir"], // Liste des jours
            selectedJourney: [], // Jours sélectionnés
        };
    },
    mounted() {
        this.months = Array.from({ length: 12 }, (_, index) => {
            const month = new Intl.DateTimeFormat("fr-FR", {
                month: "long",
            }).format(new Date(0, index));
            return month.charAt(0).toUpperCase() + month.slice(1);
        });
        this.days = Array.from({ length: 7 }, (_, index) => {
            const day = new Intl.DateTimeFormat("fr-FR", {
                weekday: "long",
            }).format(new Date(2023, 0, index + 2)); // Index + 2 pour commencer à partir de lundi
            return day.charAt(0).toUpperCase() + day.slice(1); // Mettre la première lettre en majuscule
        });
    },

    methods: {},
};
</script>
