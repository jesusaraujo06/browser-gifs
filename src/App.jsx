import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { PropTypes } from 'prop-types';
import { GifGrid } from './components/GifGrid';

const App = ({ title }) => {
	let [categories, setCategories] = useState(['One Puch']);

	console.log(categories);

	return (
		<>
			<h2>{title}</h2>
			<AddCategory setCategories={setCategories}></AddCategory>

			<hr />

			<ul>
				{categories.map(category => (
					<GifGrid key={catgory} category={category} />
				))}
			</ul>
		</>
	);
};

App.propTypes = {
	title: PropTypes.string.isRequired,
};

export default App;
