<template>
<span class="inline-flex">
    <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
    </a>
    <a class="ml-4 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
    </a>
    <a :href="gitlab" target="_blank" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 ionicon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <title>Gitlab</title>
            <path d='M494.07 281.6l-25.18-78.08a11 11 0 00-.61-2.1l-50.5-156.94a20.08 20.08 0 00-19.17-13.82 19.77 19.77 0 00-18.95 13.94l-48.14 149.55h-152L131.34 44.59a19.76 19.76 0 00-18.86-13.94h-.11a20.15 20.15 0 00-19.12 14L42.7 201.73c0 .14-.11.26-.16.4l-25.63 79.48a29.15 29.15 0 0010.44 32.46l221.44 162.41a11.25 11.25 0 0013.38-.07l221.48-162.34a29.13 29.13 0 0010.42-32.47m-331-64.51l61.73 191.76L76.63 217.09m209.64 191.8l59.19-183.84 2.55-8h86.52L300.47 390.44M398.8 59.31l43.37 134.83h-86.82M324.16 217l-43 133.58-25.66 79.56L186.94 217M112.27 59.31l43.46 134.83H69M40.68 295.58a6.19 6.19 0 01-2.21-6.9l19-59 139.61 180.59m273.26-114.69L313.92 410.22l.52-.69L453.5 229.64l19 59a6.2 6.2 0 01-2.19 6.92'/>
        </svg>
    </a>
    <a :href="github" target="_blank" class="ml-4 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 ionicon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <title>Github</title>
            <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'/>
        </svg>
    </a>
    <a :href="linkedIn" target="_blank" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <title>LinkedIn</title>
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
    </a>
</span>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
        facebook: '',
        gitlab: 'https://gitlab.com/jose.nuvensis',
        github: 'https://github.com/pama-arniel',
        linkedIn: 'https://www.linkedin.com/in/jose-arniel-pama-149bb214a/'
    };
  },
}
</script>