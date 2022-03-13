import { Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { FirstComponent } from "./FirstComponent"
import { SeccondComponent } from "./SeccondComponent"

export const Roadmap = () => {
    return (
        <Flex mx='auto' bg='primary' width='100%' justify='center' direction='column'  >
            <Flex justify='center' >
                <Heading color='secondary' fontSize='40px' fontWeight='bold'  > ROADMAP</Heading>
            </Flex>
            <Divider mt={10} opacity='10%' />
            <Flex direction='column' width='100%' mx='auto' justify='space-between'  >
                <Flex direction="column" justify='center' mx='auto'  >
                    <TopShapeRoadMap />
                    {arr.map((item, index) => {
                        return <div key={index}>
                            <FirstComponent>
                                {item.DataComponentOne}
                            </FirstComponent>

                            <SeccondComponent>
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
        <Flex direction="column" minW="400px"   >
            <Flex justify="flex-end" >
                <Flex boxSize="240" borderRight="3px solid white" borderBottom="3px solid white" borderBottomRightRadius="90px" >
                </Flex>
            </Flex>
            <Flex >
                <Flex w="160px" h="100px" mt="-3px" borderTop="3px solid white" borderLeft="3px solid white" borderTopLeftRadius="90px" >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}

const DataComponent = (props) => {
    const { heading, text1, text2, ...rest } = props

    return <Flex direction="column" p="10" {...rest}>
        <Heading fontSize="5xl" color="white" >{heading}</Heading>
        <Flex mt='10px' direction='column' >
            <Text mt="2" color="white">{text1}</Text>
            <Text mt="2" color="white">{text2}</Text>
        </Flex>
    </Flex>
}

const arr = [
    {
        DataComponentOne: <DataComponent w='600px' pos="absolute" top="-20px" align="flex-start" textAlign="start" heading="GIVEAWAY" text1="During those days, you will have the opportunity to receive $86,000 in gifts to congratulate you for taking action.‍" text2="In other words, there will be $8,600 in gifts each day, tracked and dispatched depending on the events" />,
        DataComponentTwo: <DataComponent w='600px' pos="absolute" top="-20px" contentDirection="flex-end" align="flex-end" textAlign="end" heading="Secret and private investment" text1="Get into the system and gain access to private and secret investment opportunities :" text2="Real estate off market deals, access early rounds investment in startups, angel investing, Launchpad ICOs, IDOs, etc ..." />
    },

]