import {
  Button as InternalButton,
  ButtonProps,
  Icon,
  Tooltip,
} from "@chakra-ui/react";

import { useColor } from "../services/useColor";
export const Button = (props: ButtonProps) => {
  return (
    <InternalButton
      variant="outline"
      w="200px"
      h="60px"
      p="14px 50px"
      mt="5px"
      mb="20px"
      borderRadius="0"
      borderColor="brand.100"
      color="brand.100"
      _hover={{
        backgroundColor: "brand.200",
      }}
      {...props}
    />
  );
};

export const ButtonIcon = (
  props: ButtonProps & { as: any; tooltip?: string }
) => {
  const color = useColor();
  const { as, h, w, tooltip, ...rest } = props;

  return (
    <Tooltip label={tooltip}>
      <InternalButton p="0" variant="no-hover" bg="transparent" {...rest}>
        <Icon me="20px" color={color} as={as} h={h ?? "20px"} w={w ?? "20px"} />
      </InternalButton>
    </Tooltip>
  );
};
