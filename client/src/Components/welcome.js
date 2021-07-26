import React from "react";
import { auth, googleAuthProvider } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { projectFirestore } from "../firebase/config";

const Welcome = ({ history }) => {
	const dispatch = useDispatch();
	const userSignUp = () => {
		console.log("Working");

		auth
			.signInWithPopup(googleAuthProvider)
			.then((result) => {
				var userCreds = result.credential;
				// var user = auth.currentUser;
				var user = result.user;
				var token = user.getIdTokenResult();
				console.log("Login Was done, user info--->", user);
				console.log("Token-->", token);
				toast.success("Logged In Succesfully!");
				if (user.emailVerified) {
					history.push("/user");
					dispatch({
						type: "USER_LOGGED_IN",
						payload: {
							Name: user.displayName,
							Email: user.email,
						},
					});
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
