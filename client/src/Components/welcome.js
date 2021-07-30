import React, { useEffect } from 'react';

import { auth, googleAuthProvider } from '../firebase/config';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { AiFillGoogleCircle } from 'react-icons/ai';

const Welcome = ({ history }) => {
	const { user } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		if (user) history.push('/user');
	}, [user, history]);

	const userSignUp = () => {
		console.log('Working');

		auth.signInWithPopup(googleAuthProvider)

			// var user = auth.currentUser;

			.then(async (result) => {
				const user = result.user;
				const token = user.getIdTokenResult();
				console.log('Login Was done, user info--->', user);
				console.log('Token-->', token);
				toast.success('Logged In Succesfully!');

				if (user.emailVerified) {
					// await collectionRef.add({
					// 	name: user.displayName,
					// 	email: user.email,
					// });
					history.push('/user');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h2 className="test">Welcome To PicBook</h2>
			<button onClick={userSignUp}>
				<div className="button button__primary">
					<AiFillGoogleCircle
						className="icon"
						style={{ fontSize: '1.2rem' }}
					/>
					<span className="button__label">Sign in with Google</span>
				</div>
			</button>
		</div>
	);
};

export default Welcome;
