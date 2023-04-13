import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export default extendTheme(
  globalStyles,
  config
);



