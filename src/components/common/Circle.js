import { Box } from "@chakra-ui/react"

export const Circle = ()  => {
  return (
    <Box borderRadius='full' h='354' w='354' color='customBlue' filter={{blur:'600px'}} />
  )
}