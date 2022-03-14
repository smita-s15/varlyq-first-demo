import { Circle, Flex, Text } from '@chakra-ui/react'

export const FirstComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative"  >
            {children}
            <Flex transform="translateX(-28.9%)" align="center">
                <Text color="white" mr="2" fontSize={{ base: "xl", md: "5xl" }} >
                    {percent}
                </Text>
                <Flex justify="start" py="3">
                    <Circle w="40px" h="40px" bg='secondary' />
                </Flex>
            </Flex>
            <Flex boxSize="240" borderLeft="3px solid gray" borderBottom="3px solid gray" borderBottomLeftRadius="50%" >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid gray" borderRight="3px solid gray" borderTopRightRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
