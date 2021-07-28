import React from "react";
import useFirestore from "../../Hooks/useFIrestore";
import { motion } from "framer-motion";
import { Card } from "antd";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
	const { docs } = useFirestore("Images");

	console.log("Docs --->", docs);
	return (
		<div className="masonry-wrapper">
			<div className="masonry">
				{docs &&
					docs.map((item) => {
						return (
							<motion.div
								className="masonry-item"
								layout
								whileHover={{ opacity: 1 }}
								key={item.id}
								onClick={() => setSelectedImage(item.url)}
							>
								{/* <motion.img
									src={item.url}
									alt="Oops"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									delay={{ delay: 1 }}
									className="masonry-content"
								/> */}

								<Card
									className="masonry-content"
									style={{
										border: "2px solid purple",
									}}
									cover={
										<img
											src={item.url}
											alt="Oops"
											style={{ height: "12rem", objectFit: "cover" }}
										/>
									}
									actions={[<> Facebook </>, <>Twitter </>, <> Instagram </>]}
								></Card>
							</motion.div>
						);
					})}
			</div>
		</div>
	);
};

export default ImageGrid;
