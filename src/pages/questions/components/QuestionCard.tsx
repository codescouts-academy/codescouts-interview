import {
  Badge,
  Button,
  Card,
  CardBody,
  Code,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import ReactFlipCard from "reactjs-flip-card";

import { Question, Topic } from "../../../types";

import Logo from "../../../assets/logo.png";

import { useColor } from "../../../services/useColor";

export const QuestionCard = ({
  topic,
  question,
}: {
  topic: Topic;
  question: Question;
}) => {
  const Back = () => {
    const textColor = useColor();
    return (
      <Card h="130px" boxShadow={"xl"}>
        <CardBody>
          <Flex direction="column" justify="space-between" h="100%">
            <Badge
              style={{
                top: 5,
                right: 5,
                position: "absolute",
              }}
            >
              {question.difficulty}
            </Badge>
            <h6>{question.question}</h6>

            <Popover>
              <PopoverTrigger>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Respuesta
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent color={textColor}>
                  <PopoverHeader pt={4} fontWeight="bold" border="0">
                    Respuesta
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Code>{question.answer}</Code>
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  ></PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>
        </CardBody>
      </Card>
    );
  };
  const Front = () => {
    return (
      <Card
        h="130px"
        _hover={{
          boxShadow: "var(--chakra-shadows-xl)",
        }}
      >
        <CardBody>
          <Flex direction="column" justify="center" h="100%">
            <Badge
              style={{
                top: 5,
                right: 5,
                position: "absolute",
              }}
            >
              {question.difficulty}
            </Badge>
            <Image src={Logo} alt={topic.name} align="center" />
          </Flex>
        </CardBody>
      </Card>
    );
  };

  return (
    <ReactFlipCard
      containerStyle={{ width: "unset" }}
      frontComponent={<Front />}
      backComponent={<Back />}
      flipTrigger="onClick"
    />
  );
};
