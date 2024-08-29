import { useEffect, useState } from "react";
import { Link, Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../slices/authSlice";

export default function Register() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [terms, setTerms] = useState(false);

  const handleTermsChange = (value) => {
    setTerms(value);
  };
  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (terms) {
      alert("Registering...");
      dispatch(register({ email, password, username }));
    } else {
      alert("Please agree to our terms and services");
    }
  }

  return (
    <div className="max-w-full flex items-center flex-col justify-center  mb-20  border-l-info-content min-w-full min-h-[60vh]">
      <h1 className="text-primary font-extrabold text-2xl my-4">Register</h1>
      <Form
        className="flex flex-col gap-4 max-w-[350px]"
        method="POST"
        action="/api/users/"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <label className="flex items-center justify-center gap-1 px-2 mb-3">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-secondary   text-center"
            value={terms}
            onChange={(e) => handleTermsChange(e.target.checked)}
          />
          <span className="text-center text-xs">
            you agree to our
            <Link className="link mx-1" to={"/t&s"}>
              terms & services
            </Link>
            .
          </span>
        </label>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </Form>
      <div className="flex items-center justify-center gap-1 mt-3 text-sm">
        <span>Already have an account?</span>
        <Link className="link underline-offset-4" to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}
