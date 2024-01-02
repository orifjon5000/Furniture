import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { SectionTitle } from 'src/components';
import { products } from 'src/config/constants';

const TopProducts = () => {
	const data = products.filter(a => a.top === true);

	return (
		<>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '50px',
					marginBottom: '50px',
				}}
				subtitle=' '
				title='Top Mahsulotlar'
			/>
			<Box
				display={'flex'}
				flexDirection={{ base: 'column', md: 'row' }}
				justifyContent={{ base: 'center', md: 'center' }}
				alignItems={{ base: 'center', md: 'center' }}
				gap={9}
			>
				{data.map((item,i) => (
					<Box
						maxW='sm'
						key={i}
						borderWidth='1px'
						borderRadius='lg'
						overflow='hidden'
					>
						<Image
							src={item.image}
							alt={item.image}
							width={'380px'}
							height={'255px'}
						/>

						<Box p='6'>
							<Box display='flex' alignItems='baseline'>
								<Badge borderRadius='full' px='2' colorScheme='teal'>
									New
								</Badge>
								<Box
									color='gray.500'
									fontWeight='semibold'
									letterSpacing='wide'
									fontSize='xs'
									textTransform='uppercase'
									ml='2'
								>
									{item.sale}%
								</Box>
							</Box>

							<Box
								mt='1'
								fontWeight='semibold'
								as='h4'
								lineHeight='tight'
								noOfLines={1}
							>
								{item.model}
							</Box>

							<Box>
								{item.price}
								<Box as='span' color='gray.600' fontSize='sm'>
									/ $
								</Box>
							</Box>

							<Box display='flex' mt='2' alignItems='center'>
								{Array(5)
									.fill('')
									.map((_, i) => (
										<StarIcon
											key={i}
											color={i < item.id ? 'teal.500' : 'gray.300'}
										/>
									))}
								<Box as='span' ml='2' color='gray.600' fontSize='sm'>
									{item.id} reviews
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Box>
		</>
	);
};

export default TopProducts;
