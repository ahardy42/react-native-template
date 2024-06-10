export const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
}

export const fonts = {
    default: 'System',
    bold: 'System',
    italic: 'System',
}

export const layout = {
    container: {
        marginHorizontal: 20,
        marginVertical: 48,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        alignItems: 'center',
    },
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
}

export const typography = {
    h1: {
        fontSize: 32,
        lineHeight: 34,
        fontFamily: fonts.bold,
    },
    h2: {
        fontSize: 24,
        lineHeight: 26,
        fontFamily: fonts.bold,
    },
    h3: {
        fontSize: 20,
        lineHeight: 22,
        fontFamily: fonts.bold,
    },
    h4: {
        fontSize: 18,
        lineHeight: 20,
        fontFamily: fonts.bold,
    },
    body: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.default,
    },
    tiny: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: fonts.italic,
    },
    button: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.bold,
    },
}

export const shadow = {
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

export default {
    colors,
    fonts,
    layout,
    spacing,
    typography,
    shadow,
}