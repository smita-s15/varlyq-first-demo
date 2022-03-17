import { Box, Button, Flex, Heading, Text, Circle } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect4 from '../../../public/bannerRect4.png'

export const Art = () => {
    return (
        <Flex bg='primary' mt='20%' mx='auto' width='80%' direction='row' justify='space-between' alignContent='center' h='40rem' >
            <Box h='480px' w='480px' borderRadius={20}  >
                <NextImage src={bannerRect4} />
            </Box>
        <Flex mt={-5} width='40%' direction='column' >
            <Heading 
                color='secondary' 
                fontSize='40px'
                fontWeight='700'
            > 
                ART GALLERY 
            </Heading>
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                ml='-20%'  
                mb='-10%'
            /> 
            <Box mt={10}  >
                <Text 
                    color='secondary' 
                    fontSize='20px'
                    mt='40px'
                >
                    At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                </Text>
            </Box>
            <Button 
                bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                p={5} w='186px' h='55px' 
                borderRadius={20} mt={10} 
                box-shadow='4px 38px 62px'>
                <Text color='secondary'fontSize='25px' >
                    Explore
                </Text> 
            </Button>
        </Flex>
    </Flex>
    )
}