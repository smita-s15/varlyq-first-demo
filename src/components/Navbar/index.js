import { Button, Flex, Input, Link, Stack } from "@chakra-ui/react"
import NextLink from 'next/link'


export const NavBar = () => {
    return (
        <Flex bg="primary" h="100px" width='100%' mx='auto' justify='flex-end'   >
            <Stack 
                direction="row" 
                spacing={10} 
                width={{sm:'90%', lg:'70%' }}
                justify='space-between'  
                fontSize={{sm:'10px', md:"20px", lg:'sm', '2xl':"md"}} 
                alignItems="center" 
                align='center' 
                mr='2%'
                ml='-2%'
            >
                {Arr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link color="navLinkColor">{item.title}</Link>
                    </NextLink>
                })}
                <Input  
                    fontSize={{base:"12px", md:"13px",lg:"16px"}}  
                    w={{base:"100px", md:"200px",xl:'250px', lg:"290px"}} 
                    h="38px" 
                    placeholder="search" 
                    borderRadius="20" 
                />
                <Button 
                    bg="customBlue" _hover={{ bg: "blue" }} 
                    w={{base:"100px", md:"140px", xl:'150px',lg:"150px"}} 
                    h="38px" borderRadius="20" justify='center'  
                    fontWeight='small' 
                    color="white" 
                     fontSize={{base:"12px", md:"12px",lg:"16px"}}  
                >
                    Connect Wallet
                </Button>
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