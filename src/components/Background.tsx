import { Box } from "@chakra-ui/react";
import ScoutsWorking from "../assets/scoutsworking.jpg";

export const Background = () => {
  return (
    <Box
      bgImage={ScoutsWorking}
      _before={{
        content: `''`,
        background: "rgba(0,0,0,.63)",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      backgroundSize="cover"
      color="whiteAlpha.900"
      w="100vw"
      h="100vh"
      position="fixed"
      zIndex="-1"
    />
  );
};
