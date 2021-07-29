import { useEffect } from "react";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";
import UserFeed from "./Components/User/UserFeed";

import { projectFirestore } from "./firebase/config";
import { auth } from "./firebase/config";


import Welcome from "./Components/welcome";
import { useDispatch } from "react-redux";
import Header from "./Components/Header/Header";
import Profile from "./Components/User/Profile";

function App() {
	const dispatch = useDispatch();
	const {docs} = projectFirestore.collection("Images");

	console.log("App ->",docs);
	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch({
					type: "USER_LOGGED_IN",
					payload: {
						Name: user.displayName,
						Email: user.email,
						UserProfile: user.photoURL,
						UserId: user.uid,
					},
				});
			}
		});

		//cleanup
		return () => unSubscribe();
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<ToastContainer />
			<Switch>
				<Route path="/" exact component={Welcome} />
				<Route path="/user" exact component={UserFeed} />
				<Route path="/profile" exact component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
