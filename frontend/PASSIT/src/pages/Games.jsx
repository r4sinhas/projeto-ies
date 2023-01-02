import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { React, useState, useEffect } from "react";

export function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/game/all") // game??
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
      });
  }, []);

  if (games.length === 0)
    return (
      <div>
        {" "}
        <Loading></Loading>{" "}
      </div>
    );
  console.log("games: ", games);

  return (
    <div
      className="flex select-none"
      style={{
        fontFamily:
          'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <Sidebar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`,
          backgroundPosition: "20%",
        }}
      >
        <div
          className="bg-secondary-content bg-opacity-[97%] rounded-lg overflow-hidden flex gap-1 shadow-2xl"
          style={{ height: "800px", width: "1330px" }}
        >
          <div className="overflow-x-auto w-2/3 mt-5 mb-5 ml-5">
            <table className="table w-full text-secondary">
              <thead>
                <tr>
                  <th>Team1</th>
                  <th>Team2</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://i.pravatar.cc/300"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stats stats-vertical shadow w-1/4 my-5 ml-16">
            <div className="stat">
              <div className="stat-title">Fastest Player</div>
              <div className="stat-value text-primary text-5xl mb-0 h-12 ">
                Lionel Pessi
              </div>
              <div className="stat-value text-3xl ">3.3 m/s</div>
            </div>

            <div className="stat">
              <div className="stat-title">Fastest Player</div>
              <div className="stat-value text-primary text-5xl h-12">
                Lionel Pessi
              </div>
              <div className="stat-value text-3xl ">3.3 m/s</div>
            </div>

            <div className="stat">
              <div className="stat-title">Fastest Player</div>
              <div className="stat-value text-primary text-5xl h-12">
                Lionel Pessi
              </div>
              <div className="stat-value text-3xl ">3.3 m/s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
