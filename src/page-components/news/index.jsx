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
import React from 'react';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { SectionTitle } from 'src/components';
import { news } from 'src/config/constants';
const News = () => {
	return (
		<Stack margin={'auto'} marginTop={{base:'50px'}}>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '50px',
		
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
				{news.map((item,i) => (
				
					<Card maxW='md' key={i}>
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









