import React from "react";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi";
import { Modal, Button } from "antd";

const Header = () => {
	const dispatch = useDispatch();
	const { user, modal } = useSelector((state) => ({ ...state }));
	// const { userProfile } = user;
	const history = useHistory();

	const handleModalVisibility = () => {
		console.log("Time to dispatch");
		dispatch({
			type: "SHOW_MODAL",
			payload: true,
		});
	};

	const hideLogoutModal = () => {
		dispatch({
			type: "SHOW_MODAL",
			payload: false,
		});
	};

	const handleLogout = () => {
		toast.warning("See You Soon... 👋");
		auth.signOut();

		history.push("/");
		dispatch({ type: "USER_LOGGED_OUT", payload: null });
		dispatch({ type: "SHOW_MODAL", payload: false });
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
						<FiLogOut
							className="nav__item"
							onClick={handleModalVisibility}
							title="Logout"
						/>
						<Modal
							title="Closing PicBook?🥺"
							style={{ backgroundColor: "purple" }}
							visible={modal}
							onCancel={hideLogoutModal}
							footer={[
								<Button
									key="OK"
									style={{ backgroundColor: "#9000ff", color: "white" }}
									onClick={handleLogout}
								>
									OK
								</Button>,
								<Button key="cancel" onClick={hideLogoutModal}>
									Cancel
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
