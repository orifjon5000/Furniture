import { Search2Icon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Divider,
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
	console.log(data);
	const handleChange = e => {
		const aa = products.filter(product =>
			product.model.toLowerCase().includes(filter.toLowerCase())
		);
		setData(aa);
	};

	const handelFilter = e => {
		let aa = data.sort((a, b) => a - b);
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
		<Stack>
			<Text>
				Furniture Store
				<Divider />
			</Text>
			<Box className='store-filter'>
				<Box className='filters'>
					<Text display={'inline'} fontSize={'lg'}>
						Filter Items{' '}
					</Text>
					<Button m={'10px'} onClick={() => filteredProducts('all')}>
						All
					</Button>
					<Button onClick={() => filteredProducts('year')} m={'10px'}>
						Date
					</Button>
					<Button onClick={() => filteredProducts('name')} m={'10px'}>
						Name
					</Button>
					<Button onClick={() => filteredProducts('price')} m={'10px'}>
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
			<Box className='store-product'>
				<Grid
					// margin={'0,20px'}
					gap={3}
					gridTemplateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
						xl: 'repeat(4, 1fr)',
					}}
					mt={5}
				>
					{data.map(item => (
						<Cards item={item} />
					))}
				</Grid>
			</Box>
		</Stack>
	);
};

export default Store;
