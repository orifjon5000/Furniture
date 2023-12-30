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
import { selfData } from 'src/config/constants';

const StoreRoom = () => {
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
							{v.type.map(c => (
								<AccordionPanel pb={4}>{c.tip}{c.price}</AccordionPanel>
							))}
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
										<NumberInput width={'85px'} defaultValue={15} min={10} max={20}>
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
