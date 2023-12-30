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

const Main = () => {
	return (
		<Box>
			<Box>
				<Banner />
				<Divider my={'15px'} />
				{/* <Cards/> */}
			</Box>
		</Box>
	);
};

export default Main;
