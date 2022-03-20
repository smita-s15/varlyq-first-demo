import { Flex, Stack, Button, Text, Input, Divider, InputGroup, Link, Heading } from "@chakra-ui/react"
import Logo from '../../../public/Logo.png'
import { EmailIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'
import NextLink from 'next/link'
import "@fontsource/poppins/400.css"

export const Footer = () => {
    return (
        <>
        <Flex w='100%' bg='#272727' direction='column' fontFamily='poppins' mx='auto' >
            <Flex  h='330px' justify='space-between' >
                <Stack direction='row' spacing='5%' mt={10} w="80%" mx="auto">
                    <Stack spacing="4" flex="1" align='center' >
                        <Flex>
                            <NextImage src={Logo} width={136} height={81} alt="logo" />
                        </Flex>
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' textColor='#ffffff' Opacity= '75%'
                    >
                        <Heading fontSize='16px' fontWeight='400' letterSpacing='2px' color="secondary">
                            Sitemap
                        </Heading>
                        <Stack spacing="5" shouldWrapChildren >
                        {SitemapArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link color='secondary'>{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' textColor='#ffffff' Opacity= '75%'
                    >
                        <Heading fontSize='16px' fontWeight='400' letterSpacing='2px' color="secondary">
                            Socials
                        </Heading>
                        <Stack spacing="5" shouldWrapChildren >
                        {SocialArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link color='secondary'>{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" shouldWrapChildren  fontSize={{ sm: '10px',lg:'15px', xl: '20px' }}>
                        <Heading fontSize='16px' fontWeight='400' letterSpacing='2px' color="secondary">
                            Head Office
                        </Heading>
                        <Text  color="secondary" fontSize='14px' >
                            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565
                        </Text>
                        <Heading mt='20px' fontSize='16px' fontWeight='400' letterSpacing='2px' color="secondary">
                           News Letter
                        </Heading>
                        <Flex  justifyContent='space-between' alignContent='center' align='center'>
                            <Input  
                                placeholder="Enter your email" 
                                fontSize='14px'
                                type="email" 
                                variant='unstyled' 
                                textColor='white'                           
                                required 
                            />
                            <EmailIcon color='white' 
                                h='16px'
                                w='23px'
                            />
                        </Flex>
                        <Divider opacity='0.5' />
                    </Stack>
                </Stack>
            </Flex>
            <Flex w='100%' bg='#272727' h='50px' justify='center' mx='auto' fontSize='14px'>
                <Stack direction='row' spacing='10%'  width='80%' justifyContent='space-between' align='center' >
                    <Stack spacing={5}>
                        <Text color='white' >contact@lift.agency </Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack spacing={5}>
                        <Text color='white' >(123) 456-7890</Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack>
                        <Text color='white' fontSize='15px' >© 2020 Lift Media. All rights reserved. </Text>
                    </Stack>
                </Stack>
            </Flex>
        </Flex>
        </>
    )
}

const SocialArr = [
    {
        link: "#",
        title: "Facebook"
    },
    {
        link: "#",
        title: "LinkdIn"
    },
    {
        link: "#",
        title: "Instagram"
    },
    {
        link: "#",
        title: "Twitter"
    },
]
const SitemapArr = [
    {
        link: "#",
        title: "Home"
    },
    {
        link: "#",
        title: "Abouts"
    },
    {
        link: "#",
        title: "Growers"
    },
    {
        link: "#",
        title: "Merchants"
    },
    {
        link: "#",
        title: "Contact"
    },
]

