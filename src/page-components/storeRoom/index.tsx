import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SectionTitle } from 'src/components';
import { selfData } from 'src/config/constants';
import 'src/css/store.css';
import { DataType } from 'src/interfaces/product';
const StoreRoom = () => {
	//INISTALLIZAATIONS

	const obj: DataType[] = [];
	const [amount, setAmount] = useState(1);
	const [quantity, setQuantity] = useState(1);
	const [data, setData] = useState<DataType[]>(obj);
	//HANDLERS

	const totalPrices =
		data.reduce((total, item) => total + item.price, 0) * amount * quantity;

	const handleData = (e: DataType) => {
		if (e._id === 13) {
			const t = data.filter(a => a._id !== 13);
			setData(prevData => [...t, e]);
		} else if (e._id === 12) {
			const t = data.filter(a => a._id !== 12);
			setData(prevData => [...t, e]);
		} else if (e._id === 14) {
			const t = data.filter(a => a._id !== 14);
			setData(prevData => [...t, e]);
		}
	};

	return (
		<Box padding={'30px'}>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '50px',
					marginBottom: '50px',
				}}
				subtitle=' '
				title='Self Counting '
			/>

			<Flex
				flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
				mt={'10px'}
				gap={3}
			>
				<Accordion
					allowToggle
					width={{ base: '100%', sm: '100%', md: '300px' }}
					borderWidth='1px'
					borderRadius='lg'
				>
					{selfData.map(v => (
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box
										fontSize={{ base: 'md', md: 'xl' }}
										as='span'
										flex='1'
										textAlign='left'
									>
										{v.title}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							{v.type.map(c => {
								const obj1: DataType = {
									_id: v._id,
									name: c.tip,
									price: c.price,
								};
								return (
									<AccordionPanel
										fontSize={{ base: 'md', md: 'xl' }}
										display={'flex'}
										flexDirection={'row'}
										gap={12}
										justifyContent={'center'}
										pb={4}
										cursor={'pointer'}
									>
										<Box
											className='acc-panel'
											display={'flex'}
											flexDirection={'row'}
											alignItems={'center'}
											gap={12}
											height={'40px'}
											justifyContent={'space-evenly'}
											width={'280px'}
											borderWidth='1px'
											borderRadius='lg'
											textTransform={'capitalize'}
											onClick={() => handleData(obj1)}
										>
											<Text width={'80px'} display={'flex'}>
												{c.tip}
											</Text>
											<Text width={'40px'} display={'flex'}>
												{c.price}$
											</Text>
										</Box>
									</AccordionPanel>
								);
							})}
						</AccordionItem>
					))}
				</Accordion>

				<Box
					width={{ base: '100%', sm: '100%', md: '70%' }}
					borderWidth='1px'
					borderRadius='lg'
				>
					<TableContainer>
						<Table
							variant='simple'
							width={{ base: '100%', sm: '100%', md: '100%' }}
						>
							<TableCaption>Imperial to metric conversion factors</TableCaption>
							<Thead>
								<Tr fontSize={{ base: 'md', md: 'xl' }}>
									<Th fontSize={{ base: 'md', md: 'xl' }}>Mahsulot turi</Th>
									<Th fontSize={{ base: 'md', md: 'xl' }}>
										Mahsulot hajmi (m.kv)
									</Th>
									<Th fontSize={{ base: 'md', md: 'xl' }}>Mahsulot miqdori</Th>
									<Th fontSize={{ base: 'md', md: 'xl' }} isNumeric>
										{' '}
										Mahsulot narxi
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td fontSize={{ base: 'md', md: 'xl' }}>
										{data.map(c => (
											<text>{c.name} </text>
										))}
									</Td>
									<Td>
										<NumberInput width={'85px'} defaultValue={amount} min={1}>
											<NumberInputField
												fontSize={{ base: 'md', md: 'xl' }}
												defaultValue={amount}
												onChange={e => setAmount(Number(e.target.value))}
											/>
										</NumberInput>
									</Td>
									<Td>
										<NumberInput width={'85px'} defaultValue={quantity} min={1}>
											<NumberInputField
												fontSize={{ base: 'md', md: 'xl' }}
												value={amount}
												onChange={e => setQuantity(Number(e.target.value))}
											/>
										</NumberInput>
									</Td>
									<Td fontSize={{ base: 'md', md: 'xl' }} isNumeric>
										{totalPrices}$
									</Td>
								</Tr>
							</Tbody>
							<Tfoot>
								<Tr>
									<Th>To convert</Th>
									<Th>into</Th>
									<Th isNumeric>multiply by</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</Box>
			</Flex>
		</Box>
	);
};

export default StoreRoom;
