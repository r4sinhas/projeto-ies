import { useState } from "react";
import "./Landing.css";

export const Landing = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Settings", src: "Setting" },
  ];

  return (
    <div className="flex select-none ">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-secondary-content h-screen p-4  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-10 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <img
            src="./src/assets/logo-no-background.png"
            className={`w-10 cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`pb-2  select-none text-white font-light origin-left invisible sm:visible text-4xl duration-200 ${!open && "scale-0"
              }`}
          > PASSIT
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex md:justify-between justify-center rounded-md p-2 cursor-pointer transition ease-in-out delay-0 bg-secondary-content hover:-translate-y-1 hover:scale-105 hover:bg-secondary-focus duration-100 text-gray-300 text-md font-bold items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card-swiper absolute top-44">
          <div className="card-group w-96">
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-2xl">
              <p>For Coaches</p>
            </div>
            <div className="big-card card m-0">
            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-3xl">
              <p>Easter Egg</p>
            </div>
            <div className="big-card card m-0">

            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-2xl">
              <p>For Players</p>
            </div>
            <div className="big-card card m-0">

            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-3xl">
              <p>For Fans</p>
            </div>
            <div className="big-card card m-0 bg-secondary-content text-primary-content bg-opacity-90">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl">Is <span className="text-secondary">PASSIT</span> for you?</h2>
                <p className="text-xl"></p>

                <p className="text-xl">PASSIT comes to up the ante, by providing a platform for coaches, players, and fans to deepen their analysis of the game.</p>
                <p className="text-xl"> We make fans <span className="text-accent">learn</span>, coaches <span className="text-accent">strive</span>, players <span className="text-accent">grow</span>.</p>
                <div className="card-actions justify-end">
                  <button className="btn hover:bg-primary-focus">get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};