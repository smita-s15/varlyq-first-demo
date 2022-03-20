import { Box, Button, Flex, Heading, Text, Circle } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect4 from '../../../public/bannerRect4.png'

export const Art = () => {
    return (
        <Flex  bg='primary'  mx='auto' width='100%' >
        <Flex bg='primary'  mx='auto' width='80%' direction='row' justify='space-between' alignContent='center'  >
            <Box 
                h={{sm:'100px', md:'200px', lg:'350px', xl:'400px','2xl':'480px'}} 
                w={{sm:'100px', md:'200px', lg:'350px', xl:'400px', '2xl':'480px'}} 
                borderRadius={20} 
                data-aos="fade-right" 
            >
                <NextImage src={bannerRect4} layout='responsive' />
            </Box>
        <Box>
        <Circle 
            style={{ filter: "blur(230px)" }} 
            w='350px' 
            h="350px" 
            bg='#052FC2' 
            position='absolute' 
            mr={{md:'-60%', lg:'-130%'}}
            mb='-10%'
            /> 
            </Box>
        <Flex 
            width='40%' 
            mt={-5} 
            h={{base:'100px', md:'250px', lg:'350px',xl:'400px', '2xl':'480px'}} 
            w={{base:'100px', md:'250px', lg:'350px', xl:'400px','2xl':'480px'}}
            direction='column'
            data-aos="fade-left" 
            >
            <Heading 
                color='secondary' 
                fontSize={{base:'20px',md:'25px',lg:'30px',xl:'40px'}}
                fontWeight='700'
                > 
                Art Gallery 
            </Heading>
            <Box mt='10px'  >
                <Text 
                    color='secondary' 
                    fontSize={{base:'10px',md:'10px',lg:'18px',xl:'18px' , '2xl':'20px'}}
                    mt='40px'
                    >
                    At a very high level, most NFTs are part of the Ethereum blockchain. Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain also supports these NFTs, which store extra information that makes them work differently from, say, an ETH coin. It is worth noting that other blockchains can implement their own versions of NFTs.
                </Text>
            </Box>
            <Button 
                bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                p={5} 
                w={{sm:'100px',md:'130px',lg:'150px', xl:'160px','2xl':'186px'}}
                h={{sm:'40px',md:'35px',lg:'50px', xl:'50px', '2xl':'55px'}} 
                fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                borderRadius={20} mt={10} 
                box-shadow='4px 38px 62px'
                fontWeight='500'
                letterSpacing={2}
                variant='link'
                _focus='transparent'
                data-aos="zoom-out-down"
                >
                <Text 
                    color='secondary' 
                    fontSize='15px'
                    letterSpacing='10%' 
                    >
                    Explore
                </Text> 
            </Button>
        </Flex>
    </Flex>
</Flex>
    )
}