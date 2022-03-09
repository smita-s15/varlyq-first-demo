import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'

export const About = () => {
    return (
        <Flex bg="primary">
            <Flex h="50rem" mx="auto" w="80%"  >
                <Flex w="48%" direction="column"> <Heading color='secondary' > ABOUT US </Heading>
                    <Box   >
                        <Text color='secondary'>
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                    </Box>
                    <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1}>Explore</Button></Flex>
                <Flex w="48%" justify="center">
                    <Box h="480x" w='480px'>

                        <NextImage src={AboutImage} w="480" h="480" />
                    </Box>
                </Flex>

            </Flex>
        </Flex>
    )
}