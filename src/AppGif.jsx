import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { PropTypes } from 'prop-types';
import { GifGrid } from './components/GifGrid';

const App = ({ title }) => {
	let [categories, setCategories] = useState(['Bienvenido']);

	// console.log(categories);

	return (
		<>
			<h2>{title}</h2>
			<AddCategory setCategories={setCategories}></AddCategory>

			<ul>
				{categories.map(category => (
					<GifGrid key={category} category={category} />
				))}
			</ul>
		</>
	);
};

App.propTypes = {
	title: PropTypes.string.isRequired,
};

export default App;
