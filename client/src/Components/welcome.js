import React from "react";
import { auth, googleAuthProvider, projectFirestore } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AiFillGoogleCircle } from "react-icons/ai";

const Welcome = ({ history }) => {
	const dispatch = useDispatch();
	const collectionRef = projectFirestore.collection("users");
	const userSignUp = () => {
		console.log("Working");

		auth
			.signInWithPopup(googleAuthProvider)
			.then(async (result) => {
				var userCreds = result.credential;
				// var user = auth.currentUser;
				const user = result.user;
				const token = user.getIdTokenResult();
				console.log("Login Was done, user info--->", user);
				console.log("Token-->", token);
				toast.success("Logged In Succesfully!");
				if (user.emailVerified) {
					await collectionRef.add({
						name: user.displayName,
						email: user.email,
					});
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

			<button onClick={userSignUp}>
				<div className="btn_content">
					<AiFillGoogleCircle style={{ fontSize: "1.2rem" }} />
					<p>Sign Up With Google</p>
				</div>
			</button>
		</div>
	);
};

export default Welcome;
