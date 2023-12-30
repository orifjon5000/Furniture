import React from 'react'
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
} from '@chakra-ui/react';
import { MainInfo } from 'src/config/constants';

const Banner = () => {
  return (
		<>
			<div className='main bg-wall'>
				<Text py='2' textAlign={'center'}>
					Caffè latte is a coffee beverage of Italian origin made with espresso
					and steamed milk.
				</Text>
				<Box className='main-title'>
					<Button variant='solid' colorScheme='blue'>
						Buy Latte
					</Button>
					<Button variant='outline' className='main-contact'>
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
							<Text fontSize='lg'>{item.headTitle}</Text>
							<Text fontSize={'sm'}>{item.info}</Text>
						</Flex>
						<Icon as={item.t} fontSize={'3xl'} />
					</Flex>
				))}
			</Stack>
		</>
	);
}

export default Banner
