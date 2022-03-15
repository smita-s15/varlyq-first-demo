import { Button, Flex, Heading, SimpleGrid, Text, Stack, Circle } from "@chakra-ui/react"
import RectOne from '../../../public/rect.png'
import Rect2 from '../../../public/Rect2.png'
import Rect3 from '../../../public/Rect3.png'
import Rect4 from '../../../public/Rect4.png'
import Rect5 from '../../../public/Rect5.png'
import Rect6 from '../../../public/Rect6.png'

import Plus from '../../../public/Plus.png'
import Up from '../../../public/Up.png'
import Preferences from '../../../public/Preferences.png'
import EtherIamge from '../../../public/ether.png'
import NextImage from 'next/image'

export const CreateNFT = () => {
    return (
        <Flex w="100%" direction='column' justify="center" my="20" mx='auto' align='center'  >
              <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                mr='80%'  
                mt='-130%'
            /> 
             <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Explore</Button>

            <Text fontWeight='bold' fontSize='20px' mt={20} color='#9C00E8' >HOW TO BE A CREATOR</Text>
            <Heading mt={10} fontSize={{base:'40px' ,'2xl':'60px'}} color='secondary'>Create and Sell your NFTs </Heading>
            
            <Stack direction={{base:'column', lg:'row'}} w='70%'  justify='space-between' spacing={20} mt={20}>
                    {NFTArr.map((item, index) => <NFTCard key={index} image={item.image} title={item.title} ether={item.ether} />)}
            </Stack>
            <Stack direction='row' justify='space-between' spacing={10}  mt={20}>
                <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} fontSize='15px' >Create</Button>
                <Button  bg='transparent' color='white' p={2} w='186px' h='55px'  borderRadius={20} fontSize='15px' border='1px solid white' >Watch Video</Button>
            </Stack>
                <Circle 
                    style={{ filter: "blur(290px)" }} 
                    w='350px' h="350px" 
                    bg='#052FC2' 
                    position='absolute' 
                    ml={{ md:'40%', lg:'50%', 'xl':'60%'  ,'2xl':'75%'}} 
                    mb='-1%'  
                /> 
           
            <Flex w="100%" direction='column' justify="center" my="20" mx='auto' align='center'  >
                <Text fontWeight='bold' fontSize='20px' mt={20} color='#9C00E8' >HOW TO BE A CREATOR</Text>
                <Heading mt={10} fontSize={{base:'40px' ,'2xl':'60px'}} color='secondary' >Create and Sell your NFTs </Heading>

                <SimpleGrid columns={{base:'2', xl:'3'}} spacing="10" alignItems='center' mt={20} >
                    {CardArr.map((item, index) => <NFTComponent key={index} image={item.image} title={item.title} ether={item.ether} />)}
                </SimpleGrid>

                <Button  bg='transparent' color='white' borderColor='secondary' border='1px' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={20} fontSize='15px'>View Ranking</Button>
            </Flex>
        </Flex>
    )
}


const CardArr = [
    {
        image: RectOne,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",
    },
    {
        image: Rect2,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",

    }, {
        image: Rect3,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",
        etherImage: EtherIamge

    }, {
        image: Rect4,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",

    }, {
        image: Rect5,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",
        etherImage: EtherIamge

    }, {
        image: Rect6,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "14,800.55",

    }
]


const NFTComponent = ({ image, title,  ether, desc  }) => <Flex bg="#272727" borderRadius="xl" w="350px" m="5" >
    <Flex p="4" color="white"  >
        <NextImage src={image} width="100" height="100" alt="logo-image"></NextImage>
        <Flex direction="column" ml="2" >
            <Text>{title}</Text>
            <Text mt={5}>{ether}</Text>
        </Flex>
        <Flex ml="5" justify="center" align="center">
            ...
        </Flex>
    </Flex>
</Flex>


const NFTArr = [
    {
        image: Plus,
        title: "Create Artwork",
        ether: "At a very high level, most NFTs are part of the Ethereum blockchain.",
    },
    {
        image: Up,
        title: "Upload",
        ether: "At a very high level, most NFTs are part of the Ethereum blockchain.",

    }, {
        image: Preferences,
        title: "Listing",
        ether: "At a very high level, most NFTs are part of the Ethereum blockchain.",

    }
]

const NFTCard = ({ image, title, ether }) => <Flex bg="#101112" direction='column' align='center' textColor='white' borderRadius={30} justify='center'  >
    <Stack align='center'p='20px 30px'  >
        <NextImage src={image} width='200px' height='200px' ></NextImage>
            <Heading textAlign='center' fontSize='30px'>{title}</Heading>
            <Text textAlign='center' fontSize='20px' mt={5}>{ether}</Text>
    </Stack>
</Flex>


