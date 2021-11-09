import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color, font, media, align } from '../styled/variables'

const NaviWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 1em 0;
	color: ${ color.default };
	margin: 1.5em;
`
const NaviLink = styled(Link)`
	padding: .75em 1em;
	margin: 0 .25em;
	border-radius: .25em;
	background-color: ${ color.primary };
	&:hover {
		background-color: ${ color.danger };
	}
`


const NaviBar = () => {
	return (
		<NaviWrap>
			<NaviLink to='/img'>Image</NaviLink>
			<NaviLink to='/clip'>Movie clip</NaviLink>
			<NaviLink to='/web'>Website</NaviLink>
			<NaviLink to='/blog'>Blog</NaviLink>
			<NaviLink to='/book'>Book</NaviLink>
		</NaviWrap>
	);
}

export default React.memo(NaviBar)
