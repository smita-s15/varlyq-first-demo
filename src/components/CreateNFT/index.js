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
        <Flex w="100%" direction='column' justify="center" mx='auto' align='center' >
              <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                mr='80%'  
                mt='-130%'
                dir={['none', 'none', 'flex', 'flex']} 
            /> 
            <Button 
                 bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                 w={{sm:'80px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
                 h={{sm:'30px',md:'30px',lg:'40px', xl:'50px', '2xl':'55px'}} 
                 fontSize={{sm:'8px',md:'12px',lg:'14px',xl:'16px'}}  
                 borderRadius={{sm:'10px',md:'20px'}}
                 box-shadow='4px 38px 62px'
                 fontWeight='500'
                 variant='link'
                 letterSpacing='50%'
                 color='secondary'
                 data-aos="zoom-down"
                >
                    Explore
            </Button>
            <Heading fontWeight='bold' fontSize={{sm:'15px',md:'18px'}} mt={20} color='#9C00E8' >How To Be A Creator</Heading>
            <Text 
                fontSize={{sm:'17px',md:'38px'}}
                fontWeight='700'
                lineHeight='55.81px'
                letterSpacing={3}
                color='secondary'
            >
                Create and Sell Your NFTs 
            </Text>
            <Flex w='100%' mx='auto' wrap="wrap">
                <Stack direction={{sm:'column',md:'row', lg:'row', xl:'row'}} mx='auto' align='center' justify='space-between' spacing={{sm:'10',md:'20'}}  mt={20}  wrap="wrap" >
                        {NFTArr.map((item, index) => <NFTCard key={index} image={item.image} title={item.title} ether={item.ether} />)}
                </Stack>
            </Flex>
            <Stack direction='row' justify='space-between' spacing={10}  mt={20}>
            <Button 
                 bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                 w={{sm:'80px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
                 h={{sm:'30px',md:'30px',lg:'40px', xl:'50px', '2xl':'55px'}} 
                 fontSize={{sm:'8px',md:'12px',lg:'14px',xl:'16px'}}  
                 borderRadius={{sm:'10px',md:'20px'}}
                 box-shadow='4px 38px 62px'
                 fontWeight='500'
                 variant='link'
                 letterSpacing='50%'
                 color='secondary'
                 data-aos="zoom-down"
                >
                    Create
            </Button>
            <Button   
                border="1px solid white"
                 w={{sm:'80px',md:'130px',lg:'145px', xl:'160px','2xl':'186px'}}
                 h={{sm:'30px',md:'30px',lg:'40px', xl:'50px', '2xl':'55px'}} 
                 borderRadius={{sm:'10px',md:'20px'}}
                 fontSize={{sm:'8px',md:'12px',lg:'14px',xl:'16px'}}  
                 box-shadow='4px 38px 62px'
                 fontWeight='500'
                 variant='link'
                 letterSpacing='50%'
                 color='secondary'
                 data-aos="zoom-down"
                >
                    Watch Video
            </Button>
            </Stack>
            <Circle dir={['none', 'none', 'flex', 'flex']} style={{ filter: "blur(600px)" }} mt={1} opacity='0.1' shadow='200px' w='500px' h="500px" bg='#052FC2' ml={-80} position='absolute' />
            <Flex w="100%" direction='column' justify="center" my="20" mx='auto' align='center'  >
            <Heading fontWeight='bold' fontSize={{sm:'15px',md:'18px'}} mt={20} color='#9C00E8' >How To Be A Creator</Heading>
            <Text 
                fontSize={{sm:'17px',md:'38px'}}
                fontWeight='700'
                lineHeight='55.81px'
                letterSpacing={3}
                color='secondary'
            >
                Create and Sell Your NFTs 
            </Text>

                <SimpleGrid columns={{sm:'1',md:'1',lg:'2', xl:'3'}} spacing="10" textColor='secondary' alignItems='center' mt={20} >
                    {CardArr.map((item, index) => <NFTComponent key={index} image={item.image} title={item.title} ether={item.ether} />)}
                </SimpleGrid>

                <Button    
                    w={{sm:'100px',md:'150px',lg:'150px',xl:'186px'}}
                    h={{sm:'40px',md:'45px',lg:'50px',xl:'55px'}} 
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

const NFTCard = ({ image, title, ether }) => <Flex bg="#101112" direction='column' align='center' textColor='white' borderRadius={30} justify='center' mx='auto' w={{sm:'200px',md:'336px'}} h={{sm:'220px',md:'383px'}} data-aos="zoom-in" >
            <Box width={{sm:'80px',md:'128px'}} height={{sm:'100px',md:'128px'}}>
                <NextImage src={image} layout='responsive' />
            </Box>
            <Text textAlign='center' fontSize={{sm:'15px',md:'22px'}} fontWeight='700'>{title}</Text>
            <Box w='90%' mt='20px'>
                <Text textAlign='center' fontSize={{sm:'12px',md:'20px'}} fontWeight='300' mt={5}>{ether}</Text>
            </Box>
</Flex>

const NFTComponent = ({ image, title,  ether, desc  }) => <Flex bg="#272727" direction='row' borderRadius="xl" m="5"  w={{sm:'250px',md:'370px'}} h='120px'  p="4"  align='center' data-aos="zoom-in" >
    <Box   alignContent='center'>
        <NextImage src={image} width="90px" height="89px" alt="logo-image" />
    </Box>
        <Flex justify='space-between'ml={3} w='90%'>

        <Flex direction="column"  >
            <Text fontSize='18px' fontWeight='500'>{title}</Text>
            <Flex direction='row' mt={5} justify='space-between' align='center'  spacing='20%'>
                <Circle  h='20px' w='20px' bg='#5F7FEC' >
                    <NextImage src={ETH} h='200px' w='200px' />
                </Circle> 
                <Text >{ether}</Text>
            </Flex>
        </Flex>
        <Flex justify='center' align='center'  >
            <Text  color="white" fontWeight='700' >...</Text>
        </Flex>
    </Flex>

</Flex>

