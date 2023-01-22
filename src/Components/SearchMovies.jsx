import React, { useState } from "react";

const SearchMovies = (props) => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const queryHandler = (e) => {
		setQuery((prevQuery) => {
			return e.target.value;
		});
	};

	const searchMovies = async (e) => {
		e.preventDefault();

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
					placeholder="Movie name..."
					value={query}
					onChange={queryHandler}
				></input>
				<button className="button">Search</button>
			</form>
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div
							className="card"
							key={movie.id}
						>
							<img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
							<div className="card--content">
								<h3 className="card--title">{movie.title}</h3>
								<p>
									<small>RELEASE DATE: {movie.release_date}</small>
								</p>
								<p>
									<small>RATING: {movie.vote_average}</small>
								</p>
								<p className="card--desc">{movie.overview}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default SearchMovies;
