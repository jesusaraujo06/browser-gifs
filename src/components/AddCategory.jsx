import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Form Enviado');

		if (inputValue.trim().length > 2) {
			// Recibimos una funcion por parametro
			setCategories(categories => [...categories, inputValue]);
			setInputValue('');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' value={inputValue} onChange={handleInputChange} />
			</form>
		</>
	);
};

/**
 * La funcion AddCategory requerira de forma obligatoria
 * un parametro llamado setCategories el cual sera de tipo funcion
 */
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
