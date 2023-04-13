import topics from "../../data/topics.json";

import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

import { GeneralTopic } from "../../types";
import { ToggleTheme } from "../../components/ToggleTheme";
import { TopicCard } from "./components/TopicCard";

import { useColor } from "../../services/useColor";

const Start = () => {
  const textColor = useColor();

  return (
    <>
      <Container maxW="6xl" mt="20px">
        <Heading color={textColor}>Topics</Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 3, xl: 4 }}
          spacingY="40px"
          spacingX="10px"
        >
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic as GeneralTopic} />
          ))}
        </SimpleGrid>
      </Container>
      <ToggleTheme />
    </>
  );
};

export default Start;
