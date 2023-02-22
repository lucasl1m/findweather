import { extendTheme } from "native-base"

export const theme = extendTheme({
    colors: {
        white: '#fff',

        gray: {
            100: '#AFAFAF',
            200: '#A1A1A1',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
        },
        dark: {
            100: '#33383E',
            200: '#2C3137',
            300: '#23262B',
            400: '#212428',
            500: "#1B1D22",
        },
    },
    fontWeights: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
    },

    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
    },
});
