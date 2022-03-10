import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect4 from '../../../public/bannerRect4.png'

export const Art = () => {
    return (
        <Flex bg="primary" mx='auto' width='70%' direction='column' justify='center' >
            <Flex  mx='auto' justifyContent='space-between' >
                <Flex width='48%' >
                    <Box h="480x" w='480px'>
                        <NextImage src={bannerRect4} w="480" h="480" />
                    </Box>
                </Flex>
                <Flex  direction="column" width='48%' >
                    <Heading color='secondary'  > ART GALLERY </Heading>
                    <Box mt={10}  >
                        <Text color='secondary' fontSize='20px' >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                    </Box>
                    <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Explore</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}