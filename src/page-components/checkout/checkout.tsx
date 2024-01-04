import {
	Box,
	Button,
	IconButton,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
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
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { CheckoutProps } from './checkout.props';
import { SectionTitle } from 'src/components';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { CardItem } from 'src/interfaces/cart.interface';
import ModalSection from './modal';

const Checkout = ({
	onDelete,
	onDeleteAll,
	onRemove,
	onAdd,
	cartItems,
}: CheckoutProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const itemsPrice = cartItems.reduce(
		(a: any, c: CardItem) => a + c.price * c.quantity,
		0
	);
	const shippingPrice = itemsPrice < 100 ? 0 : 4;
	const totalPrice = itemsPrice + shippingPrice;

	return (
		<Box
			paddingX={{ sm: '25px', md: '20px' }}
			marginTop='100px'
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
		>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '30px',
				}}
				subtitle=' '
				title='Checkout '
			/>
			<Stack spacing={6} justifyContent={'center'} width={'70%'}>
				<Box
					paddingY={'20px'}
					display={'flex'}
					alignItems={'center'}
					border={'1px'}
					borderRadius={'lg'}
					borderColor={'facebook.200'}
					flexDirection={'column'}
				>
					<TableContainer>
						<Table variant='striped' colorScheme='teal'>
							{/* <TableCaption>Imv to metric conversion factors</TableCaption> */}
							<Thead>
								<Tr>
									<Th>Product</Th>
									<Th>Price</Th>
									<Th>Quantity</Th>
									<Th>Total</Th>
									<Th>Remove</Th>
								</Tr>
							</Thead>
							<Tbody>
								{cartItems.map((i: CardItem) => {
									const reduce = i.price * i.quantity;
									return (
										<>
											<Tr borderRadius={'lg'}>
												<Td textAlign={'center'}>
													<Image
														borderRadius={'lg'}
														src={i.image}
														width={'60px'}
														height={'60px'}
													/>{' '}
												</Td>
												<Td textAlign={'center'}>{i.price}$</Td>
												<Td textAlign={'center'}>
													{' '}
													<IconButton
														onClick={() => onAdd(i)}
														size={'xs'}
														aria-label='Add to friends'
														icon={<AddIcon />}
													/>
													{i.quantity}
													<IconButton
														onClick={() => onRemove(i)}
														size={'xs'}
														aria-label='Add to friends'
														icon={<MinusIcon />}
													/>
												</Td>
												<Td textAlign={'center'}>{reduce}</Td>
												<Td textAlign={'center'}>
													<IconButton
														onClick={() => onDelete(i)}
														size={'sm'}
														aria-label='Add to friends'
														icon={<DeleteIcon />}
													/>
												</Td>
											</Tr>
										</>
									);
								})}
							</Tbody>
						</Table>
					</TableContainer>
					<Box
						display={'flex'}
						justifyContent='space-around'
            alignItems={'center'}
						marginTop={'20px'}
						width={{ base: '250px', md: '512px' }}
						gap={2}
					>
						<Text>Subtotal: {itemsPrice}$</Text>
						<Text>Shipping: {shippingPrice}$</Text>
						<Text>Total: {totalPrice}$</Text>
						<Button
							onClick={onOpen}
							width={'90px'}
							isDisabled={cartItems.length <= 0 ? true : false}
						>
							Buy
						</Button>
					</Box>
				</Box>
			</Stack>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent marginX={'10px'}>
					<ModalHeader>Customer Information</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ModalSection
							shippingPrice={shippingPrice}
							itemsPrice={itemsPrice}
							total={totalPrice}
							cartItems={cartItems}
							onDeleteAll={onDeleteAll}
							onClose={onClose}
						/>
					</ModalBody>

					<ModalFooter>
					
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Checkout;
