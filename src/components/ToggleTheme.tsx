import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { ButtonIcon } from "./Button";
import { BsMoon, BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return <ButtonIcon onClick={toggleColorMode} as={isLight ? BsMoon : BsSun} />;
};

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      h="60px"
      w="60px"
      bg="brand.200"
      zIndex="1"
      position="fixed"
      variant="no-effects"
      bottom="5"
      right="5"
      border="1px solid"
      borderColor="brand.200"
      borderRadius="50px"
      onClick={toggleColorMode}
      display="flex"
    >
      <Icon
        h="24px"
        w="24px"
        color="white"
        as={colorMode === "light" ? BsMoon : BsSun}
      />
    </Button>
  );
};
