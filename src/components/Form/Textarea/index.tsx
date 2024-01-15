import {
  ComponentWithAs,
  IconProps,
  InputGroup,
  InputLeftElement,
  Textarea as ChakraTextArea,
  TextareaProps,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface IProps extends TextareaProps {
  icon: ComponentWithAs<"svg", IconProps>;
  maxCount?: number;
}

const TextArea = ({ icon: Icon, maxCount, onChange, ...rest }: IProps) => {
  const [count, setCount] = useState(0);

  return (
    <InputGroup gap={3}>
      <InputLeftElement pointerEvents="none" pt={3}>
        <Icon boxSize={6} />
      </InputLeftElement>
      <ChakraTextArea
        resize="none"
        borderRadius={12}
        pr={3}
        pl={10}
        pt={4}
        fontSize="14px"
        fontWeight="500"
        fontFamily="Montserrat"
        lineHeight={5}
        _placeholder={{
          color: "#999",
        }}
        borderColor="#999"
        rows={7}
        {...rest}
        onChange={(e) => {
          setCount(e.target.value.length);
          onChange?.(e);
        }}
      />
      {maxCount && (
        <Text
          position="absolute"
          bottom={3}
          right={3}
          fontSize={14}
          fontFamily="Montserrat"
          color="#999"
          fontWeight={500}
          lineHeight={5}
        >
          {count}/{maxCount}
        </Text>
      )}
    </InputGroup>
  );
};

export default TextArea;
