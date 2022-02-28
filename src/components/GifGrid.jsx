// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { loading } = useFetchGifs();

	console.log(loading);

	// const [images, setimages] = useState([]);

	// Si la category cambia el useEffect va a ejecutar la funcion que tenga adentro
	// useEffect(() => {
	// 	getGifs(category).then(imgs => setimages(imgs));
	// }, [category]);

	return (
		<>
			<h3>{category}</h3>
			{loading ? 'Cargando ...' : 'Data cargada'}
			{/* <div className='card-grid'>
				{images.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div> */}
		</>
	);
};
