import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AurhProvider/AuthProvider";
import coverimg from "../../img/logincover.jpg";
import logoimg from "../../img/logonew.png";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(error);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const socialLoginUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          userRole: "Buyer",
          isVerified: false,
        };

        fetch(
          `https://stoves-world-server.vercel.app/users/${result?.user?.email}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(socialLoginUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            navigate("/");
          })
          .catch((er) => console.error(er));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="hero  min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${coverimg})` }}
    >
      {/* <div className="hero-content "> */}
      <div className="card rounded-md w-full max-w-sm mt-4 shadow-2xl bg-base-100  bg-opacity-30 absolute top-0 z-5  backdrop-filter backdrop-blur-sm ">
        <form onSubmit={handleLogin} className="card-body pb-3">
          <div>
            <Link to="/" className="flex items-center md:mx-5">
              <img
                src={logoimg}
                className="inline-block fill-current w-1/4 md:w-1/6"
                alt="logo"
              ></img>
              <h1 className="font-bold text-2xl md:text-3xl tracking-wide mx-1 md:mx-2 text-rose-500 font-link">
                Kitchener
              </h1>
              <h1 className="text-2xl font-bold">Login</h1>
            </Link>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <p className="text-red-600 text-sm">{error}</p>
          <div className="form-control mt-2">
            <input
              className="border border-gray-500 p-2 rounded-md bg-cyan-400 text-white text-2xl font-teko tracking-wide hover:bg-green-400 transition duration-900 ease-linear"
              type="submit"
              value="Log in"
            />
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="mx-8 border border-gray-500 p-2 rounded-md bg-cyan-400 text-white text-2xl font-teko tracking-wide hover:bg-green-400 transition duration-900 ease-linear"
        >
          Sign In with Google
        </button>
        <p className="text-center my-4 font-semibold">
          Don't have an account?{" "}
          <Link className="text-violet-700 font-bold" to="/signup">
            {" "}
            Sign Up
          </Link>{" "}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
