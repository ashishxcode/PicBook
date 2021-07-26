import {useEffect,useState} from 'react';
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {  Route, Switch } from "react-router-dom";
import UserFeed from "./Components/User/UserFeed";
import {auth} from "./firebase/config";	
import Welcome from "./Components/welcome";
import { useDispatch } from 'react-redux';
        
function App() {
	const [userState, setUserState] = useState(null); 
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
		 if(user){
			 console.log("Firebase User-->",user);
			 dispatch({	
				 		type: "USER_LOGGED_IN",
						payload: {
							Name: user.displayName,
							Email: user.email,
						}
					});
			setUserState(user);
		 }else{
			setUserState(null);
		 }
		});
	} , [dispatch]);

	const handleLogout = () => {
		auth.signOut();
		if(userState){
			dispatch({ type:"USER_LOGGED_OUT",payload:null});
		}
	}
	console.log("CHECK-->", process.env.REACT_APP_FIREBASE_API_KEY);
	return (
		<div className="App">
			<header className="header">
				<div className="brand">
					<h1 className="brand__name">PicBook</h1>
					<small className="brand__tagline">Adding Life To Moments.</small>
					
				</div>
			</header>
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
