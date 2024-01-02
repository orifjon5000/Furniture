import React from 'react';

import '../../css/main.css';
import { Box, Divider } from '@chakra-ui/react';
import Banner from './banner';
import { Events } from './events';
import Movie from './movie';
import About from '../about';
import TopProducts from './topProducts';
import CarouselPage from './carousel';

const Main = () => {
	return (
		<Box>
			<Box display={'flex'} flexDirection={'column'}>
				<Banner />
				<Divider my={'15px'} />
				<TopProducts />
				<CarouselPage />
				<About />
				<Movie />
				<Events />
			</Box>
		</Box>
	);
};

export default Main;
