import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		// Los effect no pueden ser async, porque esperan algo sincrono, pero podemos usar then
		getGifs(category).then(imgs => {
			setState({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);

	return state;
};
