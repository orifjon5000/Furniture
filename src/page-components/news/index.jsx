import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import { Pagination } from 'antd';
import React from 'react';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { SectionTitle } from 'src/components';
import { news } from 'src/config/constants';
const News = () => {
	return (
		<Stack margin={'auto'}>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '50px',
					marginBottom: '50px',
				}}
				subtitle=' '
				title='Articles'
			/>
			<Flex
				className='news-wrapper'
				flexDirection={{ base: 'column', md: 'row' }}
				padding={'30px'}
				flexWrap={'wrap'}
				justify={{ base: 'center', sm: 'center', md: 'center' }}
				gap={4}
			>
				{news.map(item => (
				
					<Card maxW='md'>
						<CardHeader>
							<Flex spacing='4'>
								<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
									<Avatar name={item.author} src={item.image} />

									<Box>
										<Heading size='sm'>{item.author}</Heading>
										<Text>{item.prof}</Text>
									</Box>
								</Flex>
								{/* <IconButton
									variant='ghost'
									colorScheme='gray'
									aria-label='See menu'
									icon={<BsThreeDotsVertical />}
								/> */}
							</Flex>
						</CardHeader>
						<CardBody>
							<Text>
								{item.description}
								{item.description}
								{item.description}
							</Text>
						</CardBody>
						<Image objectFit='cover' src={item.src} alt='Chakra UI' width={'450px'} height={'300px'} />

						<CardFooter
							justify='space-between'
							flexWrap='wrap'
							sx={{
								'& > button': {
									minW: '136px',
								},
							}}
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
				))}
			</Flex>
		</Stack>
	);
};

export default News;

// <Stack
// 		width={'1000px'}
// 		display={'flex'}
// 		justifyContent={'center'}
// 		alignContent={'center'}
// 		flexDirection={{ base: 'column', md: 'row' }}
// 		margin={'auto'}
// 	>
// 		<Box
// 			w={'920px'}
// 			height={'1000px'}
// 			justifyContent={'center'}
// 			flexDirection={{ base: 'column', md: 'row' }}
// 			margin={'auto'}
// 		>
// 			<Flex
// 				height={'full'}
// 				display={'flex'}
// 				flexDirection={{ base: 'column', md: 'row' }}
// 				flexWrap={'wrap'}
// 				width={'920px'}
// 				gap={'10px'}
// 			>
// 				{Array.from(Array(6).keys()).map((ele, index) => {
// 					return (
// 						<div>
// 							<Card
// 								maxW='md'
// 								width={'300px'}
// 								gap={'15px'}
// 								height={'400px'}
// 								my={'20px'}
// 							>
// 								<CardHeader>
// 									<Flex spacing='4'>
// 										<Flex
// 											flex='1'
// 											gap='2'
// 											alignItems='center'
// 											flexWrap='wrap'
// 										>
// 											<Avatar
// 												name='Segun Adebayo'
// 												src='https://bit.ly/sage-adebayo'
// 											/>

// 											<Box>
// 												<Heading size='sm'>Segun Adebayo</Heading>
// 												<Text>Creator, Chakra UI</Text>
// 											</Box>
// 										</Flex>
// 									</Flex>
// 								</CardHeader>
// 								<CardBody p={2}>
// 									<Text fontSize={'sm'}>
// 										With Chakra UI, I wanted to sync the speed of development
// 										with the speed of design. I wanted the developer to be
// 										just as excited as the designer to create a screen.
// 									</Text>
// 								</CardBody>
// 								<Image
// 									objectFit='cover'
// 									src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
// 									alt='Chakra UI'
// 								/>

// 								<CardFooter
// 									justify='space-between'
// 									flexWrap='wrap'
// 									// sx={{
// 									// 	'& > button': {
// 									// 		minW: '136px',
// 									// 	},
// 									// }}
// 								>
// 									<Button flex='1' variant='ghost' leftIcon={<BiLike />}>
// 										Like
// 									</Button>
// 									<Button flex='1' variant='ghost' leftIcon={<BiChat />}>
// 										Comment
// 									</Button>
// 									<Button flex='1' variant='ghost' leftIcon={<BiShare />}>
// 										Share
// 									</Button>
// 								</CardFooter>
// 							</Card>
// 						</div>
// 					);
// 				})}
// 				<Pagination defaultCurrent={1} total={50} />
// 			</Flex>
// 		</Box>
// 	</Stack>








