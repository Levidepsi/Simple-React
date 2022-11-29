import React, { useState } from "react";
import CreatedData from "../Components/NewData/CreatedData";
import ProductList from "../Components/ProductList";

const products = [
	{
		name: "bag",
	},
	{
		name: "shirt",
	},
	{
		name: "shorts",
	},
	{
		name: "shoes",
	},
];

const Home = () => {
	const [product, setProduct] = useState(products);

	const addProductName = (newProduct) => {
		setProduct([...product, newProduct]);
	};

	return (
		<div>
			<span>{product.length}</span>
			<CreatedData addProductName={addProductName} />
			<ProductList product={product} />
		</div>
	);
};

export default Home;
