import { useEffect, useState } from "react";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";
import UserFeed from "./Components/User/UserFeed";

import { auth } from "./firebase/config";

import { projectFirestore } from "./firebase/config";

import Welcome from "./Components/welcome";
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
        
=======
import { useDispatch } from "react-redux";

>>>>>>> 5ee4d6ca57a2c957f95561d41edbebeb1afbddb8
function App() {
	const [userState, setUserState] = useState(null);
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
				setUserState(user);
			} else {
				setUserState(null);
			}
		});

		//cleanup
		return () => unSubscribe();
	}, [dispatch, collectionRef]);

	const handleLogout = () => {
		auth.signOut();
		if (userState) {
			dispatch({ type: "USER_LOGGED_OUT", payload: null });
		}
	};
	console.log("CHECK-->", process.env.REACT_APP_FIREBASE_API_KEY);
	return (
		<div className="App">
<<<<<<< HEAD
			<Header/>
=======
			<header className="header">
				<div className="brand">
					<h1 className="brand__name">PicBook</h1>
					<small className="brand__tagline">Adding Life To Moments.</small>
				</div>
			</header>
>>>>>>> 5ee4d6ca57a2c957f95561d41edbebeb1afbddb8
			<ToastContainer />
			<Switch>
				<Route path="/" exact component={Welcome} />
				<Route path="/user" exact component={UserFeed} />
			</Switch>
			{userState && <button onClick={handleLogout}>Logout</button>}
		</div>
	);
}

export default App;
