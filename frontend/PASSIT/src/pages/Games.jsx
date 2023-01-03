import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { React, useState, useEffect } from "react";

export function Games() {
  const data = [
    {
      id: 1,
      team1: "Team 1",
      team2: "Team 2",
      date: "2021-05-01",
    },
    {
      id: 2,
      team1: "Team 3",
      team2: "Team 4",
      date: "2021-05-02",
    },
    {
      id: 3,
      team1: "Team 5",
      team2: "Team 6",
      date: "2021-05-03",
    },
  ];

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
  console.log("games: ", games);
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
          <div className="overflow-x-auto w-full m-5">
            <table className="table w-full text-secondary">
              <thead>
                <tr>
                  <th>Team1 - Name</th>
                  <th>Team2 - Name</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {games.map(
                  (game) => (
                    console.log("game: ", game.team_list),
                    (
                      <tr key={game.id}>
                        <td>
                          <div>
                            <div className="font-bold">
                              {game.teams_list[0].team_name}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <div className="font-bold">
                              {game.teams_list[1].team_name}
                            </div>
                          </div>
                        </td>
                        <td>{game.date}</td>
                        <td>
                          <a
                            href={
                              "http://localhost:5173/coachreview/" + game.id
                            }
                          >
                            <button className="btn btn-primary">View</button>
                          </a>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
