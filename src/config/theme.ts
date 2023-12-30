import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	// initialColorMode: '',
	useSystemColorMode: true,
};

export const theme = extendTheme({
	config,
	fonts: {
		heading: "'Roboto', sans-serif",
		body: "'Roboto', sans-serif",
	},
});
