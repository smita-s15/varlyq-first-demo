import { Flex, Stack, Button, Text, Input, Divider, InputGroup, Link } from "@chakra-ui/react"
import Logo from '../../../public/Logo.png'
import { EmailIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'
import NextLink from 'next/link'

export const Footer = () => {
    return (
        <>
        <Flex w='100%' bg='#272727' direction='column' >
            <Flex  h='350px' justify='space-between' >
                <Stack direction='row' spacing='5%' mt={10} w="80%" mx="auto">
                    <Stack spacing="4" flex="1" align='center' >
                        <Flex>
                            <NextImage src={Logo} width={136} height={81} alt="logo" />
                        </Flex>
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' fontSize={{ sm: '20px', xl: '24px' }} >
                        <Text fontWeight='extrabold' color="secondary">
                            Sitemap
                        </Text>
                        <Stack spacing="5" shouldWrapChildren >
                        {SitemapArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link color='secondary'>{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" textAlign='left' fontSize={{ sm: '20px', xl: '24px' }}>
                        <Text fontWeight='extrabold' color="secondary">
                            Socials
                        </Text>
                        <Stack spacing="5" shouldWrapChildren >
                            {SocialArr?.map((item, index) => {
                                return <NextLink key={index} href={item.link} passHref>
                                    <Link color='secondary'>{item.title}</Link>
                                </NextLink>
                            })}
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" shouldWrapChildren  fontSize={{ sm: '10px',lg:'15px', xl: '20px' }}>
                        <Text color='white'>HEAD OFFICE</Text>
                        <Text  color="secondary">
                            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565
                        </Text>
                        <Text mt={10} color='white'>NEWS LETTER</Text>
                        <Flex w='100%' justifyContent='space-between' align='center'>
                            <InputGroup >
                                <Input  fontSize={{base:'10px', lg:'15px', xl:'20px'}} placeholder="Enter your email" type="email" required border='none' />
                                <EmailIcon color='white' h={{base:'10px', md:'20px', lg:'30px', xl:'40px'}} w={{base:'10px', md:'20px', lg:'30px', xl:'40px'}} />
                            </InputGroup>
                        </Flex>
                        <Divider opacity='0.5' />
                    </Stack>
                </Stack>
            </Flex>
            <Flex w='100%' bg='#272727' h='200px' justify='center' mx='auto' mt='20px' fontSize={{ sm: '20px', xl: '24px' }} >
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

