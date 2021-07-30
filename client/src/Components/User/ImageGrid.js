import React from 'react';
import useFirestore from '../../Hooks/useFIrestore';
import { motion } from 'framer-motion';
import { GoKebabHorizontal } from 'react-icons/go';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
	const { docs } = useFirestore('Images');

	const menu = (
		<Menu>
			<Menu.Item>
				<a
					rel="noopener noreferrer"
					href="/path/to/image"
					download="Image URL">
					Download
				</a>
			</Menu.Item>
			<Menu.Item>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.luohanacademy.com">
					Share
				</a>
			</Menu.Item>
		</Menu>
	);
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
								<Dropdown
									className="masonry-item-menu"
									overlay={menu}>
									<span onClick={(e) => e.preventDefault()}>
										<GoKebabHorizontal className="menu__icon" />
									</span>
								</Dropdown>
							</div>
						</motion.div>
					);
				})}
		</div>
	);
};

export default ImageGrid;
