import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import { InterfaceCustomer } from './checkout.props';
import { CardItem } from 'src/interfaces/cart.interface';
import { Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';

interface Props {
	cartItems: CardItem[];
	onDeleteAll: () => void;
	onClose: () => void;
	total: number;
	itemsPrice: number;
	shippingPrice:number;
}
const ModalSection = ({cartItems,onClose,onDeleteAll,total,itemsPrice,shippingPrice}:Props) => {

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
	// Messages
	const required = 'This field is required';
	const maxLength = 'Your input exceed maximum length';

	// Error Component
	const errorMessage = (error: any) => {
		return <div className='invalid-feedback'>{error}</div>;
	};

	const validateName = (value: any) => {
		let error;
		if (!value) {
			error = required;
		} else if (value.length > 12) {
			error = maxLength;
		}
		return error;
	};

	const validateEmail = (value: any) => {
		let error;
		if (!value) {
			error = required;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address';
		}
		return error;
	};

	const validateMobileNumber = (value: any) => {
		let error;
		if (value.length > 12) {
			error = maxLength;
		}
		return error;
	};
	const onSubmit = (formik: InterfaceCustomer) => {


		let TOKEN = '5971020452:AAEGLHyKFP_VEfrdKYTyPBkZT8FqwTbIPXQ';
		let chat_id = 93137680;

		let test = `   %0A
    Name : ${formik.name} %0A
    e-mail : ${formik.email} %0A
    Phone Number : ${formik.mobilenumber} %0A
    Product ID : ${cartItems.map(a => a.id)} %0A
    Amount : ${total} %0A

    `;
		// let chat_id =5971020452
		let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${test}`;
		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();
		console.log('success');
		sweetTopSmallSuccessAlert('successfully', 2000);
    onDeleteAll()
    onClose()
    
	};

	return (
		<Formik
			initialValues={{
				name: '',
				mobilenumber: '',
				email: '',
			}}
			onSubmit={onSubmit}
		>
			{({ errors, touched, isValidating }) => (
				<div className='container'>
					<div className='col-sm-12'>
						<h3>Client Profile</h3>
					</div>
					<div className='col-sm-12'>
						<Form>
							<div className='form-group'>
								<Field
									className='form-control'
									type='text'
									placeholder='Name'
									name='name'
									validate={validateName}
								/>
								{errors.name && touched.name && errorMessage(errors.name)}
							</div>
							<div className='form-group'>
								<Field
									type='email'
									name='email'
									className='form-control'
									placeholder='Email'
									validate={validateEmail}
								/>
								{errors.email && touched.email && errorMessage(errors.email)}
							</div>
							<div className='form-group'>
								<Field
									className='form-control'
									type='tel'
									placeholder='Mobile number'
									name='mobilenumber'
									validate={validateMobileNumber}
								/>
								{errors.mobilenumber &&
									touched.mobilenumber &&
									errorMessage(errors.mobilenumber)}
							</div>

							<div className='form-group'>
								<button className='btn btn-primary' type='submit'>
									<Button mt={'15px'} colorScheme='teal'  variant='solid'>
										Button
									</Button>
								</button>
							</div>
						</Form>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default ModalSection;
