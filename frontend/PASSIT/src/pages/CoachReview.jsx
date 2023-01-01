import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { React, useState, useEffect } from "react";

export function CoachReview() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/team/1") // game??
      .then((res) => res.json())
      .then((result) => {
        setTeam(result);
      });
  }, []);

  if (team.length === 0)
    return (
      <div>
        {" "}
        <Loading></Loading>{" "}
      </div>
    );
  console.log("team: ", team);
  const player_lst = team.players_list;

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
                  <th>Name</th>
                  <th>Position</th>
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
                            src={player_lst[0].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[0].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[0].position}</td>
                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[1].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[1].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[1].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[2].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[2].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[2].position}</td>
                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>

                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[3].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[3].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[3].position}</td>
                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                      {/* CALL  */}
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[4].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[4].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[4].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[5].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[5].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[5].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[6].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[6].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[6].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[7].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[7].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[7].position}</td>
                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[8].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[8].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[8].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[9].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[9].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[9].position}</td>

                  <th>
                    <button className="btn btn-ghost btn-s rounded-lg">
                      details
                    </button>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={player_lst[10].img_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player_lst[10].name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{player_lst[10].position}</td>

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
