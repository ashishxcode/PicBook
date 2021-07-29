import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../index.css";
import {HiHome,HiLogin} from 'react-icons/hi'
const Header = () => {
	const { user } = useSelector((state) => ({ ...state }));
	
	return (
		<header className="header">
			<div className="brand">
				<a className="nav__item brand__name" href="/">
					<img className="brand__logo" src="/images/PicBook-Logo.svg" alt="" />
				</a>
			</div>

			<nav className="nav">
				
				
				{user ? (
					<div className="nav">
						<a className="nav__item" href="/">
							<HiHome className="nav__icon" />	
							<span className="nav__label">Home</span>
						</a>
						<Link to='/profile'>
							<img
							className="nav__item profile__avatar"
							src={user.UserProfile}
							alt=""	
						/>
						</Link>				
					</div>
				) : (
					<div className="nav">
						<a className="nav__item" href="/">
							<HiHome className="nav__icon" />	
							<span className="nav__label">Home</span>
						</a>
						<a className="nav__item" href="/">
							<HiLogin className="nav__icon"/>
							<span className="nav__label">Sign In</span>
						</a>
						
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
