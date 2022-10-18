import React, {useState} from 'react';
import './Login.scss'
import {TextField} from "@mui/material";
import whatsAppLogo from '../../resources/images/whatsapp-logo.png'

const Login = () => {

	const [credentials, setCredentials] = useState({

	})


	return (
		<div className="auth">
			<div className="auth__logo">
				<img src={whatsAppLogo} alt={''} />
				<span>GigaChat</span>
			</div>
			<TextField type={'email'}
			           required
			           variant={'standard'}
			           label={'Email'}
			/>
			<TextField type={'password'}
			           required
			           variant={'standard'}
			           label={'Password'} />
		</div>
	);
};

export default Login;