import { Icon, Text } from "@chakra-ui/react";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";

export const SubTitle = () => {
  return (
    <>
      <Text as="p" textAlign="center" fontSize="20px" w="100%" margin="0 auto">
        <Icon as={TfiQuoteLeft} color="brand.200" mr="10px" />
        Ayudamos a los equipos de software a alcanzar la excelencia técnica,
        enfocándonos tanto en la calidad y velocidad de entrega como en la
        mejora y ritmo sostenible del equipo desarrollando juntos
        <Icon as={TfiQuoteRight} color="brand.200" ml="10px" />
      </Text>
    </>
  );
};
