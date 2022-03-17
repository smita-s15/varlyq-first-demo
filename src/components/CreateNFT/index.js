import { Button, Flex, Heading, SimpleGrid, Text, Stack, Circle } from "@chakra-ui/react"
import RectOne from '../../../public/rect.png'
import Rect2 from '../../../public/Rect2.png'
import Rect3 from '../../../public/Rect3.png'
import Rect4 from '../../../public/Rect4.png'
import Rect5 from '../../../public/Rect5.png'
import Rect6 from '../../../public/Rect6.png'
import ETH from '../../../public/ETH.png'
import Plus from '../../../public/Plus.png'
import Up from '../../../public/Up.png'
import Preferences from '../../../public/Preferences.png'
import EtherIamge from '../../../public/ether.png'
import NextImage from 'next/image'

export const CreateNFT = () => {
    return (
        <Flex w="100%" direction='column' justify="center" my="20" mx='auto' align='center' >
              <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                mr='80%'  
                mt='-130%'
            /> 
             <Button bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 130%, #052FC2 10%   )'   p={5} w='186px' h='55px' borderRadius={20} shadow={5} mt={10} fontSize='15px'>
                <Text color='secondary'fontSize='25px' >
                    Explore
                </Text> 
            </Button>

            <Text fontWeight='bold' fontSize='20px' mt={20} color='#9C00E8' >HOW TO BE A CREATOR</Text>
            <Heading fontSize={{base:'40px' ,'2xl':'60px'}} color='secondary'>Create and Sell your NFTs </Heading>
            
            <Stack direction={{base:'column', lg:'row'}} w='70%'  justify='space-between' spacing={20} mt={20}>
                    {NFTArr.map((item, index) => <NFTCard key={index} image={item.image} title={item.title} ether={item.ether} />)}
            </Stack>
            <Stack direction='row' justify='space-between' spacing={10}  mt={20}>
                <Button 
                    bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 130%, #052FC2 10%   )'   
                    p={5} w='186px' h='55px' 
                    borderRadius={20} 
                    box-shadow='4px 38px 62px'
                 >
                    <Text color='secondary'fontSize='18px' fontWeight='500' >
                        Create
                    </Text> 
                </Button>
                <Button  bg='transparent' color='white' p={2} w='186px' h='55px'  borderRadius={20} fontSize='18px' fontWeight='500' border='1px solid white' >Watch Video</Button>
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
                <Text fontWeight='bold' fontSize='20px' color='#9C00E8' >HOW TO BE A CREATOR</Text>
                <Heading fontSize={{base:'40px' ,'2xl':'60px'}} color='secondary' >Create and Sell your NFTs </Heading>

                <SimpleGrid columns={{base:'1',lg:'2', xl:'3'}} spacing="10" alignItems='center' mt={20} >
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

const NFTCard = ({ image, title, ether }) => <Flex bg="#101112" direction='column' align='center' textColor='white' borderRadius={30} justify='center' w='336px' h='383px' >
    <Stack align='center'  >
            <NextImage src={image} width='128px' height='128px' ></NextImage>
            <Text textAlign='center' fontSize='22px' fontWeight='700'>{title}</Text>
            <Text textAlign='center' fontSize='20px'fontWeight='300' mt={5}>{ether}</Text>
    </Stack>
</Flex>

const NFTComponent = ({ image, title,  ether, desc  }) => <Flex bg="#272727" direction='row' borderRadius="xl" m="5"  w='320px' h='120px'  p="4"  >
        <NextImage src={image} width="90px" height="89px" alt="logo-image"></NextImage>
        <Flex direction="column" ml="2" >
            <Text>{title}</Text>
            <Flex direction='row' mt={5} justify='space-between' alignItems='center' w='100%'  spacing='10%' >
                <Circle  h='20px' w='20px' bg='#5F7FEC' >
                    <NextImage src={ETH} h='200px' w='200px'borderRadius='22px' />
                </Circle> 
                <Text >{ether}</Text>
            </Flex>
            <Flex   >
                <Text  color="white" >...</Text>
            </Flex>
        </Flex>

</Flex>

