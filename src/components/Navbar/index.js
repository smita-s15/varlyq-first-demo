import { Button, Flex, Input, Link, Stack, Text } from "@chakra-ui/react"
import NextLink from 'next/link'


export const NavBar = () => {
    return (
        <Flex 
            bg="primary" h='100px' width='100%' mx='auto' justify='flex-end' align='center'    
         >
            <Stack 
                direction="row" 
                spacing={{base:'10px', md:'30px',lg:'50px', xl:'78px'}}
                justify='space-between' 
                fontSize={{sm:'10px', lg:"14px", xl:'16px', } }
                align='center'
                mr={{base:'10px',md:'30px',lg:'40px', xl:'70px'}}
            >       
                {Arr?.map((item, index) => {
                    return <NextLink key={index} href={item.link} passHref>
                        <Link color="navLinkColor"  >{item.title}</Link>
                    </NextLink>
                })}
                <Input  
                    fontSize={{base:"12px", md:"13px",lg:"16px"}}  
                    w={{base:'',md:'200px', lg:'250px', xl:'290px'}}
                    h= {{base:'',md:'30px', lg:'34px', xl:'38px'}}
                    placeholder="search" 
                    borderRadius="20" 
                />
                <Button 
                    bg="customBlue" _hover={{ bg: "blue" }}
                    w={{base:'',  md:'100px',lg:'120px', xl:'150px'}}
                    h="38px" 
                    borderRadius="34px" 
                    justify='center'
                    align='center'
                    >
                    <Text
                        fontWeight='400' 
                        fontSize={{base:'10px',md:'12px',lg:'14px',xl:'16px'}}
                        color="white" 
                    >
                        Connect Wallet
                    </Text>
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