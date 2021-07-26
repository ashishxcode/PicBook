import React from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import UploadFile from "./UploadFile";

const UserFeed = ({ selectedImage, setSelectedImage }) => {
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
