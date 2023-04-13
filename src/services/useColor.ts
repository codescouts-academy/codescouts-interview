import { useColorModeValue } from "@chakra-ui/react"

export const useColor = () => {
    return useColorModeValue("gray.800", "whiteAlpha.900");
}