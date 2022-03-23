import { Circle, Flex, Stack, Text } from '@chakra-ui/react'

export const FirstComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative" data-aos="zoom-in" w={{ sm: "80%", md: "100%" }}>
            {children}
            <Flex transform={{ sm: "translateX(-43%)", md: "translateX(-33%)" }} align="center"  >
                <Circle
                    style={{ filter: "blur(290px)" }}
                    w={{ sm: '200px', md: '250px', lg: '350px' }}
                    h={{ sm: '200px', md: '250px', lg: '350px' }}
                    bg='#052FC2'
                    position='absolute'
                    ml={{ base: '-10%', md: '-60%', lg: '-70%', xl: '-10%', '2xl': '-170%' }}
                    mt='-40%'

                />

                <Stack py="3"  align="center" fontSize={{ base: '10px', md: "25px", lg: '30px' }} justify='space-between' direction='row' spacing={2} ml={{sm:'28%', md:'10%'}}>
                    <Text color="white" >
                        {percent}
                    </Text>
                    <Circle w={{ sm: "15px", md: "40px" }} h={{ sm: "15px", md: "40px" }} bg='secondary' />
                </Stack>
            </Flex>
            <Flex width={{ sm: "120px", md: "240px" }} height={{ sm: "120px", md: "240px" }} borderLeft="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomLeftRadius="50%"  >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="70%" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderRight="3px solid #052FC2" borderTopRightRadius="90px">
                </Flex>
            </Flex>
        </Flex>
    )
}
