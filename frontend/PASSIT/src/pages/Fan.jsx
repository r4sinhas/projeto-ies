import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { PlayerModal } from "../components/PlayerModal";
export function Fan() {
  const { id } = useParams();

  let [favPlayers, setFavPlayers] = useState([]);

  const [newData, setNewData] = useState([]);
  const [player, setPlayer] = useState({});
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/v1/fan/" + id);
    const rp = await response.json();

    if (rp.length !== 0) {
      setFavPlayers(rp.fav_players);
    }
    setNewData(rp.fav_players);
    return favPlayers;
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("favPlayers ya: ", favPlayers);
  const data = [
    {
      id: 1,
      name: "Lionel Messi",
      team: "Barcelona",
      position: "Forward",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      team: "Juventus",
      position: "Forward",
    },
    {
      id: 3,
      name: "Neymar",
      team: "Paris Saint-Germain",
      position: "Forward",
    },
    {
      id: 4,
      name: "Kylian Mbappe",
      team: "Paris Saint-Germain",
      position: "Forward",
    },
    {
      id: 5,
      name: "Mohamed Salah",
      team: "Liverpool",
      position: "Forward",
    },
  ];

  function handleChange(event) {
    console.log("yayay", event.target.value);
    const value = event.target.value.toLowerCase();
    const result = [];
    newData.forEach((player) => {
      if (player.name.toLowerCase().includes(value)) {
        result.push(player);
      }
    });
    setNewData(result);
    console.log("newData: ", result);
    if (value === "") {
      setNewData(favPlayers);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemPlayer = async (idp) => {
    console.log("REMOVE id: ", idp);
    const response = await fetch(
      "http://localhost:8080/api/v1/fan/removeFavoritePlayer/" + id + "/" + idp,

      {
        method: "POST",
      }
    );
    // update the newData array to remove the player
    const result = [];
    newData.forEach((player) => {
      if (player.id !== idp) {
        result.push(player);
      }
    });
    setNewData(result);
    console.log("newData: ", result);
    if (newData.length === 0) {
      setNewData(favPlayers);
    }
  };
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
          <div className="overflow-x-auto w-full m-5 flex-col">
            <div>
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <table className="table w-full text-secondary">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Team</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {newData.map(
                  (player) => (
                    console.log("player: ", player),
                    (
                      <tr key={player.id}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={player.img_url}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{player.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{player.position}</td>
                        <td>{player.team_id.team_name}</td>
                        <td>
                          <label
                            htmlFor="my-drawer-4"
                            className="w-3/3 btn btn-primary bg-primary"
                            onClick={() => {
                              setPlayer(player);
                              console.log("player: ", player);
                            }}
                          >
                            View
                          </label>
                        </td>
                        <td>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleRemPlayer(player.id)}
                          >
                            Rem
                          </button>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
            <a href={"http://localhost:5173/fan/" + id + "/players"}>
              <div className="flex btn mt-20 p-5 items-center text-center">
                Click here to see the full list of players
              </div>
            </a>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-drawer-4" className="modal-toggle" />
      <div className="modal modal-bottom">
        <div className="modal-box bg-transparent ">
          <ul className=" m-40 text-base-content" style={{ zIndex: "20" }}>
            <PlayerModal
              id={player.id}
              name={player.name}
              team={player.team}
              position={player.position}
              img={player.img_url}
              age={player.age}
              height={player.height}
              gameID={null}
            />
          </ul>
          <div className="modal-action">
            <label htmlFor="my-drawer-4" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
