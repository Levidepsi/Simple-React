import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
