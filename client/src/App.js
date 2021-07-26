import { useState } from "react";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import UploadFile from "./Components/UploadFile";

function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	console.log("CHECK-->", process.env.REACT_APP_FIREBASE_API_KEY);
	return (
		<div className="App">
			<header className="header">
				<div className="brand">
					<h1 className="brand__name">PicBook</h1>
					<small className="brand__tagline">Adding Life To Moments.</small>
				</div>
			</header>
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
		</div>
	);
}

export default App;
