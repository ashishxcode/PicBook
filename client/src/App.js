import { useState } from "react";

import { Path, Route, Switch } from "react-router-dom";
import UserFeed from "./Components/User/UserFeed";
import Welcome from "./Components/welcome";

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
			<Switch>
				<Route path="/" exact component={Welcome} />
				<Route path="/user" exact component={UserFeed} />
			</Switch>
		</div>
	);
}

export default App;
