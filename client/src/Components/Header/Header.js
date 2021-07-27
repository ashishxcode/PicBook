import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";

const Header = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));
	// const { userProfile } = user;
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);

	// const handleLogoutModal = (e) => {
	// 	setShowModal(true);
	// };

	const handleLogout = () => {
		toast.warning("See You Soon... 👋");
		auth.signOut();
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
							alt=""
						/>
						<button
							className="nav__item button button__outline button__danger"
							onClick={() => setShowModal(true)}
						>
							Logout
						</button>

						<Modal
							title="Closing PicBook?🥺"
							style={{ backgroundColor: "purple" }}
							visible={showModal === true}
							onCancel={() => setShowModal(false)}
							footer={[
								<Button key="cancel" onClick={() => setShowModal(false)}>
									Cancel
								</Button>,
								<Button
									key="OK"
									type="primary"
									style={{ backgroundColor: "purple" }}
									onClick={handleLogout}
								>
									OK
								</Button>,
							]}
						>
							Press OK to logout
						</Modal>
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
