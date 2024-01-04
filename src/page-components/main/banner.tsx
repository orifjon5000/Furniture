import React from 'react';
import {
	Box,
	Button,
	Flex,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { MainInfo } from 'src/config/constants';
import { useNavigate } from 'react-router-dom';

const Banner = () => {


	const navigate = useNavigate();

	return (
		<>
			<div className='main bg-wall'>
				<Text
					fontSize={{ base: 'md', md: '4xl' }}
					py='2'
					textAlign={'center'}
					color={useColorModeValue('gray.50', 'gray.50')}
				>
					latte is a coffee beverage of Italian origin made with espresso and
					steamed milk.
				</Text>
				<Box className='main-title' fontSize={{ base: 'md', md: '3xl' }}>
					<Button
						fontSize={{ base: 'md', md: '2xl' }}
						width={{ base: '90px', md: '150px' }}
						variant='solid'
						colorScheme='blue'
						onClick={() => navigate('/store')}
					>
						Store
					</Button>
					<Button
						fontSize={{ base: 'md', md: '2xl' }}
						width={{ base: '90px', md: '150px' }}
						variant='outline'
						onClick={() => navigate('/contact')}
						className='main-contact'
						color={useColorModeValue('gray.50', 'gray.50')}
					>
						Contact
					</Button>
				</Box>
			</div>
			<Stack
				justify={'space-around'}
				my={'15px'}
				flexDirection={'row'}
				className='baner-details'
			>
				{MainInfo.map((item: any, index: number) => (
					<Flex
						flexDirection='row'
						align={'center'}
						gap={3}
						className='detail'
						key={index}
					>
						<Flex
							justifyContent={'start'}
							align={'start'}
							flexDirection={'column'}
						>
							<Text fontSize={{ base: 'md', md: '2xl' }}>{item.headTitle}</Text>
							<Text fontSize={{ base: 'md', md: '2xl' }}>{item.info}</Text>
						</Flex>
						<Icon as={item.t} fontSize={'3xl'} />
					</Flex>
				))}
			</Stack>
		</>
	);
};

export default Banner;
