import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import NextImage from 'next/image'
import bannerRect from '../../../public/bannerRect.png'
import bannerRect2 from '../../../public/bannerRect2.png'
import bannerRect3 from '../../../public/bannerRect3.png'


export const Banner = () => {
    return (
        <Flex h="55rem" bg="primary" justify="center">
            <Flex w="50%" mx="auto" mt="10">
                <Heading fontSize="85px" color='white' display="inline">Discover       Collect
And Sell rare
 nfts</Heading>
                <Box display="inline">
                    <NextImage src={bannerRect} h="100px" w="50px" />
                </Box>
            </Flex>
        </Flex>
    )
}
