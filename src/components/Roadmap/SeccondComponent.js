import { Circle, Flex } from "@chakra-ui/react"

export const SeccondComponent = ({ children }) => {
    return (
        <Flex direction="column" pos="relative" >
            <Flex pos="absolute" top="0" right="0" justify="flex-end">
                {children}
            </Flex>
            <Flex align="flex-end" direction='column'>
                <Flex justify="flex-end" py="3">
                    <Circle w="40px" h="40px" bg='secondary' transform="translateX(50%)" />
                </Flex>
                <Flex boxSize="240" borderRight="3px solid white" borderBottom="3px solid white" borderBottomRightRadius="50%" >
                </Flex>
            </Flex>
            <Flex justify="flex-start" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid white" borderLeft="3px solid white" borderTopLeftRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
