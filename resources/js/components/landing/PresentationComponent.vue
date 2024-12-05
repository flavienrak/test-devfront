<template>
    <div
        class="relative text-dark-500 overflow-hidden bg-[#f8f9fg] lg:shadow-md"
    >
        <div class="h-[0.625rem] hidden lg:block bg-accent-500 w-full"></div>
        <div class="lg:py-10">
            <div class="flex flex-col pb-0 lg:pb-[5.5rem] gap-10 lg:gap-5">
                <div class="shadow-md lg:shadow-none">
                    <custom-container>
                        <div
                            class="py-5 w-full flex justify-center lg:justify-start"
                        >
                            <div class="relative h-14 w-[25rem]">
                                <img
                                    :src="'/images/logo1.png'"
                                    alt="Logo"
                                    class="absolute top-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </custom-container>
                </div>
                <custom-container>
                    <div class="grid grid-cols-1 lg:grid-cols-2 :gap-5">
                        <!-- Texte -->
                        <section>
                            <div
                                class="relative z-10 flex flex-col items-center lg:items-start gap-10"
                            >
                                <div class="flex flex-col gap-[5px]">
                                    <h1
                                        class="relative text-3xl font-semibold font-title w-max leading-[1.5]"
                                    >
                                        Test psychotechnique :
                                        <br class="xl:hidden" />
                                        Récupérez votre permis
                                        <span
                                            class="absolute block bg-accent-500 h-1 w-44 right-0"
                                        ></span>
                                    </h1>
                                    <h1 class="text-2xl font-normal">
                                        Une démarche simple & rapide
                                    </h1>
                                </div>
                                <div class="flex flex-col gap-3 ms-4">
                                    <label
                                        v-for="item in demarches"
                                        for=""
                                        class="flex items-center gap-4"
                                    >
                                        <i class="text-[#08BF26]">
                                            <check-icon size="1.5rem" />
                                        </i>
                                        <p>{{ item }}</p>
                                    </label>
                                </div>
                                <div class="flex flex-col gap-10 w-max">
                                    <div class="flex flex-col gap-2 w-max">
                                        <custom-button
                                            label="Je réserve mon test psychotechnique"
                                            class="w-max bg-accent-500 text-white"
                                        >
                                            <i class="inline-flex px-2">
                                                <chevron-right-icon
                                                    size="1.5rem"
                                                /> </i
                                        ></custom-button>
                                        <label
                                            class="text-[0.9rem] inline-flex justify-center gap-2"
                                        >
                                            <p class="relative h-4 w-4">
                                                <img
                                                    :src="'/images/cursor.png'"
                                                    alt="Cursor"
                                                    class="absolute h-full w-full top-0"
                                                />
                                            </p>
                                            <p>Entraînement Gratuit inclus</p>
                                        </label>
                                    </div>

                                    <div
                                        class="grid grid-cols-2 auto-rows-max items-center justify-center gap-10"
                                    >
                                        <!-- Google -->
                                        <section>
                                            <div
                                                class="flex flex-col items-center justify-center gap-2"
                                            >
                                                <div class="relative h-6 w-6">
                                                    <img
                                                        :src="'/images/google.png'"
                                                        alt="Cursor"
                                                        class="absolute h-full w-full top-0"
                                                    />
                                                </div>
                                                <div
                                                    class="flex items-center gap-[2px]"
                                                >
                                                    <i
                                                        v-for="(
                                                            _, index
                                                        ) in Array.from({
                                                            length: 5,
                                                        })"
                                                        :key="'pr-' + index"
                                                        class="text-yellow-500"
                                                    >
                                                        <star-icon
                                                            size="1rem"
                                                        />
                                                    </i>
                                                </div>
                                                <p class="text-xs">
                                                    <span
                                                        class="font-bold text-xs"
                                                        >4.7 | 8.085</span
                                                    >
                                                    avis
                                                </p>
                                            </div>
                                        </section>

                                        <!-- Trust -->
                                        <section>
                                            <div
                                                class="flex flex-col justify-center gap-2"
                                            >
                                                <label
                                                    class="font-semibold text-xs inline-flex items-center gap-1"
                                                >
                                                    <i class="text-green-500">
                                                        <star-icon
                                                            size="1rem"
                                                        />
                                                    </i>
                                                    <p class="text-xs">
                                                        Trustpilot
                                                    </p>
                                                </label>
                                                <div
                                                    class="flex items-center gap-1"
                                                >
                                                    <i
                                                        v-for="(
                                                            _, index
                                                        ) in Array.from({
                                                            length: 5,
                                                        })"
                                                        :key="
                                                            'footer-star-' +
                                                            index
                                                        "
                                                        :class="[
                                                            'inline-flex justify-center items-center p-[0.2rem] text-white',
                                                            index === 4
                                                                ? 'bg-half-gradient'
                                                                : 'bg-green-500',
                                                        ]"
                                                        ><star-icon
                                                            size="0.75rem"
                                                    /></i>
                                                </div>
                                                <p class="text-[0.6rem]">
                                                    TrustScore
                                                    <span
                                                        class="font-bold text-[0.6rem]"
                                                        >4.7 | 8.085</span
                                                    >
                                                    avis
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Video -->
                        <section class="py-20 lg:py-0">
                            <div
                                class="relative h-full py-16 lg:py-0 xlgit:px-16 flex justify-center"
                            >
                                <div
                                    class="relative z-10 h-[25rem] w-[45rem] rounded-md shadow"
                                >
                                    <iframe
                                        :src="
                                            handleVideo(
                                                'https://www.youtube.com/watch?v=zmjPmzJFEFA'
                                            )
                                        "
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="h-full w-full rounded-xl"
                                    ></iframe>
                                </div>
                                <!-- <div
                                        class="absolute lg:-top-full lg:-right-[35%] w-[40rem] lg:w-[60rem] h-[35rem] lg:h-[56rem] -rotate-12 rounded-full bg-accent-500 shadow"
                                    ></div> -->
                                <div
                                    class="absolute -top-[40%] -right-[25%] lg:-top-[90%] lg:-right-[45%] h-full w-[67.5rem] lg:w-[70rem] text-accent-500"
                                >
                                    <video-shape />
                                </div>
                            </div>
                        </section>
                    </div>
                </custom-container>
            </div>
        </div>
    </div>
</template>
<script>
import CheckIcon from "@/components/icons/CheckIcon.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import CustomButton from "@/components/utils/CustomButton.vue";
import CustomContainer from "@/components/utils/CustomContainer.vue";
import VideoShape from "@/components/svg/VideoShape.vue";

export default {
    name: "PresentationComponent",
    components: {
        CheckIcon,
        StarIcon,
        ChevronRightIcon,
        CustomButton,
        VideoShape,
        CustomContainer,
    },
    methods: {
        handleVideo(link) {
            let newLink = link;
            let findLink = link.split(" ");
            for (let i = 0; i < findLink.length; i++) {
                if (
                    findLink[i].includes("https://www.yout") ||
                    findLink[i].includes("https://yout")
                ) {
                    const embed = findLink[i].replace("watch?v=", "embed/");
                    newLink = embed.split("&")[0];
                }
            }
            return newLink;
        },
    },
    data() {
        return {
            demarches: [
                "97.8% de réussite à l'examen psychotechnique",
                "Recevez vos résultats le jour de votre test",
                "Centre enregistré, psychologues certifiés",
            ],
        };
    },
};
</script>
