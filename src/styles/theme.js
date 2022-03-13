import { chakra, extendTheme } from '@chakra-ui/react'
import chakraUiTheme from '@chakra-ui/theme'
import { createBreakpoints } from '@chakra-ui/theme-tools'


    
const fonts = {
    ...chakraUiTheme.fonts,
    heading: 'Cinzel',
    body: 'Heebo',
}
const colors = {
    primary: "#040006",
    customBlue: "#052FC2",
    secondary: '#FFFFFF',
    navLinkColor: "#AFAFB1",
    borderColor:  "#052FC2"
}

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96px',
})

const overrides = {
    ...chakraUiTheme,
    fonts, 
    colors,
    breakpoints,
    fontWeights: {
        normal : 300,
        medium: 600,
        bold: 700,
    },
    fontSizes : {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "40px",
        "6xl": "64px",
    }
    
}
const customTheme = extendTheme(overrides)
export default customTheme