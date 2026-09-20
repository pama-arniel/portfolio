module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
                'dm-sans': ['"DM Sans"', 'sans-serif'],
                'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
                'inter': ['Inter', 'sans-serif']
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}