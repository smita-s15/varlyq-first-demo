import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import AboutImage from '../../../public/about.png'
import { Circle } from "@chakra-ui/react"

export const About = () => {
    return (
        <Flex bg="primary" mx='auto' w='100%' h="41rem" align='center' direction='column' 
        mt={{base:'-10px', md:'15px', lg:'20px', xl:'25px'}} >
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
                    <Flex 
                        mt={-5} 
                        h={{base:'100px', md:'250px', lg:'350px', xl:'480px'}} 
                        w={{base:'100px', md:'250px', lg:'350px', xl:'480px'}}
                        direction='column' >
                        <Heading 
                            color='secondary' 
                            fontSize={{base:'20px',md:'20px',lg:'30px',xl:'40px'}}
                            fontWeight='700'
                        > 
                            About Us 
                        </Heading>
                        <Text 
                            color='secondary' 
                            fontSize={{base:'10px',md:'10px',lg:'18px',xl:'20px'}}
                            mt='40px'
                        >
                            At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                        </Text>
                        <Button 
                            bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                            p={5} 
                            w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                            h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                            fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                            borderRadius={20} mt={10} 
                            box-shadow='4px 38px 62px'
                            fontWeight='500'
                            letterSpacing={2}
                            variant='link'
                            fontSize='18px'
                            letterSpacing='50%'
                            color='secondary'
                            >
                                <Text color='secondary' >
                                    Explore
                                </Text> 
                        </Button>
                </Flex>
                    <Box 
                        h={{base:'100px', md:'250px', lg:'350px', xl:'480px'}} 
                        w={{base:'100px', md:'250px', lg:'350px', xl:'480px'}} 
                        borderRadius={20}  
                    >
                        <NextImage src={AboutImage} layout='responsive' />
                    </Box>
                    <Circle style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
            </Flex>
        </Flex>
    )
}