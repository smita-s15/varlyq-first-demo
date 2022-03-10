import { AddIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Heading, Text, Button
} from '@chakra-ui/react'

export const FAQ = () => {
    return (
      <Flex w='60%'  bg='primary'   mx='auto' h='90rem' justify='center' direction='column' mx='auto' >
        <Flex color='secondary' justify='center' fontSize='40px' mt={0}>
          <Heading> FAQ's </Heading>
        </Flex>
        \
        <Flex spacing='20px' border='none' mt={10} >
          <Accordion bg='rgba(39, 39, 39, 0.6)'  borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' p={2} >
          <AccordionItem border='none'>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  What is NFT?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>nFT stands for ‘non-fugible token’.</Text>
              <Text>a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.</Text>
              <Text>A NFT can, for example, represent a unique piece of art or a game token.</Text>
            </AccordionPanel>
          </AccordionItem>         
        </Accordion>
        </Flex>
        
        <Flex mt={10} >   
          <Accordion bg='rgba(39, 39, 39, 0.6)' borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' p={2}>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' textColor='secondary' fontSize='20px'>
                    how can i get an NFT?
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>
        </Flex>

        <Flex mt={10} >   
          <Accordion bg='rgba(39, 39, 39, 0.6)' borderRadius='22px'  textColor='secondary' fontSize='20px' w='100%' p={2}>
            <AccordionItem border='none'>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' textColor='secondary' fontSize='20px'>
                    how can i get an NFT?
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>
        </Flex>

        <Flex mt={10} >   
          <Accordion bg='rgba(39, 39, 39, 0.6)' borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' p={2}>
            <AccordionItem border='none' >
              <h2>
                <AccordionButton >
                  <Box flex='1' textAlign='left' textColor='secondary' fontSize='20px'>
                    how can i get an NFT?
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
          </Accordion>
        </Flex>

          <Flex  direction='column' bg='rgba(39, 39, 39, 0.6)' mt="100px" justify='center' mx='auto'  w='961px' h='400px' borderRadius="23px" >
            <Flex color='secondary' fontSize='40px' direction='column' align='center'  >
              <Heading> Join Our Community </Heading>
              <Text fontSize='20px'>At a very high level, most NFTs are part of the Ethereum blockchain.</Text>
              <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} fontSize='15px'>Launch Discord</Button>
            </Flex>          
        </Flex>
    </Flex>

    )
}