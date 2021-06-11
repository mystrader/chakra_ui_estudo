import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, PageProps }) {
  return (
    <ChakraProvider>
      <Component {...PageProps} />
    </ChakraProvider>
  );
}
