import { Divider, Flex, Heading, Text, Circle } from "@chakra-ui/react"
import { FirstComponent } from "./FirstComponent"
import { SeccondComponent } from "./SeccondComponent"

export const Roadmap = () => {
    return (
        <Flex mx='auto' bg='primary' width='100%' justify='center' direction='column'   >
            <Flex justify='center' >
                <Heading color='secondary' fontSize='40px' fontWeight='bold'  > ROADMAP</Heading>
            </Flex>
            <Divider mt={10} opacity='20%' />
            <Flex direction='column' width='100%' mx='auto' justify='space-between'  >
                <Flex direction="column" justify='center' mx='auto'  >
                    <TopShapeRoadMap data-aos="zoom-in" />
                    {arr.map((item, index) => {
                        return <div key={index}>
                            <FirstComponent percent={item.percentForComponentOne}>
                                {item.DataComponentOne}
                            </FirstComponent>

                            <SeccondComponent percent={item.percentForComponentTwo}>
                                {item.DataComponentTwo}
                            </SeccondComponent>
                        </div>
                    })}
                </Flex>
            </Flex>
            <Divider />
        </Flex>
    )
}

const TopShapeRoadMap = (props) => {
    return <Flex justify="center" {...props}>
        <Flex direction="column" minW="350px"   >
            <Flex justify="flex-end" >
                <Flex boxSize="240" borderRight="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomRightRadius="90px" >
                </Flex>
            </Flex>
            <Flex >
                <Flex w={{sm:"80px",md:"160px"}} h={{sm:"30px",md:"100px"}} mt="-3px" borderTop="3px solid #052FC2" borderLeft="3px solid #052FC2" borderTopLeftRadius="90px" >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}

const DataComponent = (props) => {
    const { heading, text1, text2, text4, text3, ...rest } = props

    return <Flex direction="column" p="10" {...rest} overflow="hidden" data-aos="zoom-in"  >
        <Heading fontSize={{sm:'10px', md: "20px", lg:'25px', xl:'30px' }} color="white" >{heading}</Heading>
        <Flex mt='10px' direction='column' w='80%' fontSize={{sm:'10px', md:'x12px' , lg:'14px', xl:'16px'}} >
            <Text mt="2" color="white">{text1}</Text>
            <Text mt="2" color="white">{text2}</Text>
            { text3 && <Text mt="2" color="white">{text3}</Text> }
            { text4 && <Text mt="2" color="white">{text4}</Text>}
        </Flex>
    </Flex>
}

