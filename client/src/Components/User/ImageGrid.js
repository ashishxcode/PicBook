import React from "react";
import useFirestore from "../../Hooks/useFIrestore";
import { motion } from "framer-motion";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,WhatsappShareButton, WhatsappIcon,PinterestShareButton,PinterestIcon} from "react-share";
import {FiDownload} from "react-icons/fi";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
	const { docs } = useFirestore("Images");

	return (
			<div className="masonry">
				{docs &&
					docs.map((item) => {
						return (
							<motion.div
								className="masonry-item"
								layout
								whileHover={{ opacity: 1 }}
								key={item.id}>
								<div className="masonry-content">
										<img
											src={item.url}
											alt="Oops"
											onClick={() => setSelectedImage(item.url)}
										/>
										<div className="card__action">
											<div className="share-buttons">
												<FacebookShareButton 
													quote={"Check out my pic - PicBook"} 
													media={item.url} 
													url={item.url}>
														<FacebookIcon size={24} round ={true}/>
												</FacebookShareButton>
												<TwitterShareButton   
													quote={"Check out my pic - PicBook"} 
													media={item.url}
													url={item.url}>
														<TwitterIcon size={24} 	round ={true}/>
												</TwitterShareButton>
												<PinterestShareButton 
													quote={"Check out my pic - PicBook"} 
													media={item.url}
													url={item.url}>
													<PinterestIcon size={24} round ={true}/>
												</PinterestShareButton>
												<WhatsappShareButton 
													quote={"Check out my pic - PicBook"} 
													media={item.url}
													url={item.url}>
													<WhatsappIcon size={24} round ={true}/>
												</WhatsappShareButton>
											</div>
											<a href={`/{item.url}`} download>
												<FiDownload className="nav__icon"/> 
											</a>
										</div>
									</div>
							</motion.div>
						);
					})}
			</div>
	);
};

export default ImageGrid;
