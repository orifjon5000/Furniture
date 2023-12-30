import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Grid, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiChat, BiLike, BiShare } from 'react-icons/bi';

const News = () => {
  return (
		<Stack width={'1000px'} display={'flex'} justifyContent={'center'}alignContent={'center'} margin={'auto'}>
			<Flex width={'920px'} height={'200px'} display={'flex'} flexDirection={'column'} alignContent={'center'} justifyContent={'center'} textAlign={'center'} margin={'auto'} gap={'50px'}>
				<Text fontSize='lg'> News</Text>
				<Text fontSize='md'>Lorem, ipsum.</Text>
			</Flex>
      <Divider color="Window"/>
			<Box w={'920px'} height={'1000px'} justifyContent={'center'} margin={'auto'}>
				<Flex height={'full'} display={'flex'}  flexDirection={'row'} flexWrap={'wrap'} width={'920px'} gap={'10px'} >
					{Array.from(Array(6).keys()).map((ele, index) => {
						return (
							<div>
								<Card maxW='md' width={'300px'} gap={'15px'} height={'400px'} my={'20px'}>
									<CardHeader>
										<Flex spacing='4'>
											<Flex
												flex='1'
												gap='2'
												alignItems='center'
												flexWrap='wrap'
											>
												<Avatar
													name='Segun Adebayo'
													src='https://bit.ly/sage-adebayo'
												/>

												<Box>
													<Heading size='sm'>Segun Adebayo</Heading>
													<Text>Creator, Chakra UI</Text>
												</Box>
											</Flex>
										</Flex>
									</CardHeader>
									<CardBody p={2}>
										<Text fontSize={'sm'}>
											With Chakra UI, I wanted to sync the speed of development
											with the speed of design. I wanted the developer to be
											just as excited as the designer to create a screen.
										</Text>
									</CardBody>
									<Image
										objectFit='cover'
										src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
										alt='Chakra UI'
									/>

									<CardFooter
										justify='space-between'
										flexWrap='wrap'
										// sx={{
										// 	'& > button': {
										// 		minW: '136px',
										// 	},
										// }}
									>
										<Button flex='1' variant='ghost' leftIcon={<BiLike />}>
											Like
										</Button>
										<Button flex='1' variant='ghost' leftIcon={<BiChat />}>
											Comment
										</Button>
										<Button flex='1' variant='ghost' leftIcon={<BiShare />}>
											Share
										</Button>
									</CardFooter>
								</Card>
							</div>
						);
					})}
				</Flex>
			</Box>
		</Stack>
	);
}

export default News
