import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,
  Flex, Heading, Text, Circle, Button
} from '@chakra-ui/react'

export const FAQ = () => {
  return (
    <Flex w='100%' bg='primary' mx='auto' my="10" justify='center' direction='column' align='center'  >
      <Flex color='secondary' justify='center' fontSize='40px' mt={0}>
        <Heading fontSize={{base:'40px' ,'2xl':'60px'}}> FAQs </Heading>
      </Flex>
        <Circle 
          style={{ filter: "blur(300px)" }} 
          w='300px' 
          h="300px" 
          bg='#052FC2' 
          position='absolute' 
          mr='80%' 
          mt='-20%' 
        /> 
      <Box mt={10} w='70%' align='center' >
        <Accordion allowToggle borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' >
          {AccordItems.map((item, index) => {
            return <AccordionItem border='none' bg='rgba(39, 39, 39, 0.6)' key={index} my="10" py="5" borderRadius="30px" px="10" >
              {({ isExpanded }) => (
                <>
                    <AccordionButton >
                      <Box flex='1' textAlign='left'>
                        {item.heading}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  <AccordionPanel pb={4}>

                    {item.desc.map((des, keyIndex) => <Text key={keyIndex}>{des}</Text>)}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          })}
        </Accordion >
      </Box>
      <Circle 
        style={{ filter: "blur(300px)" }} 
        w='300px' h="400px" 
        bg='#052FC2' 
        position='absolute' 
        ml={{ md:'40%', lg:'50%', 'xl':'60%'  ,'2xl':'75%'}} 
        mb='-30%'  
      /> 
        <Flex bg='primary' w='100%' mx='auto' direction='column' mt={5}  >
        <Box direction='column'  w='60%' bg='rgba(39, 39, 39, 0.6)'  mx='auto'  p='100px' borderRadius="23px" mb="20" align="center" >
            <Flex color='secondary' direction='column' align='center' mt={20}  >
                <Heading mt='-10%' fontSize={{base:'40px' ,'2xl':'60px'}}> Join Our Community </Heading>
                <Text  mt={10} fontSize='20px'>At a very high level, most NFTs are part of the Ethereum blockchain.</Text>
                <Button mt={10} bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} fontSize='15px'>Launch Discord</Button>
            </Flex>
        </Box>
            <Box w='20%' align='flex-start' position='absolute' ml={-10}  >
                <Circle style={{ filter: "blur(600px)" }} opacity='0.1' shadow='10px' w='500px' h="500px" bg='#052FC2' position='flex-end' ml='1px' />
            </Box>
        </Flex> 
      <Circle 
        style={{ filter: "blur(300px)" }} 
        w='300px' h="300px" 
        bg='#052FC2' 
        position='absolute' 
        ml={{ md:'-40%', lg:'-50%', 'xl':'-60%'  ,'2xl':'-75%'}} 
        mb='-80%'  
      /> 
    </Flex>
  )
}


const AccordItems = [
  {
    heading: "What is NFT?",
    desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
  },
  {
    heading: "What is NFT?",
    desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
  },
  {
    heading: "What is NFT?",
    desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
  },
  {
    heading: "What is NFT?",
    desc: ["nFT stands for ‘non-fugible token’.", "a NFT is basically data that is accounted for in a digital ledger, and data represents something specific and unique.", "A NFT can, for example, represent a unique piece of art or a game token."]
  },
]