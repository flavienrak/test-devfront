const path = require("path");
const generatePalette = require(path.resolve(
    __dirname,
    "dev/tailwind/utils/generate-palette"
));

const customPalettes = {
    primary: generatePalette("#355689"),
    accent: generatePalette("#c02b6b"),
    dark: generatePalette("#1f2937"),
    yellow: generatePalette("#ffbb02"),
    green: generatePalette("#00b67a"),
};

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: customPalettes.primary,
                accent: customPalettes.accent,
                dark: customPalettes.dark,
                yellow: customPalettes.yellow,
                green: customPalettes.green,
            },

            fontFamily: {
                sans: ["Nunito", "sans-serif"],
                display: ["Nunito"],
                mono: ["Nunito"],
                body: ["Nunito"],
                title: ["Lato", "sans-serif"],
            },
            backgroundImage: {
                "half-gradient":
                    "linear-gradient(to right, #00B67A 50%, #DCDCE6 50%)",
            },
        },
    },
    plugins: [],
};
