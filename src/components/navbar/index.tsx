import { Box, Button, Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { navbar } from 'src/config/constants';
import 'src/css/navbar.css';
const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

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
				<NavLink to={'/'}>Furniture</NavLink>
				<HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
					{navbar.map((nav: any) => (
						<NavLink key={nav} to={nav} className={'nav-link'}>
							{nav.toUpperCase()}
						</NavLink>
					))}
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
			>
				{navbar.map((s: any) => (
					<NavLink to={s}>
						{' '}
						<Button  paddingX={2}  colorScheme='teal' variant='outline'>
							{s}
						</Button>
					</NavLink>
				))}
			</Box>
		</Box>
	);
};

export default Navbar;
