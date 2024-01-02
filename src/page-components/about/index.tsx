import { Box, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { SectionTitle } from 'src/components';
import { FaShippingFast } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoBagHandle } from 'react-icons/io5';
import { BiCheckCircle } from 'react-icons/bi';
const data = [
	{
		title: 'Home Delivery',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		icons: FaShippingFast,
	},
	{
		title: 'Best Price',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		icons: GiReceiveMoney,
	},
	{
		title: 'Custom Box',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		icons: IoBagHandle,
	},
	{
		title: 'Quick Refund',
		description:
			'sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
		icons: BiCheckCircle,
	},
];

const About = () => {
	return (
		<Stack marginTop={{base:'100px'}}>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '30px',
				}}
				subtitle=' '
				title='About'
			/>

			<Box
				display={'flex'}
				flexDirection={{ base: 'column', md: 'row' }}
				justifyContent={{ base: 'center', sm: 'center' }}
				alignItems={{ base: 'center', sm: 'center' }}
			>
				<Stack
					height={'400px'}
					justify={'center'}
					width={{ base: '300px', md: '500px' }}
				>
					{' '}
					{data.map((item,idx) => (
						<Stack
							key={idx}
							display={'flex'}
							flexDirection={'row'}
							alignItems={'center'}
							gap={4}
							width={{ base: '300px' }}
						>
							<Icon as={item.icons} fontSize={'40px'} />
							<Stack
								display={'flex'}
								flexDirection={'column'}
								width={{ base: '300px', md: '600px' }}
							>
								<Text> {item.title}</Text>
								<Text
									opacity={0.6}
									fontSize={{ base: 'xs', sm: 'xs', md: 'sm' }}
								>
									{item.description}
								</Text>
							</Stack>
						</Stack>
					))}
				</Stack>

				<Image
					// margin={{ base: 'auto', sm: 'auto' }}
					width={{ base: '300px', md: '500px' }}
					height={'400px'}
					borderRadius={'lg'}
					src='/utils/pexel.jpg'
				/>
			</Box>
		</Stack>
	);
};

export default About;
