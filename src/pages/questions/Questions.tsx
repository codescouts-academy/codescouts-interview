import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Loader } from "../../components/Loader";
import { Navbar } from "./components/Navbar";
import { QuestionCard } from "./components/QuestionCard";

import { useQuestionsLoader } from "../../services/useQuestionLoader";
import { useColor } from "../../services/useColor";

const Questions = () => {
  const textColor = useColor();
  const { loaded, topic } = useQuestionsLoader();

  if (!loaded) return <Loader />;

  return (
    <>
      <Container centerContent>
        <Box maxW="6xl" w="80vw" mt="20px">
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            w="100%"
            gap="20px"
          >
            <Heading color={textColor} mb="20px" w="100%">
              <Flex direction="row" gap="5px">
                <Image src={topic.image} alt={topic.name} w="40px" />
                {topic.name}
              </Flex>
            </Heading>
            <Navbar />
          </Flex>
          <SimpleGrid
            columns={{ sm: 1, md: 3, xl: 4 }}
            spacingY="40px"
            spacingX="10px"
          >
            {topic.questions.map((question) => (
              <QuestionCard
                key={question.question}
                question={question}
                topic={topic}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Questions;
