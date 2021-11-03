import React from 'react';
import styled, { css } from 'styled-components'
import { color, media, font } from '../styled/variables'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'

const List = styled.div`
	width: 12.2857%;
	margin: 1%;
	@media ${ media.lg } {
		width:14.6666%;
	}
	@media ${ media.md } {
		width:18%;
	}
	@media ${ media.sm } {
		width:23%;
	}
	@media ${ media.xs } {
		width:47%;
		margin: 1.5%;
	}
	font-family: ${ font.notokr };
`

const Imgs = styled.div`
`

const Titles = styled.a`
	margin-bottom: .75em;
	display: flex;
`

const Bar = styled.div`
	padding: 0 .25em;
`

const Collection = styled.div`
	color: ${ color.dark }
`

const Name = styled.div`
	color: ${ color.grey }
`

const Imglist = ({ data }) => {
	return (
		<List>
			<Imgs>
				<Image src={ data.image_url } thumb={ data.thumbnail_url } isImg={ true } />
			</Imgs>
			<Titles href={ data.doc_url }  target="_blank">
				<Collection>{ data.collection }</Collection>
				<Bar>|</Bar>
				<Name>{ data.display_sitename }</Name>
			</Titles>
			<Time color={ color.gray } value={ data.datetime } size="0.875em" /> 
		</List>
	);
}

export default Imglist;
