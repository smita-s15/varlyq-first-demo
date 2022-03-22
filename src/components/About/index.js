import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"

export const About = () => {
    return (
        <Flex bg="primary" mx='auto' w='100%' align='center' direction='column' 
        >
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                mr='60%'  
                mt='10%'
            /> 
            <Flex bg='primary'  mx='auto' width='80%' direction='row' justify='space-around' alignContent='center'  >
                    <Stack 
                        h={{sm:'200px', md:'250px', lg:'300px',xl:'400px', '2xl':'480px'}} 
                        w={{sm:'200px', md:'250px', lg:'300px', xl:'400px','2xl':'480px'}}
                        direction='column' 
                        data-aos='fade-right' 
                        spacing={{sm:'1%' , md:'10'}}
                    >
                        <Heading 
                            color='secondary' 
                            fontSize={{sm:'15px',md:'25px',lg:'27px',xl:'40px'}}
                            fontWeight='700'
                        > 
                            About Us 
                        </Heading>
                        <Text 
                            color='secondary' 
                            fontSize={{sm:'6px',md:'10px',lg:'16px',xl:'18px' , '2xl':'20px'}}
                            mt={{sm:"3",md:"20"}}
                        >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                        <Button 
                            bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                            w={{sm:'50px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
                            h={{sm:'20px',md:'30px',lg:'40px', xl:'50px', '2xl':'55px'}} 
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
                    </Stack>
                        <Box 
                            h={{sm:'200px', md:'250px', lg:'300px', xl:'400px','2xl':'480px'}} 
                            w={{sm:'200px', md:'250px', lg:'300px', xl:'400px', '2xl':'480px'}} 
                            data-aos='fade-left'  
                            align='center'
                            ml={5}
                        >
                            <NextImage src={AboutImage} layout='responsive' />
                        </Box>
            </Flex>
            <Circle dir={['none', 'none', 'flex', 'flex']} style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
        </Flex>
    )
}