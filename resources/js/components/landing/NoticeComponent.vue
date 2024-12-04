<template>
    <div
        ref="container"
        class="px-32 pb-32 pt-16 bg-[#F8F9FB] flex flex-col gap-16 text-dark-500"
    >
        <h1 class="font-title text-accent-500 font-semibold text-3xl">
            Ce qu'en pensent nos candidats
        </h1>
        <div
            class="grid grid-cols-6 gap-10 items-center bg-white rounded-xl shadow-md py-10 px-20"
        >
            <div class="flex flex-col items-center justify-center gap-2">
                <p class="font-bold text-xl">Excellent</p>
                <div class="flex items-center gap-[2px]">
                    <i
                        v-for="(_, index) in Array.from({
                            length: 5,
                        })"
                        :key="'pr-' + index"
                        class="text-yellow-500"
                    >
                        <star-icon size="24" />
                    </i>
                </div>
                <p class="text-xs">
                    Based on
                    <a
                        href="https://fr.trustpilot.com/review/aaaep.fr"
                        target="_blank"
                    >
                        <span class="font-bold text-xs underline cursor-pointer"
                            >404 reviews</span
                        >
                    </a>
                </p>
                <div class="relative h-7 w-20">
                    <img
                        :src="'/images/google-lg.webp'"
                        alt="Cursor"
                        class="absolute h-full w-full top-0"
                    />
                </div>
            </div>
            <div class="col-span-5">
                <slider-component
                    slidesPreview="3"
                    gap="20"
                    :items="slides.length"
                >
                    <section
                        v-for="(_, index) in slides"
                        :key="'slide-' + index"
                        class="select-none"
                    >
                        <div class="bg-[#F4F4F4] p-4 rounded-md">
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="relative h-8 min-h-8 w-8 min-w-8 rounded-full"
                                    >
                                        <img
                                            :src="'/images/profil.jpg'"
                                            alt="Profil"
                                            class="absolute top-0 h-full w-full rounded-full"
                                        />
                                    </div>
                                    <label>
                                        <p class="font-bold">Daniele</p>
                                        <p class="text-xs text-dark-300">
                                            4 Décembre 2024
                                        </p>
                                    </label>
                                </div>
                                <div class="flex items-center gap-[1px]">
                                    <i
                                        v-for="(_, index) in Array.from({
                                            length: 5,
                                        })"
                                        :key="'pr-' + index"
                                        class="text-yellow-500"
                                    >
                                        <star-icon size="14" />
                                    </i>
                                </div>
                                <label
                                    class="line-clamp-4 text-sm leading-[1.5]"
                                    >Si vous utilisez un outil de bundling comme
                                    Webpack, Vite ou PostCSS, n'oubliez pas de
                                    redémarrer votre processus de construction
                                    (ou de compiler à nouveau) pour que Tailwind
                                    prenne en compte les nouvelles
                                    configurations.
                                </label>
                                <a
                                    href="#"
                                    class="text-xs text-dark-300 hover:underline"
                                    >Read more
                                </a>
                            </div>
                        </div>
                    </section>
                </slider-component>
            </div>
        </div>
    </div>
</template>
<script>
import StarIcon from "@/components/icons/StarIcon.vue";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";
import SliderComponent from "@/components/landing/SliderComponent.vue";

export default {
    name: "NoticeComponent",
    components: {
        StarIcon,
        ChevronRightIcon,
        ChevronLeftIcon,
        SliderComponent,
    },
    data() {
        return {
            slidesPreview: 3,
            slides: Array.from({ length: 5 }),
            slideWidth: 300,
        };
    },
};
</script>
