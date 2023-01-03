import "../pages/Landing.css";
import { React, useState, useEffect } from "react";

export function PlayerModal(props) {
  //console.log("props: ", props.id);
  let player_id = props.pid;
  let playerxx = props.player;
  console;
  let URL_PLAYER = "";
  const [player, setPlayer] = useState({ playerxx });

  if (props.gameID == null) {
    URL_PLAYER =
      "http://localhost:8080/api/v1/player/stats_user_game/" + player_id;
  } else {
    //console.log("helo");
    if (player_id == undefined) {
      player_id = 1;
    }
    URL_PLAYER =
      "http://localhost:8080/api/v1/player/stats_user_game/" +
      player_id +
      "/" +
      props.gameID;
  }
  // fetch das médias!
  //console.log("yo");
  if (player_id == undefined) {
    player_id = props.id;
  }
  useEffect(() => {
    //console.log("result1: ");
    fetch(URL_PLAYER)
      .then((res) => res.json())
      .then((result) => {
        //console.log("result: ", result);
        setPlayer(result);
      });
  }, []);

  console.log("player stats: ", player);

  if (player.length === 0) return <Loading></Loading>;

  return (
    <div
      className="flex select-none justify-start mt-1 mr-20"
      style={{
        fontFamily:
          'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <div
        className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-4 gap-1 shadow-2xl"
        style={{ height: "800px", width: "1330px" }}
      >
        <div class="box col-start-1 row-span-2 mt-0">
          <div className=" card w-10/12 h-8/12 bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
            <img
              className="object-cover rounded-lg"
              src={props.img}
              alt="Shoes"
            />
            <div className="card-body pt-12 mb-24 absolute top-80 ">
              <h2 className="card-title text-4xl text-primary font-bold">
                {props.name}
              </h2>
              <div className="stats stats-vertical shadow bg-opacity-60 ml-1">
                <div className="stat flex mx-auto">
                  <div className="stat">
                    <div className="stat-title">Age</div>
                    <div className="stat-value text-primary">{props.age}</div>
                  </div>

                  <div className="stat pl-0">
                    <div className="stat-title">Height</div>
                    <div className="stat-value text-secondary">
                      {props.height}cm
                    </div>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Position</div>
                  <div className="stat-value">{props.position}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Team</div>
                  <div className="stat-value">{props.team}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats stats-vertical shadow h-[40rem] overflow-hidden mt-16 mx-auto col-start-2 col-span-2">
          <div className="stat">
            <div className="stat-title">Avg Speed</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              {player.speed} km/h
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Avg BPM</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              {player.bpm} bpm
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Avg Breathing Rhythm</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              {player.breathing_rate} breaths/min
            </div>
          </div>
          <div className="stat">
            {props.gameID === null ? (
              <div className="stat-title"></div>
            ) : (
              <a
                href={
                  "http://localhost:5173/player/" + props.pid + props.gameID
                }
              >
                <button className="btn bg-primary w-24 mx-auto">Details</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
