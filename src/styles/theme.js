import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Cinzel',
        body: 'Cinzel',
      },
    colors: {
        primary: "#040006",
        customBlue: "#052FC2",
        secondary: '#FFFFFF',
        navLinkColor: "#AFAFB1"
    }
})

export default theme