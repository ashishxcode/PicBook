import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadFile = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const imageTypes = ["image/png", "image/jpeg"];

	const handleFileUpload = (e) => {
		const uploadedFile = e.target.files[0];

		if (uploadedFile && imageTypes.includes(uploadedFile.type)) {
			console.log(uploadedFile);
			//set error to null, if the file type is roght
			setError(null);

			//store the seleted file in a local state
			setFile(uploadedFile);
		} else {
			console.log("No");
			setError("Invalid File Format. Please use (png/jpeg)");
		}
	};
	return (
		<form className="form">
			<label className="text__center">
				<input type="file" onChange={handleFileUpload} />
				<span className="button button__primary">
					<i class="fa fa-plus"></i> {"  "}Upload Image
				</span>
			</label>
			<div className="output">
				{error && <p className="text__center error">{error}</p>}
				{file && <div className="text__center">{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadFile;
