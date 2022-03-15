import { Box, Flex, Heading, Text, Wrap, WrapItem, Center, useMediaQuery } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'
import vector1 from '../../../public/vector1.png'
import vector2 from '../../../public/vector2.png'
import { Circle } from "@chakra-ui/react"

export const Banner = () => {
    
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px")

    return (<>
        <Flex 
        w="100%" 
        justify='center'  
        mx='auto' 
        h='55rem' 
        align='center' 
        mt={{base:'-40%', sm:'-25%', md:'-1%', lg:'-5%'}} 
        direction='column'
        position='relative'
            > 
                <Box ml='5%' mb='-5px'  >
                    <NextImage src={vector1}   />
                </Box>
            <Flex   
                bg="primary" 
                align='center'  
                mx="auto" 
                w="100%" 
                justify='center'
              >
                
                <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' 
                    h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    mr='80%' 
                    mt='-40%' 
                /> 
                <Heading 
                    fontSize={{base:'10px', md:'lg', lg:'xl', xl:'2xl' }} 
                    color='white' 
                    display="inline" 
                    align='center' 
                    position='relative' 
                >
                    DISCOVER 
                    <Box 
                        display="inline-flex"  
                        transform="translateY(30%)"   >
                      <Box h="100%"  w="100%">
                        <NextImage src={bannerRect} />
                      </Box>
                        <Box ml='-125%'  mt='-45%' w='20%' h='10%' >
                            <NextImage src={vector2}    />             
                        </Box>
                    </Box>                   
                    COLLECT 
                    <br/>
                    AND SALE RARE                    
                    <Box 
                        display="inline-flex"   
                        transform="translateY(30%)">
                           <Box h="100%"  w="100%">
                        <NextImage src={bannerRect2} />
                      </Box>
                    </Box>
                         <Box ml='90%' mb='-10%' w='20%' h='10%' position='relative' >
                            <NextImage src={vector1}   position='absolute' />             
                        </Box>
                    <Box 
                        display="inline-flex"  
                        transform="translateY(65%)" 
                        mt='-5%'>
                        <Box h="100%"  w="100%">
                            <NextImage src={bannerRect3} />
                      </Box>
                    </Box>
                    NFTS
                </Heading>   
                <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{ md:'40%', lg:'50%', 'xl':'60%'  ,'2xl':'75%'}} 
                    mb='-30%'  
                /> 
            </Flex>
        </Flex>
    </>
    )
}
