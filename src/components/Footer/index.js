import { Flex, Stack, Button, Text, Input, Box, Divider, InputGroup, Link, Heading } from "@chakra-ui/react"
import Logo from '../../../public/Logo.png'
import { EmailIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'
import NextLink from 'next/link'
import "@fontsource/poppins/400.css"

export const Footer = () => {
    return (
        <>
        <Flex w='100%' bg='#272727' direction='column' fontFamily='poppins' mx='auto' >
            <Flex  p={1} justify='space-between' align='center' >
                <Stack direction={{sm:'row',md:'row'}} spacing='5%' mt={10} w='70%' mx="auto" >
                    <Stack spacing="4" flex="1" align='center' >
                            <NextImage src={Logo} h='100px' w='100px' alt="logo"  />
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' textColor='#ffffff' W
                    >
                        <Heading fontSize={{sm:'12px',md:'16px'}} fontWeight='400' letterSpacing='2px' >
                            Sitemap
                        </Heading>
                        <Stack spacing="5" shouldWrapChildren fontSize={{sm:'10px',md:'14px'}}  >
                        {SitemapArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link color='secondary'>{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' textColor='#ffffff' 
                    >
                        <Heading fontSize={{sm:'12px',md:'16px'}} fontWeight='400' letterSpacing='2px' >
                            Socials
                        </Heading>
                        <Stack spacing="5" shouldWrapChildren fontSize={{sm:'10px',md:'14px'}}>
                        {SocialArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link >{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" shouldWrapChildren  >
                        <Heading fontSize={{sm:'12px',md:'16px'}} fontWeight='400' letterSpacing='2px' color="secondary">
                            Head Office
                        </Heading>
                        <Text  color="secondary" fontSize={{sm:'10px',md:'14px'}} >
                            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565
                        </Text>
                        <Heading mt='20px' fontSize={{sm:'7.5px',md:'16px'}} fontWeight='400' letterSpacing='2px' color="secondary">
                           News Letter
                        </Heading>
                        <Flex  justifyContent='space-between' alignContent='center' align='center'>
                            <Input  
                                placeholder="Enter your email" 
                                fontSize={{sm:'7px',md:'14px'}}
                                type="email" 
                                variant='unstyled' 
                                textColor='white'                           
                                required 
                            />
                            <EmailIcon color='white' 
                                h={{sm:'14px',md:'16px'}}
                                w={{sm:'10px',md:'23px'}}
                            />
                        </Flex>
                        <Divider opacity='0.5' />
                    </Stack>
                </Stack>
            </Flex>
            <Flex w='100%' bg='#272727' p={2} justify='center' mx='auto'  mt='5%'>
                <Stack direction={{sm:'column', md:'row'}} spacing='10%'  width='80%' justifyContent='space-between' align='center' >
                    <Stack spacing={{sm:"5px",md:'20px'}} fontSize={{sm:'10px',md:'14px'}}>
                        <Text color='white' >contact@lift.agency </Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack spacing={5}>
                        <Text color='white' fontSize={{sm:'10px',md:'14px'}} >(123) 456-7890</Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack >
                        <Text color='white' fontSize={{sm:'10px',md:'14px'}} >© 2020 Lift Media. All rights reserved. </Text>
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

