import React, { useEffect, useState } from "react";

import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadFile from "./UploadFile";

import { useSelector } from "react-redux";

import {FacebookShareButton,FacebookIcon} from "react-share";

const UserFeed = ({ history }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const { user } = useSelector((state) => ({ ...state }));

	//destructuring usser name from user object
	// const { Name } = user;

	useEffect(() => {
		if (!user) {
			history.push("/");
		}
	}, [user, history]);

	return (
		<>
			{user && user.Name ? (
				<h2>Welcome {user.Name.split(" ")[0]} </h2>
			) : (
				<h2>Welcome</h2>
			)}
			<UploadFile />
			
			<ImageGrid
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>

			{selectedImage && (
				<Modal
					selectedImage={selectedImage}
					setSelectedImage={setSelectedImage}
				/>
			)}
		</>
	);
};

export default UserFeed;
