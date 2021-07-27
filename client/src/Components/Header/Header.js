import React from "react";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));
	const history = useHistory();
	
	
	const handleLogout = () => {
		auth.signOut();
		toast.warning("See You Soon... 👋");
		history.push("/");
		dispatch({ type: "USER_LOGGED_OUT", payload: null });
	};
	return (
		<header className="header">
			<div className="brand">
				<a className="nav__item brand__name" href="/">
					<img className="brand__logo" src="/images/PicBook-Logo.svg" alt="" />
				</a>
			</div>

			<nav className="nav">
				<a className="nav__item" href="/">
					Home
				</a>
				{user ? (
					<div className="nav">
						<img 
							className="nav__item profile__avatar"
							src={user.UserProfile}
							alt=""/>
						<button
							className="nav__item button button__outline button__danger"
							onClick={handleLogout}
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<a className="nav__item" href="/">
							Sign In
						</a>
						<a className="nav__item button button__primary" href="/">
							Sign Up
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
