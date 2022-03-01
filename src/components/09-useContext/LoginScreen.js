import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 123,
      name: "Pablo",
      data: "Data content example",
    });
  }

  const handleLogout = () => {
    setUser("Inicie seción")
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <div className="d-flex justify-content-around">
      <div>
        <Link 
          exact to="/" 
          className="btn btn-outline-primary m-3"
          onClick={handleLogin}
        >
          Press to login
        </Link>
      </div>
      <div>
        <Link 
          exact to="/" 
          className="btn btn-outline-danger m-3"
          onClick={handleLogout}
        >
          Press to logout
        </Link>
      </div>

      </div>      
    </div>
  );
};

export default LoginScreen;
