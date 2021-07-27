import React from "react";
import { auth, googleAuthProvider } from "../firebase/config";
import { toast } from "react-toastify";

const Welcome = ({ history }) => {
	const userSignUp = () => {
		console.log("Working");

		auth
			.signInWithPopup(googleAuthProvider)
			.then(async (result) =>  {
				const user = result.user;
				const token = user.getIdTokenResult();
				console.log("Login Was done, user info--->", user);
				console.log("Token-->", token);
				toast.success("Logged In Succesfully!");
				if (user.emailVerified){
					history.push("/user");
				}
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
