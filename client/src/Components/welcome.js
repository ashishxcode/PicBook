import React, { useEffect } from "react";

import { auth, googleAuthProvider, projectFirestore } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AiFillGoogleCircle } from "react-icons/ai";

const Welcome = ({ history }) => {
	const userSignUp = () => {
		console.log("Working");

		auth
			.signInWithPopup(googleAuthProvider)

			// var user = auth.currentUser;

			.then(async (result) => {
				const user = result.user;
				const token = user.getIdTokenResult();
				console.log("Login Was done, user info--->", user);
				console.log("Token-->", token);
				toast.success("Logged In Succesfully!");

				if (user.emailVerified) {
					// await collectionRef.add({
					// 	name: user.displayName,
					// 	email: user.email,
					// });
					history.push("/user");
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h2 className="test">Welcome To PicBook</h2>
			<button onClick={userSignUp}>
				<div className="btn_content">
					<AiFillGoogleCircle style={{ fontSize: "1.2rem" }} />
					<p>Sign Up With Google</p>
				</div>
			</button>
			=======
			<button onClick={userSignUp}>Sign Up With Google</button>
		</div>
	);
};

export default Welcome;
