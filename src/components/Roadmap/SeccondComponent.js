import { Circle, Flex, Text } from "@chakra-ui/react"

export const SeccondComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative" data-aos="zoom-in" >
            <Flex pos="absolute" top="0" right="0" justify="flex-end">
                {children}
            </Flex>
            <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w={{sm:'200px', md:'250px',lg:'350px' }}
                    h={{sm:'200px', md:'250px',lg:'350px' }}
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{base:'40%',md:'60%',lg:'70%', xl:'100%' ,'2xl':'200%'}} 
                    mt='-60%' 
                /> 
            <Flex align="flex-end" direction='column'>
                <Flex direction='column' transform="translateX(88%)" >
                    <Flex py="3" align="center" mr={{base:'55px', md:'45px',lg:'33px'}} fontSize={{base:'20px', md: "25px", lg:'30px' }}>
                        <Circle w="40px" h="40px" bg='secondary'  />
                        <Text ml="5" color="white" >
                            {percent}
                        </Text>
                    </Flex>
                </Flex>
                <Flex boxSize="240" borderRight="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomRightRadius="50%"  >
                </Flex>
            </Flex>
            <Flex justify="flex-start" >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderLeft="3px solid #052FC2" borderTopLeftRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
