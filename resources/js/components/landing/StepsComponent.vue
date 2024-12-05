<template>
    <div class="bg-white py-20 lg:py-32 text-dark-500">
        <custom-container>
            <div class="flex flex-col gap-32">
                <!-- Etapes -->
                <section>
                    <div
                        class="flex flex-col-reverse lg:flex-row items-center gap-20"
                    >
                        <div class="w-full lg:w-2/5 flex justify-center">
                            <div
                                class="relative h-[32rem] w-[32rem] rounded-sm shadow-md"
                            >
                                <img
                                    :src="'/images/email.png'"
                                    alt="Email"
                                    class="absolute w-full h-full object-cover"
                                />
                                <div
                                    class="absolute w-40 h-40 top-5 -left-20 lg:left-auto lg:-right-20 z-10 rounded-full shadow-md"
                                >
                                    <img
                                        :src="'/images/person.jpg'"
                                        alt="Email"
                                        class="absolute w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex-1 py-5 flex flex-col gap-14 items-center"
                        >
                            <h1
                                class="font-title text-accent-500 font-semibold text-3xl"
                            >
                                Votre test psychotechnique en 3 étapes :
                            </h1>
                            <ul
                                class="relative flex flex-col gap-10 before:content-[''] before:absolute before:left-6 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent-500"
                            >
                                <li
                                    v-for="(item, index) in steps"
                                    :key="item.title"
                                    class="flex items-center gap-4 max-w-[36rem]"
                                >
                                    <p
                                        class="z-10 bg-white inline-flex w-12 h-12 min-w-12 min-h-12 justify-center text-accent-500 text-2xl font-bold items-center rounded-full shadow-md"
                                    >
                                        {{ index + 1 }}
                                    </p>
                                    <label>
                                        <p>
                                            <span class="font-bold">
                                                {{ item.title }}
                                            </span>
                                            {{ item.desc }}
                                        </p>
                                    </label>
                                </li>
                            </ul>
                            <custom-button
                                label="Je réserve mon test psychotechnique"
                                class="w-max bg-accent-500 text-white"
                            >
                                <i class="inline-flex px-2">
                                    <chevron-right-icon size="1.5rem" /> </i
                            ></custom-button>
                        </div>
                    </div>
                </section>

                <!-- Entrainnement -->
                <section>
                    <div class="flex flex-col lg:flex-row items-center gap-20">
                        <div class="flex-1 py-5 flex flex-col gap-14">
                            <h1
                                class="font-title text-accent-500 font-semibold text-3xl text-center lg:text-start"
                            >
                                Votre entraînement Gratuit inclus
                            </h1>
                            <ul class="relative flex flex-col gap-5">
                                <li
                                    class="flex items-center gap-4 max-w-[44rem]"
                                >
                                    <label>
                                        <p>
                                            <span class="font-bold">
                                                Pour vous préparez au mieux à
                                                votre test,
                                            </span>
                                            nous avons mis à votre disposition
                                            un entraînement des types de test
                                            que vous pouvez rencontrer lors de
                                            votre examen.
                                        </p>
                                    </label>
                                </li>
                                <li
                                    class="flex items-center gap-4 max-w-[44rem]"
                                >
                                    <label>
                                        <p>
                                            Pour avoir accès à cet entraînement
                                            rien de plus simple : Réservez votre
                                            test psychotechnique et vous
                                            recevrez par mail vos identifiants
                                            pour commencer à vous entraîner
                                            <span class="font-bold">
                                                en illimité !
                                            </span>
                                        </p>
                                    </label>
                                </li>
                                <li
                                    class="flex items-center gap-4 max-w-[44rem]"
                                >
                                    <label>
                                        <p>
                                            Ne laissez pas la peur vous freiner
                                            dans votre démarche, entrainez vous
                                            dès maintenant et soyez prêt pour le
                                            jour j.
                                        </p>
                                    </label>
                                </li>
                            </ul>
                            <div class="flex justify-center lg:justify-start">
                                <custom-button
                                    label="Je réserve mon test psychotechnique"
                                    class="w-max bg-accent-500 text-white"
                                >
                                    <i class="inline-flex px-2">
                                        <chevron-right-icon size="1.5rem" /> </i
                                ></custom-button>
                            </div>
                        </div>
                        <div class="w-full lg:w-2/5 flex justify-center">
                            <div
                                class="relative h-[32rem] w-[32rem] rounded-sm shadow-md"
                            >
                                <img
                                    :src="'/images/ordi.jpg'"
                                    alt="Ordi"
                                    class="absolute w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </custom-container>
    </div>
</template>
<script>
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";
import CustomButton from "@/components/utils/CustomButton.vue";
import CustomContainer from "@/components/utils/CustomContainer.vue";

export default {
    name: "StepsComponent",
    components: { ChevronRightIcon, CustomButton, CustomContainer },
    data() {
        return {
            steps: [
                {
                    title: "Réservez en ligne :",
                    desc: "Choisissez votre créneau horaire et votre psychologue agréé",
                },
                {
                    title: "Passez votre test :",
                    desc: "Vous serez accueilli par un de nos psychologues qui vous expliquera le déroulement du test. ",
                },
                {
                    title: "Recevez vos résultats :",
                    desc: "Vous recevrez vos résultats le jour même de votre test",
                },
            ],
        };
    },
};
</script>
