import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className='navigataion'>
			<ul className='flex'>
				<li>
					<Link to='/'>Home</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
