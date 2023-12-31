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
import { selfData } from 'src/config/constants';
import 'src/css/store.css';
import { DataType } from 'src/interfaces/product';
const StoreRoom = () => {
	//INISTALLIZAATIONS

	const obj: DataType[] = [];

	const [data, setData] = useState<DataType[]>(obj);

	const handleData = (e: DataType) => {
		if (e._id === 13) {
			const t = data.filter(a => a._id !== 13);
			setData(prevData => [...t, e]);
		}else  
		if (e._id === 12) {
			const t = data.filter(a => a._id !== 12);
			setData(prevData => [...t, e]);
		} else
		if (e._id === 14) {
			const t = data.filter(a => a._id !== 14);
			setData(prevData => [...t, e]);
		}
	};
	
	return (
		<Box padding={'30px'}>
			<Text my={'50px'} size={'3xl'}>
				THe Special One
			</Text>

			<Flex flexDirection={'row'} mt={'10px'} gap={3}>
				<Accordion
					allowToggle
					width={'300px'}
					borderWidth='1px'
					borderRadius='lg'
				>
					{selfData.map(v => (
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
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

				<Box width={'70%'} borderWidth='1px' borderRadius='lg'>
					<TableContainer>
						<Table variant='simple'>
							<TableCaption>Imperial to metric conversion factors</TableCaption>
							<Thead>
								<Tr>
									<Th>Mahsulot turi</Th>
									<Th>Mahsulot hajmi (m.kv)</Th>
									<Th isNumeric> Mahsulot narxi</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>inches</Td>
									<Td>
										<NumberInput
											width={'85px'}
											defaultValue={15}
											min={10}
											max={20}
										>
											<NumberInputField />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</Td>
									<Td isNumeric>25.4</Td>
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
