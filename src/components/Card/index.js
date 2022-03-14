import { Button, Flex, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react"
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

export const Card = () => {
    return (
        <Flex w="100%" justify="center" direction='column' mx='auto' align='center' >
            <Text color='#9C00E8' >NFT MARKETPLACE</Text>
            <Heading mt={10} fontSize='40px' color='secondary' >Hot Drops </Heading>
            <Flex textColor='#2A5AFA' justifyContent='space-between' width='80%' mt={20} align='center' fontSize={{base:'5px',md:'10px','3xl':'18px'}}>
                <Link p='10px 25px' borderRadius={15} bg='#061033' > Music</Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'> Sports </Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'> Arts </Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'> Photography</Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'>Trading Card</Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'>Virtual World</Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'> Videos </Link>
                <Link p='10px 25px' borderRadius={15} bg='#061033'> More</Link>
            </Flex>
            <Flex w="100%" justify="center" py="10" mt={10}  >
                <SimpleGrid columns={{xl:'4', md:'2'}} spacing="10" >
                    {CardArr.map((item, index) =>
                        <Flex key={index} >
                            <CardComponent image={item.image} title={item.title} desc={item.desc} ether={item.ether} etherImage={item.etherImage} />
                        </Flex>
                    )}
                </SimpleGrid>
            </Flex>
            <Button bg='#052FC2' color='secondary' p={2} w='186px' h='55px' borderRadius={20} shadow={1} mt={10} fontSize='15px'>View More</Button>
        </Flex>
    )
}

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

const CardComponent = ({ image, title, desc, ether, etherImage }) => <Flex p="4" bg="#171717" borderRadius="xl" direction="column">
    <NextImage src={image} width="233px" height="267px" alt="logo-image"></NextImage>
    <Heading fontSize="20px" color="white" mt="2">{title}</Heading>
    <Text color="#959595" mt='1'>
        {desc}
    </Text>
    <Flex justify="space-between" mt="1">
        <Text color="customBlue">{ether}</Text>
        <Flex w="100px">
            <NextImage src={etherImage} width="10" height="10" />
        </Flex>
    </Flex>
    <CollectNowBtn />

</Flex>


const CollectNowBtn = () => <Button>Collect Now</Button>