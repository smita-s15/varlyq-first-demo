import { Circle, Flex, Text } from "@chakra-ui/react"

export const SeccondComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative" >
            <Flex pos="absolute" top="0" right="0" justify="flex-end">
                {children}
            </Flex>
            <Flex align="flex-end" direction='column'>
                <Flex direction='column' transform="translateX(86.9%)" >
                    <Flex py="3" align="center">
                        <Circle w="40px" h="40px" bg='secondary' />
                        <Text ml="5" color="white" fontSize={{ base: "xl", md: "5xl" }}>
                            {percent}
                        </Text>
                    </Flex>
                </Flex>
                <Flex boxSize="240" borderRight="3px solid gray" borderBottom="3px solid gray" borderBottomRightRadius="50%" >
                </Flex>
            </Flex>
            <Flex justify="flex-start" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid gray" borderLeft="3px solid gray" borderTopLeftRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
