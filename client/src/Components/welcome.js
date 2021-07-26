import React from "react";
import { auth, googleAuthProvider } from "../firebase/config";

const Welcome = () => {
	const userSignUp = () => {
		console.log("Working");

		auth
			.signInWithPopup(googleAuthProvider)
			.then((result) => {
				var user = result.credential;
				var userInfo = result.user;
				console.log("Login Was done--->", user);
				console.log("User Info -->", userInfo);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h2 className="test">Welcome To PicBook</h2>

			<button onClick={userSignUp}>Sign Up With Google</button>
		</div>
	);
};

export default Welcome;
