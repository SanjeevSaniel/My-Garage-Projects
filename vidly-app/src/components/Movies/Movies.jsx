import "./Movies.css";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Like from "../common/Like";
import PaginationComponent from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import GenresList from "../common/GenresList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MoviesTable from "./../MoviesTable";

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  // TODO: Delete Handler
  const handleDelete = (movie) => {
    console.log(movie);
    const filteredMovies = allMovies.filter((m) => m._id !== movie._id);
    setAllMovies(filteredMovies);
  };

  // TODO: Like Handler
  const handleLike = (movie) => {
    console.log(movie);
    const moviesCopy = [...allMovies];
    const index = moviesCopy.indexOf(movie);
    moviesCopy[index] = { ...moviesCopy[index] };
    moviesCopy[index].liked = !moviesCopy[index].liked;
    setAllMovies(moviesCopy);
  };

  // TODO: Page Handler
  const handlePageChange = (page) => {
    // console.log(page);
    setCurrentPage(page);
    // setPageSize(4);
  };

  // TODO: Genre Handler
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  useEffect(() => {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    setAllMovies(getMovies());
    setAllGenres(genres);
  }, []);

  const { length: count } = allMovies;
  if (count === 0) return <p>There are no movies in the database.</p>;

  const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;

  // TODO: Paginate Data
  const showMovies = paginate(filtered, currentPage, pageSize);

  return (
    <Container>
      <Row>
        <Col lg="2">
          <GenresList
            genres={allGenres}
            // textProperty="name"
            // valueProperty="_id"
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
        </Col>
        <Col lg="10">
          <p>Showing {filtered.length} movies n the database.</p>

          <MoviesTable
            movies={showMovies}
            onLike={handleLike}
            onDelete={handleDelete}
          />

          <PaginationComponent
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
