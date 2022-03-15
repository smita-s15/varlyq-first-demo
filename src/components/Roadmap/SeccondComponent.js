import { Circle, Flex, Text } from "@chakra-ui/react"

export const SeccondComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative" >
            <Flex pos="absolute" top="0" right="0" justify="flex-end">
                {children}
            </Flex>
            <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' 
                    h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{base:'40%',md:'50%',lg:'90%', xl:'110%'}} 
                    mt='-60%' 
                /> 
            <Flex align="flex-end" direction='column'>
                <Flex direction='column' transform="translateX(88%)" >
                    <Flex py="3" align="center">
                        <Circle w="40px" h="40px" bg='secondary' />
                        <Text ml="5" color="white" fontSize={{ base: "xl", md: "5xl" }}>
                            {percent}
                        </Text>
                    </Flex>
                </Flex>
                <Flex boxSize="240" borderRight="3px solid white" borderBottom="3px solid white" borderBottomRightRadius="50%" opacity='0.2' >
                </Flex>
            </Flex>
            <Flex justify="flex-start" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid white" borderLeft="3px solid white" borderTopLeftRadius="90px" opacity='0.2' >
                </Flex>
            </Flex>
        </Flex>
    )
}
