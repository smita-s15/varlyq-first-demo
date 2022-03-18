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
        <Flex w="100%"  mt={{sm:'-40px', md:'-30%', lg:'-10%'}} bg='primary' justify="center" direction='column' mx='auto' align='center' data-aos="fade-right"  >
            <Circle 
                style={{ filter: "blur(290px)" }} 
                w='350px' 
                h="350px" 
                bg='#052FC2' 
                position='absolute' 
                ml='50%' 
                mt={{base:'10px', md:'-30px', lg:'-50px',xl:'-90%' }}
            /> 
            <Flex direction='row' align='center' justify='center'  mx='auto' w='13%' >
                <Heading color='#9C00E8' fontSize='20px' fontWeight='extrabold' >Nft   </Heading>
                <Text color='transparent'>..</Text>
                <Heading color='#9C00E8' fontSize='18px' fontWeight='normal'>Marketplace</Heading>
            </Flex>
            <Text  
                fontSize='38px' 
                fontWeight='700'
                color='secondary'
                align='center'
                as='h1'
                letterSpacing='6%'
            >
                Hot Drops 
                <NextImage src={fire} />
            </Text>
            <Flex  justifyContent='center' width='80%' mt='62px' align='center'                   
            >
                {ExploreArr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link  p={{md:'5px 10px',xl:"10px 25px"}}  mx='auto' justify='center'  borderRadius={15} bg='#061033'  color="navLinkColor">
                            <Text  fontSize='14px'color='#2A5AFA'  >  
                                {item.title}
                            </Text>
                        </Link>
                    </NextLink>
                })}
            </Flex>
            <Flex w="100%" justify="center" py="10" mt={10}  >
                <SimpleGrid columns={{ md:'2', lg:'3',xl:'4'}} spacing="20" >
                    {CardArr.map((item, index) =>
                        <Flex key={index} >
                            <CardComponent image={item.image} title={item.title} desc={item.desc} ether={item.ether} etherImage={item.etherImage} />
                        </Flex>
                    )}
                </SimpleGrid>
            </Flex>
            <Button 
                bgGradient='linear( to-tl, #052FC2 41.3%, #FFFFFF 110%, #052FC2 10%   )'   
                p={5} 
                w={{base:'100px',md:'150px',lg:'150px',xl:'186px'}}
                h={{base:'40px',md:'45px',lg:'50px',xl:'55px'}} 
                fontSize={{base:'10px',md:'14px',lg:'18px'}}  
                borderRadius={20} mt={10} 
                box-shadow='4px 38px 62px'
                fontWeight='500'
                letterSpacing={2}
                variant='link'
                _focus='transparent'
                data-aos="zoom-out-down"
            >
                <Text 
                    fontSize='18px'
                    letterSpacing='50%'
                    color='secondary'  >
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