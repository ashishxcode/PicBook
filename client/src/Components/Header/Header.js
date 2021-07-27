import React from 'react'
import {auth} from '../../firebase/config'
import { useDispatch } from 'react-redux';
import '../../index.css'
const Header = ({isUserAuthenticated,userProfile,history}) => {

    const dispatch = useDispatch();

	const handleLogout = () => {
		auth.signOut();
		if (isUserAuthenticated) {
			dispatch({ type: "USER_LOGGED_OUT", payload: null });
		}
	};
    return (

        <header className="header">
            {console.log('isUserAuthenticated=',isUserAuthenticated)}
            <div className="brand">
                <a className="nav__item brand__name" href="/">
                    <img className="brand__logo" src="/images/PicBook-Logo.svg" alt=''/>
                </a>
            </div>

            <nav className="nav">
                <a className="nav__item" href="/">Home</a>
                {
                isUserAuthenticated ?            
                    <div>
                        {userProfile && <img className="nav__item profile__avatar" src={userProfile} alt=""/>}
                        <button className="nav__item button button__outline button__danger" onClick={handleLogout}>Logout</button>
                    </div>
                    :      
                 <div>
                <a className="nav__item" href="/">Sing In</a>
                <a className="nav__item button button__primary" href="/">Sing Up</a>
            </div>
                }                
            </nav>
        </header>
    )
}

export default Header
