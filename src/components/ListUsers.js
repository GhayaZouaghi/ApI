import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? <h1>Loading</h1> : users.map((user) => <Card user={user} />)}
    </div>
  );
};

export default ListUsers;
