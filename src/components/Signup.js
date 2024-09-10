import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div className="register">
      <h1>SignUp</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Your Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Your Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Create Your Password "
      />
      <button onClick={collectData} className="appButton">
        SignUp
      </button>
    </div>
  );
};
export default Signup;
