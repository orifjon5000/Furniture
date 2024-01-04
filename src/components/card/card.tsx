import { Card,  CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Box, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react'
import { CardProps } from './card.props';

const Cards = ({item,onAdd}:CardProps) => {
  return (
		<Card maxW='sm' justifyContent={{ sm: 'center' }}>
			<CardBody width={{ sm: '100%' }}>
				<Image
					width={'100%'}
					sizes='cover'
					height={'290px'}
					src={item.image}
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Box display={'flex'} flexDirection={'row'} gap={1}>
						{' '}
						<Heading size='md'>{item.model}</Heading>
						<Text>{item.year}</Text>
					</Box>
					<Text>{item.description}</Text>
					<Text color='blue.600' fontSize='2xl'>
						{item.price}$
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					{/* <Button variant='solid' colorScheme='blue'>
						Buy now
					</Button> */}
					<Button onClick={()=>onAdd(item)} variant='ghost' colorScheme='blue'>
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}

export default Cards
