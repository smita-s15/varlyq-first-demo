import { Button, Flex, Input, Link, Stack } from "@chakra-ui/react"
import NextLink from 'next/link'


export const NavBar = () => {
    return (
        <Flex bg="primary" h="100px" justify="center" >
            <Stack direction="row" spacing="16" align="center">
                {Arr?.map((item, index) => {
                    return <NextLink key={index} href={item.link}>
                        <Link color="navLinkColor">{item.title}</Link>
                    </NextLink>
                })}
                <Input w="200px" placeholder="search" borderRadius="20"></Input>
                <Button bg="customBlue" _hover={{ bg: "blue" }} borderRadius="20" color="white">Connect Wallet</Button>
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