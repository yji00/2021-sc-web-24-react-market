import React from 'react';
import styled, { css } from 'styled-components'
import { color, media, font } from '../styled/variables'

import Title from './list/Title'
import Time from './list/Time'
import Image from './list/Image'
import { duration } from 'moment';

const List = styled.div`
	display: flex;
	align-items: flex-start;
	font-family: ${ font.notokr };
	border-bottom: 1px solid ${ color.bright };
	padding-bottom: .5em;
	margin-bottom: 1em;
`

const Imgs = styled.div`
	padding: .25em;
	border: 1px solid ${ color.primary };
	&:hover {
		border-color: ${ color.danger };
	}
`

const Titles = styled.a`
	margin-bottom: .75em;
	flex-grow: 1;
	padding-left: 1em;
	color: ${ color.dark };
`

const Author = styled.span``

const Bar = styled.span`
	padding: 0 .25em;
`

const Url = styled.a`
	color: ${ color.grey };
	display:block;
	&:hover {
		color: ${ color.danger };
	}
`

const Duration = styled.span`

`

const zeroPlus = n => n<10 ? '0'+n : n

const Imglist = ({ data }) => {
	return (
		<List>
			<Imgs>
				<Image src={ data.url } thumb={ data.thumbnail } />
			</Imgs>
			<Titles href={ data.doc_url }  target="_blank">
				<Title value={ data.title } size="1.25em" color={ color.danger } />
				<Author>{ data.author }</Author>
				<Bar>|</Bar>
				<Duration>{ zeroPlus(Math.floor(data.play_time/60)) }:{ data.play_time%60 }</Duration>
				<Url href={ data.url } target="_blank">{ data.url }</Url>
			<Time color={ color.gray } value={ data.datetime } size="0.875em" /> 
			</Titles>
		</List>
	);
}

export default Imglist;
