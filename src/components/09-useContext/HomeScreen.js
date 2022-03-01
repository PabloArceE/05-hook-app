import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <div>
        <Link 
          exact to="/login" 
          className="btn btn-outline-primary m-3"
        >
          Login
        </Link>
      </div>
      <div>
        <Link 
          exact to="/login" 
          className="btn btn-outline-danger m-3"
        >
          Logout
        </Link>
      </div>
      <br />
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default HomeScreen;
