import { Box, Button, Flex, Heading, Text, Circle, Stack } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect4 from '../../../public/bannerRect4.png'

export const Art = () => {
    return (
        <Flex  bg='primary'  mx='auto' width='100%' >
        <Flex bg='primary'  mx='auto' width='80%' direction='row' justify='space-around' alignContent='center'  >
            <Box 
                h={{sm:'200px', md:'200px', lg:'350px', xl:'400px','2xl':'480px'}} 
                w={{sm:'200px', md:'200px', lg:'350px', xl:'400px', '2xl':'480px'}} 
                borderRadius={20} 
                data-aos="fade-right" 
            >
                <NextImage src={bannerRect4} layout='responsive' />
            </Box>
        <Circle dir={['none', 'none', 'flex', 'flex']} style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
        <Stack 
            width='40%' 
            h={{sm:'200px', md:'250px', lg:'350px',xl:'400px', '2xl':'480px'}} 
            w={{sm:'200px', md:'250px', lg:'350px', xl:'400px','2xl':'480px'}}
            direction='column'
            ml={5}
            data-aos="fade-left" 
            spacing={{sm:'3%' , md:'10'}}
            >
            <Heading 
                color='secondary' 
                fontSize={{sm:'15px',md:'25px',lg:'30px',xl:'40px'}}
                fontWeight='700'
                > 
                Art Gallery 
            </Heading>
                <Text 
                    color='secondary' 
                    fontSize={{sm:'6px',md:'10px',lg:'18px',xl:'18px' , '2xl':'20px'}}
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
    </Flex>
</Flex>
    )
}