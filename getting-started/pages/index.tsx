import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Box bg="primary">Welcome</Box>
        <Input
          placeholder="mystrader@gmail.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="*******" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="blue">
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode </Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
