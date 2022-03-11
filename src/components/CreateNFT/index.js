import { Button, Flex, Heading, SimpleGrid, Text, Link, Box, Stack } from "@chakra-ui/react"
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
             <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Explore</Button>

            <Text fontWeight='bold' fontSize='20px' mt={20} color='#9C00E8' >How to be a creator</Text>
            <Heading mt={10} fontSize='40px' color='secondary'>Create and Sell your NFTs </Heading>
            
            <Stack direction='row' w='60%'  justify='space-between' spacing={20} mt={20}>
                    {NFTArr.map((item, index) => <NFTCard key={index} image={item.image} title={item.title} ether={item.ether} />)}
            </Stack>
            <Stack direction='row' justify='space-between' spacing={10} align='center' mt={20}>
                <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px' >Create</Button>
                <Button  bg='transparent' color='white' borderColor='secondary' border='1px' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>Watch Video</Button>
            </Stack>
           
            <Flex w="100%" direction='column' justify="center" my="20" mx='auto' align='center'  >
                <Text fontWeight='bold' fontSize='20px' mt={20} color='#9C00E8' >How to be a creator</Text>
                <Heading mt={10} fontSize='40px' color='secondary' >Create and Sell your NFTs </Heading>

                <SimpleGrid columns={3} spacing="10" alignItems='center' mt={20} >
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


const NFTComponent = ({ image, title,  ether, desc  }) => <Flex bg="#272727" borderRadius="xl" w="300px" m="5" >
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

const NFTCard = ({ image, title, ether }) => <Flex bg="#101112" direction='column' w='100%' align='center' textColor='white' borderRadius={20} p={10}  >

    <NextImage src={image} width='200px' height='200px' ></NextImage>
    <Flex mt={10} direction='column' justify='center' align='center' wrap='wrap'>
        <Heading fontSize='25px'>{title}</Heading>
    </Flex>
    <Box w='90%'>

        <Text fontSize='15px' mt={50}>{ether}</Text>
    </Box>
</Flex>


