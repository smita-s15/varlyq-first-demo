import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
 
function MyApp({ Component, pageProps }) {
  useEffect (() => {
    AOS.init({
      duration: 1200,
    })
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp