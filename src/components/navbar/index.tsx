import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Link,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { navbar } from 'src/config/constants';
import 'src/css/navbar.css';
const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const onToggle = () => {
		setIsActive(prev => !prev);
	};

	return (
		<Box
			zIndex={1001}
			w={'full'}
			px={10}
			borderBottom={'1px'}
			// pos={'fixed'}
			top={0}
			left={0}
		>
			<Flex
				fontSize={{ base: 'md', md: '2xl' }}
				justify={'space-evenly'}
				align={'center'}
				py={4}
			>
				<NavLink to={'/'}>
					<Text
						bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
						bgClip='text'
						fontSize={{ base: 'lg', md: '3xl' }}
						fontWeight='extrabold'
					>
						Furniture
					</Text>
				</NavLink>
				<HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
					<>
						{navbar.map((nav: any) => (
							<NavLink key={nav} to={nav} className={'nav-link'}>
								{nav.toUpperCase()}
							</NavLink>
						))}
						<Button onClick={toggleColorMode}>
							 {colorMode === 'light' ? 'Dark' : 'Light'}
						</Button>
					</>
				</HStack>
				<Box display={{ base: 'block', md: 'none' }}>
					<Icon
						as={isActive ? BiUserCircle : BiMenuAltLeft}
						onClick={onToggle}
					/>
				</Box>
			</Flex>
			{navbar.map((nav: any) => (
				<NavLink to={nav} className={'nav-link'}>
					{nav.title}
				</NavLink>
			))}

			<Box
				display={{ base: isActive ? 'flex' : 'none', md: 'none' }}
				py={4}
				gap={1}
				justifyContent={'center'}
				gridTemplateColumns={'auto auto auto'}
			>
				{navbar.map((s: any) => (
					<NavLink to={s}>
						{' '}
						<Button fontSize={{base:'xs'}} paddingX={2} colorScheme='teal' variant='outline'>
							{s}
						</Button>
					</NavLink>
				))}
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? 'Dark' : 'Light'}
				</Button>
			</Box>
		</Box>
	);
};

export default Navbar;
