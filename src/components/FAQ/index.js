import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,
  Flex,Text, Circle, Button, Divider
} from '@chakra-ui/react'
import vector1 from '../../../public/vector1.png'
import NextImage from 'next/image'

export const FAQ = () => {
  return (
    <Flex w={{base:'300px', md:'500px',lg:'700px', xl:'961px'}} bg='primary' mx='auto' my="10" justify='center' direction='column' align='center'  >
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
                    <Box bg='#052FC2' mt='10px' p='1px' />
                    {item.desc.map((des, keyIndex) => <Text key={keyIndex}mt='10px' >{des}</Text>)}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          })}
        </Accordion >
      </Box>
        <Flex direction='column'  w='100%' h='300px' bg='rgba(39, 39, 39, 0.6)' mt='5%'   mx='auto' borderRadius="23px" mb="20" align="center" justify='center'  position='relative' >
                <Box position='absolute' ml='40%' mt='-20%' >
                    <NextImage src={vector1}   />
                </Box>          
                <Text 
                  fontSize={{base:'20px', md:'25px', lg:'30px', xl:'38px'}}
                  fontWeight='700'
                  textAlign='center' 
                  color='secondary'
                > 
                  Join Our Community   
                </Text>
                <Text  
                  mt={10} 
                  fontSize={{base:'10px', md:'14px', lg:'16px', xl:'20px'}} 
                  color='secondary'
                >
                    At a very high level, most NFTs are part of the Ethereum blockchain.</Text>
                <Button 
                  bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 130%, #052FC2 10%   )'   
                  w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                  h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                  fontSize={{base:'10px',md:'14px',lg:'18px'}} 
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