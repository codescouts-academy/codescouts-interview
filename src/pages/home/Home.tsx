import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Background } from "../../components/Background";

const Home = () => {
  const navigate = useNavigate();

  const goToStart = () => navigate("/topics");

  return (
    <Flex
      direction="column"
      gap="20px"
      h="100vh"
      alignItems="center"
      justify="center"
    >
      <Background />

      <Title />

      <SubTitle />

      <Button onClick={goToStart}>¿Comenzamos?</Button>
    </Flex>
  );
};

export default Home;
