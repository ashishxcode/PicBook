import React from "react";
import useFirestore from "../../Hooks/useFIrestore";
import { motion } from "framer-motion";
import { Card } from "antd";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,WhatsappShareButton, WhatsappIcon,PinterestIcon} from "react-share";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
	const { docs } = useFirestore("Images");

	
	console.log("Docs --->", docs);
	return (
			<div className="masonry">
				{docs &&
					docs.map((item) => {
						return (
							<motion.div
								className="masonry-item"
								layout
								whileHover={{ opacity: 1 }}
								key={item.id}
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
											onClick={() => setSelectedImage(item.url)}
										/>
									}
									actions={[
										<> 
										<FacebookShareButton 
											quote={"Check out my pic - PicBook"} 
											media={item.url} 
											url={item.url}	>
											<FacebookIcon 
											size={24} 	  
											round ={true}
										/>
										</FacebookShareButton>
										</>
										,
										<> 
									<TwitterShareButton   
											quote={"Check out my pic - PicBook"} 
									 		media={item.url}
											url={item.url}	>
											<TwitterIcon 
											size={24} 	
											round ={true}
										/>
									</TwitterShareButton>
										</>,
										
										<> 
										<PinterestIcon 
											size={24} 	  
											quote={"Check out my pic - PicBook"} 
											media={item.url}
											url={item.url}	
											round ={true}
										/>
										</>,
										
										<> 
										<WhatsappShareButton 
											quote={"Check out my pic - PicBook"} 
									 		media={item.url}
											url={item.url}
										>
											<WhatsappIcon 
											size={24} 	  
											
											round ={true}
										/>
										</WhatsappShareButton>
										</>
									]}
								></Card>
							</motion.div>
						);
					})}
			</div>
	);
};

export default ImageGrid;
