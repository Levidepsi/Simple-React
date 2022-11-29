import React from "react";
import AddProduct from "./AddProductForm";

const CreatedData = (props) => {
	const savedData = (enteredData) => {
		const newData = {
			...enteredData,
		};
		console.log(newData);
		props.addProductName(newData);
	};
	return (
		<>
			<AddProduct savedData={savedData} />
		</>
	);
};

export default CreatedData;
