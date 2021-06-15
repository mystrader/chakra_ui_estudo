import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import apioneTheme from '../styles/apione-theme';

const myTheme = extendTheme(apioneTheme);

export default function App({ Component, PageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...PageProps} />
    </ChakraProvider>
  );
}
