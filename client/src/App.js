import { useEffect, useState } from "react";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";
import UserFeed from "./Components/User/UserFeed";

import { auth } from "./firebase/config";

import { projectFirestore } from "./firebase/config";

import Welcome from "./Components/welcome";
import { useDispatch } from 'react-redux';
import Header from "./Components/Header/Header";

function App() {
	
	const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
	const dispatch = useDispatch();
	const collectionRef = projectFirestore.collection("users");

	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				console.log("Firebase User-->", user);
				dispatch({
					type: "USER_LOGGED_IN",
					payload: {
						Name: user.displayName,
						Email: user.email,
						UserProfile: user.photoURL,
					},
				});
				setIsUserAuthenticated(true);
			} else {
				setIsUserAuthenticated(false);
			}
		});

		//cleanup
		return () => unSubscribe();
	}, [dispatch, collectionRef]);

	return (
		<div className="App">
			<Header isUserAuthenticated={isUserAuthenticated} />
			<ToastContainer />
			<Switch>
				<Route path="/" exact component={Welcome} />
				<Route path="/user" exact component={UserFeed} />
			</Switch>
		</div>
	);
}

export default App;
