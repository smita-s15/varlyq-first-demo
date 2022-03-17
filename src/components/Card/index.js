import { Button, Flex, Heading, SimpleGrid, Text, Link, Circle, Box } from "@chakra-ui/react"
import NextImage from 'next/image'
import RectOne from '../../../public/rect.png'
import Rect2 from '../../../public/Rect2.png'
import Rect3 from '../../../public/Rect3.png'
import Rect4 from '../../../public/Rect4.png'
import Rect5 from '../../../public/Rect5.png'
import Rect6 from '../../../public/Rect6.png'
import Rect7 from '../../../public/Rect7.png'
import Rect8 from '../../../public/Rect8.png'
import EtherIamge from '../../../public/ether.png'
import fire from '../../../public/fire.png'
import ETH from '../../../public/ETH.png'
import NextLink from 'next/link'

export const Card = () => {
    return (
        <Flex w="100%" bg='primary' justify="center" direction='column' mx='auto' align='center'  >
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                ml='50%' 
                mt='-90%' 
            /> 
            <Flex direction='row' align='flex-end' justify='space-around' mx='auto' w='13%' >
                <Text color='#9C00E8' fontSize='20px' fontWeight='extrabold' >NFT   </Text>
                <Text color='#9C00E8' fontSize='18px' fontWeight='normal'>MARKETPLACE</Text>
            </Flex>
            <Heading  fontSize={{base:'40px' ,'2xl':'60px'}} color='secondary'>
                Hot Drops <span />
                <NextImage src={fire} />
            </Heading>
            <Flex  justifyContent='space-between' width='80%' mt='70px' align='center'                   
            >
                {ExploreArr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link p='10px 25px' borderRadius={15} bg='#061033'  color="navLinkColor">
                            <Text  fontSize='14px'color='#2A5AFA'>  
                                {item.title}
                            </Text>
                        </Link>
                    </NextLink>
                })}
            </Flex>
            <Flex w="100%" justify="center" py="10" mt={10}  >
                <SimpleGrid columns={{xl:'4', md:'2'}} spacing="20" >
                    {CardArr.map((item, index) =>
                        <Flex key={index} >
                            <CardComponent image={item.image} title={item.title} desc={item.desc} ether={item.ether} etherImage={item.etherImage} />
                        </Flex>
                    )}
                </SimpleGrid>
            </Flex>
            <Button bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   p={5} w='186px' h='55px' borderRadius={20} shadow={5} mt={10} fontSize='15px'>
                <Text color='secondary'fontSize='25px' >
                    View More
                </Text> 
            </Button>
        </Flex>
    )
}
const ExploreArr = [
    {
        link: "#",
        title: "Music"
    },
    {
        link: "#",
        title: "Sports"
    },
    {
        link: "#",
        title: "Arts"
    },
    {
        link: "#",
        title: "Community"
    },
    {
        link: "#",
        title: "Trading Card"
    },
    {
        link: "#",
        title: "Virtual World"
    },
    {
        link: "#",
        title: "Videos"
    },
    {
        link: "#",
        title: "More"
    },
]

const CardArr = [
    {
        image: RectOne,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge
    },
    {
        image: Rect2,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect3,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect4,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect5,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect6,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect7,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    }, {
        image: Rect8,
        title: "Space Runner",
        desc: " @toritoriko",
        ether: "4.4 ETH",
        etherImage: EtherIamge

    },
]

const CardComponent = ({ image, title, desc, ether, etherImage }) => <Flex p="4" bg="#171717" w='260px' h='380px' borderRadius="16px" direction="column" align='center'>
    <NextImage src={image} width="233px" height="267px" alt="logo-image"></NextImage>
    <Flex justify='space-between' w='100%'>
        <Text fontSize="18px"  color="secondary" mt="2">{title}</Text>
        <Text  fontSize="18px" color='secondary' mt="2">...</Text>
    </Flex>
    <Flex align='flex-start' w='100%'>
        <Text color="#959595" mt='1' fontSize='14px'>
            {desc}
        </Text>
    </Flex>
    <Flex justify="space-between" w='100%' align='center' mt='5px' alignContent='center'>
        <Text  fontSize='14px' color="customBlue">{ether}</Text>
        <Circle  h='20px' w='20px' bg='#5F7FEC' >
            <NextImage src={ETH} h='200px' w='200px'/>
        </Circle>   
    </Flex>
    {/* <CollectNowBtn /> */}

</Flex>


// const CollectNowBtn = () => <Button>Collect Now</Button>