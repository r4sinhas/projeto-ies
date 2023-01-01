import "./Coach.css";
import { React, useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import Loading from "../components/Loading";
import { PlayerModal } from "../components/PlayerModal";
import { useParams } from "react-router-dom";

export function Coach() {
  const [clickedIndex, setClickedIndex] = useState(0);

  const [team, setTeam] = useState([]);
  const { gameId } = useParams();

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

  /* before loading -> check if gameId actually exists  */

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
          className="bg-secondary-content bg-opacity-[97%] rounded-lg overflow-hidden  gap-1 shadow-2xl border-[7px]"
          style={{ height: "800px", width: "1330px" }}
        >
          <div className="container pr-[4.55rem] mt-[1.675rem] w-[1330px] ">
            <div className="flex space-x-60 mx-auto w-full mb-10 justify-center">
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(0);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-0 border-0 cursor-pointer">
                  <figure>
                    <img src={team.players_list[0].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[0].name} </h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex space-x-60 mx-auto w-full mb-10 justify-center">
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(1);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 cursor-pointer">
                  <figure>
                    <img src={team.players_list[1].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[1].name} </h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(2);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[2].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[2].name} </h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(3);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[3].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[3].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(4);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[4].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[4].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex space-x-60 mx-auto w-full  mb-10 justify-center">
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(5);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[5].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[5].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(6);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[6].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[6].name}</h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(7);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[7].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[7].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex space-x-80 mx-auto w-full justify-center">
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(8);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[8].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[8].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(9);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[9].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[9].name}</h2>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </label>
              <label
                htmlFor="my-drawer-4"
                className="w-3/3"
                onClick={() => {
                  setClickedIndex(10);
                  console.log("clicked ::", clickedIndex);
                }}
              >
                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                  <figure>
                    <img src={team.players_list[10].img_url} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{team.players_list[10].name}</h2>
                    <div className="card-actions"></div>
                  </div>
                </div>
              </label>
            </div>
            <div className="ml-[23rem] mt-[1rem]" style={{ zIndex: "-5" }}>
              <div className="bg-white half-circle  ml-[3rem] ">
                <div
                  className="half-circle-smol bg-white ml-[13.5rem] mt-[5rem]"
                  style={{ zIndex: "10" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side mr-[4.45rem]">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul
              className="menu p-4 w-[1500px] text-base-content"
              style={{ zIndex: "20" }}
            >
              <PlayerModal
                id={player_lst[clickedIndex].id}
                gameID={gameId}
                img={player_lst[clickedIndex].img_url}
                name={player_lst[clickedIndex].name}
                age={player_lst[clickedIndex].age}
                height={player_lst[clickedIndex].height}
                weight={player_lst[clickedIndex].weight}
                position={player_lst[clickedIndex].position}
                team={team.team_name}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
