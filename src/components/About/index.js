import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import NextImage from 'next/image'

export const About = () => {
    return (
        <Flex bg='primary' width="100%"  >
            <Flex direction={{ base: "column", lg: "row" }} width='80%' align='center' justify='center' mx='auto'  >
                <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='200px' 
                    h="200px" 
                    bg='red' 
                    position='absolute' 
                    mr='60%'  
                    mt='10%'
                    dir={['none', 'none', 'flex', 'flex']}
                /> 
                <Flex w={{ base: "100%", lg: "50%" }} mt="5" justify="center" >
                    <SecondSection />
                </Flex>
                <Flex w={{ base: "100%", lg: "50%" }} my="5" justify="center" >
                    <Box w={{base:"200px",lg:"400px"}}>
                        <NextImage src={AboutImage} width="400" height="400" alt="Art gal img"></NextImage>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

const SecondSection = () => <Flex direction="column" py="10" w="80%" >
    <Stack spacing="10%">
        <Heading
            color="secondary"
            textAlign="left"
            w="100%"
            fontSize={{base:'20px', md:'25px', lg:'30px', xl:'38px'}}
        >
            About
        </Heading>
        <Text
            color='secondary'
            fontSize={{base:'12px', md:'14px', lg:'18px', xl:'22px'}}
        >
            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
        </Text>
        <Flex justify="left">

        <Button 
            bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
            w={{sm:'80px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
            h={{sm:'30px',md:'50px',lg:'40px', xl:'50px', '2xl':'55px'}} 
            fontSize={{sm:'8px',md:'12px',lg:'14px',xl:'16px'}}  
            borderRadius={{sm:'10px',md:'20px'}}
            box-shadow='4px 38px 62px'
            fontWeight='500'
            variant='link'
            letterSpacing='50%'
            color='secondary'
            data-aos="zoom-down"
        >
            Explore
            </Button>
        </Flex>

    </Stack>

</Flex>
