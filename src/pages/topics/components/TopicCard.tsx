import { useNavigate } from "react-router-dom";
import {
  Image,
  Container,
  Heading,
  Center,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { GeneralTopic } from "../../../types";
import { useSession } from "../../../state/useSession";

import { useColor } from "../../../services/useColor";

export const TopicCard = ({ topic }: { topic: GeneralTopic }) => {
  const navigate = useNavigate();
  const { stop, start } = useSession();
  const textColor = useColor();

  const goToTopic = () => {
    navigate(`/es/${topic.id}`);
    stop();

    start();
  };

  return (
    <Center py={12} onClick={() => goToTopic()} userSelect="none">
      <Box
        role={"group"}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-10}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${topic.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} objectFit={"cover"} src={topic.image} />
        </Box>
        <Container centerContent mt={{ base: 100, md: 10 }}>
          <Heading
            fontSize={"2xl"}
            color={textColor}
            fontFamily={"body"}
            fontWeight={500}
          >
            {topic.name}
          </Heading>
        </Container>
      </Box>
    </Center>
  );
};
