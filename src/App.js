import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/Home"
import All from "./pages/All"
import Web from "./pages/Web"
import Img from "./pages/Img"
import Clip from "./pages/Clip"
import Blog from "./pages/Blog"
import Book from "./pages/Book"

function App() {
	return (
		<BrowserRouter>
			{/* <header className="header-wrapper">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</header> */}
			<div className="wrapper">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/all">
						<All />
					</Route>
					<Route exact path="/web">
						<Web />
					</Route>
					<Route exact path="/img">
						<Img />
					</Route>
					<Route exact path="/clip">
						<Clip />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
					<Route exact path="/book">
						<Book />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
