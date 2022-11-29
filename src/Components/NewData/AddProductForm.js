import React, { useState } from "react";

const AddProduct = (props) => {
	const [productName, setProductName] = useState("");
	const nameChange = (e) => {
		setProductName(e.target.value);
	};
	const addProductHandler = (e) => {
		e.preventDefault();

		const newData = {
			name: productName,
		};

		props.savedData(newData);

		setProductName("");
	};
	return (
		<div className='bg-black'>
			<form onSubmit={addProductHandler}>
				<input type='text' onChange={nameChange} required />
				<button className='text-white' type='submit'>
					add
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
