import React, { useEffect, useState } from "react";

import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadFile from "./UploadFile";

import { useSelector } from "react-redux";
const UserFeed = ({ history }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const { user } = useSelector((state) => ({ ...state }));

	//destructuring usser name from user object
	const { Name } = user;

	useEffect(() => {
		if (!user) {
			history.push("/");
		}
	}, []);

	return (
		<>
			{user && Name && <h1>Welcome {Name.split(" ")[0]} </h1>}
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
