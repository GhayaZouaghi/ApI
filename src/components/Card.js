import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = ({ user }) => {
  return (
    <div>
      <Link to={`/User/${user.id}`}>
        <h1>{user.name}</h1>
      </Link>
    </div>
  );
};

export default Card;
