import { Circle, Flex, Text } from '@chakra-ui/react'

export const FirstComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative"  >
            {children}
            <Flex transform="translateX(-33%)" align="center">
            <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' 
                    h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{base:'-40%',md:'-50%',lg:'-90%', xl:'-110%'}} 
                    mt='-40%' 
                /> 
                <Text color="white" mr="2" fontSize={{ base: "xl", md: "5xl" }} >
                    {percent}
                </Text>
                <Flex justify="start" py="3">
                    <Circle w="40px" h="40px" bg='secondary' />
                </Flex>
            </Flex>
            <Flex boxSize="240" borderLeft="3px solid white" borderBottom="3px solid white" borderBottomLeftRadius="50%" opacity='0.2' >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="160px" h={{base:"60px", md:"100px"}} mt="-3px" borderTop="3px solid white" borderRight="3px solid white" borderTopRightRadius="90px" opacity='0.2' >
                </Flex>
            </Flex>
        </Flex>
    )
}
