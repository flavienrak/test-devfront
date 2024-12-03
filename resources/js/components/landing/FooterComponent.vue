<template>
    <footer class="bg-gray-200 text-dark-500 font-sans text-xs">
        <div class="flex flex-col gap-10">
            <div>
                <p class="font-medium py-2 px-10 text-secondary">
                    * Le prix barré affiché représente le tarif maximum auquel
                    le test psychotechnique a été vendu dans le département au
                    cours des 15 derniers jours, hors offre de remboursement de
                    50€ avec Stych, notre partenaire auto-école en ligne.
                </p>
                <div class="bg-dark-500 py-4 flex justify-center">
                    <label
                        class="text-lg text-white text-center font-medium inline-flex items-center gap-4"
                    >
                        <p>
                            Sur 8027 avis clients, AAAEP.fr a obtenu la note de
                        </p>
                        <p class="inline-flex items-center gap-[2px]">
                            <i
                                v-for="(_, index) in Array.from({ length: 5 })"
                                :key="'footer-star-' + index"
                                :class="[
                                    'inline-flex justify-center items-center p-1 text-white',
                                    index === 4
                                        ? 'bg-half-gradient'
                                        : 'bg-green-500',
                                ]"
                                ><star-icon size="16"
                            /></i>
                        </p>
                        <p class="font-semibold text-xl">4.4/5</p>
                        <p>
                            Voir tous les avis clients
                            <a
                                href="https://aaaep.fr"
                                target="_blank"
                                class="hover:underline"
                                >aaaep.fr</a
                            >
                        </p>
                    </label>
                </div>
            </div>

            <div class="px-10 grid grid-cols-4 gap-5">
                <!-- section 1 -->
                <section class="flex flex-col gap-4">
                    <h1 class="font-semibold text-base">
                        <a
                            href="https://www.aaaep.fr/tests-psychotechniques.php"
                            target="_blank"
                        >
                            Tous les tests psychotechnique
                        </a>
                    </h1>
                    <ul class="flex flex-col gap-1">
                        <li
                            v-for="item in tests"
                            :key="item.label"
                            class="ms-5"
                        >
                            <a
                                :href="item.href"
                                target="_blank"
                                class="inline-flex items-center gap-1 text-sm"
                            >
                                <double-chevron-icon size="12" />{{
                                    item.label
                                }}
                                ({{ item.num }})
                            </a>
                        </li>
                    </ul>
                </section>

                <!-- section 2 -->
                <section>
                    <div class="flex flex-col gap-4">
                        <h1 class="font-semibold text-base">
                            <a
                                href="https://www.aaaep.fr/aaaep/demarches-recuperer-permis-apres-tests-psychotechniques.html"
                                target="_blank"
                            >
                                Récupérer son permis
                            </a>
                        </h1>
                        <div class="flex flex-col gap-3">
                            <h1 class="font-semibold text-base">
                                <a
                                    href="https://www.aaaep.fr/aaaep/demarches-recuperer-permis-apres-tests-psychotechniques.html"
                                    target="_blank"
                                >
                                    Test psychotechnique permis
                                </a>
                            </h1>
                            <ul class="flex flex-col gap-1">
                                <li
                                    v-for="item in permis"
                                    :key="item.label"
                                    class="ms-5"
                                >
                                    <a
                                        :href="item.href"
                                        target="_blank"
                                        class="inline-flex items-center gap-1 text-sm"
                                    >
                                        <double-chevron-icon size="12" />{{
                                            item.label
                                        }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h1 class="font-semibold text-base">
                                <a
                                    href="https://www.aaaep.fr/aaaep/entrainement-test-psychotechnique-permis.php"
                                    target="_blank"
                                >
                                    Entraînement au test psychotechnique
                                </a>
                            </h1>
                            <ul class="flex flex-col gap-1">
                                <li
                                    v-for="item in training"
                                    :key="item.label"
                                    class="ms-5"
                                >
                                    <a
                                        :href="item.href"
                                        target="_blank"
                                        class="inline-flex items-center gap-1 text-sm"
                                    >
                                        <double-chevron-icon size="12" />{{
                                            item.label
                                        }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <h1 class="font-semibold text-base">
                            <a
                                href="https://www.aaaep.fr/aaaep/permis-conduire.html"
                                target="_blank"
                            >
                                Législation du Permis de conduire
                            </a>
                        </h1>

                        <h1 class="font-semibold text-base">
                            <a
                                href="https://www.aaaep.fr/blog-tests-psychotechniques/"
                                target="_blank"
                            >
                                Blog de Test Psychotechnique pour Permis de
                                Conduire
                            </a>
                        </h1>
                    </div>
                </section>

                <!-- section 3 -->
                <section>
                    <div class="flex flex-col gap-4">
                        <h1 class="font-semibold text-base">
                            <a
                                href="https://www.aaaep.fr/aaaep/questions-frequentes-test-psychotechnique-pour-permis.html"
                                target="_blank"
                            >
                                Questions sur le test psychotechnique
                            </a>
                        </h1>
                        <div class="flex flex-col gap-3">
                            <h1 class="font-semibold text-base">
                                <a
                                    href="https://www.aaaep.fr/aaaep/visite-medicale-et-test-psychotechnique.html"
                                    target="_blank"
                                >
                                    Visite Médicale pour permis
                                </a>
                            </h1>
                            <ul class="flex flex-col gap-1">
                                <li
                                    v-for="item in visitMed"
                                    :key="item.label"
                                    class="ms-5"
                                >
                                    <a
                                        :href="item.href"
                                        target="_blank"
                                        class="inline-flex items-center gap-1 text-sm"
                                    >
                                        <double-chevron-icon size="12" />{{
                                            item.label
                                        }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h1 class="font-semibold text-base">
                                <a
                                    href="https://www.aaaep.fr/aaaep/entrainement-test-psychotechnique-permis.php"
                                    target="_blank"
                                >
                                    Tests psychotechniques professionnels
                                </a>
                            </h1>
                            <ul class="flex flex-col gap-1">
                                <li
                                    v-for="item in testPro"
                                    :key="item.label"
                                    class="ms-5"
                                >
                                    <a
                                        :href="item.href"
                                        target="_blank"
                                        class="inline-flex items-center gap-1 text-sm"
                                    >
                                        <double-chevron-icon size="12" />{{
                                            item.label
                                        }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- section 4 -->
                <section>
                    <Form @submit="onSubmit">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-3">
                                <h1 class="font-semibold text-base">
                                    Les Tests par Départements
                                </h1>
                                <custom-select
                                    :value="departmentField.value"
                                    :onclick="handleChangeDepartement"
                                    :placeholder="'Choisir un département'"
                                    :options="departmentField.options"
                                />
                            </div>
                            <div class="flex flex-col gap-3">
                                <h1 class="font-semibold text-base">
                                    Les Préfectures de France
                                </h1>
                                <custom-select
                                    :value="prefectureField.value"
                                    :onclick="handleChangePrefecture"
                                    :placeholder="'Choisir un département'"
                                    :options="prefectureField.options"
                                />
                            </div>

                            <div class="flex flex-col gap-3">
                                <h1 class="font-semibold text-base">
                                    Paiement Sécurisé
                                </h1>
                                <div
                                    class="flex h-[5.5rem] w-40 relative rounded-md bg-white p-2"
                                >
                                    <div class="relative h-full w-full">
                                        <a
                                            href="https://www.cmcicpaiement.fr/fr/faq/securite/"
                                            target="_blank"
                                        >
                                            <img
                                                :src="'/images/cic-paiement-securise-2.png'"
                                                alt="Payement"
                                                class="absolute top-0 w-full h-full object-contain rounded-md"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h1 class="font-semibold text-base">
                                <a
                                    href="https://www.aaaep.fr/controle"
                                    target="_blank"
                                >
                                    Contrôlez votre résultat
                                </a>
                            </h1>
                        </div>
                    </Form>
                </section>
            </div>

            <div class="flex justify-center gap-2 flex-col">
                <div class="flex justify-center gap-2">
                    <label
                        v-for="item in ext"
                        :key="item.label"
                        class="px-2 bg-white w-40 h-12 rounded-md"
                    >
                        <a
                            :href="item.href"
                            class="flex relative h-full w-full"
                        >
                            <img
                                :src="item.src"
                                alt=""
                                class="absolute w-full h-full top-0 object-contain"
                            />
                        </a>
                    </label>
                </div>
                <p class="text-center text-xs">
                    * Liens externes menant sur des sites gouvernementaux
                    non-affiliés à AAAEP.
                </p>
            </div>

            <div
                class="bg-dark-500 px-10 py-4 flex justify-between items-center"
            >
                <div>
                    <label
                        v-for="(item, index) in links"
                        :key="item.label"
                        for=""
                        class="inline-flex text-gray-200 hover:text-white font-medium text-sm leading-[1.6]"
                    >
                        <span
                            :class="[
                                index === 0 ? 'hidden' : 'inline-flex px-2',
                            ]"
                        >
                            -
                        </span>
                        <a
                            :href="item.href"
                            target="_blank"
                            class="border-b border-dotted"
                        >
                            {{ item.label }}</a
                        >
                    </label>
                </div>
                <label
                    class="text-gray-200 hover:text-white inline-flex items-center gap-4"
                >
                    <a
                        v-for="item in socials"
                        :key="item.label"
                        :href="item.href"
                    >
                        <i
                            class="flex justify-center items-center p-1 rounded-sm bg-gray-200 hover:bg-white text-dark-500"
                        >
                            <component :is="item.icon" size="14" />
                        </i>
                    </a>
                </label>
            </div>
        </div>
    </footer>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import StarIcon from "@/components/icons/StarIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import DoubleChevronIcon from "@/components/icons/DoubleChevronIcon.vue";
import CustomSelect from "@/components/utils/CustomSelect.vue";

export default {
    name: "FooterComponent",
    components: {
        StarIcon,
        FacebookIcon,
        InstagramIcon,
        TwitterIcon,
        YoutubeIcon,
        LinkedInIcon,
        DoubleChevronIcon,
        CustomSelect,
    },
    data() {
        return {
            ext: [
                {
                    label: "Legifrance",
                    href: "https://www.legifrance.gouv.fr/",
                    src: "/images/legifrance.jpg",
                },
                {
                    label: "Gouvernement",
                    href: "https://www.gouvernement.fr/",
                    src: "/images/gouvernement-fr.jpg",
                },
                {
                    label: "Service Publique",
                    href: "https://connexion.mon.service-public.fr/auth/0?spid=https://portail.msp.gouv.fr&minlvl=1&mode=0&failure_id=0",
                    src: "/images/mon-service-public-fr.jpg",
                },
                {
                    label: "France FR",
                    href: "https://www.france.fr/",
                    src: "/images/france-fr.jpg",
                },
                {
                    label: "Bloctel",
                    href: "http://www.bloctel.gouv.fr/",
                    src: "/images/bloctel.png",
                },
            ],
            tests: [
                {
                    label: `Test psychotechnique Val-d'Oise`,
                    num: 95,
                    href: "https://www.aaaep.fr/test-psychotechnique/95/val-d-oise",
                },
                {
                    label: `Test psychotechnique Nord`,
                    num: 59,
                    href: "https://www.aaaep.fr/test-psychotechnique/59/nord",
                },
                {
                    label: `Test psychotechnique Seine-et-Marne`,
                    num: 77,
                    href: "https://www.aaaep.fr/test-psychotechnique/77/seine-et-marne",
                },
                {
                    label: `Test psychotechnique Isère`,
                    num: 38,
                    href: "https://www.aaaep.fr/test-psychotechnique/38/isere",
                },
                {
                    label: `Test psychotechnique Rhône`,
                    num: 69,
                    href: "https://www.aaaep.fr/test-psychotechnique/69/rhone",
                },
                {
                    label: `Test psychotechnique Essonne`,
                    num: 91,
                    href: "https://www.aaaep.fr/test-psychotechnique/91/essonne",
                },
                {
                    label: `Test psychotechnique Yvelines`,
                    num: 78,
                    href: "https://www.aaaep.fr/test-psychotechnique/78/yvelines",
                },
                {
                    label: `Test psychotechnique Gironde`,
                    num: 33,
                    href: "https://www.aaaep.fr/test-psychotechnique/33/gironde",
                },
                {
                    label: `Test psychotechnique Bouches-du-Rhône`,
                    num: 13,
                    href: "https://www.aaaep.fr/test-psychotechnique/13/bouches-du-rhone",
                },
                {
                    label: `Test psychotechnique Loire-Atlantique`,
                    num: 44,
                    href: "https://www.aaaep.fr/test-psychotechnique/44/loire-atlantique",
                },
            ],
            training: [
                {
                    label: `Conseil Pratique au Test Psychotechnique`,
                    href: "https://www.aaaep.fr/aaaep/preparation-conseil-entrainement-grauit-test-psychotechnique-permis.html",
                },
            ],
            visitMed: [
                {
                    label: `Ma préfecture et moi`,
                    href: "https://www.aaaep.fr/aaaep/preparation-conseil-entrainement-grauit-test-psychotechnique-permis.html",
                },
                {
                    label: `Où trouver mon médecin agréé ?`,
                    href: "https://www.aaaep.fr/aaaep/preparation-conseil-entrainement-grauit-test-psychotechnique-permis.html",
                },
            ],
            testPro: [
                {
                    label: `Tests psychotechniques et conducteurs de la fonction publique`,
                    href: "https://www.aaaep.fr/aaaep/agent-territorial-publique-collectivite-test-psychotechnique.html",
                },
                {
                    label: `Tests Psychotechniques pour les professionnels du privé`,
                    href: "https://www.aaaep.fr/aaaep/caces-conducteur-engin-chantier-test-psychotechnique.html",
                },
                {
                    label: `Tests Psychotechniques pour les conducteurs de trains`,
                    href: "https://www.aaaep.fr/aaaep/test-psychotechnique-professionnel-conducteur-train-ratp-sncf.html",
                },
                {
                    label: `Test psychotechnique police municipale`,
                    href: "https://www.aaaep.fr/aaaep/test-psychotechnique-police-asvp.html",
                },
            ],
            permis: [
                {
                    label: `Suspension Permis de Conduire`,
                    href: "https://www.aaaep.fr/aaaep/suspension-permis-conduire-test-psychotechnique.html",
                },
                {
                    label: `Annulation Permis de Conduire`,
                    href: "https://www.aaaep.fr/aaaep/suspension-permis-conduire-test-psychotechnique.html",
                },
                {
                    label: `Invalidation Permis de Conduire`,
                    href: "https://www.aaaep.fr/aaaep/suspension-permis-conduire-test-psychotechnique.html",
                },
            ],
            links: [
                {
                    label: "Mentions légales",
                    href: "https://www.aaaep.fr/aaaep/aaaep-mentions-legales.html",
                },
                {
                    label: "CGV",
                    href: "https://www.aaaep.fr/aaaep/cgv-aaaep-tests-psychotechniques.html",
                },
                {
                    label: "Données Personnelles",
                    href: "https://www.aaaep.fr/aaaep/protection-des-donnees.html",
                },
                {
                    label: "Offre de remboursement",
                    href: "https://www.aaaep.fr/aaaep/test-psychotechnique-pas-cher-offre-remboursement.html",
                },
                {
                    label: "Plateforme de Règlement en Ligne des Litiges (contact[at]aaaep.fr)",
                    href: "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=FR",
                },
            ],
            socials: [
                {
                    label: "Facebook",
                    href: "https://facebook.com",
                    icon: FacebookIcon,
                },
                {
                    label: "Instagram",
                    href: "https://instagram.com",
                    icon: InstagramIcon,
                },
                {
                    label: "Twitter",
                    href: "https://twitter.com",
                    icon: TwitterIcon,
                },
                {
                    label: "Youtube",
                    href: "https://youtube.com",
                    icon: YoutubeIcon,
                },
                {
                    label: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: LinkedInIcon,
                },
            ],
            departmentField: {
                value: "",
                options: [
                    {
                        id: uuidv4(),
                        label: "Essonne",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-de-marne-94.html",
                    },
                    {
                        id: uuidv4(),
                        label: "Val d'oise",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-d-oise-95.html",
                    },
                    {
                        id: uuidv4(),
                        label: "Val de Marne",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-de-marne-94.html",
                    },
                ],
            },
            prefectureField: {
                value: "",
                options: [
                    {
                        id: uuidv4(),
                        label: "Essonne",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-de-marne-94.html",
                    },
                    {
                        id: uuidv4(),
                        label: "Val d'oise",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-d-oise-95.html",
                    },
                    {
                        id: uuidv4(),
                        label: "Val de Marne",
                        href: "https://www.aaaep.fr/coordonnees-prefecture-val-de-marne-94.html",
                    },
                ],
            },
        };
    },
    methods: {
        handleChangeDepartement(value) {
            this.departmentField.value = value;
        },
        handleChangePrefecture(value) {
            this.prefectureField.value = value;
        },
    },
};
</script>
