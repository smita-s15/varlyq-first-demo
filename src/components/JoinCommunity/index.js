import { Button, Flex, Heading, Text } from "@chakra-ui/react"

export const JoinCommunity = () => {
    return (
        <Flex direction='column' bg='rgba(39, 39, 39, 0.6)'  mx='auto' w='961px' h='400px' borderRadius="23px" mb="20" >
            <Flex color='secondary' fontSize='40px' direction='column' align='center' mt={20}  >
                <Heading mt={5}> Join Our Community </Heading>
                <Text  mt={10} fontSize='20px'>At a very high level, most NFTs are part of the Ethereum blockchain.</Text>
                <Button mt={10} bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} fontSize='15px'>Launch Discord</Button>
            </Flex>
        </Flex>
    )
}
