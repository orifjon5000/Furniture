import { Button,Card, ButtonGroup, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';
import React from 'react'
import { Products } from 'src/interfaces/product';
import { CardProps } from './card.props';

const Cards = ({item}:CardProps) => {
  return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					width={'100%'}
					sizes='cover'
					height={'290px'}
					src={item.image}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Box display={'flex' } flexDirection={'row'} gap={1}> 
						{' '}
						<Heading size='md'>{item.model}</Heading>
						<Text>{item.year}</Text>
					</Box>
					<Text>{item.description}</Text>
					<Text color='blue.600' fontSize='2xl'>
						{item.price}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Button variant='solid' colorScheme='blue'>
						Buy now
					</Button>
					<Button variant='ghost' colorScheme='blue'>
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}

export default Cards
