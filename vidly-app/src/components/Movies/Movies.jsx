import "./Movies.css";
import React, { useState } from "react";
// import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { getMovies } from "../../services/fakeMovieService";
import Like from "../common/Like";
import PaginationComponent from "../common/Pagination";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: Delete Handler
  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  // TODO: Like Handler
  const handleLike = (movie) => {
    // console.log(movie);
    const moviesCopy = [...movies];
    const index = moviesCopy.indexOf(movie);
    moviesCopy[index] = { ...moviesCopy[index] };
    moviesCopy[index].liked = !moviesCopy[index].liked;
    setMovies(moviesCopy);
  };

  const handlePageChange = (page) => {
    // console.log(page);
    setCurrentPage(page);
    // setPageSize(4);
  };

  const { length: count } = movies;
  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  }

  return (
    <section className="movies-container">
      <p>Showing {count} movies n the database.</p>
      <Table striped>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>#</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie._id}>
              <td style={{ textAlign: "center" }}>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onLikeToggle={() => handleLike(movie)}
                />
              </td>
              <td style={{ textAlign: "center", maxWidth: "4rem" }}>
                <Button onClick={() => handleDelete(movie)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComponent
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Movies;
