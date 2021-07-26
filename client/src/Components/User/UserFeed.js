import React, { useState } from "react";

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
