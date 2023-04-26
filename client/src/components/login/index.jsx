import { useState, useEffect } from 'react';
import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api';

const Login = ({ setUser, setSecret }) => {
	const [isRegister, setIsRegister] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [triggerLogin, resultLogin] = usePostLoginMutation();
	const [triggerSignUp] = usePostSignUpMutation();

	const handleLogin = () => {
		triggerLogin({ username, password });
	};

    const handleRegister = () => {
        //this function sets payload coming from post query
		triggerSignUp({ username, password });
	};

	useEffect(() => {
		if (resultLogin.data?.response) {
			setUser(username);
			setSecret(password);
		}
	}, [resultLogin.data]); // eslint-disable-line

	return (
		<div className='login-page'>
			<div className='login-container'>
				<h2 className='title'>CHATGPT APP</h2>
				<h2 className='description'>
					When Logged In, choices of AI chat are:
					<br />
					AiChat_title, AiCode_title, or AiAssist_title
					<br />
					Please add Member: AI_bot-Steve
				</h2>
				<p className='register-change' onClick={() => setIsRegister(!isRegister)}>
					{isRegister ? 'Already a user?' : 'Are you a new user?'}
				</p>

				<div>
					<input
						className='login-input'
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className='login-input'
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='login-actions'>
					{isRegister ? (
						<button type='button' onClick={handleRegister}>
							Register
						</button>
					) : (
						<button type='button' onClick={handleLogin}>
							Login
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
