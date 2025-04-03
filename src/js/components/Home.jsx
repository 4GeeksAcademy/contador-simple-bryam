import React from "react";
import Counter from "./counter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="d-flex">
			<Counter/>
		</div>
	);
};

export default Home;