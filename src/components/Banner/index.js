import { Box, Flex, Heading, Text, Wrap, WrapItem, Center } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'


export const Banner = () => {
    return (
        <Flex h="55rem" bg="primary" justify="center" w="50%" mx="auto" mt='100px' >
            <Heading fontSize="85px" color='white' display="inline" align='center' >Discover
                <Box display="inline">
                    <NextImage src={bannerRect} h="100px" w="50px" />
                </Box> Collect And Sell rare
                <Box display="inline">
                    <NextImage src={bannerRect2} h="100px" w="50px" />
                </Box>
                <br />
                <Box display="inline">
                    <NextImage src={bannerRect3} h="100px" w="50px" />
                </Box>
                NFTS
            </Heading>
        </Flex>
    )
}
