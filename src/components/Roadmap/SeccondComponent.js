import { Circle, Flex, Stack, Text } from "@chakra-ui/react"

export const SeccondComponent = ({ children, percent }) => {
    return (
        <Flex direction="column" pos="relative" data-aos="zoom-in" w={{sm:"80%",md:"100%"}} >
            <Flex pos="absolute" top="0" right="0" justify="flex-end" >
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
                <Stack py="3"  align="center" fontSize={{ base: '10px', md: "25px", lg: '30px' }} justify='space-between' direction='row' spacing={2} mr={{sm:'28%', md:'10%'}}>
                    <Circle w={{ sm: "15px", md: "40px" }} h={{ sm: "15px", md: "40px" }} bg='secondary' />
                    <Text color="white" >
                        {percent}
                    </Text>
                </Stack>
                </Flex>
                <Flex width={{ sm: "120px", md: "240px" }} height={{ sm: "120px", md: "240px" }}  borderRight="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomRightRadius="50%"  >
                </Flex>
            </Flex>
            <Flex justify="flex-start" >
                <Flex w="70%" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderLeft="3px solid #052FC2" borderTopLeftRadius="90px"  >
                </Flex>
            </Flex>
        </Flex>
    )
}
