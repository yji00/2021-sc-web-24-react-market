	/*	switch(searchEngine) {
			case ' web':
				url = WEB_URL
				break
			case ' clip':
				url = CLIP_URL
				break
			case ' img':
				url = IMG_URL
				break
			case ' blog':
				url = BLOG_URL
				break
			case ' book':
				url = BOOK_URL
				break
				default:
					throw new Error( '매개변수가 잘못되었습니다.')
		}
		
				let url = searchEngine === 'web'
			? WEB_URL
			: searchEngine === 'clip'
				? CLIP_URL
				: searchEngine === 'img'
					? IMG_URL
					: searchEngine === 'blog'
						? BLOG_URL
						: searchEngine === 'book'
							? BOOK_URL
							: null
				if(!url) throw new Error()
		*/

import axios from "axios";
// import  { WEB_URL, CLIP_URL, IMG_URL, BLOG_URL, BOOK_URL, genConfig } from '../init'
import  init, { genConfig } from '../init'


const getSearchApi = async (query, searchEngine) => {
	try {
		const {data} = await axios(init[searchEngine], genConfig(query)) //구조분해 X 받아온 문자열 그대로 searchEngine에 들어감
		return {
			pageCnt: data.meta.pageable_count,
			listCnt: data.meta.total_count,
			lists: data.documents
		}
	}
	catch(err) {
		throw err
	}
}

export { getSearchApi }