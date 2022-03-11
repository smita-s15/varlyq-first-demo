import { Button, Flex, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react"
import RectOne from '../../../public/rect.png'
import Rect2 from '../../../public/Rect2.png'
import Rect3 from '../../../public/Rect3.png'
import Rect4 from '../../../public/Rect4.png'
import Rect5 from '../../../public/Rect5.png'
import Rect6 from '../../../public/Rect6.png'
import Rect7 from '../../../public/Rect7.png'
import Rect8 from '../../../public/Rect8.png'
import EtherIamge from '../../../public/ether.png'
import NextImage from 'next/image'

export const CreateNFT = () => {
    return (
        <Flex w="80%" wrap="wrap"  justify="space-between"  my="10">
            {CardArr.map((item) => <NFTComponent image={item.image} title={item.title} ether={item.ether} />)}
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

const NFTComponent = ({ image, title, desc, ether, etherImage }) => <Flex bg="#272727" borderRadius="xl" w="300px" m="5" >
    <Flex p="4" color="white">
        <NextImage src={image} width="80" height="50" alt="logo-image"></NextImage>
        <Flex direction="column" ml="2">
            <Text>{title}</Text>
            <Text>{ether}</Text>
        </Flex>
        <Flex ml="5" justify="center" align="center">
            ...
        </Flex>
    </Flex>
</Flex>


const CollectNowBtn = () => <Button>Collect Now</Button>