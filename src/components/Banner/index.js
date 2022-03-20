import { Box, chakra, Flex, Heading, } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'
import vector1 from '../../../public/vector1.png'
import vector2 from '../../../public/vector2.png'
import { Circle } from "@chakra-ui/react"

export const Banner = () => {

    return (
        <Flex
            w="100%"
            justify='center'
            mx='auto'
            align='center'
            direction='column'
        >
            <Flex
                bg="primary"
                align='center'
                mx="auto"
                w="100%"
                justify='center'
            >

                <Circle
                    style={{ filter: "blur(290px)" }}
                    w='350px'
                    h="350px"
                    bg='#052FC2'
                    position='absolute'
                    mr='80%'
                    mt='-40%'
                /> 
                <Heading
                    fontSize={{sm:'25px',md:'55px', lg:'60px', xl:'86px'}}
                    color='white'
                    display="inline"
                    align='center'
                    w={{xl:'100%' , '2xl':'80%'}}
                    position='relative'
                    data-aos="zoom-out-down"
                    position='relative'
                >
                      Discover
                    <Box
                        display="inline-flex"
                        transform={{sm:"translateY(-70%)",md:"translateY(-80%)",lg:"translateY(-80%)" ,xl:"translateY(-150%)" }} position='relative' align='center' 
                    >                           
                        <Box position='absolute' ml='45%' mt='-60%'  h='100px' w='100px'>
                            <NextImage src={vector1} position='absolute'   />
                        </Box> 
                        <Box mt={{sm:"-10%",md:"-20%",lg:'-10%',xl:'-30%'}}  ml='-10%'  h='100px' w='100px' >
                            <NextImage src={vector2}  position='absolute' />
                        </Box>
                        <Box h={{sm:"10px",md:"30px",lg:"40px", xl:'50px'}} w={{sm:"40px", md:"80px",lg:"100px",xl:'150px'}}>
                            <NextImage src={bannerRect} position='absolute' />
                        </Box>
                    </Box>
                    Collect
                    <br />
                    And Sale Rare
                    <Box
                        display="inline-flex"
                        transform={{sm:"translateY(10%)", md:"translateY(10%)",lg:"translateY(15%)",xl:"translateY(25%)",'2xl':"translateY(10%)" }}
                        w='20%'
                        position='relative'
                    >
                        <Box h={{sm:"100px",md:"180px",lg:"200px",xl:'300px','2xl':'400px'}} w={{sm:"100px",md:"180px",lg:"200px",xl:'300px','2xl':'400px'}}>
                            <NextImage src={bannerRect2}   position='absolute' />
                        </Box>
                        <Box mt='10%'  mr='-10%' h='100px' w='100px' >
                            <NextImage src={vector1}    position='absolute'  />
                        </Box> 
                    </Box>
                    <br />
                    <Flex
                        display="inline-flex"
                        transform={{sm:"translateY(-20%)",md:"translateY(-10%)",lg:"translateY(10%)",xl:"translateY(-10%)",'2xl':"translateY(-40%)"}}
                        ml='-20%'
                        mt='-400%'
                        alignContent='center'
                        position='relative'
                    >
                        <Box  h={{sm:"50px",md:"100px",lg:"130px",xl:'150px','2xl':'200px'}} w={{sm:"50px",md:"100px", lg:"130px",xl:'150px','2xl':'200px'}} >
                            <NextImage src={bannerRect3} position='absolute'  />
                        </Box>
                        Nfts
                    </Flex>
                   
                </Heading>
                <Circle
                    style={{ filter: "blur(290px)" }}
                    w='350px' h="350px"
                    bg='#052FC2'
                    position='absolute'
                    ml={{sm:"-10%", md: '40%', lg: '50%', 'xl': '60%', '2xl': '75%' }}
                    mb='-30%'
                />
            </Flex>
        </Flex>
    )
}
