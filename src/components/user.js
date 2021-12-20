import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function User({ match }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setUser(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Header>
          <h1>{user.name}</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>{user.name} </Card.Title>
          <Card.Text>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
