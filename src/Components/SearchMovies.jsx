import React from "react";

const SearchMovies = () => {
	return (
		<form className="form">
			<label htmlFor="query">Movie Name</label>
			<input
				name="query"
				type="text"
				placeholder="Movie name..."
			></input>
			<button className="button">Search</button>
		</form>
	);
};

export default SearchMovies;
