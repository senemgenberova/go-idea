import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Flex,
  Box,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/Textarea";
import {
  CircleCheckIcon,
  CircleCloseIcon,
  CommentIcon,
  UserIcon,
} from "../../components/icons";

interface FormValues {
  fullName: string;
  idea: string;
}

const AddIdea = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isSubmit, setIsSubmit] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik<FormValues>({
      initialValues: {
        fullName: "",
        idea: "",
      },
      onSubmit: () => {
        setIsSubmit(true);
      },
    });

  const handleClose = () => {
    onClose();
    setIsSubmit(false);
    resetForm();
  };

  return (
    <>
      <Button
        px={9}
        py={4}
        borderRadius={10}
        bg="#134F8E"
        color="#FFF"
        fontSize={20}
        onClick={onOpen}
        h="unset"
      >
        Add idea
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent px={8} py={6}>
          <Flex justify="flex-end" mb="10px">
            <ModalCloseButton boxSize={6} position="relative" inset={0}>
              <CircleCloseIcon boxSize={6} />
            </ModalCloseButton>
          </Flex>

          <ModalBody p={0}>
            {isSubmit ? (
              <Center flexDir="column" mb={3}>
                <CircleCheckIcon boxSize={12} mb={6} />

                <Text fontSize={20} fontFamily="Montserrat" color="#333">
                  Your idea added
                </Text>
                <Text
                  fontSize={14}
                  fontFamily="Montserrat"
                  color="#999"
                  fontWeight={400}
                  mt="10px"
                  lineHeight={5}
                >
                  You can find it in latest added ideas list
                </Text>
              </Center>
            ) : (
              <>
                <Box textAlign="center" mb={6}>
                  <Text fontSize={20} fontFamily="Montserrat" color="#333">
                    Add idea
                  </Text>
                  <Text
                    fontSize={14}
                    fontFamily="Montserrat"
                    color="#999"
                    fontWeight={400}
                    mt="10px"
                    lineHeight={5}
                  >
                    Field inputs to show your idea for others
                  </Text>
                </Box>

                <form onSubmit={handleSubmit}>
                  <VStack gap={3} mb={6}>
                    <Input
                      icon={UserIcon}
                      placeholder="Name Surname"
                      name="fullName"
                      value={values?.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <TextArea
                      icon={CommentIcon}
                      placeholder="Write short about your idea"
                      name="idea"
                      value={values?.idea}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxCount={500}
                    />
                  </VStack>

                  <Button
                    px={9}
                    py={4}
                    borderRadius={10}
                    bg="#134F8E"
                    color="#FFF"
                    fontSize={16}
                    onClick={onOpen}
                    h="unset"
                    type="submit"
                    w="100%"
                  >
                    Add idea
                  </Button>
                </form>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddIdea;
