import { React, useState, useEffect } from "react";

import "./Login.css";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const coursesPage = () => {
    navigate("./Landing");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log("username: ", username);
    console.log("password: ", password);

    if (username === "roger" && password === "roger") {
      setTimeout(() => {
        navigate("/games");
      }, 1500);
    }

    if (username === "mike" && password === "tyson") {
      setTimeout(() => {
        navigate("/fan/1/favPlayers");
      }, 1500);
    }

    if (username === "leo" && password === "messi") {
      setTimeout(() => {
        navigate("/player/1");
      }, 1500);
    }
  };

  return (
    <div className="flex ">
      <div
        className="font-3xl absolute left-12 top-12 cursor-pointer"
        onClick={coursesPage}
      >
        <img src="./src/assets/logo-no-background.png" className={`w-12`} />
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`,
        }}
      >
        <div className="big-card card m-auto bg-secondary-content text-primary-content bg-opacity-90">
          <div className="login-box mt-0">
            <div className="w-full cursor-pointer" onClick={coursesPage}>
              <img
                src="./src/assets/logo-white-removebg-preview.png"
                className={`w-96 m-auto mb-0`}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div class="relative z-0 pb-5">
                <input
                  type="text"
                  id="username"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_standard"
                  class="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 right-32 -z-10 origin-[1] peer-focus:right-32   peer-focus:top-1  peer-focus:text-primary peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div class="relative z-0">
                <input
                  type="password"
                  id="password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2  rounded-lg border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_standard"
                  class="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 right-32 -z-10 origin-[1] peer-focus:right-32 peer-focus:top-1 peer-focus:text-primary peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <a href="#" className="mb-8">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button type="submit">Login</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
