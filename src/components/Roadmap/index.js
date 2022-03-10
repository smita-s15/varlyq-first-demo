import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export const Roadmap = () => {
    return (
        <Flex mx='auto' bg='primary' width='100%' justify='center'  direction='column' >
            <Flex justify='center' >
                <Heading color='secondary' fontSize='40px' fontWeight='bold'  > ROADMAP</Heading>
            </Flex>
            <Box mt='100px' borderBottom='1px' borderColor='#ffffff' opacity='0.1' />

            <BoxWithBorderInverse />
            <BoxWithBorder />
            <BoxWithBorderInverse />
            <BoxWithBorder />
            <BoxWithBorderInverse />
            <BoxWithBorder />
            <BoxWithBorderInverse />
            <BoxWithBorder />
            <BoxWithBorderInverse />
            <BoxWithBorder />
            <BoxWithBorderInverse />
            <BoxWithBorder />

        </Flex>
    )
}



const BoxWithBorder = (props) => {
    const { children, ...rest } = props
    return <Flex justify="center" >
        <Flex direction="column" w="400px" >
            <Flex boxSize="240" borderLeft="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomLeftRadius="50%" >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="200px" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderRight="3px solid #052FC2" borderTopRightRadius="90px" >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}
const BoxWithBorderInverse = () => {
    return <Flex justify="center" >
        <Flex direction="column" w="400px" >
            <Flex justify="flex-end" >

                <Flex boxSize="240" borderRight="3px solid #052FC2" borderBottom="3px solid #052FC2" borderRight="3px solid #052FC2" borderBottomRightRadius="90px" >
                </Flex>
            </Flex>
            <Flex >
                <Flex w="200px" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderLeft="3px solid #052FC2" borderTopLeftRadius="90px" >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}