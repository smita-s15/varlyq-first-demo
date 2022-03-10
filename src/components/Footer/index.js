import { Flex, Image, Stack, Button, Text, Input, Divider, InputGroup, Icon } from "@chakra-ui/react"
// import  Logo from '../../../public/Logo.png'
import { EmailIcon} from '@chakra-ui/icons'

export const Footer = () => {
    return (
        <>
            <Flex w='100%' bg='#272727' h='300px' justify='center' mx='auto'>
                <Stack direction='row' spacing={5} mt={10}   >
                    <Stack spacing="4" flex="1" align='center' >
                        <Text fontSize="md" fontSize='25px' color="secondary">
                            Sitemap
                        </Text>
                        <Stack spacing="5" shouldWrapChildren>
                            <Button variant="link" color='secondary' >Home</Button>
                            <Button variant="link" color='secondary' >Abouts</Button>
                            <Button variant="link" color='secondary' >Growers</Button>
                            <Button variant="link" color='secondary' >Merchants</Button>
                            <Button variant="link" color='secondary' >Contact</Button>
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" >
                        <Text fontSize="sm" fontSize='25px' color="secondary">
                            Socials
                        </Text>
                        <Stack spacing="5" shouldWrapChildren>
                            <Button variant="link" color='secondary' >Facebook</Button>
                            <Button variant="link" color='secondary' >LinkdIn</Button>
                            <Button variant="link" color='secondary' >Instagram</Button>
                            <Button variant="link" color='secondary' >Twitter</Button>
                        </Stack>
                    </Stack>
                    <Stack spacing="4" flex="1" shouldWrapChildren >
                        <Text color='white'>HEAD OFFICE</Text>
                        <Text fontSize="sm" fontSize='20px' color="secondary">
                            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565
                        </Text>
                        <Text mt={10} color='white'>NEWS LETTER</Text>
                        <InputGroup>
                            <Input placeholder="Enter your email" fontSize='20px' type="email" required border='none' />
                            <EmailIcon color='white' h={10} w={20} />
                        </InputGroup>
                        <Divider opacity='0.5' />
                    </Stack>
                </Stack>
            </Flex>
            <Flex w='100%' bg='#272727' h='200px' justify='center' mx='auto'>
                <Stack direction='row' spacing='30' mt={20} width='80%' justifyContent='space-between' align='center' >
                    <Stack spacing={5}>
                        <Text color='white' fontSize='20px' >contact@lift.agency </Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack spacing={5}>
                        <Text color='white' fontSize='20px' >(123) 456-7890</Text>
                        <Divider opacity='0.1' />
                    </Stack>
                    <Stack>
                        <Text color='white' fontSize='15px' >© 2020 Lift Media. All rights reserved. </Text>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}
