import { Search2Icon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Grid,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Cards } from 'src/components';
import { products } from 'src/config/constants';
import 'src/css/store.css';

const Store = () => {
	const [data, setData] = useState(products);
	const [filter, setFilter] = useState('');
	const handleChange = e => {
		const aa = products.filter(product =>
			product.model.toLowerCase().includes(filter.toLowerCase())
		);
		setData(aa);
	};



	const filteredProducts = (str, ctg) => {
		data.filter(() => {
			if (str === 'all') {
				const sortedByNarx = [...products].sort((a, b) => a.author - b.author);
				return setData(sortedByNarx);
			} else if (str === 'price') {
				const sortedByNarx = [...products].sort((a, b) => a.price - b.price);
				return setData(sortedByNarx);
			} else if (str === 'name') {
				const sortedByNarx = [...products].sort();
				return setData(sortedByNarx);
			} else if (str === 'year') {
				const sortedByNarx = [...products].sort((a, b) => a.year - b.year);
				return setData(sortedByNarx);
			}
		});
	};
	return (
		<Stack marginTop={{base:'50px',md:'100px'}}>
			<Box
				className='store-filter'
				flexDirection={{ base: 'column', md: 'row' }}
				alignItems={{ base: 'center' }}
			>
				<Box
					className='filters'
					fontSize={{ base: 'sm', md: '2xl' }}
					flexDirection={{ base: 'row', md: 'row' }}
				>
					<Text
						fontSize={{ base: 'sm', md: '2xl' }}
						display={{ base: 'none', md: 'inline' }}
					>
						Filter Items{' '}
					</Text>
					<Button
						padding={{ base: 1 }}
						fontSize={{ base: 'sm', md: '2xl' }}
						m={'10px'}
						onClick={() => filteredProducts('all')}
					>
						All
					</Button>
					<Button
						padding={{ base: 1 }}
						fontSize={{ base: 'sm', md: '2xl' }}
						onClick={() => filteredProducts('year')}
						m={'10px'}
					>
						Date
					</Button>
					<Button
						padding={{ base: 1 }}
						fontSize={{ base: 'sm', md: '2xl' }}
						onClick={() => filteredProducts('name')}
						m={'10px'}
					>
						Name
					</Button>
					<Button
						padding={{ base: 1 }}
						fontSize={{ base: 'sm', md: '2xl' }}
						onClick={() => filteredProducts('price')}
						m={'10px'}
					>
						Price
					</Button>
				</Box>
				<Box width={'350px'}>
					<InputGroup size='md'>
						<Input
							pr='4.5rem'
							placeholder='Product name'
							onChange={e => setFilter(e.target.value)}
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm'>
								<Search2Icon onClick={handleChange} />
							</Button>
						</InputRightElement>
					</InputGroup>
				</Box>
			</Box>
			<Box className='store-product' margin={{ sm: 'auto' }}>
				<Grid
					margin={{ sm: 'auto' }}
					gap={3}
					width={{ sm: '100%' }}
					gridTemplateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
						xl: 'repeat(4, 1fr)',
					}}
					mt={5}
				>
					{data.map(item => (
						<Cards item={item} key={item} />
					))}
				</Grid>
			</Box>
		</Stack>
	);
};

export default Store;
