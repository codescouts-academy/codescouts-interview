import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Fade,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Loader } from "../../components/Loader";
import { Navbar } from "./components/Navbar";
import { QuestionCard } from "./components/QuestionCard";

import { useColor } from "../../services/useColor";
import { useQuestionsViewModel } from "./useQuestionsViewModel";

const Questions = () => {
  const textColor = useColor();
  const {
    loaded,
    topic,
    questionShowing,
    shuffle,
    difficulties,
    filterByDifficulty,
  } = useQuestionsViewModel();

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
              <Flex direction="column" gap="20px">
                <Flex direction="row" gap="5px">
                  <Image src={topic.image} alt={topic.name} w="40px" />
                  {topic.name}
                </Flex>
                <Flex direction="row" justify="flex-start" gap="10px">
                  <Button
                    variant="ghost"
                    onClick={() => filterByDifficulty("*")}
                  >
                    <Badge>Todas</Badge>
                  </Button>
                  {difficulties.map((d) => (
                    <Button
                      variant="ghost"
                      onClick={() => filterByDifficulty(d)}
                    >
                      <Badge>{d}</Badge>
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Heading>
            <Navbar command={{ shuffle }} />
          </Flex>
          <SimpleGrid
            columns={{ sm: 1, md: 3, xl: 4 }}
            spacingY="40px"
            spacingX="10px"
          >
            {questionShowing.map((question) => (
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
