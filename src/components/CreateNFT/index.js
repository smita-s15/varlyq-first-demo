import { Button, Flex, Heading, SimpleGrid, Text, Stack, Circle,Box } from "@chakra-ui/react"
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
            <Button 
                bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 130%, #052FC2 10%   )'   
                p={5}  
                borderRadius={20} shadow={5} mt={10} 
                w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                fontSize={{base:'10px',md:'14px',lg:'18px'}} 
                fontWeight='500'
                letterSpacing={2}
                variant='link'
                _focus='transparent'
                data-aos="zoom-out-down"
                
            >
                    Explore
            </Button>

            <Heading fontWeight='bold' fontSize='18px' mt={20} color='#9C00E8' >How To Be A Creator</Heading>
            <Text 
                fontSize='38px'
                fontWeight='700'
                lineHeight='55.81px'
                letterSpacing={3}
                color='secondary'
            >
                Create and Sell Your NFTs 
            </Text>
            <Flex w='100%' mx='auto' wrap="wrap">
                <Stack direction={{md:'column', lg:'column', xl:'row'}} mx='auto' align='center' justify='space-between' spacing={20}  mt={20}  wrap="wrap" >
                        {NFTArr.map((item, index) => <NFTCard key={index} image={item.image} title={item.title} ether={item.ether} />)}
                </Stack>
            </Flex>
            <Stack direction='row' justify='space-between' spacing={10}  mt={20}>
                <Button 
                   bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                   p={5} 
                   w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                   h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                   fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                   borderRadius={20}
                   box-shadow='4px 38px 62px'
                   fontWeight='500'
                   letterSpacing={2}
                   variant='link'
                   _focus='transparent'
                   data-aos="zoom-out-down"
                 >
                     Create
                </Button>
                <Button    
                    p={5} 
                    w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                    h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                    fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                    borderRadius={20} mt={10} 
                    box-shadow='4px 38px 62px'
                    fontWeight='500'
                    letterSpacing={2}
                    variant='link'
                    border= "1px solid white"
                    textColor='secondary'
                    _focus='transparent'
                    data-aos="zoom-out-down"
                >
                        Watch Video
                </Button>
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
            <Heading fontWeight='bold' fontSize='18px' mt={20} color='#9C00E8' >How To Be A Creator</Heading>
            <Text 
                fontSize='38px'
                fontWeight='700'
                lineHeight='55.81px'
                letterSpacing={3}
                color='secondary'
            >
                Create and Sell Your NFTs 
            </Text>

                <SimpleGrid columns={{base:'1',lg:'2', xl:'3'}} spacing="10" textColor='secondary' alignItems='center' mt={20} >
                    {CardArr.map((item, index) => <NFTComponent key={index} image={item.image} title={item.title} ether={item.ether} />)}
                </SimpleGrid>

                <Button    
                    p={5} 
                    w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                    h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                    fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                    borderRadius={20} mt={10} 
                    box-shadow='4px 38px 62px'
                    fontWeight='500'
                    letterSpacing={2}
                    variant='link'
                    border= "1px solid white"
                    textColor='secondary'
                    _focus='transparent'
                    data-aos="zoom-out-down"
                >
                    <a align='center'  >
                        View Ranking
                    </a>
                </Button>
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

    }, 
    {
        image: Preferences,
        title: "Listing",
        ether: "At a very high level, most NFTs are part of the Ethereum blockchain.",

    }
]

const NFTCard = ({ image, title, ether }) => <Flex bg="#101112" direction='column' align='center' textColor='white' borderRadius={30} justify='center' mx='auto' w='336px' h='383px' data-aos="zoom-in-left" >
            <NextImage src={image} width='128px' height='128px' ></NextImage>
            <Text textAlign='center' fontSize='22px' fontWeight='700'>{title}</Text>
            <Box w='90%' mt='20px'>
                <Text textAlign='center' fontSize='20px'fontWeight='300' mt={5}>{ether}</Text>
            </Box>
</Flex>

const NFTComponent = ({ image, title,  ether, desc  }) => <Flex bg="#272727" direction='row' borderRadius="xl" m="5"  w='370px' h='120px'  p="4"  align='center' data-aos="zoom-in" >
    <Box cornerRadius='22px'  alignContent='center'>
        <NextImage src={image} width="90px" height="89px" alt="logo-image" />
    </Box>
        <Flex justify='space-between'ml={3} w='90%'>

        <Flex direction="column"  >
            <Text fontSize='18px' fontWeight='500'>{title}</Text>
            <Flex direction='row' mt={5} justify='space-between' align='center'  spacing='20%'>
                <Circle  h='20px' w='20px' bg='#5F7FEC' >
                    <NextImage src={ETH} h='200px' w='200px'cornerRadius='22px' />
                </Circle> 
                <Text >{ether}</Text>
            </Flex>
        </Flex>
        <Flex justify='center' align='center'  >
            <Text  color="white" fontWeight='700' >...</Text>
        </Flex>
    </Flex>

</Flex>

