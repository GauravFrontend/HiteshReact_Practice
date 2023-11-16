import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
//UserContext k pass value, udhr se value yha lane k liye useContext hook use kiya jata hai
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext); // yha se value aagyi iss file mai

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
    console.log(user)
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="passward"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
