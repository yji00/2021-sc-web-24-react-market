import React from 'react';
import styled from 'styled-components'
import { media, size } from './styled/variables';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/Home"
import All from "./pages/All"
import Web from "./pages/Web"
import Img from "./pages/Img"
import Clip from "./pages/Clip"
import Blog from "./pages/Blog"
import Book from "./pages/Book"

const Wrapper = styled.div`
	max-width: ${ size.lg };
	padding: 0 1em;
	margin: auto;
`

function App() {
	return (
		<Wrapper>
			<BrowserRouter>
				{/* <header className="header-wrapper">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</header> */}
					<Switch>
						<Route exact path="/" component={ Home } />						{/* exact 뒤에붙는 문자들은 받지 않음 */}
						<Route exact path="/all" component={ All } />
						<Route exact path="/web" component={ Web } />
						<Route exact path="/img" component={ Img } />
						<Route exact path="/clip" component={ Clip } />
						<Route exact path="/blog" component={ Blog } />
						<Route exact path="/book" component={ Book } />
					</Switch>
			</BrowserRouter>
		</Wrapper>
	);
}

export default App;
