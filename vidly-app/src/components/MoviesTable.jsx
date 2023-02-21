import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Like from "./common/Like";

const MoviesTable = ({ movies, onLike, onDelete }) => {
  return (
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
              <Like liked={movie.liked} onLikeToggle={() => onLike(movie)} />
            </td>
            <td style={{ textAlign: "center", maxWidth: "4rem" }}>
              <Button onClick={() => onDelete(movie)} variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MoviesTable;