const arr = [
    {
        percentForComponentOne: "10%",
        DataComponentOne: <DataComponent w={{ base: "300px", md: "500px", xl:'700px'  }} pos="absolute" top="-25px" align="flex-start" textAlign="start" 
            heading="Giveway" 
            text1="During those days, you will have the opportunity to receive $86,000 in gifts to congratulate you for taking action.‍" 
            text2="In other words, there will be $8,600 in gifts each day, tracked and dispatched depending on the events" 
        />,
        percentForComponentTwo: "20%",
        DataComponentTwo: <DataComponent w={{ base: "300px", md: "500px", xl:'700px' }} pos="absolute" top="-20px" align="flex-end" textAlign="end" 
            heading="Secret And Private Investment" 
            text1="Get into the system and gain access to private and secret investment opportunities :" text2="Real estate off market deals, access early rounds investment in startups, angel investing, Launchpad ICOs, IDOs, etc ..." 
        />
    },
    {
        percentForComponentOne: "30%",
        DataComponentOne: <DataComponent w={{ base: "300px", md: "500px", xl:'700px'  }} pos="absolute" top="-25px"  align="flex-start" textAlign="start" 
            heading="V.I.P Events" 
            text1="Imagine a world where the flapping of a butterflys wing causes the biggest hurricanes." text2="This is the power of the BRAIN 3.0."
            text3="Our first global event will take place in February in Miami."
            text4="Many others will take place virtually through masterminds on Zoom or directly in the Metaverse ! " 
        />,
        percentForComponentTwo: "40%",
        DataComponentTwo: <DataComponent w={{ base: "300px", md: "500px", xl:'700px' }} pos="absolute" top="-20px"  align="flex-end" textAlign="end" 
            heading="Charity"  
            text1= "In the hope of seeing the accomplishment of other children to whom NOTHING encourages their success :" 
            text2= "$50,000 as well as 10% of our royalties will be donated to the association 27-12 & Motema Foundation in Ivory Coast to help children with childhood illnesses and perhaps save the world of tomorrow once again."  
        />
    },
    {
        percentForComponentOne: "50%",
        DataComponentOne: <DataComponent  w={{ base: "300px", md:"500px", xl:'700px' }} pos="absolute" top="-25px"  align="flex-start" textAlign="start" 
            heading= "More Than Brand, Cybrog 86"
            text1 ="Millions of people appropriated our image to the point of becoming a brand : Cyborg 86."
            text2= "Today you have the opportunity to be the first ambassadors."
            text3= "Join those who change the world, who fulfill their destiny."  
        />,
        percentForComponentTwo: "60%",
        DataComponentTwo: <DataComponent w={{ base: "300px", md: "500px", xl:'800px'  }}  pos="absolute" top="-20px"  align="flex-end" textAlign="end" 
            heading= "Sponsorship"
            text1= "We will be sponsoring the most exclusive events : concerts, international fights, masterminds and many others."
            text2= "The Cyborg 86 community will not only control the metaverse but will have a real influence, in the real world."
            text3= "Only those who have similar values to ours will enter the system once they have proven their worthiness."  
        />
    },
    {
        percentForComponentOne: "70%",
        DataComponentOne: <DataComponent w={{ base: "300px", md: "500px" , xl:'700px' }} pos="absolute" top="-25px" align="flex-start" textAlign="start" 
            heading= "$860,000 In Funds"
            text1= "The community will be able to vote & choose projects through our DAO.‍"
            text2= "All the candidates who have become cyborgs and who are part of Brain 3.0 will be able to vote & choose through our DAO and invest the $860,000 which is exclusively reserved for it."
            text3= "Crypto, NFT, Metaverse, etc ..."
         />,
        percentForComponentTwo: "80%",
        DataComponentTwo: <DataComponent w={{ base: "300px", md: "500px", xl:'700px'  }} pos="absolute" top="-20px" align="flex-end" textAlign="end" 
        heading= "$1,000,000 In Reward For Our Holders"
            text1= "Every member of the system is an asset. And each asset has its interest to claim."
            text2= "This is why the holders will benefit over $1,000,000 of reward through the 8,600 cards."
            text3= "Each card will have a distinctive sign which will determine the value of its reward."
            text4= "It will be presented when you least expect it." 
        />
    },
    {
        percentForComponentOne: "90%",
        DataComponentOne: <DataComponent w={{ base: "300px", md: "500px", xl:'700px' }} pos="absolute" top="-25px"  align="flex-start" textAlign="start" 
            heading= "Unique Headqurters In Metaverse"
            text1= "An application has been submitted to the elite House of Kibaa to be with B.A.Y.C and the Gutters Cat Gang."
            text2= "The goal is to be among the first projects to have a plot in the Metaverse within their ecosystem."
            text3= "If so, we will get land on Sandbox which will become the ideal place to establish our new base."
        />,
        percentForComponentTwo: "100%",
        DataComponentTwo: <DataComponent w={{ base: "300px", md: "500px", xl:'700px' }} pos="absolute" top="-20px"  align="flex-end" textAlign="end" 
            heading= "Brain 3.0 - The Revolution Starts Now"
            text1= "This information is confidential for now. "
            text2= "All we can share with you is that our team is currently developing our own P2E game."
            text3= "What does our own game mean ? Our Own Cryptocurrency."  
        />
    },

]