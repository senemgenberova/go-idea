import {
  ComponentWithAs,
  IconProps,
  InputGroup,
  InputLeftElement,
  InputProps,
  Input as ChakraInput,
} from "@chakra-ui/react";

interface IProps extends InputProps {
  icon: ComponentWithAs<"svg", IconProps>;
}

const Input = ({ icon: Icon, ...rest }: IProps) => {
  return (
    <InputGroup gap={3} height="56px">
      <InputLeftElement pointerEvents="none" height="100%" px={3}>
        <Icon boxSize={6} />
      </InputLeftElement>
      <ChakraInput
        borderRadius={12}
        height="100%"
        pr={3}
        fontSize="14px"
        fontWeight="500"
        fontFamily="Montserrat"
        lineHeight={5}
        _placeholder={{
          color: "#999",
        }}
        borderColor="#999"
        {...rest}
      />
    </InputGroup>
  );
};

export default Input;
