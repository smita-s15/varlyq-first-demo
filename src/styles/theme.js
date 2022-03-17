import { chakra, extendTheme } from '@chakra-ui/react'
import chakraUiTheme from '@chakra-ui/theme'
import { createBreakpoints } from '@chakra-ui/theme-tools'


    
const fonts = {
    ...chakraUiTheme.fonts,
    heading: 'Cinzel',
    body: 'Heebo',
    nav : 'Heebo',
}
const colors = {
    primary: "#040006",
    customBlue: "#052FC2",
    secondary: '#FFFFFF',
    navLinkColor: "#AFAFB1",
    borderColor:  "#052FC2"
}

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
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
        xs: "15px",
        sm : "24px",
        md: "28px",
        lg: "36px",
        xl: "40px",
        "2xl": "64px",
    }
    
}
const customTheme = extendTheme(overrides)
export default customTheme