import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"

export const About = () => {
    return (
        <Flex bg="primary" mx='auto' w='100%' h="41rem" align='center' direction='column' mt={20} >
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                ml='-10%'  
                mt='-10%'
            /> 
            <Flex   position='relative' justifyContent='space-between'   align='center' w='80%' >
                    <Flex mt={-5} width='40%' direction='column' >
                        <Heading 
                            color='secondary' 
                            fontSize='40px'
                            fontWeight='700'
                        > 
                            ABOUT US 
                        </Heading>
                        <Text 
                            color='secondary' 
                            fontSize='20px'
                            mt='40px'
                        >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                        <Button 
                            bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   p={5} w='186px' h='55px' 
                            borderRadius={20} shadow={5} mt={10} 
                            fontSize='15px'
                            box-shadow='4px 38px 62px'
                            >
                                <Text color='secondary'fontSize='25px' >
                                    Explore
                                </Text> 
                        </Button>
                </Flex>
                    <Box h='480px' w='480px' borderRadius={20}  >
                        <NextImage src={AboutImage} />
                    </Box>
                    <Circle style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
            </Flex>
        </Flex>
    )
}