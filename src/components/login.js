import { useState } from "react";

const Login = () => {
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // send the login details to api
  }

  function handleChange(e) {
    e.target.type === "text"
      ? setUser(e.target.value)
      : setPass(e.target.value);
    console.log("Input Type:", e.target.type);
  }
  console.log(username);
  console.log(pass);

  return (
    <div className="flex flex-col w-2/4 place-self-center text-cream border">
      <div>
        <h1 className="text-center font-bold font pt-2">Login</h1>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4 gap-5">
            <div>
              <label>Username: </label>
              <input
                type="text"
                className="text-black p-1"
                placeholder="enter username"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                className="text-black p-1 border"
                placeholder="enter a strong password"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
