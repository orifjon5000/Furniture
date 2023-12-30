import { Box, FormControl, FormHelperText, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { SectionTitle } from 'src/components';

const Contact = () => {
  return (
		<Box>
					<SectionTitle style={{display:'flex',justifyContent:'center',marginTop:'50px'}} subtitle='lorem ' title='hghjgh'/>
			<Stack spacing={6}>
				<Heading as='h2' size='4xl' noOfLines={1}>
				</Heading>
				<FormControl>
					<FormLabel htmlFor='email'>Email address</FormLabel>
					<Input type='email' id='email' aria-describedby='email-helper-text' />
					<FormHelperText id='email-helper-text'>
						We'll never share your email.
					</FormHelperText>
				</FormControl>
			</Stack>
		</Box>
	);
}

export default Contact
