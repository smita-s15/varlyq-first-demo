import { Box, Flex, Heading, Text, Wrap, WrapItem, Center, useMediaQuery } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'
import { Circle } from "@chakra-ui/react"

export const Banner = () => {
    
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px")

    return (
        <Flex 
            w="100%" 
            justify='center'  
            mx='auto' 
            h='55rem' 
            align='center' 
            mt={{base:'00%', sm:'-25%', md:'-20%', lg:'-25%', '2xl':'-10%', '3xl':'2%' }} >
            
            <Flex   
                bg="primary" 
                align='center'  
                w="70%" 
                mx="auto" 
                justify='center'  >
                
                <Circle 
                    style={{ filter: "blur(230px)" }} 
                    w='400px' 
                    h="400px" 
                    bg='#052FC2' 
                    position='absolute' 
                    mr='80%' 
                    mt='-30%' 
                /> 
                <Heading 
                    fontSize={{base:'10px', md:'lg', lg:'xl', xl:'2xl', '2xl':'3xl', '3xl':'4xl' }} 
                    color='white' 
                    display="inline" 
                    align='center'  
                >
                    DISCOVER 
                    <Box 
                        display="inline-flex"  
                        transform="translateY(30%)"   >
                      
                        <NextImage src={bannerRect} h="50px"  w="50px" />
                    </Box>                   
                    COLLECT 
                    <br/>
                    AND SALE RARE                    
                    <Box 
                        display="inline-flex"   
                        transform="translateY(30%)">
                        <NextImage src={bannerRect2} h='50px'  w="50px" />
                    </Box>
                    <br />
                    <Box 
                        display="inline-flex"  
                        transform="translateY(65%)" 
                        mt='-5%'>
                        <NextImage src={bannerRect3}  h='50px' w="50px" />
                    </Box>
                    NFTS
                </Heading>   
                <Circle 
                    style={{ filter: "blur(230px)" }} 
                    w='400px' h="400px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{ md:'40%', lg:'50%', 'xl':'60%'  ,'3xl':'75%'}} 
                    mb='-30%'  
                /> 
            </Flex>
        </Flex>
    )
}
