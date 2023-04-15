import { useNavigate } from "react-router-dom";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlinePause } from "react-icons/ai";
import { BsDice3, BsGrid, BsPlay } from "react-icons/bs";

import { ThemeSwitcher } from "../../../components/ToggleTheme";

import { useSession } from "../../../state/useSession";
import { useFormattedSeconds } from "../../../services/useFormattedSeconds";
import { ButtonIcon } from "../../../components/Button";
import { useColor } from "../../../services/useColor";
import { EditQuestion } from "./EditQuestion";

export const Commands = ({ shuffle }: { shuffle: Function }) => {
  const textColor = useColor();

  const menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const navigate = useNavigate();
  const format = useFormattedSeconds();
  const { session, start, pause, stop } = useSession();

  const goToTopic = () => {
    navigate("/topics");
  };

  const finishSession = () => {
    navigate("/");
    stop();
  };

  const Timer = () => {
    return (
      <>
        <Flex
          direction="row"
          w="100%"
          justifyContent="center"
          h="50px"
          pl="20px"
        >
          <Heading color={textColor} mb="20px">
            {format(session?.seconds)}
          </Heading>
        </Flex>
        {session?.isPlaying && (
          <ButtonIcon
            onClick={pause}
            tooltip="Pausa"
            h="30px"
            w="30px"
            as={AiOutlinePause}
          />
        )}
        {!session?.isPlaying && (
          <ButtonIcon
            onClick={start}
            tooltip="Play"
            h="30px"
            w="30px"
            as={BsPlay}
          />
        )}
      </>
    );
  };

  return (
    <Flex
      w={{ base: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      borderRadius="30px"
      boxShadow={shadow}
    >
      <Timer />
      <ButtonIcon onClick={() => shuffle()} tooltip="Aleatorio" as={BsDice3} />
      <EditQuestion tooltip="Modifica las preguntas" />
      <ButtonIcon onClick={goToTopic} tooltip="Topics" as={BsGrid} />
      <ButtonIcon onClick={finishSession} tooltip="Inicio" as={AiOutlineHome} />
      <ThemeSwitcher />
    </Flex>
  );
};
