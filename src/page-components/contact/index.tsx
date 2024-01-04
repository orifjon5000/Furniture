import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Stack,
	Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { SectionTitle } from 'src/components';
import Swal from 'sweetalert2';

interface ContactObj{
	mb_name: string,
				mb_mail: string |null,
				mb_phone: string |null,
				mb_subject: string |null,
				mb_description: string |null,
}
const sweetTopSmallSuccessAlert = async (
	msg: string,
	duration: number = 2000,
	enable_forward: boolean = false
) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: duration,
		timerProgressBar: true,
	});

	Toast.fire({
		icon: 'success',
		title: msg,
	}).then(data => {
		if (enable_forward) {
			window.location.reload();
		}
	});
};
const Contact = () => {

 const [memberUpdate, setMemberUpdate] = useState<ContactObj>({
		mb_name: '',
		mb_mail: '',
		mb_phone: '',
		mb_subject: '',
		mb_description: '',
 });

		//* HANDLERS
		const changeMemberNameHandler = (e: any) => {
			memberUpdate.mb_name = e.target.value;
			setMemberUpdate({ ...memberUpdate });
		};
		const changeMailHandler = (e: any) => {
			memberUpdate.mb_mail = e.target.value;
			setMemberUpdate({ ...memberUpdate });
		};
		const changePhoneHandler = (e: any) => {
			memberUpdate.mb_phone = e.target.value;
			setMemberUpdate({ ...memberUpdate });
		};
		const changeSubjectHandler = (e: any) => {
			memberUpdate.mb_subject = e.target.value;
			setMemberUpdate({ ...memberUpdate });
		};
		const changeDescriptionHandler = (e: any) => {
			memberUpdate.mb_description = e.target.value;
			setMemberUpdate({ ...memberUpdate });
		};
const handleSubmitButton = (e: any) => {
	e.preventDefault();
	

	let TOKEN = '5971020452:AAEGLHyKFP_VEfrdKYTyPBkZT8FqwTbIPXQ';
	let chat_id = 93137680;

	let test = `   
    Name :${memberUpdate.mb_name} %0A
    e-mail :${memberUpdate.mb_mail} %0A
    Phone Number :${memberUpdate.mb_phone} %0A
    Theme :${memberUpdate.mb_subject} %0A
    Description :${memberUpdate.mb_description} %0A`;
	// let chat_id =5971020452
	let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${test}`;
	let api = new XMLHttpRequest();
	api.open('GET', url, true);
	api.send();
	console.log('success');
	sweetTopSmallSuccessAlert('successfully', 2000);
	window.location.reload();
};
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
				title='Contact Us'
			/>
			<Stack spacing={6} justifyContent={'center'} width={'80%'}>
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
							name='email'
							onChange={changeMailHandler}
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
						<Input
							name='name'
							onChange={changeMemberNameHandler}
							type='text'
							id='name'
							aria-describedby='email-helper-text'
						/>
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Phone number
						</FormLabel>
						<Input
							name='phone'
							type='phone'
							id='phone'
							aria-describedby='email-helper-text'
						/>
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Subject
						</FormLabel>
						<Input
							onChange={changeSubjectHandler}
							name='subject'
							type='text'
							id='subject'
							aria-describedby='email-helper-text'
						/>
					</FormControl>

					<FormControl width={{ sm: '80%', md: '80%' }}>
						<FormLabel fontSize={{ base: 'md', md: 'xl' }} htmlFor='email'>
							Description
						</FormLabel>
						<Textarea
							onChange={changeDescriptionHandler}
							id='message'
							name='message'
							placeholder='write your letter'
						/>
					</FormControl>
					<FormControl width={{ sm: '80%', md: '80%' }} mt={'10px'}>
						<Button
							onClick={handleSubmitButton}
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
};

export default Contact;
