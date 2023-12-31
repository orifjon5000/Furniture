import React from 'react';

import '../../css/main.css';
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react';
import { MainInfo } from 'src/config/constants';
import Banner from './banner';
import { Cards } from 'src/components';
import { Events } from './events';
import Movie from './movie';
import About from '../about';
import TopProducts from './topProducts';

const Main = () => {
	return (
		<Box>
			<Box display={'flex' }flexDirection={'column'}  >
				<Banner />
				<Divider my={'15px'} />
				<TopProducts/>
				<About/>
				<Movie/>
				<Events />
				{/* <Cards/> */}
			</Box>
		</Box>
	);
};

export default Main;
