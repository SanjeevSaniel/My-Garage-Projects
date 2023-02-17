import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const GenresList = ({
  genres,
  textProperty,
  valueProperty,
  selectedGenre,
  onGenreSelect,
}) => {
  return (
    <div>
      <ListGroup as="ul" style={{ cursor: "pointer" }}>
        {/* <ListGroup.Item
          as="li"
          onClick={() => onGenreSelect()}
          active={currentGenre === "All Genres"}
        >
          {"All Genres"}
        </ListGroup.Item> */}

        {genres.map((genre) => {
          return (
            <ListGroup.Item
              as="li"
              onClick={() => onGenreSelect(genre)}
              key={genre[valueProperty]}
              active={genre === selectedGenre}
            >
              {genre[textProperty]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

GenresList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default GenresList;
