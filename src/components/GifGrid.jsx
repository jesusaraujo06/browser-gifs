// import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	console.log('recibiendo category', category);

	// Renombrar data a images con destructuracion
	const { data: images, loading } = useFetchGifs(category);

	console.log('Estado del loading:', loading);

	// Si la category cambia el useEffect va a ejecutar la funcion que tenga adentro
	// useEffect(() => {
	// 	getGifs(category).then(imgs => setimages(imgs));
	// }, [category]);

	return (
		<>
			<h3>{category}</h3>
			{/* Forma corta de hacer un if */}
			{loading && <p>Buscando...</p>}
			<div className='card-grid'>
				{images.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
