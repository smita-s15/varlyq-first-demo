import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"

export const About = () => {
    return (
        <Flex bg="primary" mx='auto' w='80%' direction='column' mt={20} >
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                ml='-10%'  
                mt='-10%'
            /> 
            <Flex h="50rem" justify='center' >
                <Flex w="48%" direction="column" mt={10}>
                    <Heading color='secondary' fontSize={{base:'40px', '2xl':'60px'}} fontWeight='bold'> ABOUT US </Heading>
                    <Box mt={10} width='80%' >
                        <Text color='secondary' fontSize={{base:'10px',md:'15px','2xl':'25px' }} >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                    </Box>
                    <Button bg='#052FC2' color='secondary' p={5} w='186px' h='55px' borderRadius={20} shadow={5} mt={10} fontSize='15px'>Explore</Button>
                    <Circle style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} />
                </Flex>
                <Flex >
                    <Box h={{base:"200px", md:"350px", lg:"400px" }} w={{base:"200px", md:"350px", lg:"480px" }}>
                        <NextImage src={AboutImage}  />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}