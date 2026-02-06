import { useState } from "react";

const LoginPopup = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    console.log(e);
  }

  function handleChange(e) {}

  return (
    <div className="login-popup">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="enter username"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPopup;
