import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { React, useState, useEffect } from "react";

export function Games() {
  const [games, setGames] = useState([]);
  const [t1, setTeam1] = useState([]);
  const [t2, setTeam2] = useState([]);
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
          <div className="overflow-x-auto w-2/3 mt-6 mb-6 ml-6">
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
                {games.map((game, index) => {
                  if (game.teams_list.length > 0) {
                    let t1 = game.teams_list[0].team_name;
                    let t2 = game.teams_list[1].team_name;
                  }
                  console.log("game: ", game);
                  console.log("game.teams_list: ", game.teams_list);
                  return (
                    <tr key={index}>
                      <td>{t1}</td>
                      <td>{t2}</td>
                      <td>{game.date}</td>
                      <td>
                        <button className="btn btn-primary">View</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
