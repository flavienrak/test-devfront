<template>
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="currentColor" offset="0%"></stop>
                <stop id="stop2" stop-color="currentColor" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path
            fill="url(#sw-gradient)"
            d="M28.8,-31.8C36.9,-27.6,42.7,-18.1,42.2,-9.2C41.6,-0.4,34.7,7.8,28.6,14.7C22.5,21.6,17.2,27.2,10.7,29.6C4.3,31.9,-3.4,31.2,-11.6,29.3C-19.9,27.5,-28.7,24.6,-34.4,18.2C-40.2,11.8,-42.9,1.9,-40.7,-6.6C-38.6,-15.1,-31.6,-22.3,-24,-26.6C-16.4,-31,-8.2,-32.6,1.1,-33.9C10.4,-35.2,20.7,-36.1,28.8,-31.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            style="transition: 0.3s"
            stroke-width="0"
        ></path>
    </svg>
</template>
<script>
export default {
    name: "VideoShape",
};
</script>
