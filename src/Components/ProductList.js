import React from "react";

const ProductList = ({ product }) => {
	return (
		<div className='flex justify-center'>
			{product.map((item, i) => {
				return (
					<div className='product_card p-5  '>
						<div className='product_item'>{item.name}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductList;
