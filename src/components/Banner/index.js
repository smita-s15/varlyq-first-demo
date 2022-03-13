import { Box, Flex, Heading, Text, Wrap, WrapItem, Center, useMediaQuery } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'
import { Circle } from "@chakra-ui/react"

export const Banner = () => {
    
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px")

    return (
        <Flex w="100%" justify='center' mt='70px' mx='auto' align='center' >
                <Circle style={{ filter: "blur(250px)" }} 
                w='400px' h="400px" bg='#052FC2' position='flex-end' mt='-50%' ml={-40} /> 
            <Flex h="55rem"  bg="primary"   w="60%" mx="auto" mt='5px' >
                <Heading fontSize="85px" color='white' display="inline" align='center'>DISCOVER
                    <Box display="inline-flex" ml="5" transform="translateY(30%)">
                        <NextImage src={bannerRect} h="100px" w="50px" />
                    </Box> COLLECT AND SALE RARE
                    <Box display="inline-flex" ml="5" mt={10} transform="translateY(30%)">
                        <NextImage src={bannerRect2} h="100px" w="50px" />
                    </Box>
                    <Box display="inline-flex" mr="20" transform="translateY(65%)">
                        <NextImage src={bannerRect3} h="100px" w="50px" />
                    </Box>
                    NFTS
                </Heading>   
            </Flex>
                <Box w='20%' align='flex-start' >
                    <Circle style={{ filter: "blur(600px)" }} opacity='0.2' shadow='200px' w='500px' h="500px" bg='#052FC2' position='absolute' />
                </Box>   
        </Flex>
    )
}
