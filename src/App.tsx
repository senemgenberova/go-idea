import { Box, Center, Image, Text } from "@chakra-ui/react";
import logo from "./assets/logo.svg";
import AddIdea from "./modules/AddIdea";

const App = () => {
  return (
    <Box py={5}>
      <Center>
        <Image src={logo} />
      </Center>

      <Box mt={100} textAlign="center">
        <Text fontSize={48} color="#333" fontFamily="Montserrat">
          Add your idea to voite
        </Text>
        <Text fontSize={20} color="#999" my={25}>
          Add your idea so that others can evaluate how well it will enter the
          market and be in <br /> demand among users
        </Text>
        <AddIdea />
      </Box>
    </Box>
  );
};

export default App;
