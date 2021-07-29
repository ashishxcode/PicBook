import React from 'react'
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";
import '../../index.css'
const Profile = () => {
    const { user,modal  } = useSelector((state) => ({ ...state }));

    	const dispatch = useDispatch();
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
        <div>
            <h1>Profile</h1>
            { user ? ( 
            <div className="profile__container">
               
               
                <img className="profile__image" src={user.UserProfile} alt="" />
                <h2 className="profile__name">Name: {user.Name}</h2>
                <h2 className="prolfile_email">Email: {user.Email}</h2>
                          
                <button
                    className="button button__outline button__danger"
                    onClick={handleModalVisibility} >
                    Logout
                </button>
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
                </div>) : <div>Loading...</div>}
        </div>
    )
}

export default Profile
