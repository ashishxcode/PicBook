<<<<<<< HEAD
import React, { useState } from "react";
=======
import React,{useState} from "react";
>>>>>>> e3eefe04593af8d28526ec7430bfc8b267a72e2a
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadFile from "./UploadFile";

const UserFeed = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<>
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
