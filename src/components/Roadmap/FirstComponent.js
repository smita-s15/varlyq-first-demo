import { Circle, Flex, Text } from '@chakra-ui/react'

export const FirstComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative"  data-aos="zoom-in" >
            {children}
            <Flex transform="translateX(-33%)" align="center">
            <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' 
                    h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{base:'-10%',md:'10%',lg:'-90%', xl:'-200%'}} 
                    mt='-40%' 
                   
                /> 
                <Flex justify="start" py="3" fontSize={{base:'20px', md: "25px", lg:'30px' }} ml={{base:'55px',md:'45px',lg:'33px'}} >
                    <Text color="white" mr="2"  >
                        {percent}
                    </Text>
                    <Circle w="40px" h="40px" bg='secondary' />
                </Flex>
            </Flex>
            <Flex boxSize="240" borderLeft="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomLeftRadius="50%"  >
            </Flex>
            <Flex justify="flex-end" >
                <Flex w="160px" h={{base:"60px", md:"100px"}} mt="-3px" borderTop="3px solid #052FC2" borderRight="3px solid #052FC2" borderTopRightRadius="90px">
                </Flex>
            </Flex>
        </Flex>
    )
}
