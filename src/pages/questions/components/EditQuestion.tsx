import { useParams } from "react-router-dom";
import { ButtonIcon } from "../../../components/Button";
import { BsPencil } from "react-icons/bs";
import { ButtonProps } from "@chakra-ui/react";

export const EditQuestion = (
  props: ButtonProps & { tooltip: string; lines?: string }
) => {
  const { lines, tooltip, ...rest } = props;

  const { languageId, topicId } = useParams();
  const url = `${
    import.meta.env.VITE_REPOSITORY_TO_EDIT
  }/${languageId}-${topicId}.json${lines ? "#" + lines : ""}`;

  return (
    <ButtonIcon
      {...rest}
      variant="link"
      onClick={(e) => {
        e.stopPropagation();

        window.open(url);
      }}
      tooltip={tooltip}
      as={BsPencil}
    />
  );
};
