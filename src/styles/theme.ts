const neutralGray = {
    50: '#FFF',
    75: "#FAFAFA",
    100: "#F0F0F0",
    150: "#F5F5F5",
    200: "#EEE",
    300: "#EBEBEB",
    400: "#E0E0E0",
    800: "#515151",
    900: "#1F1F1F"
}

const primary = {
    500: "#018762"
}

export const theme = {
    colors: {
        neutralGray,
        primary,
        aliases: {
            defaultBackground: neutralGray[50],
            defaultText: neutralGray[900],
            headerBackground: neutralGray[200],
            primaryText: primary[500],
        }
    }
}