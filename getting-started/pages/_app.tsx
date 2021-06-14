import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '../styles/theme';

const myTheme = extendTheme(theme);

export default function App({ Component, PageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...PageProps} />
    </ChakraProvider>
  );
}
