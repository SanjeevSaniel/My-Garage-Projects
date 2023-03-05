import React from "react";
import "./banner.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2>Great restaurants in your area, delivering to you</h2>
        <InputGroup className="mb-3 searchbox">
          <Form.Control
            placeholder="Find your food"
            aria-label="Find your food"
            aria-describedby="basic-addon"
          />
          <Button variant="outline-secondary" id="button-addon">
            Find Food
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
