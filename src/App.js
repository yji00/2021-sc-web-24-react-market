import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getWebData } from './store/reducers/webReducer' //동기 액션, custom action


function App() {

	const dispatch = useDispatch()
	const { query, isQuering, isEnd, pageCnt, listCnt, lists } = useSelector(state => state) //state

	const onQuery = useCallback((e) => {
		// dispatch(getWebData('react', 10, ['web', 'Clip', 'img', 'blog', 'book']))
		dispatch(getWebData('react', 10))
	},[dispatch])

	return (
		<div>
			<div>


			</div>
			<button onClick={onQuery}> 데이터 가져오기</button>
		</div>
	);
}

export default App;
