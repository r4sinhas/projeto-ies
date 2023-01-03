import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "autoprefixer";

export function CoachReview() {
  const { id } = useParams();
  console.log("id: ", id);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/team/" + id) // game??
      .then((res) => res.json())
      .then((result) => {
        setTeam(result);
      });
  }, []);

  const [dataStat, setDataStat] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/team/highest_player_stat/1/" + id) // id is game id -> 1 is team id
      .then((res) => res.json())
      .then((result) => {
        setDataStat(result);
      });
  }, []);

  if (dataStat.length === 0) return <Loading></Loading>;

  console.log("dataStat: ", dataStat.bpm);

  let keys = [];
  if (dataStat.bpm) {
    keys.push(Object.keys(dataStat.bpm));
  } else {
    keys = [];
  }
  if (dataStat.speed) {
    keys.push(Object.keys(dataStat.speed));
  } else {
    keys = [];
  }
  console.log("keys: ", keys);
  const value1 = Object.values(dataStat.bpm);
  console.log("value: ", value1);
  const value2 = Object.values(dataStat.speed);
  console.log("value: ", value2);

  /*   const keys = Object.keys(dataStat.bpm);
  console.log("keys: ", keys);
  const innerValues = [];
  for (const key of keys) {
    const value = dataStat.bpm[key];
    // do something with the key and value
    innerValues.push(dataStat["bpm"][innerKey]);
  }
  console.log("innerValues: ", innerValues); */

  if (team.length === 0 || dataStat.length === 0)
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[0].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[1].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[2].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[3].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[4].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[5].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[6].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[7].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[8].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[9].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
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
                    <a
                      href={
                        "http://localhost:5173/player/" +
                        player_lst[10].id +
                        "/" +
                        id
                      }
                    >
                      <button className="btn btn-ghost btn-s rounded-lg">
                        details
                      </button>
                    </a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stats stats-vertical shadow w-1/4 my-5 overflow-x-hidden">
            <div className="stat w-24 flex-col align-center">
              <div className="stat-title">Most bpms</div>
              <div className="stat-value text-primary text-2xl mb-0 h-12 ">
                {keys[0]}
              </div>
              <div className="stat-value text-3xl ">{value1}</div>
            </div>

            <div className="stat w-24 flex-col">
              <div className="stat-title">Fastest Player</div>
              <div className="stat-value text-primary text-2xl h-12">
                {keys[1]}
              </div>
              <div className="stat-value text-3xl ">{value2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
