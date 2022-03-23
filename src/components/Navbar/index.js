import { Button, Flex, Input, Link, Stack, Text, Circle, Box, useDisclosure, RadioGroup, Radio, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,CloseButton } from "@chakra-ui/react"
import NextLink from 'next/link'
import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


export const NavBar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')


    return (
        <Flex  width='100%' mx='auto' h={{sm:'50px',md:'100px'}}  >
            <Flex
                bg="primary"  width='100%' mx='auto' justify='flex-end' align='center'
                display={['none', 'none', 'flex', 'flex']}
            >
                <Stack
                    direction="row"
                    spacing={{ sm: '1px', md: '30px', lg: '40px', xl: '50px', "2xl": '120px' }}
                    justify='space-between'
                    fontSize={{ sm: '10px', md: "14px", lg: '14px', xl: '16px', "2xl": '18px' }}
                    align='center'
                    mr={{ sm: '10px', md: '30px', lg: '40px', xl: '70px' }}
                    data-aos='fade-down'
                >
                    <Circle
                        style={{ filter: "blur(290px)" }}
                        w='350px'
                        h="350px"
                        bg='#052FC2'
                        position='absolute'
                        mr='80%'
                        mt='-150%'
                    />
                    {Arr?.map((item, index) => {
                        return <NextLink key={index} href={item.link} passHref>
                            <Link color="navLinkColor"  >{item.title}</Link>
                        </NextLink>
                    })}
                    <Input
                        fontSize={{ base: "10px", md: "13px", lg: "14px", xl: '16px', "2xl": '18px' }}
                        w={{md: '150px', lg: '200px', xl: '250px', '2xl': '290px' }}
                        h={{ md: '25px', lg: '34px', xl: '30px', "2xl": '38px' }}
                        placeholder="search"
                        borderRadius="20"
                    />
                    <Button
                        bg="customBlue" _hover={{ bg: "blue" }}
                        w={{ sm: '50', md: '80px', lg: '120px', xl: '130px', '2xl': '150px' }}
                        h={{ sm: "", md: "30px", lg: "32px", xl: '34px', '2xl': '38px' }}
                        borderRadius="34px"
                        justify='center'
                        align='center'
                    >
                        <Text
                            fontWeight='400'
                            fontSize={{ sm: '7px', md: '10px', lg: '14px', xl: '14px', '2xl': '16px' }}
                            color="white"
                        >
                            Connect Wallet
                        </Text>
                    </Button>
                </Stack>
            </Flex>
            <Flex
                direction='row'
                align='center'
                h='100px'
                w='100%'
                mx='auto'
                display={['flex', 'flex', 'none', 'none']}
                justify='flex-end'
            >

                <Button
                    colorScheme='primary'
                    onClick={onOpen}
                    mr='10px'
                    h='40px'
                    w='50px'
                    bg='transparent'
                    _focus={{ bg: 'primary' }}
                >
                    {<HamburgerIcon />}
                </Button>
                <Drawer placement={placement} onClose={onClose} _focus={{ bg: 'primary' }} isOpen={isOpen} w='20%' >
                    <DrawerOverlay />
                    <DrawerContent bg='primary'  >
                        <DrawerHeader borderBottomWidth='1px solid secondary' color='secondary' fontSize='12px' >Menu</DrawerHeader>
                        <DrawerBody>
                            <CloseButton color="white" onClick={onClose} position="absolute" top="2" right="2" />
                            <Stack fontSize='10px' >
                                {Arr?.map((item, index) => {
                                    return <NextLink key={index} href={item.link} passHref  >
                                        <Link color="secondary" variant='unstyled'  >{item.title}</Link>
                                    </NextLink>
                                })}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

            </Flex>
        </Flex>
    )
}

const Arr = [
    {
        link: "#",
        title: "Drops"
    },
    {
        link: "#",
        title: "Marketplace"
    },
    {
        link: "#",
        title: "Creator"
    },
    {
        link: "#",
        title: "Community"
    },
]