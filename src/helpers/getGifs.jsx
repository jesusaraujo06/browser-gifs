export const getGifs = async category => {
	console.log(category);
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=lJ35D7DiT6IDgmMgT6JhqUcyKuD6aRTq`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});
	console.log('Imagenes obtenidas de helpers/getGifs', gifs);

	return gifs;
};
