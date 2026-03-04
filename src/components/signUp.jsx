import { useState } from "react";
import { supabase } from "../supabaseClient";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  function handleChange(e) {
    e.target.type === "text"
      ? setEmail(e.target.value)
      : setPass(e.target.value);
    console.log("Input Type:", e.target.type);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // send the credentials to supabase
    signUpNewUser();
  }
  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,

      /*
      options: {
        emailRedirectTo: "https://example.com/welcome",
    },
        */
    });
    if (error) {
      alert("error!");
      console.log(error);
    } else {
      alert("new user created!");
    }
  }
  return (
    <div className="flex flex-col w-2/4 place-self-center text-cream border">
      <div>
        <h1 className="text-center font-bold font pt-2">
          Create a new account
        </h1>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4 gap-5">
            <div>
              <label>Email: </label>
              <input
                type="text"
                className="text-black p-1"
                placeholder="enter email"
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
export default SignUp;
