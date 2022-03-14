import { Box, Button, Flex, Heading, Text, Circle } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect4 from '../../../public/bannerRect4.png'

export const Art = () => {
    return (
        <Flex bg="primary" mx='auto' width='100%' direction='column' justify='center' mt={10} h='60rem' >
            <Flex  mx='auto' justifyContent='space-between' width='70%'  >
                <Flex width='48%' >
                    <Box h="480x" w='480px'>
                        <NextImage src={bannerRect4} w="480" h="480" />
                    </Box>
                </Flex>
                <Flex  direction="column" width='48%' >
                    <Circle 
                        style={{ filter: "blur(230px)" }} 
                        w='400px' 
                        h="400px" 
                        bg='#052FC2' 
                        position='absolute' 
                        ml='-20%'  
                        mb='-10%'
                    /> 
                    <Heading color='secondary' fontWeight='bold' fontSize={{base:'40px' ,'2xl':'60px', '3xl':'60px'}}  > ART GALLERY </Heading>
                    <Box mt={10}  >
                        <Text color='secondary' fontSize={{base:'15px', md:'15px','2xl':'30px' ,'3xl':'30px'}} >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                    </Box>
                    <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Explore</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}