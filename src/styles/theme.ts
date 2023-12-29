const neutralGray = {
    50: '#FFF',
    75: "#FAFAFA",
    100: "#F0F0F0",
    150: "#F5F5F5",
    200: "#EEE",
    300: "#EBEBEB",
    400: "#E0E0E0",
    600: "#B0E0D3",
    800: "#515151",
    900: "#1F1F1F"
}

const primary = {
    500: "#018762"
}

export const theme = {
    breakpoints: {
        sm: 320,
        md: 520,
        lg: 1024,
    },
    colors: {
        neutralGray,
        primary,
        aliases: {
            defaultBackground: neutralGray[50],
            headerBackground: neutralGray[200],

            defaultText: neutralGray[900],
            secondaryText: neutralGray[800],

            primaryText: primary[500],
            primaryBackground: primary[500],
            textOnPrimary: neutralGray[50],

            divider: neutralGray[600],
        }
    }
}