import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import { SectionTitle } from 'src/components';

const Contact = () => {
  return (
		<Box paddingX={{ sm: '25px', md: '20px' }} marginTop='100px' display={'flex'} flexDirection={'column'} alignItems={'center'}>
			<SectionTitle
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '30px',
				}}
				subtitle=' '
				title='Contact Us'
			/>
			<Stack spacing={6} justifyContent={'center'}  width={'80%'} >
				<Box
					paddingY={'20px'}
					display={'flex'}
					alignItems={'center'}
					border={'1px'}
					borderRadius={'lg'}
					borderColor={'facebook.200'}
					flexDirection={'column'}
				>
					<FormControl
						fontSize={{ base: 'md', md: '2xl' }}
						width={{ sm: '80%', md: '80%' }}
					>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Email address
						</FormLabel>
						<Input
							type='email'
							id='email'
							aria-describedby='email-helper-text'
						/>
						<FormHelperText id='email-helper-text'>
							We'll never share your email.
						</FormHelperText>
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Name
						</FormLabel>
						<Input type='text' id='text' aria-describedby='email-helper-text' />
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Phone number
						</FormLabel>
						<Input
							type='number'
							id='email'
							aria-describedby='email-helper-text'
						/>
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Subject
						</FormLabel>
						<Input
							type='text'
							id='email'
							aria-describedby='email-helper-text'
						/>
					</FormControl>

					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Email address
						</FormLabel>
						<Textarea placeholder='write your letter' />
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }} mt={'10px'}>
						<Button
							width={{ sm: '100%', md: '10%' }}
							colorScheme='teal'
							variant='outline'
						>
							{' '}
							Send
						</Button>
					</FormControl>
				</Box>
			</Stack>
		</Box>
	);
}

export default Contact
