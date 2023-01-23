import React, { useState } from "react";
import MovieCard from "./MovieCard";

const SearchMovies = (props) => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const queryHandler = (e) => {
		setQuery(e.target.value);
	};

	const searchMovies = async (e) => {
		e.preventDefault();
		if (query === "") {
			return;
		}
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cc7ed9cd165eb504feaaca4e1f83cffe&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data.results, "data");
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<form
				onSubmit={searchMovies}
				className="form"
			>
				<label
					className="label"
					htmlFor="query"
				>
					Movie Name
				</label>
				<input
					className="input"
					name="query"
					type="text"
					placeholder="Star Wars, Sunshine, etc"
					value={query}
					onChange={queryHandler}
				></input>
				<button className="button">Search</button>
			</form>
			<MovieCard movies={movies} />
		</>
	);
};

export default SearchMovies;
