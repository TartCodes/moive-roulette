import { useState } from "react";
import "./index.css";
import SearchMovies from "./Components/SearchMovies";
// import MovieList from "./Components/MovieList";

function App() {
	return (
		<div className="App">
			<h1 className="title">Movie Roulette</h1>
			<SearchMovies />
		</div>
	);
}

export default App;
