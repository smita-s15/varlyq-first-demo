import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,
  Flex,
  Heading, Text
} from '@chakra-ui/react'

export const FAQ = () => {
  return (
    <Flex w='60%' bg='primary' mx='auto' my="10" justify='center' direction='column'  >
      <Flex color='secondary' justify='center' fontSize='40px' mt={0}>
        <Heading> FAQs </Heading>
      </Flex>


      <Flex mt={10} >
        <Accordion allowToggle borderRadius='22px' textColor='secondary' fontSize='20px' w='100%' p={2}>

          {AccordItems.map((item, index) => {
            return <AccordionItem border='none' bg='rgba(39, 39, 39, 0.6)' key={index} my="10" py="5" borderRadius="30px" px="10">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        {item.heading}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize='12px' />
                      ) : (
                        <AddIcon fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>

                    {item.desc.map((des, keyIndex) => <Text key={keyIndex}>{des}</Text>)}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          })}
        </Accordion >
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