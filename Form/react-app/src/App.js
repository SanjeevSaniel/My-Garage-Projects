import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";

import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);

  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/add_user", {
      name,
      email,
      mobile,
    });
    console.log("Successfully Posted");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data));
  }, [users]);

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            placeholder="Enter mobile number"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {users.map((user, index) => {
        return (
          <ul key={index}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Mobile: {user.mobile}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
