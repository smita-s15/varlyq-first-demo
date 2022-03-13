import { Box, Circle, Divider, Flex, Heading, Text } from "@chakra-ui/react"

export const Roadmap = () => {
    return (
        <Flex mx='auto' bg='primary' width='100%' justify='center' direction='column'  >
            <Flex justify='center' >
                <Heading color='secondary' fontSize='40px' fontWeight='bold'  > ROADMAP</Heading>
            </Flex>
            <Divider mt={10} opacity='10%' />
            <Flex direction='column' width='100%'  mx='auto' justify='space-between'  >
                <Box mt='-moz-initial' justify='center' width='60%' mx='auto' align='center' >
                    <Flex justify="center" >
                        <Flex direction="column" w="400px" >
                            <Flex justify="flex-end" >
                                <Flex boxSize="240" borderRight="3px solid #052FC2" borderBottom="3px solid #052FC2" borderBottomRightRadius="90px"  >
                                </Flex>
                            </Flex>
                            <Flex >
                                <Flex w="200px" h="100px" mt="-3px" borderTop="3px solid #052FC2" borderLeft="3px solid #052FC2" borderTopLeftRadius="90px"  >
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex justify="center" w='100%' align='center'>
                        <Flex direction="column" w="600px" pos="relative" left="120px" textAlign='left'  >
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' mt='-80%' ml="-140%" />
                            <Flex direction='row' justify='space-between' ml='-29%' w='450px' align='center' position='relative'  >
                                <Heading fontSize="5xl" color="white" >10%</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >GIVEAWAY</Heading>  
                            </Flex>
                            <Flex mt='10px' direction='column' ml='70px'>
                                <Text mt="2" color="white">During those days, you will have the opportunity to receive $86,000 in gifts to congratulate you for taking action.‍</Text>
                                <Text mt="2" color="white">In other words, there will be $8,600 in gifts each day, tracked and dispatched depending on the events</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorder mt="-136px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" right="120px" textAlign='right'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml='170%' />
                            <Flex direction='row' justify='space-between' ml='-29%' w='950px' align='center' position='relative'    >
                                <Heading fontSize="5xl" color="white" >SECRET AND PRIVATE INVETSMENT</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >20%</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' mr='70px'>
                                <Text mt="2" color="white">Get into the system and gain access to private and secret investment opportunities :‍</Text>
                                <Text mt="2" color="white">Real estate off market deals, access early rounds Sinvestment in startups, angel investing, Launchpad ICOs, IDOs, etc ...</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorderInverse mt="-136px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" left="120px" textAlign='left'  >
                        <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute'  ml="-140%" />
                            <Flex direction='row' justify='space-between' ml='-29.5%' w='500px' align='center' position='relative'   >
                                <Heading fontSize="5xl" color="white" >30%</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >V.I.P. EVENTS </Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' ml='70px'>
                                <Text mt="2" color="white">Imagine a world where the flapping of a butterflys wing causes the biggest hurricanes.</Text>
                                <Text mt="2" color="white">This is the power of the BRAIN 3.0</Text>
                                <Text mt="2" color="white">Our first global event will take place in February in Miami.</Text>
                                <Text mt="2" color="white">Many others will take place virtually through masterminds on Zoom or directly in the Metaverse ! </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorder mt="-200px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" right="120px" textAlign='right' >
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml='170%' />
                            <Flex direction='row' justify='space-between' ml='56.5%' w='450px' align='center' position='relative'  >
                                <Heading fontSize="5xl" color="white" >CHARITY</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >40%</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' mr='70px'>
                                <Text mt="2" color="white">‍In the hope of seeing the accomplishment of other children to whom NOTHING encourages their success :</Text>
                                <Text mt="2" color="white">$50,000 as well as 10% of our royalties will be donated to the association 27-12 & Motema Foundation in Ivory Coast to help children with childhood illnesses and perhaps save the world of tomorrow once again.</Text>
                            </Flex>

                        </Flex>
                    </Flex>
                    <BoxWithBorderInverse mt="-150px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" left="120px"  textAlign='left'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml="-130%" />
                            <Flex direction='row' justify='space-between' ml='-30.5%' w='900px' align='center' position='relative'   >
                                <Heading fontSize="5xl" color="white" >50%</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >MORE THAN BRANDS CYBR0G 86</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' ml='70px'>
                                <Text mt="2" color="white">Millions of people appropriated our image to the point of  becoming a brand : Cyborg 86.</Text>
                                <Text mt="2" color="white">Today you have the opportunity to be the first ambassadors.</Text>
                                <Text mt="2" color="white">Join those who change the world, who fulfill their destiny.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorder mt="-136px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" right="120px" textAlign='right'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml='170%' />
                            <Flex direction='row' justify='space-between' ml='40%' w='550px' align='center' position='relative'   >
                                <Heading fontSize="5xl" color="white" >SPONSORSHIP</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >60%</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' mr='70px'>
                                <Text mt="2" color="white">‍Millions of people appropriated our image to the point of becoming a brand : Cyborg 86.</Text>
                                <Text mt="2" color="white">Today you have the opportunity to be the first ambassadors.</Text>
                                <Text mt="2" color="white">Today you have the opportunity to be the first ambassadors.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorderInverse mt="-136px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" left="120px" textAlign='left'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml="-140%" />
                            <Flex direction='row' justify='space-between' ml='-31%' w='600px' align='center' position='relative'   >
                                <Heading fontSize="5xl" color="white" >70%</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >$860,000 IN FUNDS</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' ml='60px'>
                                <Text mt="2" color="white">The community will be able to vote & choose projects through our DAO.</Text>
                                <Text mt="2" color="white">All the candidates who have become cyborgs and who are part of Brain 3.0 will be able to vote & choose through our DAO and invest the $860,000 which is exclusively reserved for it.</Text>
                                <Text mt="2" color="white">Crypto, NFT, Metaverse, etc ...</Text>
                            </Flex>

                        </Flex>
                    </Flex>
                    <BoxWithBorder mt="-160px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" right="120px" textAlign='right'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml='170%' />
                            <Flex direction='row' justify='space-between' ml='-52%' w='1100px' align='center' position='relative'>
                                <Heading fontSize="5xl" color="white" >$1,000,000 IN REWARDS FOR OUR HOLDERS</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >80%</Heading>
                            </Flex>

                            <Flex mt='10px' direction='column' mr='70px'>
                                <Text mt="2" color="white">Every member of the system is an asset. And each asset has its interest to claim.</Text>
                                <Text mt="2" color="white">This is why the holders will benefit over $1,000,000 of reward through the 8,600 cards.</Text>
                                <Text mt="2" color="white">Each card will have a distinctive sign which will determine the value of its reward.</Text>
                                <Text mt="2" color="white">It will be presented when you least expect it.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorderInverse mt='-190px' />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" left="120px" textAlign='left' >
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml="-140%" />
                            <Flex direction='row' justify='space-between' ml='-30%' w='1150px' align='center' position='relative' >
                                <Heading fontSize="5xl" color="white" >90%</Heading>
                                <Circle w="50px" h="50px" bg='secondary' />
                                <Heading fontSize="5xl" color="white" >UNIQUE HEADQUARTERS IN THE METAVERSE</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' ml='70px'>
                                <Text mt="2" color="white">An application has been submitted to the elite House of Kibaa to be with B.A.Y.C and the Gutters Cat Gang.</Text>
                                <Text mt="2" color="white">The goal is to be among the first projects to have a plot in the Metaverse within their ecosystem.</Text>
                                <Text mt="2" color="white">If so, we will get land on Sandbox which will become the ideal place to establish our new base.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorder mt="-180px" />
                    <Flex justify="center">
                        <Flex direction="column" w="600px" pos="relative" right="120px" textAlign='right'>
                            <Circle style={{ filter: "blur(250px)" }} w='400px' h="400px" bg='#052FC2' position='absolute' ml='170%' />
                            <Flex direction='row' justify='space-between' ml='-49.5%' w='1100px' align='center' position='relative'   >
                                <Heading fontSize="5xl" color="white" >BRAIN 3.0 - THE EVOLUTION STARTS NOW</Heading>
                                <Circle w="50px" h="50px" bg='secondary'  />
                                <Heading fontSize="5xl" color="white" >100%</Heading>
                            </Flex>
                            <Flex mt='10px' direction='column' mr='70px'>
                                <Text mt="2" color="white">‍This information is confidential for now. </Text>
                                <Text mt="2" color="white">All we can share with you is that our team is currently developing our own P2E game.</Text>
                                <Text mt="2" color="white">What does our own game mean ? Our Own Cryptocurrency.</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <BoxWithBorderInverse mt="-136px" />
                </Box>
            </Flex>
            <Divider />
        </Flex>
    )
}



const BoxWithBorder = (props) => {
    const { children, ...rest } = props
    return <Flex justify="center"{...rest} >
        <Flex direction="column" w="400px" >
            <Flex boxSize="240" borderLeft="3px solid white" borderBottom="3px solid white" borderBottomLeftRadius="50%" opacity='40%' >
            </Flex>
            <Flex justify="flex-end">
                <Flex w="200px" h="100px" mt="-3px" borderTop="3px solid white" borderRight="3px solid white" borderTopRightRadius="90px" opacity='40%' >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}
const BoxWithBorderInverse = (props) => {
    return <Flex justify="center"{...props} >
        <Flex direction="column" w="400px" >
            <Flex justify="flex-end" >
                <Flex boxSize="240" borderRight="3px solid white" borderBottom="3px solid white" borderBottomRightRadius="90px" opacity='40%' >
                </Flex>
            </Flex>
            <Flex >
                <Flex w="200px" h="100px" mt="-3px" borderTop="3px solid white" borderLeft="3px solid white" borderTopLeftRadius="90px" opacity='40%' >
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}