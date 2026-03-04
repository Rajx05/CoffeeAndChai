import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
const Login = () => {
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });
    if (error) {
      alert("user doesn't exist");
      console.log(error);
    } else {
      alert("you are logged in !");
    }
  }

  function handleSubmit(e) {
    // send the login details to api
    e.preventDefault();
    signInWithEmail();
  }

  function handleChange(e) {
    e.target.type === "text"
      ? setEmail(e.target.value)
      : setPass(e.target.value);
    console.log("Input Type:", e.target.type);
  }
  console.log(email);
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
              <label>Email: </label>
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
          <Link to="/signup">Create a new account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
