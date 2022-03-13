import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"

export const About = () => {
    return (
        <Flex bg="primary" mx='auto' w='80%' direction='column' >
            <Flex h="50rem" justify='center' >
                <Flex w="48%" direction="column" mt={10}>
                    <Box w='20%' align='flex-start' position='absolute'   >
                        <Circle style={{ filter: "blur(600px)" }} opacity='0.3' shadow='200px' w='800px' h="800px" bg='#052FC2' position='flex-end' mt={-50} ml={-100} />
                    </Box>
                    <Heading color='secondary' fontWeight='40px' fontWeight='bold'> ABOUT US </Heading>
                    <Box mt={10} width='80%' >
                        <Text color='secondary' fontSize='20px' >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                    </Box>
                    <Button bg='#052FC2' color='secondary' p={5} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Explore</Button>
                    <Circle style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} />
                </Flex>
                <Flex >
                    <Box h="480x" w='480px'>
                        <NextImage src={AboutImage} w="480" h="480" />
                    </Box>
                </Flex>

            </Flex>
        </Flex>
    )
}