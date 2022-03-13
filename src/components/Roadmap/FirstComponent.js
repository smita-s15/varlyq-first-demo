import { Circle, Flex } from '@chakra-ui/react'

export const FirstComponent = ({ children }) => {
    return (
        <Flex direction="column" pos="relative"  >
            {children}
            <Flex justify="start" py="3">
                <Circle w="40px" h="40px" bg='secondary' transform="translateX(-50%)" />
            </Flex>
            <Flex boxSize="240" borderLeft="3px solid white" borderBottom="3px solid white" borderBottomLeftRadius="50%" >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid white" borderRight="3px solid white" borderTopRightRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
