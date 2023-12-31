import { Box, Divider, Icon, List, ListIcon, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import '../../css/footer.css'
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
const Footer = () => {
	return (
		<div>
			<Divider mt={'20px'} />
			<div className='footer'>
				<Box
					className='footer-info footer-box'
					display={{ base: 'none', sm: 'none', md: 'flex' }}
					flexDirection={'column'}
				>
					<h4>GET IN TOUCH</h4>

					<div>
						<List spacing={3}>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Assumenda, quia temporibus eveniet a libero incidunt suscipit
							</ListItem>
							<ListItem>
								<ListIcon as={MdCheckCircle} color='green.500' />
								Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
							</ListItem>
							{/* You can also use custom icons from react-icons */}
							<ListItem>
								<ListIcon as={MdSettings} color='green.500' />
								Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
							</ListItem>
						</List>
					</div>
				</Box>
				<Box
					className='footer-quick footer-box'
					display={{ base: 'none', sm: 'none', md: 'flex' }}
					flexDirection={'column'}
				>
					<h4>QUICK SHOP</h4>
					<UnorderedList>
						<ListItem>Lorem ipsum dolor sit amet</ListItem>
						<ListItem>Consectetur adipiscing elit</ListItem>
						<ListItem>Integer molestie lorem at massa</ListItem>
						<ListItem>Facilisis in pretium nisl aliquet</ListItem>
					</UnorderedList>
				</Box>
				<Box className='footer-news footer-box' padding={0}>
					<h4>NEWSLETTER</h4>
					<p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
					<Box className='social' width={'200px'}>
						<Icon as={TiSocialTwitter} fontSize={'30px'} />
						<Icon as={TiSocialLinkedin} fontSize={'30px'} />
						<Icon as={TiSocialYoutube} fontSize={'30px'} />
						<Icon as={TiSocialFacebook} fontSize={'30px'} />
					</Box>
				</Box>
			</div>{' '}
		</div>
	);
};

export default Footer;
