import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,
  Flex,Text, Circle, Button, Divider, Stack
} from '@chakra-ui/react'
import vector1 from '../../../public/vector1.png'
import NextImage from 'next/image'

export const FAQ = () => {
  return (
    <Flex w='100%' mx='auto' justify='center' bg='primary'    >
    <Flex w={{base:'300px', md:'500px',lg:'700px', xl:'961px'}} bg='primary' mx='auto' justify='center' direction='column' align='center'  >
      <Flex color='secondary' justify='center'>
        <Text 
          fontSize={{base:'20px', md:'25px', lg:'30px', xl:'38px'}}
          fontWeight={700}
          color='secondary'
          letterSpacing={2}
          > 
          FAQs 
        </Text>
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
      <Box mt={10} w='100%' align='center' >
        <Accordion allowToggle borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' >
          {AccordItems.map((item, index) => {
            return <AccordionItem border='none' bg='rgba(39, 39, 39, 0.6)' key={index} my="10" py="5" borderRadius="30px" px="5" >
              {({ isExpanded }) => (
                <>
                    <AccordionButton 
                      h='10px' 
                      _focus='transparent'
                      >
                      <Box flex='1' textAlign='left' >
                        {item.heading}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                        ) : (
                          <AddIcon fontSize='12px' />
                          )}
                    </AccordionButton>
                  <AccordionPanel pb={4}  textAlign='left' >
                    <Box bg='#052FC2' mt='10px' p='1px'  opacity='0.5' />
                    {item.desc.map((des, keyIndex) => <Text key={keyIndex} mt='10px'  >{des}</Text>)}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          })}
        </Accordion >
      </Box>
        <Stack direction='column'  w='100%' h='300px' bg='rgba(39, 39, 39, 0.6)' mt='5%'   mx='auto' borderRadius="23px" mb="20" align="center" justify='center' spacing={6} >
                <Text 
                  fontSize={{base:'20px', md:'25px', lg:'30px', xl:'38px'}}
                  fontWeight='700'
                  textAlign='center' 
                  color='secondary'
                  position='relative'
                  > 
                  Join Our Community   
                <Box position='absolute' ml='93%' mt='-30%' >
                    <NextImage src={vector1} position='absolute'  />
                </Box>          
                </Text>
                <Text  
                  fontSize={{base:'10px', md:'14px', lg:'16px', xl:'20px'}} 
                  color='secondary'
                  textAlign='center'
                  >
                    At a very high level, most NFTs are part of the Ethereum blockchain.
                  </Text>
                <Button 
                  bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 130%, #052FC2 10%   )' 
                  w={{sm:'100px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
                  h={{sm:'30px',md:'30px',lg:'40px', xl:'50px', '2xl':'55px'}} 
                  fontSize={{sm:'10px',md:'12px',lg:'14px',xl:'16px'}}
                  borderRadius={20} 
                  shadow={5} 
                  mt={10}                             
                  fontWeight='500'
                  letterSpacing={2}
                  variant='link'
                  _focus='transparent'
                  data-aos="zoom-out-down"
                  >
                    <Text color='secondary' >
                      Launch Discord
                    </Text> 
              </Button>
        </Stack> 
    </Flex>
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