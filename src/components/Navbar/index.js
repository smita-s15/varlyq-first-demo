import { Button, Flex, Input, Link, Stack } from "@chakra-ui/react"
import NextLink from 'next/link'


export const NavBar = () => {
    return (
        <Flex bg="primary" h="100px" width='100%' mx='auto' justify='flex-end'   >
            <Stack direction="row" spacing={10}  width='70%' justify='space-between'  fontSize="16px" alignItems="center"  >
                {Arr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link color="navLinkColor">{item.title}</Link>
                    </NextLink>
                })}
                <Input w="290px" h="38px" placeholder="search" borderRadius="20" ></Input>
                <Button bg="customBlue" _hover={{ bg: "blue" }} w="150px" h="38px" borderRadius="20"  fontWeight='small' color="white">Connect Wallet</Button>
            </Stack>
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