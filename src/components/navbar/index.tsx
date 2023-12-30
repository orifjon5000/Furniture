import { Box, Flex, HStack, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { navbar } from 'src/config/constants';

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
			<Flex justify={'space-between'} align={'center'} py={4}>
				<NavLink to={'/'}>Furniture</NavLink>
				<HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
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
			<Box
				display={{ base: isActive ? 'block' : 'none', md: 'none' }}
				py={4}
				px={6}
			>
				{navbar.map((nav: any) => (
					<Link href={nav} className={'nav-link'}>
						{nav.title}
					</Link>
				))}
			</Box>
		</Box>
	);
};

export default Navbar;
