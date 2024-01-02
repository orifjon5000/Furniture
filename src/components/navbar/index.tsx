import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	Icon,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { navbar } from 'src/config/constants';
import 'src/css/navbar.css';
const Navbar = () => {

	//INISTALLIZATIONS
	const [isActive, setIsActive] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();


	//HANDLERS
	const onToggle = () => {
		setIsActive(prev => !prev);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleOpen = () => {
		onOpen();
	};
	const handleClose = () => {
		onClose();
	};
	return (
		<Box
			zIndex={1001}
			w={'full'}
			px={10}
			borderBottom={'1px'}
			pos={'fixed'}
			top={0}
			left={0}
			marginBottom={'20px'}
			bg={useColorModeValue('gray.50', 'gray.900')}
		>
			<Flex
				fontSize={{ base: 'md', md: '2xl' }}
				justify={{ base: 'space-between', md: 'space-evenly' }}
				align={'center'}
				py={4}
			>
				<NavLink to={'/'}>
					<Text
						bgGradient={
							colorMode === 'dark'
								? 'linear(red.100 0%, orange.100 25%, yellow.100 50%)'
								: 'linear(to-l, #252227, #272526)'
						}
						bgClip='text'
						fontSize={{ base: 'lg', md: '3xl' }}
						fontWeight='extrabold'
					>
						Furniture
					</Text>
				</NavLink>
				<HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
					<>
						{navbar.map((nav: any, idx: any) => (
							<NavLink key={idx} to={nav} className={'nav-link'}>
								{nav.toUpperCase()}
							</NavLink>
						))}
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? 'Dark' : 'Light'}
						</Button>
					</>
				</HStack>
				<Box onClick={handleOpen} display={{ base: 'block', md: 'none' }}>
					<Icon as={BiMenuAltLeft} />
				</Box>
			</Flex>
			{navbar.map((nav: any, idx: any) => (
				<NavLink key={idx} to={nav} className={'nav-link'}>
					{nav.title}
				</NavLink>
			))}

			<Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<NavLink to={'/'} onClick={handleClose}>
							Furniture
						</NavLink>
					</DrawerHeader>
					<DrawerBody>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							py={4}
							gap={1}
							justifyContent={'center'}
						>
							{navbar.map((s: any, idx: any) => (
								<NavLink key={idx} to={s}>
									{' '}
									<Button
										onClick={handleClose}
										fontSize={{ base: 'xl' }}
										paddingX={4}
										width={'300px'}
										colorScheme='teal'
										variant='outline'
									>
										{s}
									</Button>
								</NavLink>
							))}
							<Button mt={'10px'} onClick={toggleColorMode} width={'300px'}>
								{colorMode === 'dark' ? 'Light Mode' : 'Night Mode'}
							</Button>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default Navbar;
