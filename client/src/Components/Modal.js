import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleModalClose = (e) => {
		if (e.target.className === "backdrop") {
			setSelectedImage(null);
		}
	};
	return (
		<motion.div
			className="backdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			onClick={handleModalClose}
		>
			<img src={selectedImage} alt="Modal" />
		</motion.div>
	);
};

export default Modal;
