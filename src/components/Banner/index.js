import { Box, Flex, Heading, } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'
import vector1 from '../../../public/vector1.png'
import vector2 from '../../../public/vector2.png'
import { Circle } from "@chakra-ui/react"

export const Banner = () => {
    return (<>
        <Flex
            w="100%"
            justify='center'
            mx='auto'
            h='55rem'
            align='center'
            mt={{ base: '-40%', sm: '-25%', md: '-20%', lg: '-100px' }}
            direction='column'
        >
            <Box ml='5%' mb='-5px'  >
                <NextImage src={vector1} />
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
                    fontSize={{sm:'10px',md:'40px', lg:'60px', xl:'86px'}}
                    color='white'
                    display="inline"
                    align='center'
                    w='80%'
                    position='relative'
                >
                    Discover
                    <Box
                        display="inline-flex"
                        transform="translateY(30%)"   
                    >
                        <Box h="100%" w="100%"  >
                            <NextImage src={bannerRect}  />
                        </Box>
                        <Box ml='-125%' mt='-45%' >
                            <NextImage src={vector2} />
                        </Box>
                    </Box>
                    Collect
                    <br />
                    And Sale Rare
                    <Box
                        display="inline-flex"
                        transform="translateY(30%)" 
                        w='20%'>
                        <Box h="100%" w="100%">
                            <NextImage src={bannerRect2} />
                        </Box>
                        <Box mt='20%'  ml='-1%'>
                            <NextImage src={vector1}  />
                        </Box>
                    </Box>
                    <br />
                    <Flex
                        display="inline-flex"
                        transform="translateY(65%)"
                        ml='-20%'
                        mt={-20}
                        alignContent='center'
                    >
                        <NextImage src={bannerRect3}  />
                        Nfts
                    </Flex>
                </Heading>
                <Circle
                    style={{ filter: "blur(290px)" }}
                    w='350px' h="350px"
                    bg='#052FC2'
                    position='absolute'
                    ml={{ md: '40%', lg: '50%', 'xl': '60%', '2xl': '75%' }}
                    mb='-30%'
                />
            </Flex>
        </Flex>
    </>
    )
}
